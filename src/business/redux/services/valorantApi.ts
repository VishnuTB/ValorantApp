

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AgentListResponse } from './AgentListResponse'

export const valorantApi = createApi({
  reducerPath: 'valorantApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://valorant-api.com/v1/' }),
  endpoints: (builder) => ({
    getAgentsList: builder.query<AgentListResponse, null>({
      query: () => `agents`,
    }),
    getAgentDetails: builder.query<any, string>({
      query: (agentUuid) => `agents/${agentUuid}`,
    }),
  }),
})

export const { useGetAgentsListQuery, useGetAgentDetailsQuery } = valorantApi
