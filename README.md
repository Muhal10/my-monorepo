# My Monorepo

## Structure

- `ui-components/`: Reusable UI components (uses ShadCN)
- `utils/`: Shared utility functions (e.g., date formatting)
- `feature-x/`: System X features using shared UI + utils
- `feature-y/`: System Y features using shared UI + utils

## Setup

1. Install dependencies:

```bash
yarn install
```

2. Build all packages (optional script):

```bash
yarn build
```

## Run Feature Packages

Each feature package may include its own build/run commands.

Example:

```bash
cd packages/feature-x
yarn workspace web run dev
```

## Tailwind Setup (UI Components)

Tailwind is configured in `ui-components` using `tailwind.config.js` and `postcss.config.js`. Ensure you include `index.css` in your root app file when using UI components.


## React App (apps/web)

A sample React app is included in `apps/web` using Vite. It consumes `ui-components` and `utils` from the monorepo.

### Run App

```bash
cd apps/web
yarn install
yarn workspace web run dev
```
"# my-monorepo" 
