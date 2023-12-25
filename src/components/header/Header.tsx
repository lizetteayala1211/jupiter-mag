import React from "react"
import { useIsXsSmallDevice } from "@/utils/hooks"
import { NavBar } from "../NavBar"
import { JupiterLogo } from "../JupiterLogo"
import {
  HeaderContainer,
  MenuButton,
  NavBarContainer,
  NotifyMeTextDesktop,
  NotifyMeTextMobile,
  LogoContainer,
} from "./styled"
import { NotifyMeGraphic } from "../NotifyMeGraphic"

export function Header() {
  const isMobile = useIsXsSmallDevice()
  return isMobile ? <MobileHeader /> : <DesktopHeader />
}

function DesktopHeader() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <JupiterLogo />
      </LogoContainer>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
      <NotifyMeTextDesktop>Notify me!</NotifyMeTextDesktop>
      <NotifyMeGraphic />
    </HeaderContainer>
  )
}

function MobileHeader() {
  const [openMenu, setOpenMenu] = React.useState(false)

  return (
    <HeaderContainer>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Magazine</p>
        <NotifyMeTextMobile>Notify me!</NotifyMeTextMobile>
      </div>
      <LogoContainer>
        <JupiterLogo />
      </LogoContainer>
      <MenuButton onClick={() => setOpenMenu(!openMenu)}>Menu</MenuButton>
      {openMenu && <NavBar />}
    </HeaderContainer>
  )
}
