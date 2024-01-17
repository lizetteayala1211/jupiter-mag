"use client"

import React from "react"
import { Stream } from "@cloudflare/stream-react"
import styled from "styled-components"

export const StreamContainer = styled.div`
  z-index: -10;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

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
        style={{
          color: "#a2a2a2",
          backgroundColor: "transparent",
          textTransform: "uppercase",
          fontSize: "12px",
        }}
        onClick={cb}
      >
        Tap here to unmute
      </a>
    </div>
  )
}

export default function Video() {
  const [userInteracted, setUserInteracted] = React.useState(false)
  const [showUnmuteButton, setShowUnmuteButton] = React.useState(true)

  const onUnmute = () => {
    setUserInteracted(true)
    setShowUnmuteButton(false)
  }

  return (
    <>
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

      <StreamContainer>
        <Stream
          src="1f0b81560d3380d4b27e3d2acf8d4e00"
          autoplay
          loop
          muted={!userInteracted}
        />
      </StreamContainer>
    </>
  )
}
