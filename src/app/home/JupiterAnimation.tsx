import React from "react"
import "@lottiefiles/lottie-player"

export function JupiterAnimation() {
  const ref: React.Ref<any> = React.useRef(null)

  return (
    <lottie-player
      ref={ref}
      autoplay
      loop
      mode="normal"
      src="https://lottie.host/8c7bf9d6-1300-4850-ada7-b44028bfb70d/rwAUsMzGIB.json"
    />
  )
}
