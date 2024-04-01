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
`

export const Header = styled.section`
  grid-area: header;
  z-index: var(--z-index-seven);
`

export const Cover = styled.section<{ $issue: number }>`
  grid-area: cover;
  background-color: ${(props) => (props.$issue === 1 ? "#d6c3d8" : "#040723")};

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
    padding: 40px 80px;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    padding: 100px 300px;
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
  align-items: center;
  width: 100%;
`

export const NextFooter = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 100%;
  white-space: pre-wrap;
  background-color: var(--color-article-cream);

  text-transform: uppercase;

  color: var(--color-black);
  font-family: "Alverata Light";
  padding: 40px 160px;
`
export const FooterTitle = styled.a`
  /* mobile */
  font-size: 40px;
  line-height: 60px;
  padding-bottom: 1em;

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    font-size: 60px;
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
