import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestuarantInfoCard } from "../components/restuarant-info-card.component";

const RestuarantsScreenSafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ?? 0}px};
`;

const SearchView = styled.View`
  padding: 16px;
`;

const RestuarantsListView = styled.View`
  flex: 1;
  padding: 16px;
  background-color: "blue";
`;

export const RestuarantsScreen = () => {
  return (
    <RestuarantsScreenSafeArea>
      <SearchView>
        <Searchbar placeholder="search" />
      </SearchView>
      <RestuarantsListView>
        <RestuarantInfoCard />
      </RestuarantsListView>
    </RestuarantsScreenSafeArea>
  );
};