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

export type JupiterData = {
  distance: number
  semi_major_axis: number
  temperature: number
  period: number
  mass: number
}

export type PlanetsApiShape = {
  distance_light_year: number
  host_star_mass: number
  host_star_temperature: number
  mass: number
  name: string
  period: number
  radius: number
  semi_major_axis: number
  temperature: number
}
