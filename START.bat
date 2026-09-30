@echo off
setlocal
cd /d "%~dp0"
if not exist node_modules (
  echo [PORTFOLIO] Installing dependencies...
  call npm install
  if errorlevel 1 goto :error
)
echo [PORTFOLIO] Starting React dev server...
call npm run dev
exit /b 0
:error
echo.
echo [ERROR] Setup failed. Make sure Node.js and npm are installed.
pause
exit /b 1
