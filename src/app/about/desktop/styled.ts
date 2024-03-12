import { SharedGridMain } from "@/utils/layout"
import styled from "styled-components"

export const Main = styled(SharedGridMain)`
  grid-template-areas:
    "video"
    "photo"
    "desc";
  grid-template-columns: 5fr 5fr;
  grid-template-rows: repeat(auto-fill, 1fr);

  grid-template-areas: "video video";
`

export const VideoSection = styled.section`
  grid-area: video;
  height: auto;
  width: 100%;
  margin-bottom: 128px;
`
