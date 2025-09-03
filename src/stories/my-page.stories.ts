import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";

import type { MyPage } from "../my-page.ts";
import "../my-page.ts";

const { args, argTypes, template } = getStorybookHelpers("my-page");

const meta: Meta<MyPage> = {
  title: "Components/MyPage",
  component: "my-page",
  args,
  argTypes,
  render: (args) => template(args),
};
export default meta;

type Story = StoryObj<MyPage & typeof args>;

export const Default: Story = {};
