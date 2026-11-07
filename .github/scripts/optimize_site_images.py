#!/usr/bin/env python3
"""Optimize published JerseyHub images without modifying the source repository."""
from pathlib import Path
from PIL import Image, ImageOps
import argparse
import os
import tempfile

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp"}

def total_bytes(root: Path) -> int:
    return sum(p.stat().st_size for p in root.rglob("*") if p.is_file())

def optimize_one(path: Path, max_edge: int, quality: int) -> tuple[bool, int, int]:
    before = path.stat().st_size
    try:
        with Image.open(path) as original:
            fmt = (original.format or path.suffix.lstrip(".")).upper()
            if getattr(original, "n_frames", 1) > 1:
                return False, before, before
            if fmt not in {"JPEG", "PNG", "WEBP"}:
                return False, before, before
            image = ImageOps.exif_transpose(original)
            image.thumbnail((max_edge, max_edge), Image.Resampling.LANCZOS)
            save_args = {}
            if fmt == "JPEG":
                if image.mode not in ("RGB", "L"):
                    image = image.convert("RGB")
                save_args = {
                    "quality": quality,
                    "optimize": True,
                    "progressive": True,
                    "subsampling": 1,
                }
                if original.info.get("icc_profile"):
                    save_args["icc_profile"] = original.info["icc_profile"]
            elif fmt == "PNG":
                save_args = {"optimize": True, "compress_level": 9}
            elif fmt == "WEBP":
                save_args = {"quality": quality, "method": 6}
    except Exception as exc:
        print(f"SKIP {path}: {exc}")
        return False, before, before

    fd, temp_name = tempfile.mkstemp(prefix=path.stem + ".", suffix=path.suffix, dir=path.parent)
    os.close(fd)
    temp = Path(temp_name)
    try:
        image.save(temp, format=fmt, **save_args)
        after = temp.stat().st_size
        if after < before:
            os.replace(temp, path)
            return True, before, after
        return False, before, before
    except Exception as exc:
        print(f"SKIP {path}: {exc}")
        return False, before, before
    finally:
        if temp.exists():
            temp.unlink()

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", default="_site")
    parser.add_argument("--max-edge", type=int, default=1600)
    parser.add_argument("--jpeg-quality", type=int, default=80)
    parser.add_argument("--max-site-mb", type=int, default=900)
    args = parser.parse_args()

    root = Path(args.root)
    if not root.is_dir():
        raise SystemExit(f"Build directory not found: {root}")

    before_total = total_bytes(root)
    changed = 0
    image_count = 0
    for path in root.rglob("*"):
        if path.is_file() and path.suffix.lower() in IMAGE_EXTS:
            image_count += 1
            did_change, old_size, new_size = optimize_one(path, args.max_edge, args.jpeg_quality)
            if did_change:
                changed += 1

    after_total = total_bytes(root)
    saved = before_total - after_total
    print(f"Images examined: {image_count}")
    print(f"Images optimized: {changed}")
    print(f"Site before: {before_total / 1_000_000:.1f} MB")
    print(f"Site after: {after_total / 1_000_000:.1f} MB")
    print(f"Space saved: {saved / 1_000_000:.1f} MB ({saved / max(before_total, 1) * 100:.1f}%)")

    limit = args.max_site_mb * 1_000_000
    if after_total > limit:
        raise SystemExit(
            f"STOP: optimized site is still {after_total / 1_000_000:.1f} MB; "
            f"deployment blocked above {args.max_site_mb} MB."
        )

if __name__ == "__main__":
    main()
