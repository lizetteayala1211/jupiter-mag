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

export type Unit =
  | "degree"
  | "distance"
  | "jupiterMass"
  | "number"
  | "days"
  | "hours"
  | "speed"
  | undefined

type JupiterDataPoint = { value: string; unit: Unit }

export type JupiterData = {
  argumentOfPerihelion: JupiterDataPoint
  axialTilt: JupiterDataPoint
  constellation: JupiterDataPoint
  declination: JupiterDataPoint
  eccentricity: JupiterDataPoint
  equatorialRadius: JupiterDataPoint
  escapeSpeed: JupiterDataPoint
  inclination: JupiterDataPoint
  massValue: JupiterDataPoint
  perihelion: JupiterDataPoint
  polarRadius: JupiterDataPoint
  rightAscension: JupiterDataPoint
  semiMajorAxis: JupiterDataPoint
  sideralOrbit: JupiterDataPoint
  sideralRotation: JupiterDataPoint
  temperature: JupiterDataPoint
}

export type SolarSystemApiShape = {
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
