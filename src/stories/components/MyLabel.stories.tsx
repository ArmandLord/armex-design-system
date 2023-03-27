import MyLabel from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  // este define el nombre de la historia
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    color: {
      control: "select",
    },
    customColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: "Hola Basic",
  size: "h3",
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: "Hola AllCaps",
  size: "h3",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Hola Secondary",
  size: "h3",
  allCaps: false,
  color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Hola Tertiary",
  size: "h3",
  allCaps: false,
  color: "tertiary",
};

export const CustomColorFont = Template.bind({});
CustomColorFont.args = {
  label: "Hola CustomColorFont",
  size: "h1",
  allCaps: false,
  customColor: "#07b609",
};
