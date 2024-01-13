"use client"

import React from "react"
import { AuthorDirectory, StyledComponentsRegistry, Puncture, XIcon } from ".."
import {
  Article,
  ArticleBaseContainer,
  Cover,
  MenuContainer,
  Next,
  TitleContainer,
} from "./styled"
import Link from "next/link"
import { ArticleMetadata } from "@/utils/types"
import { useDisableScroll } from "@/utils/hooks"

export function ArticleBase({
  children,
  svg,
  position,
  next,
}: {
  children: React.ReactNode
  svg: React.ReactNode
  position?: any
  next: ArticleMetadata
}) {
  const [openMenu, setOpenMenu] = React.useState(false)

  useDisableScroll(openMenu) // disable scroll if menu is open

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
          <TitleContainer>{svg}</TitleContainer>
        </Cover>
        <Article>
          <div>{children}</div>
        </Article>
      </ArticleBaseContainer>
      <Next>
        <div>{next.title}</div>S
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 24px",
          }}
        >
          <Link style={{ fontSize: "32px" }} href={next.link}>
            Next
          </Link>
          <p style={{ fontSize: "32px" }}>{next.author}</p>
        </div>
      </Next>
      <div onClick={() => setOpenMenu(!openMenu)}>
        <Puncture position={{ top: "-700px", left: "-18px" }} />
      </div>
    </StyledComponentsRegistry>
  )
}
