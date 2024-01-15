"use client"

import Link from "next/link"
import React from "react"
import { toTitleCase } from "../../utils/helpers/toTitleCase"
import { Pages } from "@/utils/types"
import { useCurrentPage, useDisableScroll } from "@/utils/hooks"
import { XIcon, AuthorDirectory } from ".."
import { MenuContainer, ReturnHomeButton } from "./styled"

export function NavBar() {
  return (
    <>
      <NavBarItem page="about" />
      <MagazineNavItem />
      <NavBarItem page="program" />
      <NavBarItem page="donate" url="https://artadia.org/jupiter-magazine/" />
      <NavBarItem page="contact" />
    </>
  )
}

function NavBarItem({ page, url }: { page: Pages; url?: string }) {
  const currentPage = useCurrentPage()

  const handleColor = () => {
    if (currentPage.includes("magazine")) return "var(--color-black)"
    return currentPage == page
      ? "var(--color-light-orange)"
      : "var(--color-white)"
  }

  return (
    <Link
      style={{
        padding: "0.75em 1em",
        color: handleColor(),
      }}
      href={url ? url : `/${page}`}
    >
      {toTitleCase(page)}
    </Link>
  )
}

function MagazineNavItem() {
  const [openMenu, setOpenMenu] = React.useState(false)

  useDisableScroll(openMenu)
  const currentPage = useCurrentPage()

  return (
    <>
      {openMenu ? <AuthorMenu onClose={() => setOpenMenu(false)} /> : null}
      <div
        style={{
          padding: "0.75em 1em",
          color: currentPage.includes("magazine")
            ? "var(--color-light-orange)"
            : "var(--color-white)",
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
