export type Pages = "home" | "about" | "donate" | "contact" | "archive" | "issue 1" | "issue 2" | "issue 3" | "issue 4" | "issue 5"

export type ContactRequest = {
  from_name: string
  reply_to: string
  subject: string
  message: string
}

export type ArticleMetadata = {
  title: string
  link: string
  author: string
  longTitle?: boolean
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
  temperature: JupiterDataPoint
  constellation: JupiterDataPoint
  polarRadius: JupiterDataPoint
  siderealOrbit: JupiterDataPoint
  eccentricity: JupiterDataPoint
  siderealRotation: JupiterDataPoint
  rightAscension: JupiterDataPoint
  argumentOfPerihelion: JupiterDataPoint
  escapeSpeed: JupiterDataPoint
  massValue: JupiterDataPoint
  inclination: JupiterDataPoint
  declination: JupiterDataPoint
  perihelion: JupiterDataPoint
  semiMajorAxis: JupiterDataPoint
  equatorialRadius: JupiterDataPoint
  axialTilt: JupiterDataPoint
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
