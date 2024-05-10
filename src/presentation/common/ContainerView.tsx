import { useTheme } from "@rneui/themed";
import React from "react";
import { ActivityIndicator, StyleProp, View, ViewStyle } from "react-native";
import colours from "../../common/colours";
import { cardStyles, viewStyles } from "../../common/styles";


interface ContainerViewProps {
  style?: StyleProp<ViewStyle>;
  children: any;
  showLoading?: boolean;
}

const ContainerView: React.FC<ContainerViewProps> = (props) => {

  const { theme } = useTheme()

  return <View style={{
    height: '100%',
    width: '100%',
    backgroundColor: theme.mode === 'dark' ? 'black' : "white"
  }}>
    {props.children}
    {props.showLoading && <View
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor:
          theme.mode === 'dark' ? colours.blackAlpha : colours.whiteAlpha,
        ...viewStyles.center,
      }}>
      <View
        style={{
          backgroundColor: theme.colors.background,
          padding: 10,
          borderRadius: 100,
          ...cardStyles.large,
        }}>
        <ActivityIndicator
          animating
          size={'large'}
        />
      </View>
    </View>}
  </View>
}

export default ContainerView
