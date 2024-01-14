"use client"

import React from "react"
import {
  AuthorDirectory,
  StyledComponentsRegistry,
  Puncture,
  XIcon,
  MenuButton,
} from ".."
import {
  Article,
  ArticleBaseContainer,
  Cover,
  MenuContainer,
  Next,
  TitleContainer,
  NextFooter,
  ReturnHomeButton,
} from "./styled"
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
  position?: any
}) {
  const [openMenu, setOpenMenu] = React.useState(false)

  useDisableScroll(openMenu) // disable scroll if menu is open
  const { isMobile, isTablet, isMediumDesktop } = useBreakpoints()

  const shouldPositionTitle = isMobile && position
  const shouldShowPuncture = !isTablet && !openMenu
  return (
    <StyledComponentsRegistry>
      {openMenu ? (
        <MenuContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "1em 1em 0 0",
            }}
            onClick={() => setOpenMenu(false)}
          >
            <XIcon white />
          </div>
          <div>
            <AuthorDirectory />
          </div>
          <ReturnHomeButton href="/">return home</ReturnHomeButton>
        </MenuContainer>
      ) : null}

      <ArticleBaseContainer>
        <Cover>
          <TitleContainer
            style={
              shouldPositionTitle ? { margin: position } : { padding: position }
            }
          >
            {svg}
          </TitleContainer>
        </Cover>
        <Article>
          <div
            style={{
              top: 0,
              right: 0,
              padding: "2em",
              position: "absolute",
            }}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <MenuButton />
          </div>
          <div>{children}</div>
        </Article>
      </ArticleBaseContainer>
      <Next>
        <div>{next.title}</div>
        <NextFooter>
          <Link href={next.link}>Next</Link>
          <>{next.author}</>
        </NextFooter>
      </Next>
      {shouldShowPuncture ? (
        <Puncture
          position={isMediumDesktop ? { top: "-400px" } : { top: "-700px" }}
        />
      ) : null}
    </StyledComponentsRegistry>
  )
}
