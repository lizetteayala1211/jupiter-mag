import styled, { css } from "styled-components"

export const LottieContainer = styled.div<{ $loading: string; $color: string }>`
  width: 100%;
  height: 56.25vw;

  ${(props) =>
    props.$loading === "true"
      ? css`
          background-color: ${props.$color};
        `
      : "background-color: transparent;"}
`
