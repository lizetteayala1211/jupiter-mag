"use client"

import Link from "next/link"
import React from "react"
import { NavBarContainer } from "./styled"

export function NavBar() {
  return (
    <NavBarContainer>
      <Link href=".">Home</Link>
      <Link href="/programming">Programming</Link>
      <Link href="/about">About</Link>
      <Link href="/donate">Donate</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/privacy">Privacy Policy</Link>
    </NavBarContainer>
  )
}
