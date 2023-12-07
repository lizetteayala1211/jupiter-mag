"use client"

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), {
  ssr: false,
})

import StyledComponentsRegistry from "@/components/registry"
import dynamic from "next/dynamic"

export default function Home() {
  return (
    <StyledComponentsRegistry>
      <VideoPlayer />
    </StyledComponentsRegistry>
  )
}
