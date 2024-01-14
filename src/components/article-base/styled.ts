import {
  screenLgMed,
  screenLgMin,
  screenMdMin,
  screenSmMin,
} from "@/utils/constants"
import { SharedGridMain } from "@/utils/layout"
import Link from "next/link"
import styled from "styled-components"

export const ArticleBaseContainer = styled(SharedGridMain)`
  grid-template-areas: "cover cover" "article article" "next next";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);

  color: var(--color-off-black);

  /* desktop */
  @media only screen and (min-width: ${screenMdMin}) {
    grid-template-areas: "cover article" "next next";
  }

  grid-gap: 0em;
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
  padding: 15%;
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

export const MenuContainer = styled.div`
  position: absolute;
  z-index: var(--z-index-seven);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: linear-gradient(
    180deg,
    rgba(63, 29, 61, 0.9) 30%,
    rgba(117, 42, 65, 0.729) 100%
  );
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

export const ReturnHomeButton = styled(Link)`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 64px;
  padding-top: 2em;
  color: var(--color-transparent-white);
  font-family: "Alverata Light";

  &:hover {
    color: var(--color-white);
  }
`
