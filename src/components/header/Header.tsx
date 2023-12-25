import React from "react"
import { useIsXsSmallDevice } from "@/utils/hooks"
import { NavBar } from "../NavBar"
import { JupiterLogo } from "../JupiterLogo"
import {
  DesktopHeaderContainer,
  LogoContainer,
  NavBarContainer,
  NotifyMeText,
} from "./styled"
import { NotifyMeGraphic } from "../NotifyMeGraphic"

export function Header() {
  const isMobile = useIsXsSmallDevice()

  return isMobile ? <MobileHeader /> : <DesktopHeader />
}

function DesktopHeader() {
  return (
    <DesktopHeaderContainer>
      <LogoContainer>
        <JupiterLogo />
      </LogoContainer>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
      <NotifyMeText>Notify me!</NotifyMeText>
      <NotifyMeGraphic />
    </DesktopHeaderContainer>
  )
}

function MobileHeader() {
  const [openMenu, setOpenMenu] = React.useState(true)

  return (
    <>
      <JupiterLogo />
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
  )
}
