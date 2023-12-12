"use client"

const SoftLaunchPage = dynamic(() => import("@/components/SoftLaunchPage"), {
  ssr: false,
})

import StyledComponentsRegistry from "@/components/registry"
import dynamic from "next/dynamic"
import React from "react"

export default function Home() {
  return (
    <StyledComponentsRegistry>
      <SoftLaunchPage />
    </StyledComponentsRegistry>
  )
}
