"use client"

import React from "react"
import Desktop from "./desktop"
import Mobile from "./mobile"
import { Base } from "@/components/base"
import { useIsMobile } from "@/utils/hooks"

export default function About() {
  const isMobile = useIsMobile()
  return <Base>{isMobile ? <Mobile /> : <Desktop />}</Base>
}
