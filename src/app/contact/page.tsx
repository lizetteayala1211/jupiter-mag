"use client"

import Desktop from "./desktop"
import Mobile from "./mobile"
import { Base } from "@/components/base"
import { useIsMobile } from "@/utils/hooks"

export default function Contact() {
  const isMobile = useIsMobile()
  return <Base>{isMobile ? <Mobile /> : <Desktop />}</Base>
}
