import React from "react"
import { useBreakpoints } from "@/utils/hooks"
import { NavBar } from "./NavBar"
import { DesktopNavBarContainer } from "./styled"
import { MobileHeader } from "./Mobile"
import { DesktopHeader } from "./Desktop"

export function Header() {
  const { isMobile } = useBreakpoints()
  return isMobile ? <MobileHeader /> : <DesktopHeader />
}

export function DynamicHeader({ onClose }: { onClose: () => void }) {
  return (
    <DesktopNavBarContainer
      className="darker-grotesque"
      onMouseLeave={onClose}
      onScrollCapture={onClose}
    >
      <NavBar />
    </DesktopNavBarContainer>
  )
}
