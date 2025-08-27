import { expect } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/web-components";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import "../traffic-light";

const { events, args, argTypes, template } =
  getStorybookHelpers("traffic-light");
//console.log("traffic-light.stories.ts : events =", events);
// events is set to ["state-change"] which is an array containing
// the event name that is dispatched by the TrafficLight next method.

const meta: Meta = {
  title: "Components/TrafficLight",
  component: "traffic-light",
  args,
  argTypes,
  render: (args) => template(args),
  parameters: {
    // This should cause "state-change" events to be logged to the
    // Actions tab when the tests are run, but it does not work.
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

    // There are two ways to advance to the next state,
    // calling the next method or clicking the button.

    trafficLight.next();
    expect(trafficLight).toHaveProperty("state", "yield");

    trafficLight.shadowRoot?.querySelector("button")?.click();
    expect(trafficLight).toHaveProperty("state", "go");

    trafficLight.next();
    expect(trafficLight).toHaveProperty("state", "stop");
  },
};

// This render function sets attributes from args entries.
const render = (args: Record<string, string>) => {
  const el = document.createElement("traffic-light");
  for (const [key, value] of Object.entries(args)) {
    el.setAttribute(key, value);
  }
  return el;
};

export const Specified: Story = {
  args: { state: "go" },
  // The default render function assumes that the component being tested
  // has a settable property that corresponds to each args entry.
  // The traffic-light component does not have a settable "state" property,
  // so we must use a custom render function.
  render,
};
