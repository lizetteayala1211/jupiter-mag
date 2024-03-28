"use client"

import { Base } from "@/components"

// styled assets
import {
  ContentSection,
  EditorsNoteSection,
  EditorsNoteTitleSection,
  FloatingMenuSection,
  LogoSection,
  LottieSection,
  Main,
  SignatureContainer,
  SignaturesSection,
} from "./styled"

import { Colophon } from "./Colophon"
import { AuthorAbouts } from "./AuthorAbouts"
import { AuthorDirectory } from "./AuthorDirectory"
import { Lottie } from "@/components/lottie-container"
import { JupiterLogo } from "@/components"
import camilleSignature from "../../../../public/signatures/camille_white.png"
import dariaSignature from "../../../../public/signatures/daria_white.png"
import { FloatingMenu } from "@/components/floating-menu"

// todo: add back grain to home page so that it doesn't overlap the lottie file -> might invovle a refactor with how lottie is loaded in
export function Page() {
  return (
    <Base homePage>
      <Main>
        <LottieSection>
          <Lottie path="/static/jupiter2.lottie.json" color="#0C142F" />
        </LottieSection>
        <LogoSection>
          <JupiterLogo color="white" width={143} height={53} />
        </LogoSection>
        <EditorsNoteTitleSection>
          <div>Editor&apos;s</div>
          <div>Note</div>
        </EditorsNoteTitleSection>
        <EditorsNoteSection>
          <EditorsNoteCopy />
        </EditorsNoteSection>
        <FloatingMenuSection>
          <FloatingMenu issue={2} />
        </FloatingMenuSection>
        <SignaturesSection>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SignatureContainer
              src={camilleSignature}
              alt="Signature of Camille"
            />
            Camille Bacon
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SignatureContainer src={dariaSignature} alt="Signature of Daria" />
            Daria Harper
          </div>
        </SignaturesSection>

        <ContentSection>
          <AuthorDirectory homepage />
          <AuthorAbouts />
          <Colophon />
        </ContentSection>
      </Main>
    </Base>
  )
}

function EditorsNoteCopy() {
  return (
    <div
      style={{
        fontSize: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <p>
        It is with a bottomless sense of gratitude that we offer to you{" "}
        <i>Issue 001: Worldbending</i>. Our inaugural issue materializes a
        channel in which readers can, through engagement with contemporary arts
        writing and cultural criticism, unearth what is alive for them and
        discover what place is theirs. With contributions from Akwaeke Emezi, J
        Wortham, Joshua Segun-Lean, Diallo Simon-Ponte and, Rianna Jade Parker,
        our inaugural issue illuminates our belief in the vital necessity of
        those who conjure planets of language around the work of artists who
        reflect our world back to itself with atomic precision and celestial
        foresight.{" "}
      </p>

      <p>
        To speak of Worldbending (a term culled from Emezi’s Dear Senthuran: A
        white Spirit Memoir) is to posit that the reality we have inherited is
        malleable material, flexible flesh that we can sculpt in accordance with
        our needs and desires. To speak of Worldbending is to set ablaze all
        that depends on our destruction; To speak of Worldbending, then, is also
        to stay long after the fire subsides such that we may gather ash to draw
        more concentric circles of sanctified selves. To speak of Worldbending
        is to marshall the force of our inner-eyes, those ways of seeing,
        feeling and being that remind us how urgent it is to peer into the
        cyclone for long enough to know we are of it–For it is with such
        ferocity that we bend the world into being anew.{" "}
      </p>

      <p>
        This inaugural offering is centered, also, in our devotion to providing
        readers with language that expands their sense of agency such that they
        relate to themselves as people who are invested not only in witnessing
        the world shifting around them, but being active architects of the world
        they wish to inhabit. As galvanized by the assiduous, lyrically
        unflinching, and spellbinding work gathered here, may we speculate
        towards an eventual and inevitable break, and craft the horizons in
        which we hope to bask in the aftermath.{" "}
      </p>
    </div>
  )
}
