import styled from "styled-components"

export const LottieContainer = styled.div<{ $loading: string }>`
  width: 100%;
  height: 56.25vw;

  ${(props) =>
    props.$loading === "true"
      ? "background-color: #0b1229;"
      : "background-color: transparent;"}
`
