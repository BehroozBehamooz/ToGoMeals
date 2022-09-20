import React, { useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import {
  FlatList,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { RestuarantInfoCard } from "../components/restuarant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeAreaView } from "../../../components/utility/safe-area.components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

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

export const RestuarantsScreen = ({ navigation }) => {
  const restaurantsContext = useContext(RestaurantsContext);
  const { restaurants, isLoading } = restaurantsContext;

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
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <Spacer size="large" position="bottom">
                  <RestuarantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeAreaView>
  );
};
