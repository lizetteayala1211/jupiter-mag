import React from "react"
import type { LottiePlayer } from "lottie-web"

export function JupiterAnimation() {
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
        path: "/static/jupiter.lottie.json",
      })

      return () => animation.destroy()
    }
  }, [lottie])

  return <div ref={ref} />
}
