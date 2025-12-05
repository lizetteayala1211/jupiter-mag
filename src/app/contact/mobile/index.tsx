import { ContactForm } from "@/components"

export default function Mobile() {
  return (
    <div
      style={{
        display: "flex",
        margin: "48px 24px",
        flexDirection: "column",
        gap: "2em",
        lineHeight: "25px",
      }}
    >
      <div>
        <h1 style={{ fontFamily: "Alverata Light", fontSize: "28px" }}>Camille Bacon</h1>
        <h2 style={{ fontSize: "24px" }}>Co-Founder / Editor-in-Chief</h2>
      </div>
      <div>
        <h1 style={{ fontFamily: "Alverata Light", fontSize: "28px" }}>Daria Harper</h1>
        <h2 style={{ fontSize: "24px" }}>Co-Founder</h2>
      </div>
      <div>
        <h1 style={{ fontFamily: "Alverata Light", fontSize: "28px" }}>Niara Hightower</h1>
        <h2 style={{ fontSize: "24px" }}>Editorial Assistant</h2>
      </div>
      <div>
        <h1 style={{ fontFamily: "Alverata Light", fontSize: "28px" }}>Sebastien Pierre</h1>
        <h2 style={{ fontSize: "24px" }}>Creative Director</h2>
      </div>
      <div>
        <h1 style={{ fontFamily: "Alverata Light", fontSize: "28px" }}>Josh Brainin</h1>
        <h2 style={{ fontSize: "24px" }}>Director of Photography</h2>
        <h2 style={{ fontSize: "24px" }}>josh@jupiter-mag.com</h2>
      </div>
      <div>
        <h1 style={{ fontFamily: "Alverata Light", fontSize: "28px" }}>Email</h1>
        <h2 style={{ fontSize: "24px" }}>info@jupiter-mag.com</h2>
      </div>
      <div>
        <h1 style={{ fontFamily: "Alverata Light", fontSize: "28px" }}>Instagram</h1>
        <h2 style={{ fontSize: "24px" }}>@jupiter.magazine</h2>
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
      <ContactForm />
    </div>
  )
}
