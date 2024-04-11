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
import { JupiterLogo, MenuButton as MenuButtonSVG } from ".."
import { useCurrentIssue } from "@/utils/hooks"

export function MobileHeader() {
  const [openMenu, setOpenMenu] = React.useState(false)

  return (
    <HeaderContainer>
      {openMenu && <MobileMenuOverlay onClose={() => setOpenMenu(false)} />}

      <LogoContainer href="./">
        <JupiterLogo color="white" />
      </LogoContainer>
      <MenuButton onClick={() => setOpenMenu(!openMenu)}>
        <MenuButtonSVG />
      </MenuButton>
    </HeaderContainer>
  )
}

export function MobileMenuOverlay({ onClose }: { onClose: () => void }) {
  const issue = useCurrentIssue()
  return (
    <>
      <MenuModalBackground $issue={issue} />
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
            zIndex: 10000,
          }}
        >
          <ExitMenuModalButton onClick={onClose}>
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
