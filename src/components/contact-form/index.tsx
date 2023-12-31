"use client"

import { useIsMobile } from "@/utils/hooks"
import {
  Input,
  InputContainer,
  Label,
  Main,
  MessageInput,
  SubmitButton,
} from "./styled"

export function ContactForm() {
  const isMobile = useIsMobile()
  return (
    <Main>
      <h1
        style={{
          textTransform: "uppercase",
          fontSize: isMobile ? "30px" : "46px",
          textAlign: "center",
        }}
      >
        Contact us
      </h1>

      <InputContainer>
        <Label>name</Label>
        <Input />
      </InputContainer>
      <InputContainer>
        <Label>email</Label>
        <Input />
      </InputContainer>
      <div>
        <Label>message</Label>
        <MessageInput />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SubmitButton>Submit</SubmitButton>
      </div>
    </Main>
  )
}
