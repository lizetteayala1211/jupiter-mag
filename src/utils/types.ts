export type Pages =
  | "home"
  | "program"
  | "about"
  | "donate"
  | "contact"
  | "magazine"

export type ContactRequest = {
  from_name: string
  reply_to: string
  subject: string
  message: string
}
