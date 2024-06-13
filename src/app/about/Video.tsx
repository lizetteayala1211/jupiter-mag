"use client"

import React from "react"
import { Stream } from "@cloudflare/stream-react"
import styled from "styled-components"
import { screenMdMin, screenSmMin, screenXsMin } from "@/utils/constants"

export const StreamContainer = styled.div`
  z-index: -10;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: ${screenSmMin}) {
    margin: 0 10% 0 10%;
  }

  @media only screen and (min-width: ${screenMdMin}) {
    margin: 0 20% 0 20%;
  }
`

export const CaptionContainer = styled.p`
  padding-top: 20px;
  font-size: 16px;

  @media only screen and (min-width: ${screenXsMin}) {
    margin: 0 12px 0 12px;
    font-size: 12px;
  }
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
          margin: "4px",
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
        <CaptionContainer>
          Super 8 Footage Directed, Shot, & Edited by josh brainin
          (@joshbrainin). Composed by Immanuel Wilkins (@immanuel.wilkins).
          Saxophone, Piano, Synthesizer by Immanuel Wilkins. Cello & SFX by
          Lester St. Louis (@lesterst.louis). Vocals by Ekep Nkwelle
          (@ekepnkwelle). Drums & Percussion by Kweku Sumbry (@kwe.drums).
          Produced by Jupiter Magazine.
        </CaptionContainer>
      </StreamContainer>
    </>
  )
}
