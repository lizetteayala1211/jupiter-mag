import { JupiterLogo } from "@/components"
import { BigGuy, HugeGuy, MediumGuy } from "@/utils/layout"
import {
  DesktopEditorContainer,
  MobileEditorContainer,
  EditorCover,
  EditorNote,
} from "./styled"
import Image from "next/image"
import dariaSignatureBlack from "../../../../public/signatures/daria_black.png"
import camilleSignatureBlack from "../../../../public/signatures/camille_black.png"
import dariaSignatureWhite from "../../../../public/signatures/daria_white.png"
import camilleSignatureWhite from "../../../../public/signatures/camille_white.png"
import { useBreakpoints } from "@/utils/hooks"

export function EditorsNote() {
  const { isMobile, isSmallDesktop, isDesktop } = useBreakpoints()

  // todo: make this into a styled component for faster processing speeds
  const getResponsiveSignatureSize = (): number => {
    if (isMobile) return 150
    if (isSmallDesktop) return 175
    if (isDesktop) return 225
    return 350
  }

  // todo: make this into a styled component for faster processing speeds
  const getResponsiveJupiterSize = (): string => {
    if (isMobile) return "15%"
    if (isSmallDesktop) return "20%"
    if (isDesktop) return "25%"
    return "30%"
  }

  return isMobile ? (
    <MobileEditorContainer>
      <EditorCover>
        <div>Editor&apos;s</div>
        <div>Note</div>
      </EditorCover>
      <BigGuy />
      <EditorsNoteCopy />

      <div style={{ display: "flex", alignItems: "flex-end", gap: "2em" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Image
            width={getResponsiveSignatureSize()}
            src={camilleSignatureWhite}
            alt="Signature of Camille"
          />
          <p style={{ fontSize: "16px", marginInlineStart: "16px" }}>
            Camille Bacon
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Image
            width={getResponsiveSignatureSize()}
            src={dariaSignatureWhite}
            alt="Signature of Daria"
          />
          <p style={{ fontSize: "16px", marginInlineStart: "16px" }}>
            Daria Harper
          </p>
        </div>
      </div>
    </MobileEditorContainer>
  ) : (
    <DesktopEditorContainer>
      <EditorCover>
        <div style={{ height: "110%" }}>
          <div
            style={{
              height: getResponsiveJupiterSize(),
              padding: "0 16px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <JupiterLogo color="black" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              alignItems: "flex-end",
            }}
          >
            <div>Editor&apos;s</div>
            <div>Note</div>
          </div>
        </div>
      </EditorCover>
      <EditorNote className="abhaya-libre">
        <MediumGuy />

        <EditorsNoteCopy />

        <div style={{ display: "flex", alignItems: "flex-end", gap: "2em" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Image
              width={getResponsiveSignatureSize()}
              src={camilleSignatureBlack}
              alt="Signature of Camille"
            />
            Camille Bacon
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Image
              width={getResponsiveSignatureSize()}
              src={dariaSignatureBlack}
              alt="Signature of Daria"
            />
            Daria Harper
          </div>
        </div>
      </EditorNote>
    </DesktopEditorContainer>
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
        Black Spirit Memoir) is to posit that the reality we have inherited is
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

      <HugeGuy />
      <p
        style={{
          fontSize: "16px",
          marginInlineStart: "16px",
          marginBottom: "16px",
        }}
      >
        Always (in orbit),
      </p>
    </div>
  )
}
