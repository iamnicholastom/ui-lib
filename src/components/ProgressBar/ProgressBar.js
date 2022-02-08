import React from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/base-theme";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Bar style={{ "--width": value + "%" }} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  /* Trim off corners when progress bar is near full */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: 8px;
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export { ProgressBar };
