@echo off
chcp 65001 >nul
title JerseyHub - Collecteur NBA Vivi Jersey
cd /d "%~dp0"
echo ==========================================
echo   JERSEYHUB - COLLECTEUR NBA VIVI JERSEY
echo ==========================================
echo.
where py >nul 2>&1
if %errorlevel%==0 (
  set PY=py
) else (
  set PY=python
)
echo Verification des dependances...
%PY% -m pip install --quiet requests beautifulsoup4
if errorlevel 1 (
  echo.
  echo Impossible d'installer les dependances Python.
  pause
  exit /b 1
)
echo.
echo Lancement de la collecte NBA...
%PY% scripts\vivi_nba_collector.py
echo.
echo Termine. Les resultats sont dans le dossier vivi_nba_output.
pause
