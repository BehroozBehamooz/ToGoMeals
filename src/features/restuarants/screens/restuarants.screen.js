import React, { useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RestuarantInfoCard } from "../components/restuarant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeAreaView } from "../../../components/utility/safe-area.components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 25%;
`;

export const RestuarantsScreen = () => {
  const restaurantsContext = useContext(RestaurantsContext);
  const { restaurants, isLoading, error } = restaurantsContext;

  return (
    <SafeAreaView>
      <Search />
      {isLoading ? (
        <Loading animating={true} color={Colors.blue400} size={"large"} />
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer size="large" position="bottom">
                <RestuarantInfoCard restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeAreaView>
  );
};
