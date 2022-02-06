import React from "react";
import { Button } from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
};

export const Primary = () => (
  <div>
    <Button size="small" variant="fill">
      Submit
    </Button>
    <Button size="medium" variant="fill">
      Submit
    </Button>
    <Button size="large" variant="fill">
      Submit
    </Button>
  </div>
);

export const Outline = () => (
  <div>
    <Button size="small" variant="outline">
      Submit
    </Button>
    <Button size="medium" variant="outline">
      Submit
    </Button>
    <Button size="large" variant="outline">
      Submit
    </Button>
  </div>
);

export const Ghost = () => (
  <div>
    <Button size="small" variant="ghost">
      Submit
    </Button>
    <Button size="medium" variant="ghost">
      Submit
    </Button>
    <Button size="large" variant="ghost">
      Submit
    </Button>
  </div>
);
