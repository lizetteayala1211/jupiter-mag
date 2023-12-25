"use client"

import Link from "next/link"
import React from "react"
import { toTitleCase } from "../utils/helpers/toTitleCase"
import { useIsXsSmallDevice } from "@/utils/hooks/breakpoints"
import { Pages } from "@/utils/types"
import { useCurrentPage } from "@/utils/hooks"

export function NavBar() {
  const [openMenu, setOpenMenu] = React.useState(true)
  const isMobile = useIsXsSmallDevice()

  return isMobile ? (
    <>
      {/* TODO: temporary mobile menu */}
      <a
        style={{
          margin: "1em",
          backgroundColor: "transparent",
          color: "white",
        }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        ≡
      </a>
      {openMenu && <NavItems />}
    </>
  ) : (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          gap: "5em",
          backgroundColor: "#E0E9F426",
          borderRadius: "8px",
          padding: "0 4em",
          justifyContent: "center",
          marginTop: "3em",
        }}
      >
        <NavItems />
      </div>
    </div>
  )
}

function NavItems() {
  return (
    <>
      <NavBarItem page="home" />
      <NavBarItem page="program" />
      <NavBarItem page="about" />
      <NavBarItem page="donate" />
      <NavBarItem page="contact" />
    </>
  )
}

function NavBarItem({ page }: { page: Pages }) {
  const currentPage = useCurrentPage()

  return (
    <Link
      style={{
        padding: "1em",
        color: currentPage == page ? "#FF7A00" : "white",
      }}
      href={page === "home" ? "./" : `/${page}`}
    >
      {toTitleCase(page)}
    </Link>
  )
}
