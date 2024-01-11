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
  grid-template-rows: minmax(0, 1fr) 1fr minmax(0, 6.5fr);
  grid-template-areas:
    "lottie lottie"
    "editorCover editorNote"
    "authors authors";

  font-family: "Alverata Light";

  p {
    font-size: 14px;
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
  padding-inline-end: 32px;
  font-size: 88px;
  letter-spacing: -4px;
  line-height: 76px;
  text-transform: uppercase;
  padding-bottom: 2em;
`

export const EditorNote = styled.section`
  grid-area: editorNote;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background-color: var(--color-article-cream);
  font-family: "Alverata Light";
  color: var(--color-off-black);
  font-size: 16px;
  padding-inline-start: 64px;
  padding-inline-end: 64px;
`
export const Authors = styled.section`
  grid-area: authors;
  position: relative;

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
  font-size: 100px;
  text-transform: uppercase;
  color: var(--color-transparent-black);

  &:hover {
    color: var(--color-black);
  }
`
export const AuthorContainer = styled.div`
  display: flex;
`

export const AuthorPhoto = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  margin: var(--padding-body);
`
export const AuthorContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: var(--padding-body);
`

export const AuthorTitle = styled.div`
  font-family: "Alverata Light";
  font-size: 28px;
  margin-bottom: var(--padding-header);
`
export const AuthorBody = styled.div`
  font-family: "Alverata Light";
`
