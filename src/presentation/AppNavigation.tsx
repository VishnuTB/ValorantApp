import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Datum } from "../business/redux/services/AgentListResponse";
import NavigationConfig from "./NavigationConfig";
import DetailsScreen from "./screens/details/DetailsScreen";
import HomeScreen from "./screens/home/HomeScreen";
import SplashScreen from "./screens/splash/SplashScreen";

type AppNavigationScreensList = {
  [NavigationConfig.Splash]: undefined;
  [NavigationConfig.HomeScreen]: undefined;
  [NavigationConfig.DetailsScreen]: {
    agent: Datum
  }
}

const Stack = createNativeStackNavigator<AppNavigationScreensList>()

export type AppNavigationScreenProps<
  T extends keyof AppNavigationScreensList,
> = {
  navigation?: NativeStackNavigationProp<AppNavigationScreensList, T>;
  route?: RouteProp<AppNavigationScreensList, T>;
};

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName={NavigationConfig.Splash}>
      <Stack.Screen name={NavigationConfig.Splash}
        component={SplashScreen} />
      <Stack.Screen name={NavigationConfig.HomeScreen}
        component={HomeScreen} />
      <Stack.Screen name={NavigationConfig.DetailsScreen}
        component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation
