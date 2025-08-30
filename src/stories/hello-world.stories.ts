import { expect } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";

// Type-only imports are used by TypeScript for type checking,
// but are erased during compilation.
// They do not cause the module to be loaded at runtime.
import type { HelloWorld } from "../hello-world.ts";

// This is a side-effect import, which loads a module
// without importing any specific bindings.
// Its purpose is to execute the module's code
// which registers the custom element.
import "../hello-world.ts";

const { events, args, argTypes, template } = getStorybookHelpers("hello-world");

const meta: Meta<HelloWorld> = {
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

export const Default: Story = {
  play: ({ canvasElement }) => {
    const helloWorld = canvasElement.querySelector("hello-world") as HelloWorld;
    expect(helloWorld).toBeInTheDocument();

    function verifyText(name: string) {
      const p = helloWorld.shadowRoot?.querySelector("p");
      expect(p).toBeInTheDocument();
      expect(p).toHaveTextContent(`Hello, ${name}!`);
    }

    let name = "World";
    // The "name" attribute is not set yet.
    verifyText(name);

    // Set the "name" attribute.
    name = "Tami";
    helloWorld.setAttribute("name", name);
    expect(helloWorld).toHaveProperty("name", name);
    verifyText(name);

    // Set the "name" property.
    name = "Comet";
    helloWorld.name = name;
    expect(helloWorld).toHaveAttribute("name", name);
    verifyText(name);

    helloWorld.name = "World"; // return to default value
  },
};

export const Named: Story = {
  args: { name: "Mark" },
};
