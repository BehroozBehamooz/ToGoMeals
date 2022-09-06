import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

// css like or react-native styling shape
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading}
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;

const InfoIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Ratings = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-top: ${(props) => props.theme.space[1]};
`;

export const RestuarantInfoCard = ({ restuarant = {} }) => {
  const {
    name = "Some Restuarants",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "xxx randome street, some city, another state, -----",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restuarant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <InfoIcons>
          <Ratings>
            {ratingArray.map((rate, index) => (
              <SvgXml
                key={"rating" + index}
                xml={star}
                width={"20px"}
                height={"20px"}
              />
            ))}
          </Ratings>
          {isOpenNow && <SvgXml xml={open} width="20" height={20} />}
        </InfoIcons>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
