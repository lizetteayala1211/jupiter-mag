"use client"

import Link from "next/link"
import React from "react"
import { NavBarContainer } from "./styled"

export function NavBar() {
  return (
    <NavBarContainer>
      <Link href=".">Home</Link>
      <Link href="/program">Program</Link>
      <Link href="/about">About</Link>
      <Link href="/donate">Donate</Link>
      <Link href="/contact">Contact</Link>
    </NavBarContainer>
  )
}
