"use client"

import ReactPlayer from "react-player/youtube"
import JupiterLogo from "./JupiterLogo"
import React from "react"

export default function VideoPlayer() {
  const [muted, setMuted] = React.useState(true)

  // on user click to window we can unmute
  window.addEventListener("click", () => setMuted(false))

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
          style={{ margin: "2.5em 2em" }}
        >
          Donate
        </a>
      </div>

      <ReactPlayer
        url="https://www.youtube.com/watch?v=S0Qqea6EiCA"
        muted={muted}
        playing
        loop
        width="100%"
        height="100%"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          backgroundSize: "cover",
          background: "center",

          height: "100vh",
          width: "100%",
          zIndex: "-10",
        }}
      />
    </div>
  )
}
