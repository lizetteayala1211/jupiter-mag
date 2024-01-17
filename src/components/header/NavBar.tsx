"use client"

import React from "react"
import { toTitleCase } from "../../utils/helpers/toTitleCase"
import { Pages } from "@/utils/types"
import { useCurrentPage, useDisableScroll } from "@/utils/hooks"
import { XIcon, AuthorDirectory } from ".."
import { MenuContainer, ReturnHomeButton, StyledNavBarItem } from "./styled"

export function NavBar({ dynamic }: { dynamic?: boolean }) {
  return (
    <>
      <NavBarItem dynamic={dynamic || false} page="about" />
      <MagazineNavItem dynamic={dynamic || false} />
      <NavBarItem
        dynamic={dynamic || false}
        page="donate"
        url="https://artadia.org/jupiter-magazine/"
      />
      <NavBarItem dynamic={dynamic || false} page="contact" />
    </>
  )
}

function NavBarItem({
  page,
  url,
  dynamic,
}: {
  page: Pages
  dynamic: boolean
  url?: string
}) {
  const currentPage = useCurrentPage()

  const handleColor = () => {
    if (dynamic || currentPage.includes("magazine"))
      return "var(--color-off-black)"
    return currentPage == page
      ? "var(--color-light-orange)"
      : "var(--color-white)"
  }

  return (
    <StyledNavBarItem
      style={{ color: handleColor() }}
      href={url ? url : `/${page}`}
    >
      {toTitleCase(page)}
    </StyledNavBarItem>
  )
}

// todo: consolidate nav items into one component
function MagazineNavItem({ dynamic }: { dynamic: boolean }) {
  const [openMenu, setOpenMenu] = React.useState(false)

  useDisableScroll(openMenu)
  const currentPage = useCurrentPage()

  const handleColor = () => {
    if (dynamic) return "var(--color-off-black)"
    return currentPage.includes("magazine")
      ? "var(--color-light-orange)"
      : "var(--color-white)"
  }

  return (
    <>
      {openMenu ? <AuthorMenu onClose={() => setOpenMenu(false)} /> : null}
      <div
        style={{
          padding: "0.75em 1em",
          color: handleColor(),
        }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        Magazine
      </div>
    </>
  )
}

function AuthorMenu({ onClose }: { onClose: () => void }) {
  return (
    <MenuContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "1em 1em 0 0",
        }}
        onClick={() => onClose}
      >
        <XIcon white />
      </div>
      <div>
        <AuthorDirectory />
      </div>
      <ReturnHomeButton href="/">return home</ReturnHomeButton>
    </MenuContainer>
  )
}
