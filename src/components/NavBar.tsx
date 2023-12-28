"use client"

import Link from "next/link"
import React from "react"
import { toTitleCase } from "../utils/helpers/toTitleCase"
import { Pages } from "@/utils/types"
import { useCurrentPage } from "@/utils/hooks"

export function NavBar() {
  return (
    <>
      <NavBarItem page="about" />
      <NavBarItem page="magazine" />
      <NavBarItem page="program" />
      <NavBarItem page="donate" url="https://artadia.org/jupiter-magazine/" />
      <NavBarItem page="contact" />
    </>
  )
}

function NavBarItem({ page, url }: { page: Pages; url?: string }) {
  const currentPage = useCurrentPage()

  return (
    <Link
      style={{
        padding: "0.75em 1em",
        color:
          currentPage == page
            ? "var(--color-light-orange)"
            : "var(--color-white)",
      }}
      href={url ? url : `/${page}`}
    >
      {toTitleCase(page)}
    </Link>
  )
}
