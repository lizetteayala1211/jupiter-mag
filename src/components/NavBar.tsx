"use client"

import Link from "next/link"
import React from "react"
import { toTitleCase } from "../utils/helpers/toTitleCase"
import { Pages } from "@/utils/types"
import { useCurrentPage } from "@/utils/hooks"

export function NavBar() {
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
        padding: "0.75em 1em",
        color: currentPage == page ? "#FF7A00" : "white",
      }}
      href={page === "home" ? "./" : `/${page}`}
    >
      {toTitleCase(page)}
    </Link>
  )
}
