import React from "react"
import { getJupiterBasics, getJupiterAdvanced } from "@/api"
import { JupiterData, PlanetsApiShape } from "./types"
import { fromLightyearToMiles } from "./helpers"

export const collectJupiterData = () => {
  const [jupiterData, setJupiterData] = React.useState<JupiterData>({
    axialTilt: 0,
    distance: 0,
    eccentricity: 0,
    equatorialRadius: 0,
    inclination: 0,
    massValue: 0,
    perihelion: 0,
    period: 0,
    polarRadius: 0,
    semiMajorAxis: 0,
    sideralOrbit: 0,
    sideralRotation: 0,
    temperature: 0,
  })

  React.useEffect(() => {
    getJupiterBasics()
      .then((data: PlanetsApiShape) =>
        setJupiterData({
          ...jupiterData,
          distance: fromLightyearToMiles(data.distance_light_year),
          temperature: data.temperature,
          period: data.period,
        })
      )
      .catch((error) => console.error(error))

    getJupiterAdvanced()
      .then((data) =>
        setJupiterData({
          ...jupiterData,
          axialTilt: data.axialTilt,
          eccentricity: data.eccentricity,
          equatorialRadius: data.equatorialRadius,
          inclination: data.inclination,
          massValue: data.mass.massValue,
          perihelion: data.perihelion,
          semiMajorAxis: data.semimajorAxis,
          sideralOrbit: data.sideralOrbit,
          sideralRotation: data.sideralRotation,
        })
      )
      .catch((error) => console.error(error))
  }, [])
}
