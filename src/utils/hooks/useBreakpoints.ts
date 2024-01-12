import { useMedia } from "react-use"
import {
  screenLgMax,
  screenMdMax,
  screenXlMin,
  screenXxsMax,
} from "../constants"

export function useBreakpoints() {
  const isMobile = useMedia(`(max-width: ${screenXxsMax})`, false)
  const isSmallDesktop = useMedia(`(max-width: ${screenMdMax})`, false)
  const isDesktop = useMedia(`(max-width: ${screenLgMax})`, false)
  const isLargeDesktop = useMedia(`(max-width: ${screenXlMin})`, false)
  return { isMobile, isSmallDesktop, isDesktop, isLargeDesktop }
}
