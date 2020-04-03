# Crema App Scripts

This project includes configuration and tooling that conforms to Crema's baseline best-practices for publishing a TypeScript library.

**🧰 Tools Used**

- [ESLint](https://eslint.org) for code linting
- [Hygen](http://www.hygen.io) for component and util generators
- [Jest](https://jestjs.io) for unit tests
- [Loki](https://loki.js.org) for visual testing
- [Prettier](https://prettier.io) for code formatting (via ESLint plugin)
- [Storybook](https://storybook.js.org) for component playground (and used by Loki)
- [TypeScript](http://www.typescriptlang.org) for Static Typing in JavaScript ([Learn](http://www.typescriptlang.org/docs/handbook/basic-types.html))

## 🏗 Setup

1. [Install Node/NPM](https://nodejs.org/en/)
2. [Install NVM](https://github.com/creationix/nvm#installation-and-update) (Node Version Manager)
3. `nvm install 'lts/*' && nvm use`
4. `npm i` (install project dependencies)
5. [Install the ESLint plugin for ~~your editor~~ VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
6. Enable "Auto-Fix on Save" in `settings.json`: 
```
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ]
}
```

## 👟 Run

Run the following scripts with `npm run <SCRIPT_HERE>`:

- `start` - start compiling code in `src` directory (output to `dist`)
- `new:component` - generate a new component
- `new:util` - generate a new util(ity)
- `new:type` - generate a new type
- `test:analyze` - run bundle analyzer
- `test:lint:fix` - run linter and fix if possible
- `test:lint` - run linter
- `test:playground` - run component playground (storybook)
- `test:unit:coverage` - run unit tests with coverage
- `test:unit` - run unit tests
- `test:visual:approve` - approve visual changes
- `test:visual:update` - update or create visual references
- `test:visual` - run visual tests (loki)

>These scripts are located in `package.json` and do not represent the entirety of available scripts, but are the most commonly used.

## 🏛 Structure

The `src` directory contains all source files for your library. Below is a printout of its file-tree with a description for each part ().

```
src
├── components // Create a new one with `npm run new:component`
│   └── MyReactComponent/
├── utils // Create a new one with `npm run new:util`
│   └── MyUtil/
├── types // Centralize Type Definitions
│   └── MyType.ts
└── index.ts // Exports all types/modules for public consumption
```

## 📦 Distribution

1. Ensure that you have incremented the version in `package.json`
2. Run `npm run pack:test` to see a list of files that would be included in your package
3. Run `npm pack` to generate a `.tgz` file containing your package (for local testing)
4. Run `npm publish` to publish your package (see [Publish Package](https://docs.npmjs.com/cli/publish))

## 🥇 Best Practices

- Use the code generators:
  - `npm run new:component`
  - `npm run new:util`
  - `npm run new:type`
  - When prompted for a name, prefer `camelCase` for utils and `CamelCase` for components and types
- Fill out the `README.md` to describe what your code does
- Run your unit tests `npm run test:unit` while working to see immediate feedback
- If you get stuck at any point, just log an issue and we'll figure it out together 👭.