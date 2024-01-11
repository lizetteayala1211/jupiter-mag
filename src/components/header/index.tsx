import React from "react"
import { useIsMobile } from "@/utils/hooks"
import { NavBar } from "../NavBar"
import { JupiterLogo } from "../JupiterLogo"
import {
  HeaderContainer,
  MenuButton,
  DesktopNavBarContainer,
  NotifyMeTextDesktop,
  LogoContainer,
} from "./styled"
import { NotifyMeGraphic } from "../NotifyMeGraphic"
import { MenuModal } from "./MenuModal"

export function Header() {
  const isMobile = useIsMobile()
  return isMobile ? <MobileHeader /> : <DesktopHeader />
}

function DesktopHeader() {
  return (
    <HeaderContainer>
      <LogoContainer href=".">
        <JupiterLogo color="white" />
      </LogoContainer>
      <DesktopNavBarContainer>
        <NavBar />
      </DesktopNavBarContainer>
      <NotifyMeTextDesktop>Notify me!</NotifyMeTextDesktop>
      <NotifyMeGraphic />
    </HeaderContainer>
  )
}

function MobileHeader() {
  const [openMenu, setOpenMenu] = React.useState(false)

  return (
    <HeaderContainer>
      {openMenu && <MenuModal setOpenMenu={setOpenMenu} />}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0.5em",
        }}
      >
        <p style={{ fontWeight: 500 }}>Magazine</p>
      </div>
      <LogoContainer href="./">
        <JupiterLogo color="white" />
      </LogoContainer>
      <MenuButton onClick={() => setOpenMenu(!openMenu)}>Menu</MenuButton>
    </HeaderContainer>
  )
}
