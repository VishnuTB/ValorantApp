import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export type AppModuleType =
  "LOGIN" |
  "HOME" |
  "ONBOARDING"

export interface AppModuleStateType {
  appState: AppModuleType
}

const initialState: AppModuleStateType = {
  appState: "HOME"
}


const appModuleSlicer = createSlice({
  name: "appModule",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<AppModuleType>) => {
      state.appState = action.payload
    }
  }
})

export const { setAppState, } = appModuleSlicer.actions

export default appModuleSlicer.reducer
