"use client"

import ReactPlayer from "react-player/youtube"
import JupiterLogo from "./JupiterLogo"
import React from "react"
import { useIsLandscape, useIsXsSmallDevice } from "@/helpers/breakpoints"

type ReactPlayerStatus = {
  playedSeconds: number
  played: number
  loadedSeconds: number
  loaded: number
}

export default function VideoPlayer() {
  const [muted, setMuted] = React.useState(true)
  const [showJupiter, setShowJupiter] = React.useState(true)
  const isLandscape = useIsLandscape()

  const isMobile = useIsXsSmallDevice()

  // on user click to window we can unmute
  window.addEventListener("click", () => setMuted(false))

  const onShowJupiter = (e: ReactPlayerStatus) => {
    if (e.playedSeconds > 178) {
      setShowJupiter(false)
    } else {
      setShowJupiter(true)
    }
  }

  return (
    <div>
      <JupiterLogo
        style={
          showJupiter
            ? { opacity: 1, transition: "all 100ms linear 1.0s" }
            : { opacity: 0, transition: "all 150ms linear 1.1s" }
        }
      />
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

      <ReactPlayer
        url="https://www.youtube.com/embed/S0Qqea6EiCA"
        muted={muted}
        playing
        loop
        playerVars={{ modestbranding: 1 }}
        width="100%"
        height="100%"
        onProgress={(e: ReactPlayerStatus) => onShowJupiter(e)}
        style={{
          // dynamic positioning is to allow video to be clickable on mobile
          // not necessary to be clickable on desktop
          position: isMobile ? "relative" : "fixed",
          transform: isMobile ? "scale(1.8) translate(0, 80px)" : "",
          left: 0,
          top: "0.8em",
          backgroundSize: "cover",
          background: "center",

          zIndex: "-10",
        }}
      />
    </div>
  )
}
