"use client"

import React from "react"
import { AuthorDirectory, StyledComponentsRegistry, Puncture, XIcon } from ".."
import { Article, ArticleBaseContainer, Cover, MenuContainer } from "./styled"

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
          <AuthorDirectory />
        </MenuContainer>
      ) : null}

      <ArticleBaseContainer>
        <Cover style={position}>
          <div style={{ transform: "scale(0.9)" }}>{svg}</div>
        </Cover>
        <Article>
          <div>{children}</div>
        </Article>
      </ArticleBaseContainer>
      <div onClick={() => setOpenMenu(!openMenu)}>
        <Puncture position={{ top: "-700px", left: "-18px" }} />
      </div>
    </StyledComponentsRegistry>
  )
}
