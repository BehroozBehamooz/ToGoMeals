import React from "react";
import { ThemeProvider } from "styled-components/native";
import { RestuarantsScreen } from "./src/features/restuarants/screens/restuarants.screen";

import { theme } from "./src/infrastructure/theme";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RestuarantsScreen />
    </ThemeProvider>
  );
}
