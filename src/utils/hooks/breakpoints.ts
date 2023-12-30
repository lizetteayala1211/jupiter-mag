import { useMedia } from "react-use"
import { screenXsMax, screenXsMin, screenXxsMax } from "../constants"

export function useIsMobile() {
  const isXsSmallMax = useMedia(`(max-width: ${screenXxsMax})`, false)
  return isXsSmallMax
}
