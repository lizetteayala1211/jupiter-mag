"use client"

import React, { ReactNode } from "react"
import { NavBar } from "./NavBar"
import { BaseContainer, BlueOverlay, Static } from "./styled"

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
  //  TODO: fix blue overlay
  return (
    <>
      <BlueOverlay />
      <Static />
      <BaseContainer>{children}</BaseContainer>
    </>
  )
}
