import React from "react";
import { FlatList } from "react-native";
import { Datum } from "../../../business/redux/services/AgentListResponse";
import { useGetAgentsListQuery } from "../../../business/redux/services/valorantApi";
import { getKeyExtractor } from "../../../business/utils/getKeyExtractor";
import { AppNavigationScreenProps } from "../../AppNavigation";
import NavigationConfig from "../../NavigationConfig";
import ContainerView from "../../common/ContainerView";
import AgentItem from "./components/AgentItem";


const HomeScreen: React.FC<AppNavigationScreenProps<'homeScreen'>> = ({
  navigation
}) => {

  const { data, error, isLoading, refetch, isFetching } = useGetAgentsListQuery(null)

  const renderAgents = ({ item, index }: { item: Datum; index: number }) => {
    const openDetails = () => {
      navigation?.push(NavigationConfig.DetailsScreen, {
        agent: item
      })
    }
    if (item.isPlayableCharacter)
      return <AgentItem agent={item}
        onPress={openDetails} />
    else return null
  }

  return <ContainerView showLoading={isLoading}>
    <FlatList keyExtractor={getKeyExtractor}
      numColumns={2}
      data={data?.data}
      renderItem={renderAgents} />
  </ContainerView>
}

export default HomeScreen
