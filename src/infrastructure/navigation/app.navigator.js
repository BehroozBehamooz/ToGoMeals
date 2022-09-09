import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestuarantsScreen } from "../../features/restuarants/screens/restuarants.screen";
import { SafeAreaView } from "../../components/utility/safe-area.components";
import { Text } from "react-native";

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

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
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
  );
};
