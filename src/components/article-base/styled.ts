import {
  screenLgMed,
  screenLgMin,
  screenMdMin,
  screenSmMin,
  screenXlMin,
} from "@/utils/constants"
import { SharedGridMain } from "@/utils/layout"
import styled from "styled-components"

export const ArticleBaseContainer = styled(SharedGridMain)`
  grid-template-areas: "cover" "article" "footer";
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);

  color: var(--color-off-black);

  /* desktop */
  @media only screen and (min-width: ${screenMdMin}) {
    grid-template-areas: "header header" "cover article" "footer footer";
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
  padding: 16px;

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    padding: 40px;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    padding: 100px;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    padding: 120px;
  }
`

export const Footer = styled.section`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const NextFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  width: 100%;
  white-space: pre-wrap;
  background-color: var(--color-article-purple);
  border: 1px solid var(--color-off-black);

  color: var(--color-off-black);
  font-family: "Alverata Light";
  padding: 0 16px 12px 16px;
`
export const FooterTitle = styled.a`
  /* mobile */
  font-size: 40px;
  padding-bottom: 1em;

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    font-size: 70px;
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

export const TitleContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  transform: scale(0.4);

  @media only screen and (min-width: ${screenLgMin}) {
    transform: scale(0.7);
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
