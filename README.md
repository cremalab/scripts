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

>These scripts are located in `package.json` and do not represent the entirety of available scripts, but are the most commonly used.

### ⚙️ Development

#### Terms to know...

- "packages" — `./packages/(scripts|scripts-mobile|scripts-web)`
  - These must be symlinked with `lerna link` because they depend on one another.
- "consumers" - `./consumers/(app-mobile|app-web)`
  - These are separate repositories that depend on this package and are included as git submodules that need to be cloned via `git submodule update --remote`. (Included for testing purposes)


#### Steps to Complete

1. Create global symlinks for `scripts-mobile` and `scripts-web`.
2. Link "packages" (doing this after step 1 is necessary)
3. Clone "consumers" (app-mobile/app-web)
4. Install "consumers" dependencies
5. Link "consumers" to global symlinks for `scripts-mobile` and `scripts-web`

#### Scripts

4. `dev:setup` - !!!RUN FIRST: Packages must be built and symlinked first
5. `dev:build` - builds packages once (only TS will be built, templates are static)
6. `dev:build:watch` - builds packages in watch mode
7. `dev:test` - run unit tests (be sure you've run `dev:setup` first)
8. `dev:test:watch` - run unit tests in watch mode (be sure you've run `dev:setup` first)
9. `dev:teardown` - Removes all consumer and global symlinks (not typically necessary)

### 📦 Publish

[COMING SOON]

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