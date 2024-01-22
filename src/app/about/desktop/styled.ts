import { SharedGridMain } from "@/utils/layout"
import styled from "styled-components"

export const Main = styled(SharedGridMain)`
  grid-template-areas:
    "video"
    "photo"
    "desc";
  grid-template-columns: 5fr 5fr;
  grid-template-rows: repeat(auto-fill, 1fr);

  grid-template-areas:
    "video video"
    "photo desc";
`

export const VideoSection = styled.section`
  grid-area: video;
  height: auto;
  width: 100%;
  margin-bottom: 128px;
`

export const PhotoSection = styled.section`
  grid-area: photo;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: var(--padding-body);
`

export const DescSection = styled.section`
  grid-area: desc;
  margin: 4em 8em 4em 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
`
