"use client"

import React from "react"
import {
  StyledComponentsRegistry,
  DynamicHeader,
  MenuButton,
  Footer as BaseFooter,
} from ".."
import {
  Article,
  ArticleBaseContainer,
  Cover,
  Header,
  Footer,
  TitleContainer,
  NextFooter,
  TriggerMenuContainer,
  FooterTitle,
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
  const { isMobile } = useBreakpoints()

  const shouldPositionTitle = isMobile && position

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
                position: "sticky",
                top: 0,
                left: 0,
                padding: "1em",
                background:
                  "linear-gradient(180deg, rgba(232, 224, 222, 0.60) 0%, rgba(232, 224, 222, 0.00) 100%)",
              }}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <MenuButton />
            </div>
          ) : null}
          {children}
        </Article>
        <Footer>
          <NextFooter>
            <FooterTitle href={next.link}>{next.title}</FooterTitle>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                fontSize: isMobile ? "16px" : "32px",
                paddingTop: "16px",
              }}
            >
              <Link href={next.link}>Next</Link>
              <>{next.author}</>
            </div>
          </NextFooter>

          <BaseFooter />
        </Footer>
      </ArticleBaseContainer>
    </StyledComponentsRegistry>
  )
}
