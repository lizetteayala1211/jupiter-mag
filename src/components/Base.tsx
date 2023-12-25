"use client"

import React, { ReactNode } from "react"
import { NavBar } from "./NavBar"
import { BaseContainer, Gradient } from "./styled"
import { DesktopGrain, MobileGrain } from "./GrainBackgrounds"
import { useIsXsSmallDevice } from "@/utils/hooks"

type Props = { children: ReactNode }

export function Base({ children }: Props) {
  return (
    <>
      <BaseContainer>
        <NavBar />
        {children}
      </BaseContainer>

      <BackgroundStyles />
    </>
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
