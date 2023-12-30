import {
  MenuModalBackground,
  MenuModalContainer,
  MobileNavItemsContainer,
  SolidBackground,
  ExitMenuModalButton,
} from "./styled"
import { NavBar } from "../NavBar"
import { XIcon } from "../XIcon"

export function MenuModal({ setOpenMenu }: { setOpenMenu: any }) {
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
          <ExitMenuModalButton onClick={() => setOpenMenu(false)}>
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
