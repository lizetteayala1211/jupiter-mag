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
  axialTilt: number
  distance: number
  eccentricity: number
  equatorialRadius: number
  inclination: number
  massValue: number
  perihelion: number
  period: number
  polarRadius: number
  semiMajorAxis: number
  sideralOrbit: number
  sideralRotation: number
  temperature: number
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

export type SolarSystem = {
  alternativeName: string
  aphelion: number
  argPeriapsis: number
  aroundPlanet: string | null
  avgTemp: number
  axialTilt: number
  bodyType: string
  density: number
  dimension: string
  discoveredBy: string
  discoveryDate: string
  eccentricity: number
  englishName: string
  equaRadius: number
  escape: number
  flattening: number
  gravity: number
  id: string
  inclination: number
  isPlanet: true
  longAscNode: number
  mainAnomaly: number
  mass: { massValue: number; massExponent: number }
  meanRadius: number
  moons: { moon: string; rel: string }[]
  name: string
  perihelion: number
  polarRadius: number
  rel: string
  semimajorAxis: number
  sideralOrbit: number
  sideralRotation: number
  vol: { volValue: number; volExponent: number }
}
