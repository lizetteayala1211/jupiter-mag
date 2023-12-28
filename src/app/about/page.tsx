"use client"

import { Base } from "@/components/base/Base"
import {
  CaptionSection,
  DescSection,
  HeroSection,
  Main,
  PhotoSection,
} from "./styled"

export default function About() {
  return (
    <Base>
      <Main>
        <HeroSection />
        <CaptionSection />
        <PhotoSection />
        <DescSection />
      </Main>
    </Base>
  )
}
