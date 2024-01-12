"use client"

import React from "react"
import { Dummy } from "@/components"

export default function Mobile() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        margin: " 36px 12px",
      }}
    >
      <h1 style={{ fontSize: "36px" }}>Meet Jupiter</h1>

      <Dummy width={363} height={327} />

      <br />

      <div style={{ margin: "12px" }}>
        <h2 style={{ fontSize: "32px", paddingBottom: "16px" }}>Header</h2>

        <div>
          Jupiter Magazine is a quarterly arts and culture publication that
          marks a restorative departure into an editorial space that is a nexus
          of political consciousness, spiritual awareness, and creative healing.
          Grounded in expressive care and expanded with cosmic phenomenology,
          Jupiter began as a prayer, a spell, and an incantation—a belief that a
          world could be built through naming a desire. As two writers working
          within, but venturing beyond, the restrictive systems of the art world
          and the constraining vocabulary of art criticism, co-founders Camille
          Gallogly Bacon and Daria Simone Harper came together first through an
          admiration for each other&apos;s work, and have since co-conspired
          towards the building of Jupiter: a publication invested in disrupting
          industry standards in service of creating conditions that support more
          viable writing lives.
        </div>
      </div>
      <Dummy width={363} height={527} />
    </div>
  )
}
