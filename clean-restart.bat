@echo off
echo Cleaning up project...

:: Remove build directories and caches
if exist .next rmdir /s /q .next
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist pnpm-lock.yaml del pnpm-lock.yaml

echo Reinstalling dependencies...
npm install

echo Project cleaned and dependencies reinstalled!
echo You can now run: npm run dev
pause
