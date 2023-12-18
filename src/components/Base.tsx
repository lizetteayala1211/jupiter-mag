"use client"

import React, { ReactNode } from "react"
import { NavBar } from "./NavBar"
import { BaseContainer, ContentContainer, Gradient } from "./styled"
import { DesktopGrain, MobileGrain } from "./GrainBackgrounds"
import { useIsXsSmallDevice } from "@/helpers/breakpoints"

type Props = { children: ReactNode }
export function Base({ children }: Props) {
  return (
    <Background>
      <NavBar />
      <ContentContainer>{children}</ContentContainer>
    </Background>
  )
}

function Background({ children }: Props) {
  const isMobile = useIsXsSmallDevice()
  return (
    <>
      <BaseContainer>{children}</BaseContainer>
      <Gradient />
      {isMobile ? <MobileGrain /> : <DesktopGrain />}
    </>
  )
}
