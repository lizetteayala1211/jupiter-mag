"use client"

import React, { ReactNode } from "react"
import {
  BaseContainer,
  ChildrenSection,
  Gradient,
  HeaderSection,
  NotifyMeTextMobile,
} from "./styled"
import { DesktopGrain, MobileGrain } from "../GrainBackgrounds"
import { useIsXsSmallDevice } from "@/utils/hooks"
import { Header } from "../header"

type Props = { children: ReactNode }

export function Base({ children }: Props) {
  const isMobile = useIsXsSmallDevice()

  return (
    <div>
      {isMobile && <NotifyMeTextMobile>Notify me!</NotifyMeTextMobile>}

      <BaseContainer>
        <HeaderSection>
          <Header />
        </HeaderSection>
        <ChildrenSection>{children}</ChildrenSection>
      </BaseContainer>
      <BackgroundStyles />
    </div>
  )
}

function BackgroundStyles() {
  const isMobile = useIsXsSmallDevice()

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderLeft: isMobile ? `12px solid var(--color-dark-orange)` : "0",
      }}
    >
      <Gradient />
      {isMobile ? <MobileGrain /> : <DesktopGrain />}
    </div>
  )
}
