import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestuarantInfoCard } from "../components/restuarant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeAreaView } from "../../../components/utility/safe-area.components";
const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestuarantsScreen = () => {
  return (
    <SafeAreaView>
      <SearchView>
        <Searchbar placeholder="search" />
      </SearchView>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => (
          <Spacer size="large" position="bottom">
            <RestuarantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};
