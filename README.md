# Scripts 📜

Packages containing config, scripts, and dependencies for Crema apps.

**🧰 Tools Used**

- [lerna](https://github.com/lerna/lerna/) A tool for managing JavaScript projects with multiple packages. 
- [ESLint](https://eslint.org) for code linting
- [Jest](https://jestjs.io) for unit tests
- [Prettier](https://prettier.io) for code formatting (via ESLint plugin)
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

**TBD**

>These scripts are located in `package.json` and do not represent the entirety of available scripts, but are the most commonly used.

## 🏛 Structure

```
.
├── README.md
├── consumers
│   └── app-web
├── lerna.json
├── package-lock.json
├── package.json
└── packages
    ├── scripts
    │   ├── configs
    │   └── package.json
    ├── scripts-mobile
    │   ├── configs
    │   └── package.json
    └── scripts-web
        ├── configs
        └── package.json
```

## 📦 Distribution

**TBD**