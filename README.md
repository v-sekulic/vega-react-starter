# Vega React Starter

Welcome to Vega Leo CLI!

This repo will be your one stop for all your initial needs. Out of the box it supports monorepo set-up with NPM workspaces, for maximum flexibility.

## Features

- Monorepo set-up with NPM workspaces
- Tailwind for styling
- Cutting edge Tanstack Router for pages routing
- Separate package for UI powered by shadcn/ui
- Sane defaults for prettier, eslint and vscode
- CLI commands for TS and React lib generation
  - Testing included

## Get Started

Initiate the set up by running a single command, and follow the wizard 🧙:

```zsh
npx vega-leo-cli init
```

### CLI

Out of the box CLI gives you couple of useful scripts to allow for rapid development.

#### Generate TS lib:

```zsh
npx vega-leo-cli create:ts-lib [name]
```

#### Generate React lib:

```zsh
npx vega-leo-cli create:react-lib [name]
```

#### Generate React app:

```zsh
npx vega-leo-cli create:react-app [name]
```

#### Generate React component (from shadcn):

```zsh
npx vega-leo-cli component [name]
```

### UI Package

All styles for our shared design system are found in `packages/ui-kit/src/styles/index.css`.
These include styles for the following:

- Tailwind
- Shadcn
- Fonts
- Typography

To start using the UI package in any of your react apps just import it in the root of your app like so:

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '../../../packages/ui-kit/src/styles/index.css'; // <-----------

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

In the initial react app that comes with the starter, this will all be set up automatically.

#### Shadcn UI

We are using pre-build components from Shadcn UI. This is not a component library that you need to install, but a library of components that you can copy/paste into your project. Doing this we have complete ownership of components, so we are free to change them however we like.
Ofcourse you are not limited to Shad components, so feel free to add custom ones.

To make it easier to add components from Shadcn, you can use the CLI:

```zsh
npx shadcn@latest add [component]
```

Newly created components will be added to `packages/ui-kit/src/ui`. Don't forget to export them through the barrel file.

To find available components check out the [documentation](documentation)


# TODOS:
- lib for strict type check of env variables
- cli support for preset pages (like auth, dashboard etc.)
