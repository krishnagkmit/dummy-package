import { StoryObj, Meta } from "@storybook/react/types-6-0";
import  BreadCrumb  from "../breadCrumb/index"

const meta = {
  title: "Components/BreadCrumb",
  component: BreadCrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      description: "An array of objects, each containing a title and an onClick handler.",
      table: {
        type: {
          summary: "IItem[]",
        },
      },
    },
    onClick: {
      description: "Called when an item is clicked. Returns an object with the menu and menuIndex of the clicked item.",
      table: {
        type: {
          summary: "({ menu, menuIndex }: { menu: IItem; menuIndex: number }) => void",
        },
      },
    },
  }
} as Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   items:[
    {
      title: "Farmers",
    },
    {
      title: "Details",
    },
   ]  
  },

} as Story;
