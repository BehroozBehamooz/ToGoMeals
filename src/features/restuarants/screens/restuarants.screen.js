import React from "react";
import styled from "styled-components/native";
import { StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestuarantInfoCard } from "../components/restuarant-info-card.component";
import { Spacer } from "../../../components/components/spacer/spacer.component";

const RestuarantsScreenSafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ?? 0}px};
`;

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
    <RestuarantsScreenSafeArea>
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
    </RestuarantsScreenSafeArea>
  );
};
