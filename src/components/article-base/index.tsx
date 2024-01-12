"use client"

import React from "react"
import { AuthorDirectory, StyledComponentsRegistry } from ".."
import { Article, ArticleBaseContainer, Cover } from "./styled"

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
