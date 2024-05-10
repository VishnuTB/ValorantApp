import { Text } from "@rneui/themed";
import React from "react";
import { AppNavigationScreenProps } from "../../AppNavigation";
import ContainerView from "../../common/ContainerView";

const DetailsScreen: React.FC<AppNavigationScreenProps<'detailsScreen'>> = ({
  navigation,
  route
}) => {
  return (
    <ContainerView showLoading={true}>
      <Text>{route?.params.agent.displayName}</Text>
    </ContainerView>
  )
}

export default DetailsScreen
