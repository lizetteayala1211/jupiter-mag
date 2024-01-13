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
  NextFooter,
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
  const { isMobile } = useBreakpoints()

  const isCustomPositioning = isMobile && position

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
        <Cover>
          <TitleContainer
            style={
              isCustomPositioning ? { margin: position } : { padding: position }
            }
          >
            {svg}
          </TitleContainer>
        </Cover>
        <Article>
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
      <div onClick={() => setOpenMenu(!openMenu)}>
        <Puncture position={{ top: "-700px", left: "-18px" }} />
      </div>
    </StyledComponentsRegistry>
  )
}
