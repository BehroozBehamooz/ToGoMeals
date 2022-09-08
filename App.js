import React from "react";
import { SafeAreaView } from "./src/components/utility/safe-area.components";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components/native";
import { RestuarantsScreen } from "./src/features/restuarants/screens/restuarants.screen";

import { theme } from "./src/infrastructure/theme";

function SettingsScreen() {
  return (
    <SafeAreaView>
      <Text>Settings!</Text>
    </SafeAreaView>
  );
}

function MapScreen() {
  return (
    <SafeAreaView>
      <Text>Maps!</Text>
    </SafeAreaView>
  );
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider theme={theme}>
      <RestaurantsContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "#e91e63",
            }}
          >
            <Tab.Screen
              name="Restaurants"
              component={RestuarantsScreen}
              options={{
                tabBarLabel: "Restuarants",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="restaurant" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Map"
              component={MapScreen}
              options={{
                tabBarLabel: "Map",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="map" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarLabel: "Settings",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="settings" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </RestaurantsContextProvider>
    </ThemeProvider>
  );
}
