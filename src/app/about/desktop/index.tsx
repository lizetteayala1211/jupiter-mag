"use client"

import {
  CaptionSection,
  DescSection,
  VideoSection,
  Main,
  PhotoSection,
} from "./styled"
import { Stream } from "@cloudflare/stream-react"
import React from "react"
import { Dummy } from "@/components/Dummy"

export default function Desktop() {
  const [userInteracted, setUserInteracted] = React.useState(false)

  return (
    <Main onClick={() => setUserInteracted(true)}>
      <VideoSection>
        <Stream
          src="1f0b81560d3380d4b27e3d2acf8d4e00"
          autoplay
          loop
          muted={!userInteracted}
        />
      </VideoSection>
      <CaptionSection>
        Video caption/ credits. ed ut perspiciatis unde omnis iste natus error
        sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut emnis iste natus error sit voluptatem accusantium odit
        aut quia voluptas sit aspernatur aut emnis iste natus error fugit.{" "}
      </CaptionSection>
      <PhotoSection>
        <Dummy width={410} height={527} />
      </PhotoSection>
      <DescSection>
        <h2 style={{ fontSize: "32px", paddingBottom: "16px" }}>Header</h2>
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
