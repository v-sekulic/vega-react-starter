#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer').default;

// Get the library name from the command line argument
const libraryName = process.argv[2];

if (!libraryName) {
  console.error('Please provide a library name');
  process.exit(1);
}

// Define paths
const libraryPath = path.join(__dirname, '..', 'packages', libraryName);
const srcPath = path.join(libraryPath, 'src');
const testsPath = path.join(libraryPath, 'tests');
const appsDir = path.join(__dirname, '..', 'apps');

// Check if `apps` directory exists
if (!fs.existsSync(appsDir)) {
  console.error('No `apps` directory found. Please ensure it exists.');
  process.exit(1);
}

// Get the list of apps in the `apps` directory
const apps = fs.readdirSync(appsDir).filter((app) => {
  const appPath = path.join(appsDir, app);
  return fs.lstatSync(appPath).isDirectory();
});

// Define content for package.json
const packageJsonContent = {
  name: libraryName,
  version: '1.0.0',
  main: 'src/index.ts',
  types: 'src/index.ts',
  scripts: {
    build: 'tsc',
    test: 'jest',
  },
  peerDependencies: {
    react: '^18.3.1',
  },
  jest: {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
  },
};

// Define content for tsconfig.json
const tsconfigContent = {
  extends: '../../tsconfig.base.json',
  compilerOptions: {
    outDir: './dist',
    rootDir: './src',
    strict: true,
    noImplicitReturns: true,
    noFallthroughCasesInSwitch: true,
  },
  include: ['src', 'tests'],
};

// Prompt the user to select an app
inquirer
  .prompt([
    {
      type: 'list',
      name: 'selectedApp',
      message:
        'Which app do you want to add the new library to as a dependency?',
      choices: apps,
    },
  ])
  .then((answers) => {
    const selectedApp = answers.selectedApp;
    const appPackageJsonPath = path.join(appsDir, selectedApp, 'package.json');

    // Ensure the `packages/[libraryName]` folder exists
    fs.mkdirSync(libraryPath, { recursive: true });
    fs.mkdirSync(srcPath, { recursive: true });
    fs.mkdirSync(testsPath, { recursive: true });

    // Write package.json for the new library
    fs.writeFileSync(
      path.join(libraryPath, 'package.json'),
      JSON.stringify(packageJsonContent, null, 2)
    );

    // Write tsconfig.json for the new library
    fs.writeFileSync(
      path.join(libraryPath, 'tsconfig.json'),
      JSON.stringify(tsconfigContent, null, 2)
    );

    // Create a sum function in index.ts
    const indexTsContent = `export const sum = (a: number, b: number) => {
      return a + b;
    };`;
    fs.writeFileSync(path.join(srcPath, 'index.ts'), indexTsContent);

    // Create a test for the sum function in tests/sum.test.ts
    const testTsContent = `import { sum } from '../src';

    describe('sum', () => {
      it('should add two numbers', () => {
        expect(sum(1, 2)).toBe(3);
      });
    });
    `;
    fs.writeFileSync(path.join(testsPath, 'sum.test.ts'), testTsContent);

    console.log(`✅ Successfully created TypeScript library: ${libraryName}`);

    // Check if the app's package.json exists
    if (fs.existsSync(appPackageJsonPath)) {
      // Read the app's package.json
      const appPackageJson = JSON.parse(fs.readFileSync(appPackageJsonPath));

      // Add the new library as a dependency to the app
      appPackageJson.dependencies = appPackageJson.dependencies || {};
      appPackageJson.dependencies[libraryName] = '*';

      // Write the updated package.json back to the app folder
      fs.writeFileSync(
        appPackageJsonPath,
        JSON.stringify(appPackageJson, null, 2)
      );

      console.log(
        `✅ Successfully added ${libraryName} to ${selectedApp}'s dependencies`
      );
    } else {
      console.error(`❌ Failed to find package.json for ${selectedApp}`);
    }
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
