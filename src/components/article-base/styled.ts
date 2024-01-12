import { SharedGridMain } from "@/utils/layout"
import styled from "styled-components"

export const ArticleBaseContainer = styled(SharedGridMain)`
  grid-template-areas:
    "cover"
    "article";
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "cover article";
`

export const Cover = styled.section`
  grid-area: cover;
`

export const Article = styled.section`
  grid-area: article;
`
