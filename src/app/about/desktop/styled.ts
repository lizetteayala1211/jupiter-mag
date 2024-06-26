import { SharedGridMain } from "@/utils/layout"
import styled from "styled-components"

export const Main = styled(SharedGridMain)`
  grid-template-areas:
    "header"
    "video";
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 1fr);
`

export const HeaderSection = styled.section`
  grid-area: header;
  height: auto;
  width: 100%;
`

export const VideoSection = styled.section`
  grid-area: video;
  height: auto;
  width: 100%;
  position: relative;
  top: -80px;
  margin-bottom: 128px;
`
