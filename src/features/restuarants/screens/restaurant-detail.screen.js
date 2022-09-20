import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestuarantInfoCard } from "../components/restuarant-info-card.component";

import { SafeAreaView } from "../../../components/utility/safe-area.components";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeAreaView>
      <RestuarantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Menu">
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="food-croissant" />}
          >
            <List.Item title="Breakfasr Burito" />
            <List.Item title="Eggs Benedic" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="food-fork-drink" />}
          >
            <List.Item title="Fried Chicken Sandwitch" />
            <List.Item title="Salmon Wrap" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
          >
            <List.Item title="Italian Meatballs" />
            <List.Item title="Crispy Calamary" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="bottle-wine" />}
          >
            <List.Item title="Moscow mule" />
            <List.Item title="Mai Tai" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
};
