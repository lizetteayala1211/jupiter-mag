import { SharedGridMain } from "@/utils/layout"
import styled from "styled-components"

export const Main = styled(SharedGridMain)`
  grid-template-areas:
    "contact"
    "form";
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "contact form";
  font-family: "Alverata Light";
`

export const ContactSection = styled.section`
  h1 {
    font-family: "Alverata Medium";
  }
  grid-area: contact;
  display: flex;
  margin: 5em auto;

  flex-direction: column;
  gap: 2.5em;
  text-transform: uppercase;
  line-height: 30px;
`

export const FormSection = styled.section`
  grid-area: form;
`
