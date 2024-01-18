"use client"

import React, { ReactNode } from "react"
import {
  BaseContainer,
  ChildrenSection,
  Gradient,
  HeaderSection,
  TriggerMenuContainer,
} from "./styled"
import { DesktopGrain, MobileGrain } from "../GrainBackgrounds"
import { useBreakpoints, useCurrentPage } from "@/utils/hooks"
import {
  Header,
  Ticker,
  Footer,
  StyledComponentsRegistry,
  DynamicHeader,
} from "@/components"

type Props = { children: ReactNode }

export function Base({ children }: Props) {
  const currentPage = useCurrentPage()
  const [showHeader, setShowHeader] = React.useState(false)

  const isHomePage = currentPage === "home"

  const shouldBeDynamicHeader = showHeader || !isHomePage
  const DecideHeader = () => {
    return isHomePage ? (
      <DynamicHeader onClose={() => setShowHeader(false)} />
    ) : (
      <Header />
    )
  }

  // todo: dynamic menu is kind of broken and i'm tired so we're gonna time out the menu
  setTimeout(() => {
    setShowHeader(false)
  }, 5000)

  return (
    <StyledComponentsRegistry>
      <BaseContainer
        $homepage={isHomePage.toString()}
        className="darker-grotesque"
      >
        <HeaderSection>
          {shouldBeDynamicHeader ? (
            <DecideHeader />
          ) : (
            <TriggerMenuContainer onMouseOver={() => setShowHeader(true)} />
          )}
        </HeaderSection>
        <ChildrenSection>{children}</ChildrenSection>
        <Ticker />
        <Footer />
      </BaseContainer>
      {!isHomePage && <BackgroundStyles />}
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
        borderLeft: isMobile ? `12px solid var(--color-article-purple)` : "0",
      }}
    >
      <Gradient />
      {isMobile ? <MobileGrain /> : <DesktopGrain />}
    </div>
  )
}
