"use client"

import React, { ReactNode } from "react"
import {
  BaseContainer,
  ChildrenSection,
  Gradient,
  HeaderSection,
  LottieContainer,
  TriggerMenuContainer,
} from "./styled"
import { DesktopGrain, MobileGrain } from "../GrainBackgrounds"
import { useBreakpoints, useCurrentPage, useDisableScroll } from "@/utils/hooks"
import {
  Header as StaticHeader,
  Ticker,
  Footer,
  StyledComponentsRegistry,
  DynamicHeader,
  JupiterLogo,
  MenuButton,
} from "@/components"
import { MobileMenuOverlay } from "../header/Mobile"
import { JupiterAnimation } from "../../app/issue/1/JupiterAnimation"
import Link from "next/link"

type Props = { children: ReactNode }

export function Base({ children }: Props) {
  const currentPage = useCurrentPage()
  const { isMobile } = useBreakpoints()

  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  // todo: can useCurrentPage be broken into a more useful hook with more reusable code?
  const isHomePage = currentPage === "home"
  const isAboutOrContactPage =
    currentPage === "about" || currentPage === "contact"

  const shouldBeStatic = isAboutOrContactPage || (isMobile && !isHomePage)
  const shouldBeDynamic = !isMobile && !isAboutOrContactPage

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
          {/* todo: move dynamic header mechanism to components foldre */}
          {shouldBeStatic ? <StaticHeader /> : null}
          {shouldBeDynamic ? <DynamicHeaderMechanism /> : null}
        </HeaderSection>

        {/* todo: need to consolidate all header components to be more readable :') */}
        <ChildrenSection>
          {isHomePage && (
            <LottieContainer>
              <JupiterAnimation />
            </LottieContainer>
          )}

          {isMobile && isHomePage ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "1em",
              }}
            >
              <Link style={{ width: "50%" }} href="./">
                <JupiterLogo color="white" />
              </Link>

              <div
                style={{ zIndex: 99999 }}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <MenuButton />
              </div>
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

function DynamicHeaderMechanism() {
  const [showHeader, setShowHeader] = React.useState(false)
  // todo: dynamic menu is kind of broken and i'm tired so we're gonna time out the menu
  setTimeout(() => {
    setShowHeader(false)
  }, 5000)

  return showHeader ? (
    <DynamicHeader onClose={() => setShowHeader(false)} />
  ) : (
    <TriggerMenuContainer onMouseOver={() => setShowHeader(true)} />
  )
}
