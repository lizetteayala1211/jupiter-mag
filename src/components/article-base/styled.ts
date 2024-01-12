import { screenLgMin } from "@/utils/constants"
import { SharedGridMain } from "@/utils/layout"
import styled from "styled-components"

export const ArticleBaseContainer = styled(SharedGridMain)`
  grid-template-areas:
    "cover"
    "article";
  grid-template-columns: 1fr;

  color: var(--color-off-black);

  @media only screen and (min-width: ${screenLgMin}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "cover article";
  }
  grid-gap: 0em;
`

export const Cover = styled.section`
  grid-area: cover;
  background-color: var(--color-article-purple);
`

export const Article = styled.section`
  grid-area: article;
  background-color: var(--color-article-cream);
  background: linear-gradient(
    180deg,
    var(--color-article-purple) 2.01%,
    var(--color-article-cream) 8.66%
  );
  padding: 10%;
`
