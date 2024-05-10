import { useThemeMode } from "@rneui/themed";
import React, { useEffect } from "react";
import { Text, useColorScheme } from "react-native";
import { AppNavigationScreenProps } from "../../AppNavigation";
import NavigationConfig from "../../NavigationConfig";
import ContainerView from "../../common/ContainerView";

const SplashScreen: React.FC<AppNavigationScreenProps<'splashScreen'>> = ({
  navigation,
}) => {

  const isDarkMode = useColorScheme() === 'dark';
  const { mode, setMode } = useThemeMode();

  useEffect(() => {
    setMode(isDarkMode ? 'dark' : 'light')
    setTimeout(() => {
      navigation?.replace(NavigationConfig.HomeScreen)
    }, 2000)
  }, [])

  return <ContainerView>
    <Text >Splash Screen</Text>
  </ContainerView>
}

export default SplashScreen
