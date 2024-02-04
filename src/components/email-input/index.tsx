import React from "react"
import { Arrow } from "./Arrow"
import {
  ArrowAnimation,
  ArrowButtonContainer,
  Form,
  Input,
  InputContainer,
} from "./styled"
import { sql } from "@vercel/postgres"
import { validateEmail } from "@/utils/helpers"

export function EmailInput() {
  const [email, setEmail] = React.useState("")
  const ref: React.Ref<any> = React.useRef<HTMLDivElement>(null)

  const addEmail = async (email: string) => {
    if (validateEmail(email)) {
      await sql`INSERT INTO Emails (Email) VALUES (${email});`
      ref.current.value = ""
    }
  }

  return (
    <div>
      <InputContainer>
        <Form onSubmit={() => addEmail(email)}>
          <Input
            ref={ref}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <ArrowButtonContainer onClick={() => addEmail(email)}>
            <ArrowAnimation>
              <Arrow />
            </ArrowAnimation>
          </ArrowButtonContainer>
        </Form>
      </InputContainer>
      <p>
        Enter your email to sign up for updates on our next releases and events.
      </p>
    </div>
  )
}
