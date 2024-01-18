import { ContactForm } from "@/components"
import { ContactSection, FormSection, Main } from "./styled"

// todo: for all desktop and mobile components, reconcil so we don't have the same copy twice, this is bad code
export default function Desktop() {
  return (
    <Main>
      <ContactSection>
        <div>
          <h1 style={{ letterSpacing: "4px" }}>Daria Harper</h1>
          <h2 style={{ letterSpacing: "4px" }}>Founder</h2>
          <h3>Dariaharper@gmail.com</h3>
        </div>
        <div>
          <h1 style={{ letterSpacing: "4px" }}>Camille Bacon </h1>
          <h2 style={{ letterSpacing: "4px" }}>Founder</h2>
          <h3>camillebacon@gmail.com</h3>
        </div>
        <div>
          <h1 style={{ fontFamily: "Alverata Light" }}>Email</h1>
          <h2>info@jupiter-mag.com</h2>
        </div>
        <div>
          <h2 style={{ letterSpacing: "4px" }}>Instagram</h2>
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
