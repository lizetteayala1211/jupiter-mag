"use client"

import { Base } from "@/components/base"
import { ContactSection, FormSection, Main } from "./styled"
import { Dummy } from "@/components/Dummy"

export default function Contact() {
  return (
    <Base>
      <Main>
        <ContactSection>
          <div>
            <h1>Daria Harper</h1>
            <h2>Founder</h2>
            <h3>Dariaharper@gmail.com</h3>
          </div>
          <div>
            <h1>Camille Bacon </h1>
            <h2>Founder</h2>
            <h3>camillebacon@gmail.com</h3>
          </div>
          <div>
            <h2>Instagram</h2>
            <h3>@Jupiter_magazine</h3>
          </div>
          <div>
            <h2>Twitter</h2>
            <h3>Jupiter_Magazine</h3>
          </div>
        </ContactSection>
        <FormSection>
          <Dummy width={400} height={600} text="contact form goes here" />
        </FormSection>
      </Main>
    </Base>
  )
}
