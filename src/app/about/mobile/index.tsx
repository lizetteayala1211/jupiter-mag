"use client"

import React from "react"
import Video from "../Video"
import Image from "next/image"
import aboutImage from "../../../../public/photos/aboutPortrait.png"

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

      <div>
        <div>
          As two writers working within, but venturing beyond, the restrictive
          systems of the art world and the constraining vocabulary of art
          criticism, co-founders Camille Gallogly Bacon and Daria Simone Harper
          came together first through an admiration for each other&apos;s work,
          and have since co-conspired towards the conjuring of Jupiter Magazine:
          a publication invested in disrupting industry standards in service of
          creating conditions that support more viable writing lives. Grounded
          in expressive care and expanded with cosmic phenomenology, Jupiter
          began as a prayer, a spell, and an incantation—a belief that a world
          could be built through naming a desire. This quarterly arts and
          culture publication marks a restorative departure into an editorial
          space which resides at the nexus of political consciousness, spiritual
          awareness, and creative healing.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "375px",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          src={aboutImage}
          alt="Portrait of co-founders of Jupiter magazine"
        />
      </div>
    </div>
  )
}
