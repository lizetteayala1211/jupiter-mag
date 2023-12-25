"use client"

import React, { ReactNode } from "react"
import { BaseContainer, Gradient } from "./styled"
import { DesktopGrain, MobileGrain } from "../GrainBackgrounds"
import { useIsXsSmallDevice } from "@/utils/hooks"
import { Header } from "../header/Header"

type Props = { children: ReactNode }

export function Base({ children }: Props) {
  return (
    <>
      <BaseContainer>
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
