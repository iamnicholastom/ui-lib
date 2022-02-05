import React from "react";
import { Button } from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
};

export const AllButtons = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <div style={{ margin: 12 }}>
      <Button size="small">Submit</Button>
    </div>
    <div style={{ margin: 12 }}>
      <Button size="medium">Submit</Button>
    </div>
    <div style={{ margin: 12 }}>
      <Button size="large">Submit</Button>
    </div>
  </div>
);
