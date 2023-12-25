import { screenMdMin } from "@/utils/constants"
import styled from "styled-components"

export const DesktopHeaderContainer = styled.div`
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
  width: 20%;
  margin-inline-start: 1em;
`

export const NotifyMeText = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  padding: 3em;
  background-color: transparent;
`
