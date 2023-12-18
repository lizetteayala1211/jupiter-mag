import { exhaustiveSwitchAssert } from "@/helpers/exhaustiveSwitchAssert"

export type Pages = "home" | "program" | "about" | "donate" | "contact"

export enum AppActionType {
  SET_PAGE = "SET_PAGE",
}
export type AppState = { selectedPage: Pages }
export type AppAction = { type: AppActionType.SET_PAGE; value: Pages }

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionType.SET_PAGE: {
      return { ...state, selectedPage: action.value }
    }
    default: {
      return exhaustiveSwitchAssert(action as never)
    }
  }
}
