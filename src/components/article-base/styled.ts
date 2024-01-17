import {
  screenLgMed,
  screenLgMin,
  screenMdMin,
  screenSmMin,
} from "@/utils/constants"
import { SharedGridMain } from "@/utils/layout"
import styled from "styled-components"

export const ArticleBaseContainer = styled(SharedGridMain)`
  grid-template-areas: "cover cover" "article article" "next next";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);

  color: var(--color-off-black);

  /* desktop */
  @media only screen and (min-width: ${screenMdMin}) {
    grid-template-areas: "header header" "cover article" "next next";
  }
`

export const Header = styled.section`
  grid-area: header;
  z-index: var(--z-index-seven);
  background-color: var(--color-article-purple);
`

export const Cover = styled.section`
  grid-area: cover;
  background-color: var(--color-article-purple);
  border-bottom: 10px solid var(--color-article-purple);
  min-width: 100%;

  /* mobile and tablet only */
  @media only screen and (max-width: ${screenSmMin}) {
    max-height: 600px;
  }
`

export const Article = styled.section`
  grid-area: article;
  background-color: var(--color-article-cream);
  min-width: 100%;
  padding: 8px;

  /* desktop */
  @media only screen and (min-width: ${screenMdMin}) {
    padding: 48px;
  }
`

export const Next = styled.section`
  grid-area: next;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  white-space: pre-wrap;
  background-color: var(--color-article-purple);
  border-bottom: 10px solid var(--color-article-purple);
  color: var(--color-off-black);
  font-family: "Alverata Light";
  min-height: 320px;
  font-size: 2.5em;
  padding: 0px 12px;

  /* desktop */
  @media only screen and (min-width: ${screenLgMin}) {
    min-height: 640px;
    font-size: 5em;
    padding: 8px 24px;
  }
`

export const NextFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;

  @media only screen and (min-width: ${screenLgMin}) {
    font-size: 40px;
  }
`

export const TitleContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  transform: scale(0.4);

  @media only screen and (min-width: ${screenLgMin}) {
    transform: scale(0.6);
  }

  @media only screen and (min-width: ${screenLgMed}) {
    overflow: hidden;
    transform: scale(0.8);
  }
`

export const TriggerMenuContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 20%;
  z-index: var(--z-index-six);
`
