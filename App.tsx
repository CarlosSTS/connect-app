import React from "react";
import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import Routes from "./src/routes";
import { colors } from "./src/common";
import { Loading } from "./src/components";

const App = () => {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryColorDark}
      />
      <Routes />
    </>
  );
}

export default App;