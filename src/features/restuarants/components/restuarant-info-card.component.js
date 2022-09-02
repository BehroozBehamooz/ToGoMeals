import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

// css like or react-native styling shape
const Title = styled.Text`
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
`;

export const RestuarantInfoCard = ({ restuarant = {} }) => {
  const {
    name = "Some Restuarants",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "randome street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false,
  } = restuarant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
