import { useMedia } from "react-use"
import { screenXxsMax } from "../constants"

export function useIsMobile() {
  const isXsSmallMax = useMedia(`(max-width: ${screenXxsMax})`, false)
  return isXsSmallMax
}
