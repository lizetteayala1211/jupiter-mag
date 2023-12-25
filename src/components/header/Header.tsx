import React from "react"
import { useIsXsSmallDevice } from "@/utils/hooks"
import { NavBar } from "../NavBar"
import { DesktopHeader } from "./DesktopHeader"

export function Header() {
  const [openMenu, setOpenMenu] = React.useState(true)
  const isMobile = useIsXsSmallDevice()

  return isMobile ? (
    <>
      {/* TODO: temporary mobile menu */}
      <a
        style={{
          margin: "1em",
          backgroundColor: "transparent",
          color: "white",
        }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        ≡
      </a>
      {openMenu && <NavBar />}
    </>
  ) : (
    <DesktopHeader />
  )
}
