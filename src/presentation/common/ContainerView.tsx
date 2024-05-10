import { useTheme } from "@rneui/themed";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";


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
  </View>
}

export default ContainerView
