"use client"

import { VideoSection, Main } from "./styled"
import React from "react"
import Video from "../Video"

export default function Desktop() {
  return (
    <Main>
      <VideoSection>
        <Video />
      </VideoSection>
    </Main>
  )
}
