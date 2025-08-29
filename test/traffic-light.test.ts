// This is a failed attempt to run a snapshot test in Storybook.

import { expect, test } from "vitest";

//import { composeStories } from "@storybook/web-components";

import * as stories from "../stories/traffic-light.stories";

//const { Default } = composeStories(stories);
test("traffic-light snapshot", async () => {
  //await Default.run();
  //expect(document.body.firstChild).toMatchSnapshot();
});
