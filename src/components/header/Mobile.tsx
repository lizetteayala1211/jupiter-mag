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
import React from "react"
import { JupiterLogo } from ".."

export function MobileHeader() {
  const [openMenu, setOpenMenu] = React.useState(false)

  return (
    <HeaderContainer>
      {openMenu && <MobileMenuOverlay onClose={setOpenMenu} />}

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
