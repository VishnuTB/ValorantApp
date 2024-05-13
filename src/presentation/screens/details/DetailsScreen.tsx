import { Text } from "@rneui/themed";
import React from "react";
import { useGetAgentDetailsQuery } from "../../../business/redux/services/valorantApi";
import { AppNavigationScreenProps } from "../../AppNavigation";
import ContainerView from "../../common/ContainerView";

const DetailsScreen: React.FC<AppNavigationScreenProps<'detailsScreen'>> = ({
  navigation,
  route
}) => {

  const { data, error, isLoading } = useGetAgentDetailsQuery(String(route?.params.agent.uuid))

  return (
    <ContainerView showLoading={isLoading}>
      <Text>{route?.params.agent.displayName}</Text>
      <Text>{JSON.stringify(data)}</Text>
    </ContainerView>
  )
}

export default DetailsScreen
