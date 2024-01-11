import styled from "styled-components"

// shared grid base
export const SharedGridMain = styled.div`
  display: grid;

  min-height: 100vh;
  @supports (min-height: 100dvh) {
    min-height: 100dvh;
  }
`

// spacers with funny names
export const LittleGuy = styled.div`
  min-height: 1em;
  width: 100%;
`

export const MediumGuy = styled.div`
  min-height: 1.5em;
  width: 100%;
`

export const BigGuy = styled.div`
  min-height: 2em;
  width: 100%;
`

export const HugeGuy = styled.div`
  min-height: 4em;
  width: 100%;
`
