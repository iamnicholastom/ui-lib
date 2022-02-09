import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
};

const Table = styled.table`
  font-family: sans-serif;
  th,
  td {
    text-align: center;
    padding: 16px;
  }
  td:first-of-type {
    text-align: right;
  }
`;

export const Primary = (args) => <Button {...args}>Submit</Button>;
Primary.args = {
  variant: "fill",
  size: "small",
};

export const Outline = (args) => <Button {...args}>Submit</Button>;
Outline.args = {
  variant: "outline",
  size: "small",
};

export const Ghost = (args) => <Button {...args}>Submit</Button>;
Ghost.args = {
  variant: "ghost",
  size: "small",
};

export const AllButtons = () => (
  <Table cellSpacing={0} cellPadding={0}>
    <tr>
      <th>Small</th>
      <th>Medium</th>
      <th>Large</th>
    </tr>
    <tr>
      <td>
        <Button size="small" variant="fill">
          Submit
        </Button>
      </td>
      <td>
        <Button size="medium" variant="fill">
          Submit
        </Button>
      </td>
      <td>
        <Button size="large" variant="fill">
          Submit
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button size="small" variant="outline">
          Submit
        </Button>
      </td>
      <td>
        <Button size="medium" variant="outline">
          Submit
        </Button>
      </td>
      <td>
        <Button size="large" variant="outline">
          Submit
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button size="small" variant="ghost">
          Submit
        </Button>
      </td>
      <td>
        <Button size="medium" variant="ghost">
          Submit
        </Button>
      </td>
      <td>
        <Button size="large" variant="ghost">
          Submit
        </Button>
      </td>
    </tr>
  </Table>
);
