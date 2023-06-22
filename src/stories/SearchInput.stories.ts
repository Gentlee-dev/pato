import type { Meta, StoryObj } from "@storybook/react";

import SearchInput from "Components/Atoms/Input/searchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Example/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Primary: Story = {
  args: {},
};
