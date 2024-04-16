import React from "react"
import { fetchJupiterData } from "@/app/api"
import { JupiterData, SolarSystemApiShape } from "../types"

export const useJupiterData = () => {
  const [jupiterData, setJupiterData] = React.useState<JupiterData>()

  React.useEffect(() => {
    fetchJupiterData()
      .then((data: SolarSystemApiShape) => {
        setJupiterData({
          argumentOfPerihelion: {
            value: data.argPeriapsis.toFixed(2),
            unit: "degree",
          },
          axialTilt: { value: data.axialTilt.toFixed(2), unit: "degree" },
          constellation: { value: "Aries", unit: undefined },
          declination: { value: "+12° 10’ 50”", unit: undefined },
          eccentricity: { value: data.eccentricity.toFixed(2), unit: "number" },
          escapeSpeed: { value: data.escape.toString(), unit: "speed" },
          equatorialRadius: {
            value: data.equaRadius.toString(),
            unit: "distance",
          },
          inclination: { value: data.inclination.toFixed(2), unit: "degree" },
          massValue: {
            value: data.mass.massValue.toFixed(2),
            unit: "jupiterMass",
          },
          perihelion: { value: data.perihelion.toString(), unit: "distance" },
          polarRadius: { value: data.polarRadius.toString(), unit: "distance" },
          rightAscension: { value: "02h 13m 33s", unit: undefined },
          semiMajorAxis: {
            value: data.semimajorAxis.toString(),
            unit: "distance",
          },
          siderealOrbit: { value: data.sideralOrbit.toFixed(2), unit: "days" },
          siderealRotation: {
            value: data.sideralRotation.toFixed(2),
            unit: "hours",
          },
          temperature: { value: data.avgTemp.toString(), unit: "degree" },
        })
      })
      .catch((error) => console.error(error))
  }, [])

  return jupiterData
}
