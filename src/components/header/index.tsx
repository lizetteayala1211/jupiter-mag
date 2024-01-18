import React from "react"
import { useBreakpoints } from "@/utils/hooks"
import { NavBar } from "./NavBar"
import { DynamicNavBarContainer } from "./styled"
import { MobileHeader } from "./Mobile"
import { DesktopHeader } from "./Desktop"

export function Header() {
  const { isMobile } = useBreakpoints()
  return isMobile ? <MobileHeader /> : <DesktopHeader />
}

export function DynamicHeader({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ width: "100%" }}>
      <DynamicNavBarContainer
        className="darker-grotesque"
        onScrollCapture={onClose}
      >
        <NavBar dynamic />
      </DynamicNavBarContainer>
    </div>
  )
}
