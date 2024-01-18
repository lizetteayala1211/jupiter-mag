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
`

export const PhotoSection = styled.section`
  grid-area: photo;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: var(--padding-body);
`

export const DescSection = styled.section`
  grid-area: desc;
  padding-inline-start: var(--padding-body);
  padding-inline-end: var(--padding-body);
  display: flex;
  flex-direction: column;
  align-items: center;
`
