"use client"

import React from "react"
import { AuthorDirectory, StyledComponentsRegistry, Puncture, XIcon } from ".."
import {
  Article,
  ArticleBaseContainer,
  Cover,
  MenuContainer,
  Next,
} from "./styled"
import Link from "next/link"

export function ArticleBase({
  children,
  svg,
  position,
  next,
}: {
  children: React.ReactNode
  svg: React.ReactNode
  position: any
  next: { title: string; link: string }
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
      <Next>
        {next.title}
        <Link style={{ fontSize: "32px" }} href={next.link}>
          Next
        </Link>
      </Next>
      <div onClick={() => setOpenMenu(!openMenu)}>
        <Puncture position={{ top: "-700px", left: "-18px" }} />
      </div>
    </StyledComponentsRegistry>
  )
}
