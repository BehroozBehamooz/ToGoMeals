import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const locationContext = useContext(LocationContext);
  const { keyword, search } = locationContext;
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchView>
      <Searchbar
        placeholder="search for a location"
        value={searchKeyword}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchView>
  );
};
