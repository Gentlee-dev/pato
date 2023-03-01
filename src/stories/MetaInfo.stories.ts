import type { Meta, StoryObj } from "@storybook/react";

import MetaInfo from "../Components/Atoms/metaInfo";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof MetaInfo> = {
  title: "Example/MetaInfo",
  component: MetaInfo,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MetaInfo>;

export const Primary: Story = {
  args: {
    title: "제목",
    desc: "설명",
  },
};
