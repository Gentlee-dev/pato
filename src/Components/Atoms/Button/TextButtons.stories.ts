import type { Meta, StoryObj } from "@storybook/react";
import Button from "./textBtn";

const meta: Meta<typeof Button> = {
  title: "Example/TextButtons",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    name: "다음",
  },
};
