"use client"

import Link from "next/link"
import React from "react"
import { AppActionType, Pages } from "@/state/AppState"
import { useAppDispatch, useAppState } from "@/providers/AppStateProvider"
import { toTitleCase } from "../helpers/toTitleCase"
import { useIsXsSmallDevice } from "@/helpers/breakpoints"

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
  const appDispatch = useAppDispatch()

  const onNavSelect = (page: Pages) => {
    appDispatch({ type: AppActionType.SET_PAGE, value: page })
  }

  return (
    <>
      <NavBarItem page="home" onClick={() => onNavSelect("home")} />
      <NavBarItem page="program" onClick={() => onNavSelect("program")} />
      <NavBarItem page="about" onClick={() => onNavSelect("about")} />
      <NavBarItem page="donate" onClick={() => onNavSelect("donate")} />
      <NavBarItem page="contact" onClick={() => onNavSelect("contact")} />
    </>
  )
}

function NavBarItem({
  page,
  onClick,
}: {
  page: Pages
  onClick: (page: Pages) => void
}) {
  const { selectedPage } = useAppState()
  const [selected, setSelected] = React.useState(false)

  React.useEffect(() => {
    setSelected(selectedPage === page)
  }, [])

  return (
    <Link
      onClick={() => onClick(page)}
      style={{
        padding: "1em",
        // color: page === "about" ? "#FF7A00" : "white",
      }}
      href={page === "home" ? "./" : `/${page}`}
    >
      {toTitleCase(page)}
    </Link>
  )
}
