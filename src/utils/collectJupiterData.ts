import React from "react"
import { getJupiterBasics } from "@/api"
import { JupiterData, PlanetsApiShape } from "./types"
import { fromLightyearToMiles } from "./helpers"

export const collectJupiterData = () => {
  const [jupiterData, setJupiterData] = React.useState<JupiterData>({
    distance: 0,
    semi_major_axis: 0,
    temperature: 0,
    period: 0,
    mass: 0,
  })

  React.useEffect(() => {
    // get initial jupiter info
    getJupiterBasics()
      .then((data: PlanetsApiShape) => {
        setJupiterData({
          ...jupiterData,
          distance: fromLightyearToMiles(data.distance_light_year),
          semi_major_axis: data.semi_major_axis,
          temperature: data.temperature,
          period: data.period,
          mass: data.mass,
        })
        console.log(data)
      })
      .catch((error) => console.error(error))
  }, [])

  console.log(jupiterData)
}
