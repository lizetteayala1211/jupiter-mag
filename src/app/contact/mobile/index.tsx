import { ContactForm } from "@/components/contact-form"

export default function Mobile() {
  return (
    <div
      style={{
        display: "flex",
        margin: "24px",
        flexDirection: "column",
        gap: "2em",
        textTransform: "capitalize",
        lineHeight: "25px",
      }}
    >
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
      <ContactForm />
    </div>
  )
}
