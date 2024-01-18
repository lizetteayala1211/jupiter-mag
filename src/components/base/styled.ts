import styled from "styled-components"

export const BaseContainer = styled.div<{ $homepage: string }>`
  display: grid;
  z-index: var(--z-index-zero);
  max-height: 100vh;
  width: 100%;
  background-color: ${(props) =>
    props.$homepage === "true"
      ? ` var(--color-article-purple)`
      : `var(--color-black)`};

  grid-template-areas:
    "header"
    "children";
  grid-template-rows: minmax(1fr) minmax(0, 5fr);
`

export const HeaderSection = styled.section`
  grid-area: header;
  z-index: var(--z-index-four);
`

export const ChildrenSection = styled.section`
  grid-area: children;
  z-index: var(--z-index-three);
`
export const LottieContainer = styled.div`
  width: 100%;
  z-index: 999;
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
  color: var(--color-white);
  background-color: var(--color-dark-orange);
  padding: 0 1.4em 0.2em 1em;
  z-index: var(--z-index-three);
  position: absolute;
  top: 2.3em;
  font-weight: 700;
`
export const TriggerMenuContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 20%;
  z-index: var(--z-index-six);
`
