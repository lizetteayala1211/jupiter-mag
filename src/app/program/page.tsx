"use client"

import Desktop from "./desktop"
import Mobile from "./mobile"
import { Base } from "@/components"
import { useBreakpoints } from "@/utils/hooks"

export default function Programming() {
  const { isMobile } = useBreakpoints()
  return <Base>{isMobile ? <Mobile /> : <Desktop />}</Base>
}
