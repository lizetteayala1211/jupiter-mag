"use client"
import React from "react"

export function UnmuteButton({ unmuteCallback }: { unmuteCallback: any }) {
  return <UnmuteButton onClick={unmuteCallback}>Mute</UnmuteButton>
}
