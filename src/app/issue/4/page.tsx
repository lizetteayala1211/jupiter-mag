"use client"

import { Base } from "@/components"

// styled assets
import {
  ContentSection,
  EditorsNoteSection,
  EditorsNoteTitleSection,
  // FloatingMenuSection,
  LogoSection,
  LottieSection,
  Main,
  SignatureContainer,
  SignaturesSection,
} from "./styled"

import { AuthorDirectory } from "./AuthorDirectory"

import { JupiterLogo } from "@/components"
// import { FloatingMenu } from "@/components/floating-menu"
// import { Lottie } from "@/components/lottie-container"
import { Colophon } from "./Colophon"

import { useIntersectionObserver } from "@/utils/hooks"
import camilleSignature from "../../../../public/signatures/camille_white.png"
import dariaSignature from "../../../../public/signatures/daria_white.png"
import EditorNoteImg from "../../../../public/photos/parable.jpg"

import { Contributors } from "./Contributors"

import "./styles.css"

// todo: add back grain to home page so that it doesnt overlap the lottie file -> might invovle a refactor with how lottie is loaded in
export default function Page() {
  useIntersectionObserver()

  return (
    <Base homePage>
      <Main color="black">
        <LottieSection>
          <div className="video-container">
            <video width="560" height="315" src="../videos/Jupiter_video_issue4_1920x1080_01.mp4" muted playsInline loop={true} data-autoplay="" autoPlay={true} ></video>
          </div>
        </LottieSection>

        <LogoSection>
          <JupiterLogo color="white" width={143} height={53} />
        </LogoSection>

        <EditorsNoteTitleSection>
          <pre id="editorsNote"/>
          <div>Editor&apos;s</div>
          <div>Note</div>
        </EditorsNoteTitleSection>
        <EditorsNoteSection>
          <EditorsNoteCopy />
        </EditorsNoteSection>

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
        <Contributors />
        <AuthorDirectory homepage />

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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={EditorNoteImg} alt="Parable of Sower Cover" className="parable"/>
    </div>
    <p>
    <span className="centered small"> Octavia E. Butler&#39;s Parable of the Sower, published by Warner Books in 1995. Cover art by John Jude Palencar. </span>
    <br/><br/>
    &#8220;There is no end <br/>
    To what a living world <br/>
    Will demand of you.&#8221; <br/>
    —Lauren Oya Olamina in Octavia E. Butler&#39;s <i> Parable of the Sower </i>
    <br/><br/>
    With her eyes firmly shut against the environment that surrounds her and insistently open to the world she is bending into being, Lauren Oya Olamina, the protagonist of Octavia E. Butler&#39;s <i> Parable of the Sower </i> &#40;1993&#41; and <i> Parable of the Talents </i> &#40;1998&#41; is &#8220;Shaping God.&#8221; 
    <br/><br/>
    The vision is entombed at the apex of her inhale, lungs full of enlivened potential. Stood on the edge of a shifting horizon, her hair is meticulously plaited into a crown, an inverted cradle for her crackling mind. From around her head emanates a nebula of sky-blue haze. She is encircled by the cosmos: a crescent moon, a dappling of stars, fluorescent forms emanating from the celestial environment that envelops her. Her serene visage is illuminated by a source lying beyond the frame. Positioned at her heart&#39;s center is a glowing emblem of the earth. Coalescing in her soul&#39;s eye and framed between her two hands is something we cannot see, but can sense nonetheless through the mood of the image. Otherworldly and contemplative, this is a portrait of forethought. This is a portrait of conjure. This is a portrait of Lauren Olamina.
    <br/><br/>
    Lauren Olamina is listening. Lauren Olamina is feeling. Lauren Olamina is plotting. 
    <br/><br/>
    Like Lauren, Butler was listening, feeling, and plotting. Beyond that, she was <i> prophesying. </i> While readily associated with Greek mythology and Christian traditions, propheticism can too be attributed to the uncanny precision of Butler&#39;s body of work, namely the <i> Parables. </i> Taking notes from her, we have organized our fourth issue around the theme <i> of Prophecy. </i>
    <br/><br/>
    Though she is most often described as &#8220;prescient,&#8221; i.e. &#8220;having or showing knowledge of events before they take place,&#8221; &#40;<i>Parable of the Sower </i> begins in 2024 and coalesces around twinned relational and ecological collapse / Andrew Steele Jarret, the fascist president in <i> Parable of the Talents </i> <i> &#40;Sower&#39;s </i> sequel, published in 1998&#41;, runs his campaign on the back of the slogan &#8220;make America great again&#8221;&#41;, Butler&#39;s fortitude indeed stretches past prescience and lands firmly in the realm of &#8220;prophetic.&#8221; She is not only a fortune teller for the fate of humanity &#40;as in, <i> this is what&#39;s going to happen </i>&#41;, but also a writer invested in mapping and articulating the adaptations we must undergo in order to reach and walk in the future that is foretold in the first place &#40;as in, <i> this is what you can do about the inevitable </i>&#41;. Beyond imagining a world teetering on the edge of social, political, and environmental apocalypse as well as the emotional environments of those living through such transformations, Butler, through the <i> Parables, </i> provides an instruction manual of sorts for our continued survival. The narratives therein, as in the case of prophecies, not only prognosticate but sculpt reality—they are both the water running the rock smooth and the shards of sediment the flow takes with it.
    <br/><br/>
    Likewise, the writers gathered here &#40;Imani Perry, Amandine Nana, Rhya Marlene Moffitt, Angelique Rosales Salgado, Rikki Byrd, as well as Daria and I&#41;, and the artists we weave worlds of language around &#40;Lorna Simpson, Torkwase Dyson, vanessa german, Harmony Holiday, Lauren Halsey, Tiff Massey, American Artist, and Kelela&#41; inflect our horizon of contemporary cultural production with incandescent lightning rods that electrify our impulses toward cultivating the insurgent imaginations we need to survive amidst an ongoing condition wherein &#8220;there is no end to what a living world will demand of you.&#8221; Each of the writers holding hands across this table of contents and those they&#39;ve chosen to build relation with through the page continue this legacy of grappling earnestly with what our living requires. We hope that the <i> prophesying </i> encountered in this issue can focus the direction of and guide that adaptation as well.   
    <br/><br/>
    Further, we adorn Butler herself, not just her writings, with the adjective of &#8220;prophetic.&#8221; As is the case in her works of fiction, Butler&#39;s interviews serve as anchoring warnings through which we may prepare ourselves to meet the world we have inherited with the sharp criticality and incisiveness we need to reshape it too. In <a href="https://charlierose.com/videos/28978" target="_blank" className="styled"> a conversation with Charlie Rose </a> conducted three weeks before her 53rd birthday, Butler said: &#8220;I&#39;ve been complaining about the number of would-be leaders who seem to be willing to sacrifice half their country if they can just rule over the rest. I mean, we seem to have had, since the end of the Cold War, too many people like that.&#8221; We are struck by how, though uttered in 2000, this statement could have emerged in response to the ongoing genocide in Gaza and the IOF&#39;s expansion into Lebanon and Iran, as well as the extractionist reign of terror &#40;perpetuated foremost by the United States&#41; that continues to wreak havoc both domestically and globally. 
    <br/><br/>
    In response to Butler&#39;s complaint, we maintain that experimental arts writing and cultural criticism can serve as one wrench in the operations of those &#8220;would-be leaders&#8221; who abide by the logics that feed the mouth of fascism. Here, we corroborate Mandy Harris Williams&#39;s essay &#8220; <a href="http://hman.love/journal/critique-as-care" target="_blank" className="styled"> Critique as Care </a>,&#8221; in which she states: &#8220;Critique holds fascism as its enemy. … With social and political criticism out of the way, fascism is left to flourish.&#8221; We hope you will engage with this issue basked in a solicitude for the worlds attuned to regard, civic responsibility, and mutual dependence from which Harris Williams&#39;s and Butler&#39;s statements, and those found in each of these contributions, emerge. 
    </p>
    <br/><br/><br/><br/><br/><br/>


    </div>
  )
}
