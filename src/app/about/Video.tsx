"use client"

import React from "react"
import { Stream } from "@cloudflare/stream-react"
import styled from "styled-components"

export const StreamContainer = styled.div`
  z-index: -10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 6em;
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
          color: "var(--color-white)",
          borderRadius: "8px",
          margin: "8px",
          border: "1px solid var(--color-transparent-white)",
          padding: "4px 12px",
          textTransform: "uppercase",
          fontSize: "14px",
          fontWeight: 400,
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
        <div style={{ padding: "0 2em" }}>
          <p>
            Super 8 Footage Directed, Shot, & Edited by josh brainin
            (@joshbrainin). Composed by Immanuel Wilkins (@immanuel.wilkins).
            Saxophone, Piano, Synthesizer by Immanuel Wilkins. Cello & SFX by
            Lester St. Louis (@lesterst.louis). Vocals by Ekep Nkwelle
            (@ekepnkwelle). Drums & Percussion by Kweku Sumbry (@kwe.drums).
            Produced by Jupiter Magazine.
          </p>
        </div>
      </StreamContainer>
    </>
  )
}
