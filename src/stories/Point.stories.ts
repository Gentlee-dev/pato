import type { Meta, StoryObj } from "@storybook/react";

import Point from "../Components/Atoms/point";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Point> = {
  title: "Example/Point",
  component: Point,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Point>;

export const Primary: Story = {
  args: {
    parking: 1,
    toilet: 1,
  },
};
