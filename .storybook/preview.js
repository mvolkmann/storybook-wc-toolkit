import { setCustomElementsManifest } from "@storybook/web-components";
import { setStorybookHelpersConfig } from "@wc-toolkit/storybook-helpers";
import manifest from "../custom-elements.json" with { type: "json" };

setStorybookHelpersConfig({});
setCustomElementsManifest(manifest);
 
/** @type { import('@storybook/web-components-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;