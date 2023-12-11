"use client"

import JupiterLogo from "./JupiterLogo"
import React from "react"
import { useIsLandscape } from "@/helpers/breakpoints"
import { Stream } from "@cloudflare/stream-react"

export default function VideoPlayer() {
  const [userInteracted, setUserInteracted] = React.useState(true)
  const isLandscape = useIsLandscape()

  // on user click to window we can unmute
  window.addEventListener("click", () => setUserInteracted(false))

  return (
    <div>
      <JupiterLogo />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <a
          href="https://artadia.org/jupiter-magazine/"
          style={
            isLandscape ? { margin: "2.5em 3em" } : { margin: "2.5em 2em" }
          }
        >
          Donate
        </a>
      </div>
      <div style={{}}>
        <Stream
          autoplay
          loop
          height="100vh"
          width="100vw"
          controls={false}
          muted={!userInteracted}
          src="1f0b81560d3380d4b27e3d2acf8d4e00"
        />
      </div>
    </div>
  )
}
