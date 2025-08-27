import { expect } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/web-components";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import "../traffic-light";

const { events, args, argTypes, template } =
  getStorybookHelpers("traffic-light");

const meta: Meta = {
  title: "Components/TrafficLight",
  component: "traffic-light",
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

type Story = StoryObj<TrafficLight & typeof args>;

export const Default: Story = {
  play: ({ canvasElement }) => {
    const trafficLight = canvasElement.querySelector(
      "traffic-light"
    ) as TrafficLight;
    expect(trafficLight).toBeInTheDocument();

    trafficLight.next();
    expect(trafficLight).toHaveProperty("state", "yield");

    trafficLight.next();
    expect(trafficLight).toHaveProperty("state", "go");

    trafficLight.next();
    expect(trafficLight).toHaveProperty("state", "stop");
  },
};

export const Specified: Story = {
  args: {
    state: "go",
  },
};
