/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "storybook-addon-test-codegen",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // This may be needed by the deploy-storybook script.
  /*
  async viteFinal(config, { configType }) {
    if (configType === "PRODUCTION") {
      config.plugins = config.plugins?.filter((plugin) => {
        const { name } = plugin;
        return !name || !name.startsWith("vite:");
      });
    } else {
      config.plugins?.push(viteMockServe({}));
    }
    return {
      ...config,
      base: "/storybook-wc-toolkit/",
    };
    return config;
  },
  */
};
export default config;
