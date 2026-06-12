@echo off
REM ====================================================
REM  FMDO - Publish changes to the live website
REM  Just double-click this file whenever you want your
REM  edits to go live at https://ribhu27.github.io/fmdo/
REM ====================================================
cd /d "%~dp0"

echo.
echo  Publishing your changes to the live site...
echo.

git add -A

REM Make a commit message with the current date/time
set "msg=Update site - %date% %time%"
git commit -m "%msg%"

if errorlevel 1 (
  echo.
  echo  Nothing new to publish ^(no changes since last time^).
  echo.
  pause
  exit /b
)

git push

echo.
echo  ============================================================
echo   Done! Your changes will be LIVE in about 1 minute at:
echo   https://ribhu27.github.io/fmdo/
echo  ============================================================
echo.
echo  Tip: refresh the page with Ctrl+F5 to see the update.
echo.
pause
