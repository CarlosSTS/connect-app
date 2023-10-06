import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const { Navigator, Screen } = createStackNavigator();

import FormIn from "./pages/FormIn";
import Detail from "./pages/Detail";
import { colors, fonts } from "./common";

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTitleStyle: {
            alignSelf: "center",
            fontFamily: fonts.Inter_400Regular,
          },
        }}
      >
        <Screen
          name="FormIn"
          component={FormIn}
          options={{
            title: "Connect",
            headerRight: () => (
              <FontAwesome
                style={{ marginRight: 16 }}
                name="connectdevelop"
                size={24}
                color={colors.white}
              />
            ),
          }}
        />
        <Screen
          name="Detail"
          component={Detail}
          options={({ route }) => ({
            title: `Olá ${route.params?.name || 'Detalhes'}`,
            headerRight: () => (
              <MaterialCommunityIcons
                style={{ marginRight: 16 }}
                name="details"
                size={24}
                color={colors.white}
              />
            ),
          })}
        />
      </Navigator>
    </NavigationContainer>
  );
}
