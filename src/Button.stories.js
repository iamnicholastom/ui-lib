import React from "react";
import { Button } from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
};

export const AllButtons = () => (
  <div>
    <Button variant="fill" size="small" children="Submit" />
    <Button variant="outline" size="small" children="Back" />
    <Button variant="ghost" size="small" children="Submit" />
  </div>
);
