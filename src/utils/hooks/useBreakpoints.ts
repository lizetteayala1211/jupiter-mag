import { useMedia } from "react-use"
import {
  screenLgMax,
  screenLgMed,
  screenMdMax,
  screenMdMin,
  screenXlMin,
  screenXxsMax,
} from "../constants"

export function useBreakpoints() {
  const isMobile = useMedia(`(max-width: ${screenXxsMax})`, false)
  const isSmallDesktop = useMedia(`(max-width: ${screenMdMax})`, false)
  const isMediumDesktop = useMedia(`(max-width: ${screenLgMed})`, false)
  const isDesktop = useMedia(`(max-width: ${screenLgMax})`, false)
  const isLargeDesktop = useMedia(`(min-width: ${screenXlMin})`, false)
  return {
    isMobile,
    isSmallDesktop,
    isMediumDesktop,
    isDesktop,
    isLargeDesktop,
  }
}
