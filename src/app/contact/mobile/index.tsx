import { ContactForm } from "@/components"

export default function Mobile() {
  return (
    <div
      style={{
        display: "flex",
        margin: "24px",
        flexDirection: "column",
        gap: "2em",
        lineHeight: "25px",
      }}
    >
      <div>
        <h1 style={{ fontFamily: "Alverata Light" }}>Daria Harper</h1>
        <h2>Founder</h2>
        <h3>dariaharper@gmail.com</h3>
      </div>
      <div>
        <h1 style={{ fontFamily: "Alverata Light" }}>Camille Bacon </h1>
        <h2>Founder</h2>
        <h3>camillebacon@gmail.com</h3>
      </div>
      <div>
        <h1 style={{ fontFamily: "Alverata Light" }}>Instagram</h1>
        <h2>@Jupiter_Magazine</h2>
      </div>
      <div>
        <h1 style={{ fontFamily: "Alverata Light" }}>Twitter</h1>
        <h2>Jupiter_Magazine</h2>
      </div>
      <ContactForm />
    </div>
  )
}
