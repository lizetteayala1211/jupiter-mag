import React from "react"
import { AppAction, appReducer, AppState } from "@/state/AppState"

type AppStateContextValue = [AppState, React.Dispatch<AppAction>]
const AppStateContext = React.createContext<AppStateContextValue>(null!)

type Props = {
  children: React.ReactNode
}

export function AppStateProvider({ children }: Props) {
  const [state, dispatch] = React.useReducer(appReducer, {
    selectedPage: "home",
  })

  return (
    <AppStateContext.Provider value={[state, dispatch]}>
      {children}
    </AppStateContext.Provider>
  )
}

export function useAppState() {
  const context = React.useContext(AppStateContext)
  if (!context) {
    throw new Error("useAppState must be used within a AppStateProvider")
  }
  const [state] = context
  return state
}

export function useAppDispatch() {
  const context = React.useContext(AppStateContext)
  if (!context) {
    throw new Error("useAppDispatch must be used within a AppStateProvider")
  }
  const [, dispatch] = context
  return dispatch
}
