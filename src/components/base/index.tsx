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
import { useIsMobile } from "@/utils/hooks"
import { Header } from "../header"
import StyledComponentsRegistry from "./StyledComponentsRegistry"
import { Footer } from "../footer"
import { Ticker } from "../ticker"

type Props = { children: ReactNode; noHeader?: boolean }

export function Base({ children, noHeader }: Props) {
  const isMobile = useIsMobile()

  return (
    <StyledComponentsRegistry>
      {isMobile && <NotifyMeTextMobile>Notify me!</NotifyMeTextMobile>}

      <BaseContainer>
        <HeaderSection>{!noHeader && <Header />}</HeaderSection>
        <ChildrenSection>{children}</ChildrenSection>
        <Ticker />
        <Footer />
      </BaseContainer>
      <BackgroundStyles />
    </StyledComponentsRegistry>
  )
}

function BackgroundStyles() {
  const isMobile = useIsMobile()

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
