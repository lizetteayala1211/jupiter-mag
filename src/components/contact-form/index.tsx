"use client"

import React from "react"
import emailjs from "@emailjs/browser"
import { useIsMobile } from "@/utils/hooks"
import {
  Input,
  InputContainer,
  Label,
  FormContainer,
  MessageInput,
  SubmitButton,
} from "./styled"
import { ContactRequest } from "@/utils/types"
import { sendEmail } from "@/utils/helpers"

export function ContactForm() {
  const isMobile = useIsMobile()
  const nameRef: React.Ref<any> = React.useRef(null)
  const emailRef: React.Ref<any> = React.useRef(null)
  const messageRef: React.Ref<any> = React.useRef(null)
  const [contactForm, setContactForm] = React.useState<ContactRequest>({
    from_name: "",
    reply_to: "",
    subject: "Inquiry from Jupiter-Mag.com",
    message: "",
  })

  const onSendEmail = React.useCallback(
    (e: any) => {
      e.preventDefault()
      sendEmail(contactForm)
        .then((res) => console.log(res.text))
        .catch((err) => console.log(err.text))
    },
    [contactForm]
  )

  return (
    <FormContainer onSubmit={onSendEmail}>
      <h1
        style={{
          fontSize: isMobile ? "30px" : "46px",
          textAlign: "center",
        }}
      >
        Contact us
      </h1>
      <InputContainer>
        <Label>name</Label>
        <Input
          ref={nameRef}
          onChange={() =>
            setContactForm({
              ...contactForm,
              from_name: nameRef.current.value,
            })
          }
        />
      </InputContainer>
      <InputContainer>
        <Label>email</Label>
        <Input
          ref={emailRef}
          onChange={() =>
            setContactForm({
              ...contactForm,
              reply_to: emailRef.current.value,
            })
          }
        />
      </InputContainer>
      <div>
        <Label>message</Label>
        <MessageInput
          ref={messageRef}
          onChange={() =>
            setContactForm({
              ...contactForm,
              message: messageRef.current.value,
            })
          }
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SubmitButton onClick={onSendEmail}>Submit</SubmitButton>
      </div>
    </FormContainer>
  )
}
