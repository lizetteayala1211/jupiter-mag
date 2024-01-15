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
import { useBreakpoints } from "@/utils/hooks"
import { Header, Ticker, Footer, StyledComponentsRegistry } from "@/components"

type Props = { children: ReactNode; homePage?: boolean }

export function Base({ children, homePage }: Props) {
  const { isMobile } = useBreakpoints()

  return (
    <StyledComponentsRegistry>
      {isMobile && (
        <NotifyMeTextMobile className="darker-grotesque">
          Notify me!
        </NotifyMeTextMobile>
      )}

      <BaseContainer homepage={homePage} className="darker-grotesque">
        <HeaderSection>{!homePage && <Header />}</HeaderSection>
        <ChildrenSection>{children}</ChildrenSection>
        <Ticker />
        <Footer />
      </BaseContainer>
      {!homePage && <BackgroundStyles />}
    </StyledComponentsRegistry>
  )
}

function BackgroundStyles() {
  const { isMobile } = useBreakpoints()

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
