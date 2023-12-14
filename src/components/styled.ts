import styled from "styled-components"

export const BaseContainer = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  position: absolute;
`

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: var(--font-body-weight);
  z-index: 10;
`

export const Gradient = styled.div`
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.8;
  background: linear-gradient(
      0deg,
      #fa7dfd 12.93%,
      rgba(157, 208, 252, 0.01) 33.98%
    ),
    linear-gradient(0deg, #94c8f9 5.44%, rgba(157, 208, 252, 0.01) 39.98%);
  filter: brightness(30%);
`

export const GradientLetterContainer = styled.div``

export const GradientLetter = styled.div`
  // fallback background color
  background-color: #99ceff;

  // gradient
  background-image: conic-gradient(
    from 208deg at 75.28% 49.13%,
    #99ceff 0deg,
    rgba(97, 179, 255, 0.54) 360deg
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
