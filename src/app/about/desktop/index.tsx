"use client"

import { VideoSection, Main, HeaderSection } from "./styled"
import React from "react"
import Video from "../Video"
import { Header } from "@/components"

export default function Desktop() {
  return (
    <Main>
      <HeaderSection>
        <Header />
      </HeaderSection>
      <VideoSection>
        <Video />
      </VideoSection>
    </Main>
  )
}
