"use client"

import { DescSection, VideoSection, Main, PhotoSection } from "./styled"
import React from "react"
import Image from "next/image"
import aboutImage from "../../../../public/photos/aboutPortrait.jpeg"
import Video from "../Video"

export default function Desktop() {
  return (
    <Main>
      <VideoSection>
        <Video />
      </VideoSection>
      <PhotoSection>
        <Image
          style={{ width: "100%", height: "100%", padding: "0 2em" }}
          src={aboutImage}
          alt="Portrait of co-founders of Jupiter magazine"
        />
      </PhotoSection>
      <DescSection>
        Jupiter Magazine is a quarterly arts and culture publication that marks
        a restorative departure into an editorial space that is a nexus of
        political consciousness, spiritual awareness, and creative healing.
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
      </DescSection>
    </Main>
  )
}
