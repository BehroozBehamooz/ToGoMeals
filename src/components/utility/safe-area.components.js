import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
