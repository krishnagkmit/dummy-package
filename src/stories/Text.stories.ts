import { StoryObj, Meta } from "@storybook/react/types-6-0";
import Text from "../Text/index";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Hello, World!",
  },
} as Story;
