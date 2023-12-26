import React from "react"
import { useIsXsSmallDevice } from "@/utils/hooks"
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
  const isMobile = useIsXsSmallDevice()
  return isMobile ? <MobileHeader /> : <DesktopHeader />
}

function DesktopHeader() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <JupiterLogo />
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0.5em",
        }}
      >
        <p>Magazine</p>
      </div>
      <LogoContainer>
        <JupiterLogo />
      </LogoContainer>
      <MenuButton onClick={() => setOpenMenu(!openMenu)}>Menu</MenuButton>
      {openMenu && <MenuModal setOpenMenu={setOpenMenu} />}
    </HeaderContainer>
  )
}
