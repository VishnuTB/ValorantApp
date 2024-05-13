import { Image, ScreenHeight, ScreenWidth } from "@rneui/base";
import { Text, useTheme } from "@rneui/themed";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Datum } from "../../../../business/redux/services/AgentListResponse";
import { cardStyles, spacing, viewStyles } from "../../../../common/styles";
import { activeOpacityDefault } from "../../../common/constants";

interface AgentItemProps {
  agent: Datum,
  onPress: () => void
}

const AgentItem: React.FC<AgentItemProps> = ({ agent, onPress }) => {
  const { theme } = useTheme()
  return (
    <TouchableOpacity activeOpacity={activeOpacityDefault}
      onPress={onPress}
      style={{
        width: ScreenWidth / 2,
        minHeight: ScreenHeight / 3,
        padding: ScreenWidth / 25
      }}>
      <LinearGradient colors={
        [
          // ...agent.backgroundGradientColors.map((color: string) => `#${color}`)
          `#${agent.backgroundGradientColors[0]}`,
          `#${agent.backgroundGradientColors[3]}`
        ]} style={{
          padding: 10,
          ...cardStyles.large,
          borderRadius: 10,
          flex: 1,
        }}>
        <View>
          <Image style={{
            height: ScreenWidth / 4,
            width: ScreenWidth / 3,
            borderRadius: ScreenWidth / 2,
            borderWidth: 1,
            borderColor: agent.backgroundGradientColors[1],
          }} source={{ uri: agent.displayIcon }} />
        </View>
        <View style={{
          flex: 1,
          padding: 10
        }}>
          <Text h4>{agent.displayName}</Text>
          <Text numberOfLines={3} ellipsizeMode="tail">{agent.description}</Text>
          <View style={{
            marginTop: spacing.medium,
            ...viewStyles.rowCenter
          }}>
            <Image source={{ uri: agent.role?.displayIcon }} style={{
              height: 15,
              width: 15,
              borderRadius: 10,
              borderWidth: 1,
              marginEnd: spacing.medium
            }} />
            <Text>{agent.role?.displayName}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}
export default AgentItem
