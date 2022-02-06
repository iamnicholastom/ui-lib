import React from "react";
import { Button } from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
};

export const Primary = () => <Button size="small">Submit</Button>;
export const Outline = () => <Button size="medium">Submit</Button>;
export const Ghost = () => <Button size="large">Submit</Button>;
