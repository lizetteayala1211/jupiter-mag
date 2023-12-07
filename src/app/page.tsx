"use client"

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), {
  ssr: false,
})

import StyledComponentsRegistry from "@/components/registry"
import dynamic from "next/dynamic"
import React from "react"

export default function Home() {
  return (
    <StyledComponentsRegistry>
      <VideoPlayer />
    </StyledComponentsRegistry>
  )
}
