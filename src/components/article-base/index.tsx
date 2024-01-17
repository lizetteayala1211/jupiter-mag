"use client"

import React from "react"
import {
  StyledComponentsRegistry,
  Puncture,
  DynamicHeader,
  MenuButton,
} from ".."
import {
  Article,
  ArticleBaseContainer,
  Cover,
  Header,
  Next,
  TitleContainer,
  NextFooter,
  TriggerMenuContainer,
} from "./styled"
import { MobileMenuOverlay } from "../header/Mobile"
import Link from "next/link"
import { ArticleMetadata } from "@/utils/types"
import { useBreakpoints, useDisableScroll } from "@/utils/hooks"

export function ArticleBase({
  children,
  svg,
  position,
  next,
}: {
  children: React.ReactNode
  svg: React.ReactNode
  next: ArticleMetadata
  position?: string
}) {
  const [showHeader, setShowHeader] = React.useState(false)
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)
  const { isMobile, isTablet, isMediumDesktop } = useBreakpoints()

  const shouldPositionTitle = isMobile && position
  const shouldShowPuncture = !isTablet
  const shouldHaveDynamicHeader = showHeader && !isMobile

  // todo: dynamic menu is kind of broken and i'm tired so we're gonna time out the menu
  setTimeout(() => {
    setShowHeader(false)
  }, 5000)

  const handlePosition = () => {
    return shouldPositionTitle ? { margin: position } : { padding: position }
  }

  useDisableScroll(showMobileMenu)

  return (
    <StyledComponentsRegistry>
      {shouldHaveDynamicHeader ? (
        <Header>
          <DynamicHeader onClose={() => setShowHeader(false)} />
        </Header>
      ) : null}
      {showMobileMenu && <MobileMenuOverlay onClose={setShowMobileMenu} />}
      <TriggerMenuContainer onMouseOver={() => setShowHeader(true)} />
      <ArticleBaseContainer>
        <Cover>
          <TitleContainer style={handlePosition()}>{svg}</TitleContainer>
        </Cover>
        <Article>
          {isMobile ? (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <MenuButton />
            </div>
          ) : null}
          <div>{children}</div>
        </Article>
        <Next>
          <div>{next.title}</div>
          <NextFooter>
            <Link href={next.link}>Next</Link>
            <>{next.author}</>
          </NextFooter>
        </Next>
      </ArticleBaseContainer>
      {shouldShowPuncture ? (
        <Puncture
          position={isMediumDesktop ? { top: "-400px" } : { top: "-700px" }}
        />
      ) : null}
    </StyledComponentsRegistry>
  )
}
