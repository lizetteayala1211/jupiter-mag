"use client"

import JupiterLogo from "./JupiterLogo"
import React from "react"
import { Stream } from "@cloudflare/stream-react"
import {
  SoftLaunchContainer,
  SoftLaunchHeader,
  StreamContainer,
} from "./styled"
import { keyframes } from "styled-components"

function DonateButton() {
  return (
    <div
      style={{
        margin: "2.5em 2em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <a href="https://artadia.org/jupiter-magazine/">Donate</a>
    </div>
  )
}

function UnmuteButton({ cb }: { cb: any }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        cursor: "pointer",
        paddingTop: "8px",
      }}
    >
      <a
        style={{ color: "white", backgroundColor: "transparent" }}
        onClick={cb}
      >
        Tap here to unmute...
      </a>
    </div>
  )
}

export default function SoftLaunchPage() {
  const [userInteracted, setUserInteracted] = React.useState(false)
  const [showUnmuteButton, setShowUnmuteButton] = React.useState(false)

  const onUnmute = () => {
    setUserInteracted(true)
    setShowUnmuteButton(false)
  }

  React.useEffect(() => {
    setTimeout(() => {
      setShowUnmuteButton(true)
    }, 3000)
  }, [])

  return (
    <SoftLaunchContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {showUnmuteButton ? (
          <UnmuteButton cb={onUnmute} />
        ) : (
          <div style={{ display: "block", height: "29.5px" }} />
        )}
      </div>

      <SoftLaunchHeader>
        <JupiterLogo />
        <DonateButton />
      </SoftLaunchHeader>

      <StreamContainer>
        <Stream
          src="1f0b81560d3380d4b27e3d2acf8d4e00"
          autoplay
          loop
          muted={!userInteracted}
        />
      </StreamContainer>
    </SoftLaunchContainer>
  )
}
