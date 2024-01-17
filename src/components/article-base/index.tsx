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
  position?: string
}) {
  const [showHeader, setShowHeader] = React.useState(false)
  const { isMobile, isTablet, isMediumDesktop } = useBreakpoints()

  const shouldPositionTitle = isMobile && position
  const shouldShowPuncture = !isTablet

  // todo: dynamic menu is kind of broken and i'm tired so we're gonna time out the menu
  setTimeout(() => {
    setShowHeader(false)
  }, 5000)

  const handlePosition = () => {
    return shouldPositionTitle ? { margin: position } : { padding: position }
  }

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
          <TitleContainer style={handlePosition()}>{svg}</TitleContainer>
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
