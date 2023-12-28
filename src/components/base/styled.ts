import { Z_ONE, Z_THREE, darkOrange, white } from "@/utils/constants"
import styled from "styled-components"

export const BaseContainer = styled.div`
  display: grid;
  z-index: ${Z_ONE};
  max-height: 100vh;
  grid-template-areas:
    "header"
    "children";
  grid-template-rows: minmax(1fr) minmax(0, 5fr);
`

export const HeaderSection = styled.section`
  grid-area: header;
  z-index: ${Z_ONE};
`

export const ChildrenSection = styled.section`
  grid-area: children;
  z-index: ${Z_ONE};
`

export const Gradient = styled.div`
  bottom: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.8;
  background: linear-gradient(
      0deg,
      #fa7dfd 2.93%,
      rgba(157, 208, 252, 0.01) 23.98%
    ),
    linear-gradient(0deg, #94c8f9 5.44%, rgba(157, 208, 252, 0.02) 39.98%);

  filter: brightness(100%) saturate(40%);
`

export const NotifyMeTextMobile = styled.a`
  color: ${white};
  background-color: ${darkOrange};
  padding: 0 1.4em 0 1em;
  z-index: ${Z_THREE};
  position: absolute;
  top: 2.3em;
`
