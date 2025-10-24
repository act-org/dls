# Contributing to the DLS

Check out the [developer guide](/docs/dls-developer-guide--documentation) to learn how to build
effectively for the DLS.

To run the DLS locally:

1. Install node modules: `npm install`
2. Start the [Storybook](https://storybook.js.org) component visualizer:
   `npm start`

## How to Iterate Locally

### Option 1: Creating a Local Build

When you're ready to pilot your changes to this library in your local project:

1. Run the `npm run pack` command. When it finishes running, it will generate a
   `.tgz` file in the `/dist` folder with the following name format
   `encoura-dls-<version-number>.tgz`;
2. Access the `package.json` file of your local project in which the
   `@encoura/dls` package will be tested, and make the following edit:

   ```json
   "dependencies": {
     // Before (pulling from NPM via version number):
     "@encoura/dls": "9.2.1",
     // After (pointing to the local .tgz file):
     "@encoura/dls": "file:../path/to/@encoura/dls/dist/encoura-dls-<version-number>.tgz",
     ...
   }
   ```

3. Run `npm update @encoura/dls` to refresh your project's `node_modules` folder.

4. You can now run your project with the local changes made to this library!

5. If you want to make any further edits to this library, simply run
   `npm run pack` to package up the changes, and then `npm update @encoura/dls`
   in your local project to pull them in.

6. When you're done piloting the changes, simply revert your project's
   `package.json` file to pull this library from NPM, and run
   `npm update @encoura/dls` to refresh your project's `node_modules` folder.

### Option 2: Real-time Previews

For rapid iteration, you can run a live copy of this library in your
downstream project:

1. In this library, run the watch script: `npm run watch`

2. In your project, install a local build of this library: `npm install <path-to-this-repo>/dist`

Under the hood, this creates a symlink between the local build and your project.
When changes are detected under the `src` folder, a new build will be output
into the `dist` folder and picked up by your project.

Once you are happy with the changes, you'll want to destroy this symlink
and replace the local build with a formal/hosted version of this library.
You can do that by running the following commands in your project:

1. `npm uninstall @encoura/dls`

2. `npm install @encoura/dls@<pick-your-version> --save --save-exact`

## npm Scripts

There are lots of npm scripts at your disposal during local development.
Here are some of the more important ones:

| Script                  | Description                                                            |
| :---------------------- | :--------------------------------------------------------------------- |
| npm run build           | Transpiles DLS from TypeScript (`./src`) into ES5 (`./dist`).          |
| npm run build-storybook | Creates a static website for deployment (`./storybook-static`).        |
| npm start               | Starts the [Storybook](https://storybook.js.org) component visualizer. |
| npm test                | Runs all tests.                                                        |
| npm run watch           | Watch the `src` folder for changes and transpile on-the-fly to `dist`. |

## Committing Code

semantic-release scans commits to manage package.json versions and `CHANGELOG.MD`

It is important that we accurately capture what type of development we are doing.

- For changes to storybook (i.e. no change to components), use the `docs` tag:

```bash
git commit -m "docs: Added stories for Alert"
```

- For patches to existing components, use `fix`:

```bash
git commit -m "fix: Fixed Snackbar not appear in center of screen"
```

- For new functionality, use `feat`:

```bash
git commit -m "feat: Added Carousel component"
```
