import React from "react"
import {
  MenuModalBackground,
  MenuModalContainer,
  MobileNavItemsContainer,
  SolidBackground,
  ExitMenuModalButton,
  HeaderContainer,
  LogoContainer,
  MenuButton,
} from "./styled"
import { NavBar } from "./NavBar"
import { XIcon } from "../XIcon"
import { JupiterLogo } from ".."

export function MobileHeader() {
  const [openMenu, setOpenMenu] = React.useState(false)

  return (
    <HeaderContainer>
      {openMenu && <MobileMenuOverlay onClose={setOpenMenu} />}

      <LogoContainer href="./">
        <JupiterLogo color="white" />
      </LogoContainer>
      <MenuButton onClick={() => setOpenMenu(!openMenu)}>
        <p>Menu</p>
      </MenuButton>
    </HeaderContainer>
  )
}

export function MobileMenuOverlay({ onClose }: { onClose: any }) {
  return (
    <>
      <MenuModalBackground />
      <SolidBackground />

      <MenuModalContainer>
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: "1em",
            width: "100%",
          }}
        >
          <ExitMenuModalButton onClick={() => onClose(false)}>
            <XIcon />
          </ExitMenuModalButton>
        </div>
        <MobileNavItemsContainer>
          <NavBar />
        </MobileNavItemsContainer>
      </MenuModalContainer>
    </>
  )
}
