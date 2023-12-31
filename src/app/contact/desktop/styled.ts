import { SharedGridMain } from "@/utils/layout"
import styled from "styled-components"

export const Main = styled(SharedGridMain)`
  grid-template-areas:
    "contact"
    "form";
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "contact form";
`

export const ContactSection = styled.section`
  grid-area: contact;
  display: flex;
  margin: 5em auto;

  flex-direction: column;
  gap: 2em;
  text-transform: uppercase;
  line-height: 30px;
`

export const FormSection = styled.section`
  grid-area: form;
`
