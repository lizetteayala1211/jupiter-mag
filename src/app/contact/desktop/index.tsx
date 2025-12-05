import { ContactForm, Header } from "@/components"
import { ContactSection, FormSection, HeaderSection, Main } from "./styled"

// todo: for all desktop and mobile components, reconcil so we don&#39;t have the same copy twice, this is bad code
export default function Desktop() {
  return (
    <Main>
      <HeaderSection>
        <Header />
      </HeaderSection>
      <ContactSection>
        <div>
          <h1>Camille Bacon</h1>
          <h2>Co-Founder / Editor-in-Chief</h2>
        </div>
        <div>
          <h1>Daria Harper</h1>
          <h2>Co-Founder</h2>
        </div>
         <div>
          <h1>Niara Hightower</h1>
          <h2>Editorial Assistant</h2>
        </div>
        <div>
          <h1>Sebastien Pierre</h1>
          <h2>Creative Director</h2>
        </div>

        <div>
          <h1>Josh Brainin</h1>
          <h2>Director of Photography</h2>
          <h2>josh@jupiter-mag.com</h2>
        </div>

        <div>
          <h1 style={{ fontFamily: "Alverata Light" }}>Email</h1>
          <h2>info@jupiter-mag.com</h2>
        </div>
        <div>
          <h1>Instagram</h1>
          <h2>@jupiter.magazine</h2>
        </div>
        {/* <p style={{ maxWidth: "300px" }}>
          For press requests, please contact Hannah Gottlieb-Graham at{" "}
          <a
            style={{ textDecoration: "underline" }}
            href="https://almacommunications.co/"
          >
            ALMA
          </a>
        </p> */}
      </ContactSection>
      <FormSection>
        <ContactForm />
      </FormSection>
    </Main>
  )
}
