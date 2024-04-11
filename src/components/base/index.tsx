"use client"

import React, { ReactNode } from "react"
import {
  BaseContainer,
  ChildrenSection,
  Gradient,
  HeaderSection,
} from "./styled"
import { DesktopGrain, MobileGrain } from "../GrainBackgrounds"
import { useBreakpoints, useCurrentPage, useDisableScroll } from "@/utils/hooks"
import {
  Ticker,
  Footer,
  StyledComponentsRegistry,
  MenuButton,
} from "@/components"
import { MobileMenuOverlay } from "../header/Mobile"

type Props = { children: ReactNode; homePage?: boolean }

export function Base({ children, homePage }: Props) {
  const currentPage = useCurrentPage()
  const { isMobile } = useBreakpoints()

  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  // todo: can useCurrentPage be broken into a more useful hook with more reusable code?
  const isHomePage = currentPage === "home" || homePage!! || false

  useDisableScroll(showMobileMenu)

  // todo: home page and this base page need to be reconciled - too much overlap, this is not good code
  return (
    <StyledComponentsRegistry>
      <BaseContainer
        $homepage={isHomePage.toString()}
        className="darker-grotesque"
      >
        <HeaderSection>
          {showMobileMenu && (
            <MobileMenuOverlay onClose={() => setShowMobileMenu(false)} />
          )}
        </HeaderSection>

        {/* todo: need to consolidate all header components to be more readable :') */}
        <ChildrenSection>
          {isMobile ? (
            //todo: this menu button needs to be redesigned? maybe gotten rid of ? lol
            <div
              style={{
                position: "absolute",
                right: 8,
                top: 248,
                zIndex: 1,
              }}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <MenuButton />
            </div>
          ) : null}
          {children}
        </ChildrenSection>
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
