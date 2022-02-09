import React from "react";
import { ProgressBar } from "./ProgressBar";

export default {
  title: "Design System/ProgressBar",
  component: ProgressBar,
};

export const Default = (args) => <ProgressBar {...args} />;
Default.args = {
  value: "99",
};
