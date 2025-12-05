import { SharedGridMain } from "@/utils/layout"
import styled from "styled-components"

export const Main = styled(SharedGridMain)`
  grid-template-areas:
    "header header"
    "contact form";
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: 1fr 6fr; */
  font-family: "Alverata Light";
  margin-bottom: 100px;
`

export const HeaderSection = styled.section`
  grid-area: header;
  position: relative;
`

export const ContactSection = styled.section`
  h1 {
    font-family: "Alverata Medium";
  }
  grid-area: contact;
  display: flex;
  margin: 0em auto;
  flex-direction: column;
  gap: 2.5em;
  height: max-content !important;
  /* position: relative;
  top: -100px; */
`

export const FormSection = styled.section`
  grid-area: form;
  height: max-content !important;
`
