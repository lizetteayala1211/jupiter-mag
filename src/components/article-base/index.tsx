"use client"

import React from "react"
import { AuthorDirectory, StyledComponentsRegistry } from ".."
import {
  Article,
  ArticleBaseContainer,
  ContentContainer,
  Cover,
  QuoteContainer,
} from "./styled"

export function ArticleBase({
  children,
  svg,
  position,
}: {
  children: React.ReactNode
  svg: React.ReactNode
  position: any
}) {
  const [openMenu, setOpenMenu] = React.useState(false)

  return (
    <StyledComponentsRegistry>
      <ArticleBaseContainer>
        <Cover style={position}>{svg}</Cover>
        <Article>
          {openMenu && <AuthorDirectory />}

          <div>{children}</div>
        </Article>
      </ArticleBaseContainer>
    </StyledComponentsRegistry>
  )
}

export function Quote({ children }: { children: string }) {
  return <QuoteContainer>{children}</QuoteContainer>
}

export function Content({ children }: { children: string }) {
  return <ContentContainer>{children}</ContentContainer>
}
