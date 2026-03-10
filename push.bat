@echo off
echo.
echo ================================
echo   Level QA Demo - Git Push Tool
echo ================================
echo.

:: Check if we're in a git repo
git status >nul 2>&1
if errorlevel 1 (
    echo ERROR: Not in a git repository. 
    echo Make sure you run this from inside your level-qa-demo folder.
    pause
    exit /b
)

:: Ask for a commit message
set /p COMMIT_MSG="Enter a commit message (e.g. 'Add failing test'): "

if "%COMMIT_MSG%"=="" (
    echo ERROR: Commit message cannot be empty.
    pause
    exit /b
)

echo.
echo Adding all files...
git add .

echo Committing with message: "%COMMIT_MSG%"
git commit -m "%COMMIT_MSG%"

echo Pushing to GitHub...
git push

echo.
echo ================================
echo   Done! Check GitHub Actions.
echo ================================
echo.
pause
