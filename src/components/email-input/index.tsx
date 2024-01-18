import React from "react"
import { Arrow } from "./Arrow"
import {
  ArrowAnimation,
  ArrowButtonContainer,
  Input,
  InputContainer,
} from "./styled"
import { sql } from "@vercel/postgres"

export function EmailInput() {
  const [email, setEmail] = React.useState("")

  const addEmail = async (email: string) => {
    await sql`INSERT INTO Emails (Email) VALUES (${email});`

    const emails = await sql`SELECT * FROM Emails;`
    return console.log({ emails }, { status: 200 })
  }

  return (
    <div>
      <InputContainer>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />

        <ArrowButtonContainer onClick={() => addEmail(email)}>
          <ArrowAnimation>
            <Arrow />
          </ArrowAnimation>
        </ArrowButtonContainer>
      </InputContainer>
      <p>
        Enter your email to sign up for updates on our next releases and events.
      </p>
    </div>
  )
}
