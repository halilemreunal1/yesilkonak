#!/bin/bash

echo "Cleaning up project..."

# Remove build directories and caches
rm -rf .next
rm -rf node_modules
rm -f package-lock.json
rm -f pnpm-lock.yaml

echo "Reinstalling dependencies..."
npm install

echo "Project cleaned and dependencies reinstalled!"
echo "You can now run: npm run dev"
