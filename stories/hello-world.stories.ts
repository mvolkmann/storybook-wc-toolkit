import type { Meta, StoryObj } from "@storybook/web-components";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import "../hello-world";

const { events, args, argTypes, template } = getStorybookHelpers("hello-world");

const meta: Meta = {
  title: "Components/HelloWorld",
  component: "hello-world",
  args,
  argTypes,
  render: (args) => template(args),
  parameters: {
    actions: {
      handles: events,
    },
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<HelloWorld & typeof args>;

export const Default: Story = {};

export const Named: Story = {
  args: {
    name: "Mark",
  },
};
