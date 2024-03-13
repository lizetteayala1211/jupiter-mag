"use client"

import React from "react"
import Video from "../Video"

export default function Mobile() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        padding: "36px 24px",
      }}
    >
      <h1 style={{ fontSize: "36px" }}>Meet Jupiter</h1>

      <Video />

      <br />
    </div>
  )
}
