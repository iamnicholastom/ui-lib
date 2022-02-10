import React from "react";
import { ProgressBar } from "./ProgressBar";

export default {
  title: "Design System/ProgressBar",
  component: ProgressBar,
};

export const Default = (args) => <ProgressBar {...args} />;
Default.argTypes = {
  value: { control: { type: "number", min: 0, max: 100 } },
  size: { control: { type: "select", options: ["small", "medium", "large"] } },
};

Default.args = {
  value: 50,
  size: "medium",
};
