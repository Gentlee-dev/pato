import type { Meta, StoryObj } from "@storybook/react";

import MetaInfo from "../Components/Atoms/metaInfo";

const meta: Meta<typeof MetaInfo> = {
  title: "Example/MetaInfo",
  component: MetaInfo,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MetaInfo>;

export const All: Story = {
  args: {
    title: "공사중",
    desc: "포장마차",
    location: "광주광역시 금남로 193-12",
  },
};
export const WithDesc: Story = {
  args: {
    title: "공사중",
    desc: "포장마차",
  },
};
export const WithLocation: Story = {
  args: {
    title: "공사중",
    location: "광주광역시 금남로 193-12",
  },
};
