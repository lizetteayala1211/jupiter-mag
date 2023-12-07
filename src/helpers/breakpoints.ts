import { useMedia } from "react-use"

export function useIsXsSmallDevice() {
  const isXsSmallMax = useMedia("(max-width: 479px)", false)
  return isXsSmallMax
}

export function useIsSmallDevice() {
  const isSmallMin = useMedia("(min-width: 480px)", false)
  const isSmallMax = useMedia("(max-width: 767px)", false)
  return isSmallMin && isSmallMax
}

export function useIsLandscape() {
  const isLandscape = useMedia("(orientation: landscape)", false)
  return isLandscape
}
