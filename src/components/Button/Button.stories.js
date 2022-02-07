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
  th {
    border-bottom: 1px solid hsl(0deg 0% 80%);
  }
  td:first-of-type,
  th:first-of-type {
    border-right: 1px solid hsl(0deg 0% 80%);
  }
  td:first-of-type {
    text-align: right;
  }
`;

export const Primary = () => (
  <Table cellSpacing={0} cellPadding={0}>
    <tr>
      <th></th>
      <th>Fill</th>
      <th>Outline</th>
      <th>Ghost</th>
    </tr>
    <tr>
      <td>Small</td>
      <td>
        <Button size="small" variant="fill">
          Button
        </Button>
      </td>
      <td>
        <Button size="small" variant="outline">
          Button
        </Button>
      </td>
      <td>
        <Button size="small" variant="ghost">
          Button
        </Button>
      </td>
    </tr>
  </Table>
);

export const Outline = () => (
  <Table cellSpacing={0} cellPadding={0}>
    <tr>
      <th></th>
      <th>Fill</th>
      <th>Outline</th>
      <th>Ghost</th>
    </tr>
    <tr>
      <td>Medium</td>
      <td>
        <Button size="medium" variant="fill">
          Button
        </Button>
      </td>
      <td>
        <Button size="medium" variant="outline">
          Button
        </Button>
      </td>
      <td>
        <Button size="medium" variant="ghost">
          Button
        </Button>
      </td>
    </tr>
  </Table>
);

export const Ghost = () => (
  <Table cellSpacing={0} cellPadding={0}>
    <tr>
      <th></th>
      <th>Fill</th>
      <th>Outline</th>
      <th>Ghost</th>
    </tr>
    <tr>
      <td>Large</td>
      <td>
        <Button size="large" variant="fill">
          Button
        </Button>
      </td>
      <td>
        <Button size="large" variant="outline">
          Button
        </Button>
      </td>
      <td>
        <Button size="large" variant="ghost">
          Button
        </Button>
      </td>
    </tr>
  </Table>
);
