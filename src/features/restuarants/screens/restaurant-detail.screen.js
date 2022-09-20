import React from "react";

import { RestuarantInfoCard } from "../components/restuarant-info-card.component";

import { SafeAreaView } from "../../../components/utility/safe-area.components";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeAreaView>
      <RestuarantInfoCard restaurant={restaurant} />
    </SafeAreaView>
  );
};
