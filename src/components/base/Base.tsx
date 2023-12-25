"use client"

import React, { ReactNode } from "react"
import { BaseContainer, Gradient } from "./styled"
import { DesktopGrain, MobileGrain } from "../GrainBackgrounds"
import { useIsXsSmallDevice } from "@/utils/hooks"
import { Header } from "../header/Header"
import { darkOrange } from "@/utils/constants"

type Props = { children: ReactNode }

export function Base({ children }: Props) {
  const isMobile = useIsXsSmallDevice()

  return (
    <>
      <BaseContainer
        style={
          isMobile
            ? { borderLeft: `12px solid ${darkOrange}`, paddingLeft: "12px" }
            : {}
        }
      >
        <Header />
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
