import { SharedGridMain } from "@/utils/layout"
import styled from "styled-components"

export const Main = styled(SharedGridMain)`
  grid-template-areas:
    "photo"
    "programHeader"
    "time"
    "address"
    "desc"
    "email"
    "blank";
  grid-template-columns: 10fr 2fr 2.5fr 2.5fr;
  grid-template-rows: 1fr 1fr 2fr 2fr 5fr;
  grid-template-areas:
    "photo programHeader programHeader programHeader"
    "photo time address address"
    "photo desc desc desc"
    "photo email email email"
    "photo blank blank blank";
`

export const PhotoSection = styled.section`
  grid-area: photo;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const ProgramHeaderSection = styled.section`
  grid-area: programHeader;
  padding-inline-start: var(--padding-body);
  padding-inline-end: var(--padding-body);
  max-width: 600px;
  text-transform: uppercase;
`

export const TimeSection = styled.section`
  grid-area: time;
  padding-inline-start: var(--padding-body);
  padding-inline-end: var(--padding-body);
  max-width: 600px;
`

export const AddressSection = styled.section`
  grid-area: address;
  padding-inline-start: var(--padding-body);
  padding-inline-end: var(--padding-body);
  max-width: 600px;
`
export const DescSection = styled.section`
  grid-area: desc;
  padding-inline-start: var(--padding-body);
  padding-inline-end: var(--padding-body);
  max-width: 600px;
`

export const EmailSection = styled.section`
  grid-area: email;
  padding-inline-start: var(--padding-body);
  padding-inline-end: var(--padding-body);
  max-width: 600px;
`
