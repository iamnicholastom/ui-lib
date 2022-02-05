import React from "react";
import styled from "styled-components";

const DefaultButton = styled.button`
  background-color: hsl(240deg 100% 60%);
  border-radius: 2px;
  color: hsl(0deg 0% 100%);
`;

const Button = ({ variant, size, children }) => {
  return <DefaultButton>{children}</DefaultButton>;
};

export { Button };
