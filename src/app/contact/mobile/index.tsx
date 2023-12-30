import { Dummy } from "@/components/Dummy"

export default function Mobile() {
  return (
    <div
      style={{
        gridArea: "contact",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        margin: "12px",
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
      <Dummy width={400} height={500} text="contact form goes here" />
    </div>
  )
}
