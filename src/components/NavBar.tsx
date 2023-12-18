"use client"

import Link from "next/link"
import React from "react"
import { Pages } from "@/state/AppState"
// import { useAppState } from "@/providers/AppStateProvider"

export function NavBar() {
  return (
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
  // const { selectedPage } = useAppState()
  //todo: fix this
  const selectedPage = "home"
  const setColor = (page: Pages) =>
    selectedPage === page ? "#FE7801" : "white"

  return (
    <>
      <Link style={{ padding: "1em", color: setColor("home") }} href=".">
        Home
      </Link>
      <Link
        style={{ padding: "1em", color: setColor("program") }}
        href="/program"
      >
        Program
      </Link>
      <Link style={{ padding: "1em", color: setColor("about") }} href="/about">
        About
      </Link>
      <Link
        style={{ padding: "1em", color: setColor("donate") }}
        href="/donate"
      >
        Donate
      </Link>
      <Link
        style={{ padding: "1em", color: setColor("contact") }}
        href="/contact"
      >
        Contact
      </Link>
    </>
  )
}
