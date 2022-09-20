import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestuarantsScreen } from "../../features/restuarants/screens/restuarants.screen";
import { RestaurantDetailScreen } from "../../features/restuarants/screens/restaurant-detail.screen";

const RestarantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestarantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestarantStack.Screen name="Restaurants" component={RestuarantsScreen} />
      <RestarantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen} // build out restuarant detail screen
      />
    </RestarantStack.Navigator>
  );
};
