import { SharedGridMain } from "@/utils/layout"
import styled from "styled-components"

export const Main = styled(SharedGridMain)`
  grid-template-areas:
    "hero"
    "caption"
    "photo"
    "desc";
  grid-template-columns: 5fr 5fr;
  grid-template-rows: 6fr 1fr 4fr;
  grid-template-areas:
    "hero hero"
    "caption caption"
    "photo desc";
`

export const HeroSection = styled.section`
  grid-area: hero;
`

export const CaptionSection = styled.section`
  grid-area: caption;
`

export const PhotoSection = styled.section`
  grid-area: photo;
`

export const DescSection = styled.section`
  grid-area: desc;
`
