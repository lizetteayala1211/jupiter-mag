"use client"

import React, { ReactNode } from "react"
import { NavBar } from "./NavBar"
import { BaseContainer, Gradient } from "./styled"
import { DesktopGrain, MobileGrain } from "./Grain"
import { useIsXsSmallDevice } from "@/helpers/breakpoints"

type Props = { children: ReactNode }
export function Base({ children }: Props) {
  return (
    <Background>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
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
