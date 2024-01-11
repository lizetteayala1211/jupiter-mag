"use client"

import React from "react"
import { useIsMobile } from "@/utils/hooks"
import {
  Input,
  InputContainer,
  Label,
  FormContainer,
  MessageInput,
  SubmitButton,
  ConfirmedEmailSnackBar,
  ConfirmedEmailSnackBarContainer,
} from "./styled"
import { ContactRequest } from "@/utils/types"
import { sendEmail, validateEmail } from "@/utils/helpers"

const initialState: ContactRequest = {
  from_name: "",
  reply_to: "",
  subject: "Inquiry from Jupiter-Mag.com",
  message: "",
}

export function ContactForm() {
  const isMobile = useIsMobile()
  const nameRef: React.Ref<any> = React.useRef(null)
  const emailRef: React.Ref<any> = React.useRef(null)
  const messageRef: React.Ref<any> = React.useRef(null)
  const [contactForm, setContactForm] =
    React.useState<ContactRequest>(initialState)
  const [showSnackbar, setShowSnackbar] = React.useState(false)
  const [emailState, setEmailState] = React.useState<
    "success" | "failure" | "formIncomplete"
  >("formIncomplete")

  const onTriggerSnackbar = () => {
    setShowSnackbar(true)

    // now set snackbar to false to make sure it is no longer rendered in dom
    setTimeout(() => {
      setShowSnackbar(false)
    }, 3000)
  }

  const onValidateForm = () => {
    if (
      contactForm.from_name.length > 0 &&
      contactForm.message.length > 0 &&
      contactForm.reply_to.length > 0 &&
      contactForm.subject.length > 0 &&
      validateEmail(contactForm.reply_to)
    ) {
      return true
    }

    return false
  }

  const onEmailAttempt = (success: boolean) => {
    if (success) {
      setEmailState("success")
      // clear all refs and reset state if email sent successfully
      setContactForm(initialState)
      nameRef.current.value = ""
      emailRef.current.value = ""
      messageRef.current.value = ""
    } else {
      setEmailState("failure")
    }
    onTriggerSnackbar()
  }

  const onSendEmail = (e: any) => {
    e.preventDefault()
    const validForm = onValidateForm()
    if (!validForm) {
      setEmailState("formIncomplete")
      onTriggerSnackbar()
    } else {
      sendEmail(contactForm)
        .then(() => onEmailAttempt(true))
        .catch(() => onEmailAttempt(false))
    }
  }

  return (
    <FormContainer onSubmit={onSendEmail}>
      {showSnackbar && (
        <ConfirmedEmailSnackBarContainer>
          <ConfirmedEmailSnackBar>
            {emailState === "success" &&
              "Successfully touched base with Jupiter!"}
            {emailState === "failure" && "Contact launch failure. Try again."}
            {emailState === "formIncomplete" &&
              "Form invalid! Countdown's a no go."}
          </ConfirmedEmailSnackBar>
        </ConfirmedEmailSnackBarContainer>
      )}

      <h1
        style={{
          fontSize: isMobile ? "30px" : "46px",
          textAlign: "center",
          fontFamily: "Alverata Light",
        }}
      >
        Contact us
      </h1>
      <InputContainer>
        <Label>name</Label>
        <Input
          required
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
          type="email"
          required
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
          required
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
