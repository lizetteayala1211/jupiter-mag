"use client"
import React from "react"
import type { LottiePlayer } from "lottie-web"

export function Lottie({ path }: { path: string }) {
  const ref: React.Ref<any> = React.useRef<HTMLDivElement>(null)
  const [lottie, setLottie] = React.useState<LottiePlayer | null>(null)

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

      return () => animation.destroy()
    }
  }, [lottie, path])

  return <div ref={ref} />
}
