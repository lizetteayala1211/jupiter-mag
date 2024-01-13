import { screenLgMin } from "@/utils/constants"
import { SharedGridMain } from "@/utils/layout"
import styled from "styled-components"

export const ArticleBaseContainer = styled(SharedGridMain)`
  grid-template-areas:
    "cover"
    "article"
    "next";
  grid-template-columns: 1fr;
  grid-template-areas: "cover" "article" "next";

  color: var(--color-off-black);

  @media only screen and (min-width: ${screenLgMin}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "cover article" "next next";
  }
  grid-gap: 0em;
`

export const Cover = styled.section`
  grid-area: cover;
  background-color: var(--color-article-purple);
  border-bottom: 10px solid var(--color-article-purple);
`

export const Article = styled.section`
  grid-area: article;
  background-color: var(--color-article-cream);
  padding: 10%;
`

export const Next = styled.section`
  grid-area: next;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  white-space: pre-wrap;
  min-height: 640px;
  background-color: var(--color-article-purple);
  border-bottom: 10px solid var(--color-article-purple);
  color: var(--color-off-black);
  font-family: "Alverata Light";
  font-size: 140px;
`

export const MenuContainer = styled.div`
  position: absolute;
  z-index: var(--z-index-seven);
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(63, 29, 61, 0.9) 30%,
    rgba(117, 42, 65, 0.729) 100%
  );
`

export const TitleContainer = styled.div`
  position: sticky;
  top: 0;
  overflow: hidden;
  transform: scale(0.8);
`
