#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get the app name from the command line argument
const appName = process.argv[2];

if (!appName) {
  console.error('❌ Please provide an app name');
  process.exit(1);
}

// Define the path where the new app will be created
const appPath = path.join(__dirname, '..', 'apps', appName);

// Check if the app already exists
if (fs.existsSync(appPath)) {
  console.error(`❌ Error: An app with the name "${appName}" already exists.`);
  process.exit(1);
}

// Run the Vite create command
try {
  execSync(`npx degit v-sekulic/vite-react-template ${appName}`, {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..', 'apps'), // Ensure it's created under the apps folder
  });

  console.log(`✅ Successfully created React app: ${appName}`);
} catch (error) {
  console.error(`❌ Error creating React app: ${error.message}`);
  process.exit(1);
}

// Update the name in the new app's package.json
const appPackageJsonPath = path.join(appPath, 'package.json');
if (fs.existsSync(appPackageJsonPath)) {
  const appPackageJson = JSON.parse(
    fs.readFileSync(appPackageJsonPath, 'utf8')
  );

  // Set the app name in package.json
  appPackageJson.name = appName;

  // Write the updated package.json back to disk
  fs.writeFileSync(
    appPackageJsonPath,
    JSON.stringify(appPackageJson, null, 2),
    'utf8'
  );
  console.log(`✅ Updated package.json with the correct app name: ${appName}`);
} else {
  console.error(`❌ package.json not found in ${appPath}.`);
}

// Path to the root package.json
const rootPackageJsonPath = path.join(__dirname, '..', 'package.json');

// Read the root package.json
const rootPackageJson = JSON.parse(
  fs.readFileSync(rootPackageJsonPath, 'utf8')
);

// Define new scripts for the created app
const newScripts = {
  [`dev:${appName}`]: `npm run dev --workspace=apps/${appName}`,
  [`build:${appName}`]: `npm run build --workspace=apps/${appName}`,
  [`preview:${appName}`]: `npm run preview --workspace=apps/${appName}`,
};

// Add the new scripts if they don't already exist
Object.keys(newScripts).forEach(script => {
  if (!rootPackageJson.scripts[script]) {
    rootPackageJson.scripts[script] = newScripts[script];
  } else {
    console.warn(`⚠️ Script "${script}" already exists in package.json.`);
  }
});

// Write the updated root package.json back to disk
fs.writeFileSync(
  rootPackageJsonPath,
  JSON.stringify(rootPackageJson, null, 2),
  'utf8'
);

console.log(
  `✅ Successfully updated root package.json with new scripts for ${appName}.`
);
