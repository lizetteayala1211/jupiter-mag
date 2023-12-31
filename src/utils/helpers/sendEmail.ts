import { send, EmailJSResponseStatus } from "@emailjs/browser"
import { ContactRequest } from "../types"

export const sendEmail = (
  params: ContactRequest
): Promise<EmailJSResponseStatus> =>
  send("service_7b6wgh2", "template_7h6lj3r", params, "QTK5rLeuJi7cCZkWX")
