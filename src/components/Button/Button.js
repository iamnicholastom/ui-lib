import React from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/base-theme";

const SIZES = {
  small: {
    "--borderRadius": 2 + "px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "4px 12px",
  },
  medium: {
    "--borderRadius": 2 + "px",
    "--fontSize": 18 / 16 + "rem",
    "--padding": "12px 20px",
  },
  large: {
    "--borderRadius": 4 + "px",
    "--fontSize": 21 / 16 + "rem",
    "--padding": "16px 32px",
  },
};

const DefaultButton = styled.button`
  font-size: var(--fontSize);
  font-family: "Roboto", sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
`;

const Button = ({ size, variant, children }) => {
  const styles = SIZES[size];
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else {
    Component = GhostButton;
  }
  return <Component style={styles}>{children}</Component>;
};

const FillButton = styled(DefaultButton)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
`;

const OutlineButton = styled(DefaultButton)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;
`;

const GhostButton = styled(DefaultButton)`
  border: 2px solid currentColor;
`;

export { Button };
