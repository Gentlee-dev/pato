import type { Meta, StoryObj } from "@storybook/react";
import Button from "./btn";

const meta: Meta<typeof Button> = {
  title: "Example/Buttons",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    title: "다음",
  },
};
export const CircleBtn: Story = {
  args: {
    title: "제보하기",
    circle: true,
  },
};
