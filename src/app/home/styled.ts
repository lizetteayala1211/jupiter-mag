import { screenLgMin, screenMdMin, screenXlMin } from "@/utils/constants"
import { SharedGridMain } from "@/utils/layout"
import Link from "next/link"
import styled from "styled-components"

export const Main = styled(SharedGridMain)`
  grid-template-areas:
    "lottie"
    "editorCover"
    "editorNote"
    "authors"
    "authorAbout";
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr minmax(0, 4fr);
  grid-template-areas:
    "lottie lottie"
    "editorCover editorNote"
    "authors authors";
  font-family: "Alverata Light";

  p {
    font-size: 14px;
  }

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    border: 10px solid red;
    grid-template-rows: 0.3fr 1.8fr minmax(0, 5.2fr);
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    border: 10px solid orange;
    grid-template-rows: 0.3fr 1.4fr minmax(0, 5.4fr);
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    border: 10px solid blue;
  }
`
export const Lottie = styled.section`
  grid-area: lottie;
  grid-row: span;
`

export const EditorCover = styled.section`
  grid-area: editorCover;
  flex-direction: column;
  display: flex;

  font-family: "Alverata Light";
  background-color: var(--color-article-purple);
  color: var(--color-black);
  padding-inline-end: 12px;
  font-size: 44px;
  letter-spacing: -4px;
  line-height: 76px;
  text-transform: uppercase;

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    padding-inline-end: 32px;
    font-size: 64px;
    padding-bottom: 4em;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    padding-inline-end: 32px;
    font-size: 72px;
    padding-bottom: 2em;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    padding-inline-end: 32px;
    font-size: 88px;
  }
`

export const EditorNote = styled.section`
  grid-area: editorNote;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: var(--color-article-cream);
  color: var(--color-off-black);
  font-size: 16px;
  padding-inline-start: 64px;
  padding-inline-end: 64px;
`

export const Authors = styled.section`
  grid-area: authors;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
      189deg,
      rgba(191, 160, 193, 0) 11.66%,
      #a88eaa 19.75%,
      #000 54.08%
    ),
    conic-gradient(
      from 0deg at 50% 50%,
      var(--color-article-cream) 0deg,
      var(--color-article-purple) 360deg
    );
`

export const PunctureOne = styled.div`
  box-sizing: border-box;

  position: absolute;
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

  position: absolute;
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
  color: var(--color-transparent-black);

  &:hover {
    color: var(--color-black);
  }

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    font-size: 70px;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    font-size: 80px;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    font-size: 100px;
  }
`
export const AuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const AuthorPhoto = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 30%;
`

export const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    padding-inline-start: 2em;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    padding-inline-start: 4em;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
  }
`

export const AuthorTitle = styled.div`
  font-family: "Alverata Light";
  font-size: 28px;
  margin-bottom: var(--padding-header);

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    font-size: 16px;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
  }
`
export const AuthorBody = styled.div`
  font-family: "Alverata Light";

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    font-size: 12px;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
  }
`
export const CreditsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    /* smaller desktops */
    @media only screen and (min-width: ${screenMdMin}) {
      font-size: 10px;
      max-width: 500px;
    }

    /* wide desktops */
    @media only screen and (min-width: ${screenLgMin}) {
    }

    /* extra wide desktops */
    @media only screen and (min-width: ${screenXlMin}) {
    }
  }
`

export const AuthorDirectoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    padding: 4em 0 12em 0;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    padding: 12em 0 16em 0;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
  }
`

export const AuthorAboutsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4em;

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
