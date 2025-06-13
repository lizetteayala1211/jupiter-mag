import { JupiterLogo } from ".."
import { NavBar } from "./NavBar"
import {
  HeaderContainer,
  LogoContainer,
  DesktopNavBarContainer,
} from "./styled"

export function DesktopHeader() {
  return (
    <HeaderContainer>
      <LogoContainer href=".">
        <JupiterLogo color="white" />
      </LogoContainer>
      {/* <DesktopNavBarContainer>
        <NavBar />
      </DesktopNavBarContainer> */}
      <div style={{ width: "200px" }} />
    </HeaderContainer>
  )
}
