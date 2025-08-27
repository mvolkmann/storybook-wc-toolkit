# storybook-wc-toolkit

This project demonstrates the use of Storybook and wc-toolkit
with a vanilla web component.

## Project Creation

1. Create this project directory.
1. `cd` to this directory.
1. Enter `npm init -y`
1. Enter `npm install -D vite`
1. Add the following script in `package.json`:

   ```json
   "dev": "vite"
   ```

1. Create the file `hello-world.js`.
1. Create the file `index.html`.
1. Enter `npm run dev`.
1. Browse `localhost:5173`.
1. Verify that it renders "Hello, World!" and "Hello, Mark!".

## Storybook Setup

1. Enter `npm create storybook@latest`
1. If prompted whether it can install create-storybook,
   press return to allow it.
1. When prompted for the configuration to install,
   press return to accept the default which is "Recommended".
1. When prompted if you want to manually choose
   a Storybook project type to install,
   press return to accept the default which is "Y".
1. Press the down arrow until "web_components" is underlined
   and press return to select it.
   This will run for about a minute, start the Storybook server,
   and open Storybook in your default web browser.
1. Delete these example files from the `stories` directory:
   `*.css`, `*.js`, and `*.stories.js`.
1. Create the file `stories/hello-world.stories.ts`.
1. In the left nav of Storybook, click the HelloWorld stories
   "Default" and "Named" and verify that they render correctly

## Custom Elements Manifest Generation

1. Enter `npm install -D @custom-elements-manifest/analyzer`

1. Add the following script in `package.json`:

   ```json
   "cem": "custom-elements-manifest analyze",
   ```

1. Enter `npm run cem`.

This creates the file `custom-elements.json` in the project root directory.
Regenerate this file every time the API of a web component
in this project is modified.

## Docs Addon

1. Install the
   [Docs addon](https://storybook.js.org/addons/@storybook/addon-docs)
   by entering `npm install -D @storybook/addon-docs`.

1. Add a `docs` property to the `config` object defined in `storybook/main.js`.

   ```ts
   const config = {
     ...
     docs: {
       autodocs: "tag",
     },
   };
   ```

1. In each story file (only `hello-world.stories.ts` currently)
   add the following in the `Meta` object:

   ```ts
   const meta: Meta = {
     ...
     tags: ["autodocs"],
   };
   ```

## Storybook Helpers

1. Enter `npm install -D @wc-toolkit/storybook-helpers`

1. Add the following lines at the beginning of `.storybook/preview.js`:

   ```js
   import { setCustomElementsManifest } from "@storybook/web-components";
   import manifest from "../custom-elements.json" with { type: "json" };

   setCustomElementsManifest(manifest);
   ```

1. Modify the `parameters` object defined `.storybook/preview.js` as follows:

   ```js
   export const parameters = {
     ...
     controls: {
       expanded: true,
       ...
     },
   }
   ```

1. In each story file (only `hello-world.stories.ts` currently):

   1. Add the following near the top of the file:

      ```ts
      import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";

      const { events, args, argTypes, template } =
        getStorybookHelpers("hello-world");
      ```

   1. Add the following properties in the `Meta` object:

      ```ts
      args,
      argTypes,
      render: (args) => template(args),
      parameters: {
        actions: {
          handles: events,
        },
      },
      ```

   1. Change the type definition for `Story` to the following:

      ```ts
      type Story = StoryObj<HelloWorld & typeof args>;
      ```

See https://github.com/wc-toolkit/storybook-helpers/issues/49.
