import { darkOrange, screenLgMin, white } from "@/utils/constants"
import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const NavBarContainer = styled.div`
  display: flex;
  gap: 3em;
  background-color: #e0e9f426;
  border-radius: 8px;
  justify-content: center;
`

export const LogoContainer = styled.div`
  @media (min-width: ${screenLgMin}) {
    width: 15%;
    margin: 1em;
  }

  width: 30%;
  margin-inline-start: 1em;
`

export const NotifyMeTextDesktop = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  padding: 3em;
`

export const NotifyMeTextMobile = styled.a`
  color: ${white};
  border: 1px solid ${darkOrange};
  background-color: ${darkOrange};

  margin-top: 4px;
  padding-inline-start: 1em;
  padding-inline-end: 1em;
  margin-inline-end: -1em;
  margin-inline-start: -1em;
`

export const MenuButton = styled.a`
  margin: 1em;
  background-color: transparent;
  color: white;
`
