import styled from "styled-components"

export const SharedGridMain = styled.div`
  display: grid;

  min-height: 100vh;
  @supports (min-height: 100dvh) {
    min-height: 100dvh;
  }
`
