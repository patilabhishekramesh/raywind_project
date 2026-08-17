@echo off
title Raywind Powertech Solutions - Website
cd /d "%~dp0"

echo ================================================
echo   Raywind Powertech Solutions
echo   Starting local development server...
echo ================================================
echo.

where npm >nul 2>&1
if errorlevel 1 (
  echo Node.js / npm was not found. Install Node.js first: https://nodejs.org/
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo Failed to install dependencies.
    pause
    exit /b 1
  )
  echo.
)

echo Opening http://localhost:5173/
start "" "http://localhost:5173/"
echo.
echo Press Ctrl+C to stop the server.
echo.

call npm run dev

pause
