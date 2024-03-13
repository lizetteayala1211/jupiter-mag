"use client"
import React from "react"
import type { LottiePlayer } from "lottie-web"
import { LottieContainer } from "./styled"

export function Lottie({ path, color }: { path: string; color: string }) {
  const ref: React.Ref<any> = React.useRef<HTMLDivElement>(null)
  const [lottie, setLottie] = React.useState<LottiePlayer | null>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default))
  }, [])

  React.useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: path,
      })

      animation.addEventListener("DOMLoaded", () => {
        setLoading(false)
      })

      return () => animation.destroy()
    }
  }, [lottie, path])

  return (
    <LottieContainer $loading={loading.toString()} $color={color}>
      <div ref={ref} />
    </LottieContainer>
  )
}
