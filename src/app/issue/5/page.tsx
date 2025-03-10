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

import { Contributors } from "./Contributors"

import "./styles.css"

export default function Page() {
  useIntersectionObserver()

  return (
    <Base homePage>
      <Main color="black">
        <LottieSection>
          <div className="video-container">
            <video width="560" height="315" src="../videos/Jupiter_video_off_white_1920x1080.mp4" muted playsInline loop={true} data-autoplay="" autoPlay={true} ></video>
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
          <FloatingMenu issue={5} />
        </FloatingMenuSection>
        <SignaturesSection className="sig-section">
          <div className="camille-sig-container" style={{ display: "flex", flexDirection: "column" }}>
            <SignatureContainer
              src={camilleSignature}
              alt="Signature of Camille"
              className="camille-sig"
            />
            Camille Bacon
          </div>
          <div className="daria-sig-container" style={{ display: "flex", flexDirection: "column" }}>
            <SignatureContainer 
            src={dariaSignature} 
            alt="Signature of Daria" 
            className="daria-sig"
            />
            Daria Simone Harper
          </div>
        </SignaturesSection>
        <ContentSection>
        <pre id="contributors" />
        <Contributors />
          <pre id="colophon" />
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
    <div className="editors-note-copy"
      style={{
        fontSize: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        margin: "16px",
      }}
    >
      <p>
      This issue seeks to disrupt the collective tendency to keep our tongues latched to the tops of our mouths when it comes to publicly critiquing Black cultural production.
      <br/><br/>
      At some point we seem to have collectively decided that protecting the culture also means celebrating everything it births and thus so often express our disappointment in an artist, artwork, trend, or tradition behind closed doors. We&#39;re skeptical of this tendency and wonder what the merits of questioning it might be. This is our first attempt at doing so, at cleaving a passageway open for writers to plant seeds of dissenting opinion with their full chests and to hold the risk involved in doing so together. 
      <br/><br/>
      Our conceptual framing borrows from the practice of critique inherent to hip-hop&#39;s notorious &#34;diss track&#34; form to consider what it might mean to apply the vigor of this modality to the realm of Black cultural criticism more broadly, clocking all the while that the &#34;diss track&#34; is by no means beyond reproach. Like other forms of public call outs, &#34;diss tracks&#34; tend to evoke shame rather than the possibilities of repair and growth. We believe in the latter. And still, this beloved and sometimes challenged mode of criticism holds a valuable function, which we take up here. 
      <br/><br/>
      A whole arc of examples exist across time and mediums wherein artists, musicians, and writers publicly disagreed: Biggie and Tupac&#39;s iconic, cross-coastal exchange of snubs, or the infamous exchange of fire between Kendrick and Drake &#47; when James Baldwin and Richard Wright physically brawled over Native Son at Paris&#39;s iconic Les Deux Magots &#47; Zora Neale Hurston and Langston Hughes, Black literature&#39;s patron saints of the friends-to-enemies pipeline &#47; the time June Jordan and Audre Lorde&#39;s friendship fell out over their differing views on Palestinian resistance &#47; or, when Wole Soyinka rebuked Léopold Senghor&#39;s conceptions of Négritude, famously declaring that &#34;a tiger doesn&#39;t proclaim his tigritude, he pounces&#34; &#47; and also that time Faith Ringgold wrote to Romare Bearden requesting admittance into the Spiral Group, which he dismissively denied, or when Howardena Pindell and Betye Saar publicly and vehemently decried Kara Walker&#39;s work… 
      <br/><br/>
      Issue 005 is a beneficiary of the bravery &#40;albeit some of it also worthy of critique&#41; of an entire lineage, including those named above as well as people like bell hooks, Michelle Wallace, Jessica Lynne, Taylor Renee Aldridge, and so many others who have urged us to be honest critics and to shoulder the potential cost of such evocations together. In this spirit, some writers featured here critique a particular artist or aesthetic offering, some take aim at the pernicious machinations of the visual art industry more broadly, while others elucidate the exercise of critique at play within a specific artwork.
      <br/><br/>
      We know there is much at stake. Practicing public critique can have social ramifications and impact the careers of all parties involved. At the same time, refraining altogether from holding up a magnifying glass to the defining moments of contemporary Black visual culture might be the biggest risk of all. We seek not to churn up gratuitous conflict, but rather to refuse the tacit gag order that has been placed on our pens, to dig our heels into our belief that a discursive environment that allows for both harmony and active, vocalized disagreement is a most alive one. Let us wonder together, through this chorus of voices, about what Black culture loses if we can&#39;t say what we mean out loud…   
      </p>
    </div>
  )
}
