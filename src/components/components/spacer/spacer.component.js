import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizes = {
  small: 1,
  medium: 2,
  large: 3,
};

const positions = {
  top: "margin-top",
  left: "matgin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  return (
    <SpacerView
      variant={`
        ${positions[position]}: ${theme.space[sizes[size]]};
      `}
    >
      {children}
    </SpacerView>
  );
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
