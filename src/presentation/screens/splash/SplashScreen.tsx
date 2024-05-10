import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { AppNavigationScreenProps } from "../../AppNavigation";
import NavigationConfig from "../../NavigationConfig";

const SplashScreen: React.FC<AppNavigationScreenProps<'splashScreen'>> = ({
  navigation,
}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation?.replace(NavigationConfig.HomeScreen)
    }, 2000)
  }, [])

  return <View>
    <Text style={{
      color: "black"
    }}>Splash Screen</Text>
  </View>
}

export default SplashScreen
