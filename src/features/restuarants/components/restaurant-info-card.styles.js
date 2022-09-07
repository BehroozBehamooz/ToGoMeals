import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  // margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;

export const InfoIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Ratings = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-top: ${(props) => props.theme.space[1]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
