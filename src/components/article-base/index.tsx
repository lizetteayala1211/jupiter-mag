"use client"

import React from "react"
import { StyledComponentsRegistry, MenuButton, Footer as BaseFooter } from ".."
import {
  Article,
  ArticleBaseContainer,
  Cover,
  Footer,
  TitleContainer,
  NextFooter,
  FooterTitle,
} from "./styled"
import { MobileMenuOverlay } from "../header/Mobile"
import { ArticleMetadata } from "@/utils/types"
import { useBreakpoints, useDisableScroll } from "@/utils/hooks"

export function ArticleBase({
  children,
  svg,
  position, // todo: fix this, rn it sets the position of the article title in the cover image
  next,
  issue,
  previous,
}: {
  children: React.ReactNode
  svg?: React.ReactNode
  next: ArticleMetadata
  previous?: ArticleMetadata
  position?: string
  issue: number
}) {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)
  const { isMobile } = useBreakpoints()

  const shouldPositionTitle = isMobile && position

  const handlePosition = () => {
    return shouldPositionTitle ? { margin: position } : { padding: position }
  }

  useDisableScroll(showMobileMenu)

  // todo: get rid of this hacky ass code
  const determineItalics = (title: string) => {
    if (title.includes("spill"))
      return (
        <>
          our Martinique, risen still, has yet and reasoned: <i>spill</i> / an
          entangled vignette of Julien Creuzet&apos;s gravitational refrain
        </>
      )
    return title
  }

  return (
    <StyledComponentsRegistry>
      {showMobileMenu ? (
        <MobileMenuOverlay onClose={() => setShowMobileMenu(false)} />
      ) : (
        <ArticleBaseContainer>
          <Cover $issue={issue}>
            {svg ? (
              <TitleContainer style={position ? handlePosition() : {}}>
                {svg}
              </TitleContainer>
            ) : null}
          </Cover>
          <Article>
            <div
              style={{
                position: "sticky",
                top: 0,
                display: "flex",
                justifyContent: "flex-end",
                padding: "1em",
              
              }}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <MenuButton />
            </div>

            {children}
          </Article>
          <Footer>
            <NextFooter>
              <a style={{ fontSize: "32px" }} href={next.link}>
                {next.author}
              </a>
              <FooterTitle href={next.link}>
                {determineItalics(next.title)}
              </FooterTitle>

              {previous ? (
                <div>
                  <a href={previous.link}>
                    Previous: {determineItalics(previous.title)},{" "}
                    {previous.author}{" "}
                  </a>
                  <br />
                  <a href="/">Return home</a>
                </div>
              ) : null}
            </NextFooter>
            <BaseFooter />
          </Footer>
        </ArticleBaseContainer>
      )}
    </StyledComponentsRegistry>
  )
}
