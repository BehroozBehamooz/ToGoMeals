import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestuarantInfoCard } from "../components/restuarant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeAreaView } from "../../../components/utility/safe-area.components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestuarantsScreen = () => {
  const restaurantsContext = useContext(RestaurantsContext);
  const { restaurants, isLoading, error } = restaurantsContext;
  // console.log("restaurants: ", restaurants[0].name);
  return (
    <SafeAreaView>
      <SearchView>
        <Searchbar placeholder="search" />
      </SearchView>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          // console.log("item: ", item);
          return (
            <Spacer size="large" position="bottom">
              <RestuarantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};
