"use client"

import React, { ReactNode } from "react"
import { NavBar } from "./NavBar"
import { BaseContainer, Gradient } from "./styled"
import { DesktopGrain, MobileGrain } from "./GrainBackgrounds"
import { useIsXsSmallDevice } from "@/helpers/breakpoints"
import { AppStateProvider } from "@/providers/AppStateProvider"
import { Pages } from "@/state/AppState"

type Props = { children: ReactNode; page: Pages }

export function Base({ children, page }: Props) {
  return (
    <AppStateProvider>
      <BaseContainer>
        <NavBar />
        {children}
      </BaseContainer>

      <BackgroundStyles />
    </AppStateProvider>
  )
}

function BackgroundStyles() {
  const isMobile = useIsXsSmallDevice()

  return (
    <>
      <Gradient />
      {isMobile ? <MobileGrain /> : <DesktopGrain />}
    </>
  )
}
