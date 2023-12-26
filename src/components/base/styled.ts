import { Z_ZERO, Z_ONE, Z_TWO, darkOrange, white } from "@/utils/constants"
import styled from "styled-components"

export const BaseContainer = styled.div`
  z-index: ${Z_ONE};
  width: 100%;
  height: 100%;
  position: absolute;
`

export const Gradient = styled.div`
  position: absolute;
  bottom: 0;
  z-index: ${Z_ZERO};
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
  z-index: ${Z_TWO};
  position: absolute;
  top: 2.3em;
`
