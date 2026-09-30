@echo off
setlocal
cd /d "%~dp0"
if not exist node_modules (
  echo [PORTFOLIO] Installing dependencies...
  call npm install
  if errorlevel 1 goto :error
)
echo [PORTFOLIO] Building production files...
call npm run build
if errorlevel 1 goto :error
echo.
echo [DONE] Production build is in the dist folder.
pause
exit /b 0
:error
echo.
echo [ERROR] Build failed.
pause
exit /b 1
