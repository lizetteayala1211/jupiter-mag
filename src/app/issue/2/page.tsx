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
import { Writers } from "./Writers"
import { AuthorDirectory } from "./AuthorDirectory"
import { Lottie } from "@/components/lottie-container"
import { JupiterLogo } from "@/components"
import { FloatingMenu } from "@/components/floating-menu"

import camilleSignature from "../../../../public/signatures/camille_white.png"
import dariaSignature from "../../../../public/signatures/daria_white.png"
import { useIntersectionObserver } from "@/utils/hooks"

// todo: add back grain to home page so that it doesn't overlap the lottie file -> might invovle a refactor with how lottie is loaded in
export default function Page() {
  useIntersectionObserver()

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
          <pre id="editorsNote" />
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
          <pre id="articles" />
          <AuthorDirectory homepage />
          <pre id="writers" />
          <Writers />
          <pre id="colophon" />
          {/* divider */}
          <div
            style={{
              marginTop: "112px",
              height: "1px",
              width: "100%",
              backgroundColor: "#FFFFFFBF",
            }}
          />
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
        margin: "16px",
      }}
    >
      <p>
        It is with boundless joy and elation that we offer to you{" "}
        <i>Issue 002: Quantum</i>, wherein we beckon readers to plunge into the
        depths of entropic encounters with a conversation between Legacy
        Russell, Jesús Hilario-Reyes, and Stella Rae Binion, contributions by
        Alexis Pauline Gumbs, Zoë Hopkins, isra rene, and Rohan Ayinde, as well
        as a poem by me (Daria S. Harper) and an essay by me (Camille G. Bacon).
        <br />
        <br />
        For us, quantum mechanics, as a conceptual framework, is spellbinding as
        it proposes an alternative means of understanding the universe’s
        language by devising models far more vast than those put forth by
        traditional physics. If quantum physicists use their equations to
        re-render the possible, we wonder what it might mean to apply such a
        lens to cultural criticism. In this spirit, we invite you to attune, by
        way of the writings gathered here, to cosmically incalculable channels
        of expression, feeling, interpretation, and being. We implore you to
        cascade toward those incisions in spacetime which ripple in the
        omnipresent fabric that quakes each time we mark our here-ness by
        allowing ourselves to be porous to the particles of encounter.
        <br />
        <br />
        Quantum as in evasive-precise-contradiction / Quantum as in sprawling,
        everywhere, always / Quantum as in minuscule, acute, exploding.
        <br />
        <br />
        May your soul strip down here, dissolve into the dust of our black
        eternity.
      </p>
    </div>
  )
}
