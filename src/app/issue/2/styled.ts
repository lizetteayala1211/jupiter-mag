import {
  screenLgMin,
  screenMdMin,
  screenXlMin,
  screenXsMin,
} from "@/utils/constants"
import { SharedGridMain } from "@/utils/layout"
import Link from "next/link"
import styled from "styled-components"

// grid
export const Main = styled(SharedGridMain)`
  grid-template-columns: 1fr 1fr 3fr;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-template-areas:
    "lottie lottie lottie"
    "logo logo logo"
    "editorsNoteTitle editorsNoteTitle editorsNote"
    "floatingMenu signatures editorsNote"
    "floatingMenu content content";
  font-family: "Alverata Light";
  p {
    font-size: 14px;
  }

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 29.49%, #000000 100%),
    radial-gradient(
        80.23% 5.14% at 80.23% 5.72%,
        rgba(0, 21, 52, 0) 27.1%,
        #040e21 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    #040921;
`

export const LottieSection = styled.section`
  grid-area: lottie;
  position: relative;
`

export const LogoSection = styled.section`
  grid-area: logo;
  position: relative;
  padding-inline-start: 64px;
  padding-block-start: 24px;
`

export const EditorsNoteTitleSection = styled.section`
  grid-area: editorsNoteTitle;
  position: relative;
  font-size: 64px;
  line-height: 64px;
  padding-inline-start: 64px;
  margin-block-start: 56px;
`

export const EditorsNoteSection = styled.section`
  grid-area: editorsNote;
  position: relative;

  display: flex;
  align-items: center;

  @media only screen and (min-width: ${screenMdMin}) {
    max-width: 502px;
    margin-inline-start: 16px;
    margin-inline-end: 64px;
    margin-block-start: 56px;
  }
`

export const ContentSection = styled.section`
  grid-area: content;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FloatingMenuSection = styled.section`
  grid-area: floatingMenu;
  margin-inline-start: 64px;
`

export const SignaturesSection = styled.section`
  grid-area: signatures;
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  flex-direction: column;
`

export const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${screenMdMin}) {
    align-items: flex-start;
    flex-direction: row;
  }
`

export const AuthorPhoto = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 2em;
  height: 100%;
  @media only screen and (min-width: ${screenMdMin}) {
    width: 50%;
  }
`

export const AuthorTextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 90%;

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    padding-inline-start: 2em;
    max-width: 550px;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    padding-inline-start: 4em;
    max-width: 730px;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    padding-inline-start: 8em;
    max-width: 920px;
  }
`

export const AuthorTitle = styled.div`
  font-family: "Alverata Medium";
  font-size: 18px;
  margin-bottom: var(--padding-header);

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    font-family: "Alverata Light";
    font-size: 16px;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    font-size: 24px;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    font-size: 36px;
  }
`
export const AuthorBody = styled.div`
  font-family: "Alverata Light";
  font-size: 16px;

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    font-size: 12px;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    font-size: 16px;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    font-size: 20px;
  }
`
export const CreditsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 8px;
  font-style: italic;
  padding-bottom: 12em;

  p {
    /* smaller desktops */
    @media only screen and (min-width: ${screenMdMin}) {
      font-size: 10px;
      max-width: 500px;
    }

    /* wide desktops */
    @media only screen and (min-width: ${screenLgMin}) {
      font-size: 14px;
      max-width: 550px;
    }

    /* extra wide desktops */
    @media only screen and (min-width: ${screenXlMin}) {
      font-size: 16px;
      max-width: 600px;
    }
  }
`

export const AuthorAboutsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4em;
`

export const StyledAuthorLink = styled(Link)<{ $homepage: string }>`
  font-family: "Alverata Medium";
  text-transform: uppercase;
  font-size: 32px;
  text-align: center;
  margin: 16px;
  line-height: 32px;
  ${(props) =>
    props.$homepage === "true" &&
    `color: var(--color-transparent-white);

    &:hover {
      color: var(--color-white);
    }`}

  &:hover {
    text-shadow: 0px 0px 19.1px #96649b;
  }
`

export const AuthorText = styled.h3`
  /* larger phones  */
  @media only screen and (min-width: ${screenXsMin}) {
  }

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
  }
`

export const TitleText = styled.h1`
  /* larger phones  */
  @media only screen and (min-width: ${screenXsMin}) {
  }

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    font-size: 84px;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
  }
`

export const AuthorDirectoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8em 0 2em 0;

  @media only screen and (min-width: ${screenMdMin}) {
    padding: 4em 0 4em 0;
  }
`
