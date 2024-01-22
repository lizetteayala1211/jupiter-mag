import { ContactForm } from "@/components"
import { ContactSection, FormSection, Main } from "./styled"

// todo: for all desktop and mobile components, reconcil so we don't have the same copy twice, this is bad code
export default function Desktop() {
  return (
    <Main>
      <ContactSection>
        <div>
          <h1>Daria Harper</h1>
          <h2>Founder</h2>
        </div>
        <div>
          <h1>Camille Bacon </h1>
          <h2>Founder</h2>
        </div>
        <div>
          <h1 style={{ fontFamily: "Alverata Light" }}>Email</h1>
          <h2>info@jupiter-mag.com</h2>
        </div>
        <div>
          <h2>Instagram</h2>
          <h3>@jupiter.magazine</h3>
        </div>
        <p style={{ maxWidth: "300px" }}>
          For press requests, please contact Hannah Gottlieb-Graham at{" "}
          <a
            style={{ textDecoration: "underline" }}
            href="https://almacommunications.co/"
          >
            ALMA
          </a>
        </p>
      </ContactSection>
      <FormSection>
        <ContactForm />
      </FormSection>
    </Main>
  )
}
