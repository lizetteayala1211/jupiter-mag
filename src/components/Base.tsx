"use client"

import React, { ReactNode } from "react"
import { NavBar } from "./NavBar"
import { BaseContainer, Gradient } from "./styled"
import { DesktopGrain, MobileGrain } from "./GrainBackgrounds"
import { useIsXsSmallDevice } from "@/helpers/breakpoints"

type Props = { children: ReactNode }

export function Base({ children }: Props) {
  const isMobile = useIsXsSmallDevice()

  return (
    <>
      <BaseContainer>
        <NavBar />
        {children}
      </BaseContainer>
      <Gradient />
      {isMobile ? <MobileGrain /> : <DesktopGrain />}
    </>
  )
}
