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

import { JupiterLogo } from "@/components"
import { FloatingMenu } from "@/components/floating-menu"
// import { Lottie } from "@/components/lottie-container"
import { Colophon } from "./Colophon"

import { useIntersectionObserver } from "@/utils/hooks"
import camilleSignature from "../../../../public/signatures/camille_white.png"
import dariaSignature from "../../../../public/signatures/daria_white.png"
import "./styles.css"
import { Programs } from "./Programs"

// todo: add back grain to home page so that it doesn't overlap the lottie file -> might invovle a refactor with how lottie is loaded in
export default function Page() {
  useIntersectionObserver()

  return (
    <Base homePage>
      <Main color="black">
        <LottieSection>
          <div className="video-container">
            <video width="560" height="315" src="./videos/Jupiter_video_off_white_1920x1080.mp4" muted playsInline loop autoPlay></video>
          </div>
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
          <FloatingMenu issue={3} />
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
            Daria Simone Harper
          </div>
        </SignaturesSection>

        <ContentSection>
          <pre id="programs" />
          <Programs />

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
      In April 1993 the orioles returned with birdsong as amber as their flaring feathers, heralding springtime in Southern California. Concurrently, Charles Gaines prepared to unveil <i> The Theater of Refusal: Black Art and Mainstream Criticism </i> at UC Irvine, which would later travel to UC Davis and UC Riverside. Boldly announcing an exigency (i.e. a galvanizing urgency), the exhibition was a clarion call in its own right, signifying not a change in seasons as in the case of the orioles but rather a deepened dawn in the long lineage of Black insurgence regarding the terms with which Black contemporary artists&apos; work is critically considered. Nearly three decades later, we re-orbit and honor Gaines’s salient offering, which serves as the titular and conceptual framework for <i> Issue 003. </i>
      <br/><br/>
      Including artists Jean-Michel Basquiat, Renée Green, David Hammons, Ben Patterson, Adrian Piper, Sandra Rowe, Gary Simmons, Lorna Simpson, Carrie Mae Weems, Pat Ward Williams, and Fred Wilson, <i> The Theater of Refusal </i> sought to “reveal the strategies of marginalization in the critical writing about a group of contemporary black artists, and to propose an alternative.” Gaines was invested in examining the discursive dynamic behind the tendency of “mainstream” critics to reduce the work of “contemporary black artists” to the task of chronicling the so-called &lsquo;Black experience,&rsquo; thereby neglecting their vital bearing on broader cultural and art historical discourses. 
      <br/><br/>
      To do so, Gaines rebuked conventional exhibition etiquette by hanging excerpts of articles addressing the work of those in the show in proximity to the artworks themselves—sometimes eye-to-eye, so close we might imagine they could feel one another&rsquo;s exhales. Establishing a spatial (and, thus, ideological) tension between the criticism and its so-called subject, the curatorial framework encouraged the audience to close-read for over-determinations and discrepancies between the forms themselves and the language coalesced around them. Gaines describes the exhibition as a means to “sugges[t] that the critical environment surrounding the works of these artists intentionally and unintentionally limits those works, creating a theater of refusal that punishes the work of black artists by making it immune to history and by immunizing history against it.” Alas, we remain in dire need of a lexicon that seeks not to “[punish] the work of black artists” by way of critical silence or flatness but, rather, one that entangles such work and the wide horizon of being from which it springs (i.e. the longwash of history, our shared and singular inheritances). 
      <br/><br/>
      Responding also to the continued seizure of access to materials that aid and abet a critic&apos;s capacity to tell the unflinching truth (see: book bans, the defunding of libraries…) and the related diminution of the scope of the sayable, we propose an enactment of cultural criticism that aspires to evade capture, constriction, and censorship. With this context and Gaines&rsquo;s imperative to &quot;propose an alternative&quot; in mind, <i> Issue 003: The Theater of Refusal </i> will unfold out in the open through a series of free public programs in our anchor cities of Chicago and New York, as well as Detroit and Los Angeles—our midwestern and coastal kin, respectively. 
      <br/><br/>
      Ultimately, this experi(mental/ential) issue seeks to provide a terrain on which we might rearticulate Gaines&apos;s mood of skepticism around traditional criticism and vivify, in the now, the legacy of enacting cultural criticism beyond the page (think: the kitchen table / 135th and Lennox / Black Twitter / the cookout and church pews / the block, the bus stop, the barbershop...) such that we may improvise together toward refracted understandings of who we imagine as “critics,” what we denote as “criticism,” and in what locales we presume this work takes place.
      </p>
    </div>
  )
}
