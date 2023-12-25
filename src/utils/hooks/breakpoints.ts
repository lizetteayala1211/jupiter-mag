import { useMedia } from "react-use"
import { screenXsMax, screenXsMin, screenXxsMax } from "../constants"

export function useIsXsSmallDevice() {
  const isXsSmallMax = useMedia(`(max-width: ${screenXxsMax})`, false)
  return isXsSmallMax
}

export function useIsSmallDevice() {
  const isSmallMin = useMedia(`(min-width: ${screenXsMin})`, false)
  const isSmallMax = useMedia(`(max-width: ${screenXsMax})`, false)
  return isSmallMin && isSmallMax
}
