import React from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/base-theme";

const SIZES = {
  small: {
    "--borderRadius": 2 + "px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "8px 16px",
  },
  medium: {
    "--borderRadius": 2 + "px",
    "--fontSize": 18 / 16 + "rem",
    "--padding": "16px 24px",
  },
  large: {
    "--borderRadius": 4 + "px",
    "--fontSize": 21 / 16 + "rem",
    "--padding": "20px 36px",
  },
};

const DefaultButton = styled.button`
  font-size: var(--fontSize);
  font-family: "Roboto", sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: none;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
`;

const Button = ({ size, children }) => {
  const styles = SIZES[size];
  return <DefaultButton style={styles}>{children}</DefaultButton>;
};

export { Button };
