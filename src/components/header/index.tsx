import React from "react"
import { useBreakpoints } from "@/utils/hooks"
import { MobileHeader } from "./Mobile"
import { DesktopHeader } from "./Desktop"

export function Header() {
  const { isMobile } = useBreakpoints()
  return isMobile ? <MobileHeader /> : <DesktopHeader />
}
