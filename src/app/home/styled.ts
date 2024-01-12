import { screenLgMin, screenMdMin, screenXlMin } from "@/utils/constants"
import { SharedGridMain } from "@/utils/layout"
import Link from "next/link"
import styled from "styled-components"

// grid
export const Main = styled(SharedGridMain)`
  grid-template-areas:
    "lottie"
    "authors";
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 26fr;
  grid-template-areas:
    "lottie lottie"
    "authors authors";
  font-family: "Alverata Light";
  p {
    font-size: 14px;
  }

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    grid-template-rows: 1fr 6fr;
  }

  /* standard desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    grid-template-rows: 1fr 5.5fr;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    grid-template-rows: 1fr 4fr;
  }
`
export const Lottie = styled.section`
  grid-area: lottie;
  width: 100%;
  z-index: var(--z-index-three);
`

export const Authors = styled.section`
  grid-area: authors;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;

  background: linear-gradient(
    200deg,
    rgba(191, 160, 193, 0) 11.66%,
    #a88eaa 19.75%,
    #000 54.08%
  );

  /*  desktop */
  @media only screen and (min-width: ${screenMdMin}) {
    padding: 0;

    background: linear-gradient(
        189deg,
        rgba(191, 160, 193, 0) 11.66%,
        #a88eaa 29.75%,
        #000 54.08%
      ),
      conic-gradient(
        from 0deg at 50% 28.37%,
        var(--color-article-cream) 0.06875477149151266deg,
        var(--color-article-purple) 360deg
      );
  }
`

export const DesktopEditorContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 1000px;
`

export const MobileEditorContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const EditorCover = styled.div`
  text-transform: uppercase;
  flex-direction: column;
  display: flex;
  font-family: "Alverata Light";
  font-size: 64px;
  line-height: 60px;
  letter-spacing: -4px;
  padding-top: var(--padding-header);

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    width: 50%;
    color: var(--color-black);
    padding-inline-end: 12px;
    font-size: 64px;
    line-height: 60px;
    padding-inline-end: 32px;
    padding-bottom: 4em;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    padding-inline-end: 32px;
    font-size: 72px;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    padding-inline-end: 32px;
    font-size: 88px;
  }
`

export const EditorNote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  min-height: 800px;

  color: var(--color-off-black);
  font-size: 16px;
  padding-inline-start: 64px;
  padding-inline-end: 64px;
`
// graphics
export const PunctureContainer = styled.div`
  position: absolute;
  margin: 50%;
  z-index: 10;
  top: 250px;
  left: -18px;
`

export const PunctureOne = styled.div`
  box-sizing: border-box;

  width: 35px;
  height: 33px;
  border-radius: 100px;

  background: radial-gradient(50% 50% at 50% 50%, #ffb0b0 0%, #ffb877 81.25%);
  outline: 2px solid #ffffff;
  box-shadow: inset 1px 4px 4px 4px rgba(61, 7, 7, 0.76);
  transform: rotate(0);
`
export const PunctureTwo = styled.div`
  box-sizing: border-box;

  width: 35px;
  height: 34px;
  border-radius: 100px;

  background: #ff9a9a;
  outline: 2px solid #ffffff;
  box-shadow: inset 1px 4px 4px 4px rgba(61, 7, 7, 0.76);
  transform: rotate(0);

  margin-top: 64px;
`
export const StyledAuthorLink = styled(Link)`
  font-family: "Alverata Medium";
  text-transform: uppercase;
  font-size: 32px;
  color: var(--color-transparent-white);

  &:hover {
    color: var(--color-white);
  }

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    color: var(--color-transparent-black);

    &:hover {
      color: var(--color-black);
    }
    font-size: 80px;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    font-size: 100px;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    font-size: 120px;
  }
`
export const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media only screen and (min-width: ${screenMdMin}) {
    align-items: flex-start;
    flex-direction: row;
  }
`

export const AuthorPhoto = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 2em;
  @media only screen and (min-width: ${screenMdMin}) {
    width: 30%;
  }
`

export const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    padding-inline-start: 2em;
    max-width: 550px;
    width: 70%;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    padding-inline-start: 4em;
    max-width: 730px;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    padding-inline-start: 8em;
    max-width: 980px;
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

export const AuthorDirectoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 0 8em 0;

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    padding: 4em 0 12em 0;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    padding: 12em 0 16em 0;
  }
`

export const AuthorAboutsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4em;
`
