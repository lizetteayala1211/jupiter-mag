import styled from "styled-components"

export const GradientTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

export const GradientLetterContainer = styled.div`
  position: absolute;
`

export const GradientLetter = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 600;

  // fallback background color
  background-color: #99ceff;
  font-size: 120px;
  // gradient
  background-image: conic-gradient(
    from 208deg at 75.28% 49.13%,
    #99ceff 0deg,
    rgba(35, 116, 191, 0.54) 360deg
  );

  // set the background size and repeat properties
  background-size: 100%;
  background-repeat: repeat;

  // use the text as a mask for the background.
  background-clip: text;

  // show the gradient as a text color rather than element bg.
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`
