import { SharedGridMain } from "@/utils/layout"
import styled from "styled-components"

export const Main = styled(SharedGridMain)`
  grid-template-areas:
    "video"
    "caption"
    "photo"
    "desc";
  grid-template-columns: 5fr 5fr;
  grid-template-rows: 6fr 1fr 4fr;
  grid-template-areas:
    "video video"
    "caption caption"
    "photo desc";
`

export const VideoSection = styled.section`
  grid-area: video;
  height: auto;
  width: 100%;
`

export const CaptionSection = styled.section`
  grid-area: caption;
  padding: 0 4em;
`

export const PhotoSection = styled.section`
  grid-area: photo;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const DescSection = styled.section`
  grid-area: desc;
  padding: 0 4em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
