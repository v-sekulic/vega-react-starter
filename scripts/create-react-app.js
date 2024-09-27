#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

// Get the app name from the command line argument
const appName = process.argv[2];

if (!appName) {
  console.error("Please provide an app name");
  process.exit(1);
}

// Define the path where the new app will be created
const appPath = path.join(__dirname, '..', 'apps', appName);

// Run the Vite create command
try {
  execSync(`npm create vite@latest ${appName} --template react-ts`, {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..', 'apps') // Ensure it's created under the apps folder
  });

  console.log(`✅ Successfully created React app: ${appName}`);
} catch (error) {
  console.error(`❌ Error creating React app: ${error.message}`);
}
