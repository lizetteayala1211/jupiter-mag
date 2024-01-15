"use client"

import React from "react"
import { StyledComponentsRegistry, Puncture, DynamicHeader } from ".."
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
import Link from "next/link"
import { ArticleMetadata } from "@/utils/types"
import { useBreakpoints } from "@/utils/hooks"

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
  const [showHeader, setShowHeader] = React.useState(false)
  const { isMobile, isTablet, isMediumDesktop } = useBreakpoints()

  const shouldPositionTitle = isMobile && position
  const shouldShowPuncture = !isTablet

  // todo: dynamic menu is kind of broken and i'm tired so we're gonna time out the menu
  setTimeout(() => {
    setShowHeader(false)
  }, 5000)

  return (
    <StyledComponentsRegistry>
      <TriggerMenuContainer onMouseOver={() => setShowHeader(true)} />
      <ArticleBaseContainer>
        {showHeader ? (
          <Header>
            <DynamicHeader onClose={() => setShowHeader(false)} />
          </Header>
        ) : null}
        <Cover>
          <TitleContainer
            style={
              shouldPositionTitle ? { margin: position } : { padding: position }
            }
          >
            {svg}
          </TitleContainer>
        </Cover>
        <Article>{children}</Article>
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
