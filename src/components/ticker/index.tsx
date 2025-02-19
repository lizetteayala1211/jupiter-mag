import React from "react"
import { useJupiterData } from "@/utils/hooks"
import { TickerContainer, TickerContent, TickerItem } from "./styled"
import { transformJupiterKeyWords } from "@/utils/helpers"
import { JupiterData, Unit } from "@/utils/types"

export function Ticker() {
  const jupiterData = useJupiterData()
  if (!jupiterData) return

  const handleUnit = (unit: Unit) => {
    switch (unit) {
      case "days": {
        return " days"
      }
      case "degree": {
        return "°"
      }
      case "distance": {
        return " km"
      }
      case "hours": {
        return " hours"
      }
      case "jupiterMass": {
        return "Mⱼ"
      }
      case "speed": {
        return "m.s⁻¹"
      }
      case "number": {
        return
      }
      default: {
        return
      }
    }
  }

  return (
    <TickerContainer>
      <TickerContent>
        {Object.keys(jupiterData).map((key) => (
          <TickerItem key={key}>
            {transformJupiterKeyWords(key)}
            {": "}
            {jupiterData[key as keyof JupiterData].value}
            {handleUnit(jupiterData[key as keyof JupiterData].unit)}
          </TickerItem>
        ))}
      </TickerContent>
    </TickerContainer>
  )
}
