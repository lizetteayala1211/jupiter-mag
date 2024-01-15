import { JupiterLogo, NotifyMeGraphic } from ".."
import { NavBar } from "./NavBar"
import {
  HeaderContainer,
  LogoContainer,
  DesktopNavBarContainer,
  NotifyMeTextDesktop,
} from "./styled"

export function DesktopHeader() {
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
