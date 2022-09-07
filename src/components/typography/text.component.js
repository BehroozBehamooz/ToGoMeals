import styled from "styled-components/native";

const defualtTextStyle = (theme) => `
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flexwrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
  font-family: ${theme.fonts.body};`;

const hint = (theme) => `
  font-family: ${theme.fonts.body};`;

const error = (theme) => `
  color: ${theme.colors.text.error};`;

const caption = (theme) => `
  font-size: ${theme.fontSizes.caption}
  font-weight: ${theme.fontWeights.bold};`;

const label = (theme) => `
  font-size: ${theme.fontSizes.body};
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text`
  ${({ theme }) => defualtTextStyle(theme)}
  ${({ theme, variant }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
