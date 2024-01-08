import React from "react"
import "@lottiefiles/lottie-player"
import { LottieContainer } from "./styled"

export function JupiterAnimation() {
  const ref: React.Ref<any> = React.useRef(null)

  return (
    <LottieContainer>
      <lottie-player
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="https://lottie.host/199c45cd-3b83-490b-a909-b7f091adb36a/yt8Dua96Rw.json"
      />
    </LottieContainer>
  )
}
