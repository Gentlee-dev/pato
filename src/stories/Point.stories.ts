import type { Meta, StoryObj } from "@storybook/react";
import Point from "../Components/Atoms/point";

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

export const Float: Story = {
  args: {
    parking: 4.5,
    toilet: 2.4,
  },
};
