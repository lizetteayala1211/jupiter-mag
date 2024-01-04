import React from "react"
import { Arrow } from "./Arrow"
import { Input, InputContainer } from "./styled"

export function EmailInput() {
  const [email, setEmail] = React.useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let form = { email }

    const rawResponse = await fetch("/api/emailSubmit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
    const content = await rawResponse.json()
    alert(content.data.tableRange)
    setEmail("")
  }

  return (
    <div>
      <InputContainer onSubmit={handleSubmit}>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        <Arrow />
      </InputContainer>
      <p>
        Enter your email to sign up for updates on our next releases and events.
      </p>
    </div>
  )
}
