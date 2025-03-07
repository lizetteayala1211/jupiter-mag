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
      Lorem ipsum odor amet, consectetuer adipiscing elit. Cursus parturient aliquet vestibulum tortor blandit diam. Nibh dis ultricies per nisl placerat sagittis nisl. Pellentesque tempor ultricies; per aliquet dui elementum rhoncus risus. Fringilla finibus nisl consectetur arcu libero facilisis. Viverra efficitur rhoncus tellus adipiscing et mattis habitasse. In pellentesque sit accumsan, aliquam magnis scelerisque. Tristique nisl ante potenti himenaeos bibendum. Semper malesuada urna venenatis nullam cursus, nisl elementum erat.
      <br/><br/>
      Blandit taciti libero et cubilia magna. Tempus litora et diam augue; est cras blandit vivamus. Tempus nec feugiat vestibulum; fames ridiculus mus placerat natoque vestibulum. Nisi ligula faucibus himenaeos facilisis natoque, amet malesuada nibh pellentesque? At etiam adipiscing luctus per commodo maecenas cubilia. Mollis litora phasellus nam quam hendrerit pretium ac adipiscing. Consectetur justo massa, commodo ornare at tellus aenean sodales.
      <br/><br/>
      Ac quam ornare senectus cubilia lacinia per ex. Pulvinar consequat aliquet cras semper magnis leo. Et curae convallis semper est ultrices; libero ut. Nullam torquent pulvinar quam ut maecenas morbi morbi. Nisi duis convallis nisi tincidunt phasellus in condimentum ullamcorper porttitor. Habitant vel ridiculus mattis non euismod. Eget ex ullamcorper nascetur velit elementum nibh tincidunt potenti. Purus cubilia elementum mattis magna fermentum dolor malesuada. Placerat facilisis sagittis urna luctus eleifend et phasellus auctor. Per sit ex praesent turpis vivamus conubia egestas accumsan.
      <br/><br/>
      Quam vivamus eros enim himenaeos neque faucibus erat purus. Hendrerit sapien fermentum platea elementum commodo volutpat. Nulla habitasse fringilla maecenas nibh fermentum senectus morbi arcu. Aliquet cursus tempus sit suscipit iaculis amet cubilia ultrices. Pulvinar magna eros libero nostra vestibulum consectetur volutpat eros. Justo dictumst porta sagittis erat curae tortor varius nostra. Penatibus curabitur fusce libero; posuere non nulla.
      <br/><br/>
      Venenatis feugiat penatibus tempor ipsum fames. Nisi non sodales molestie turpis dignissim integer ligula justo. Quisque quam porttitor suscipit hendrerit nascetur imperdiet auctor. Nisl aliquam ipsum adipiscing praesent dui a. Faucibus at proin nec dictumst ultricies maximus id. Class interdum ex nibh eros tellus aptent. Leo egestas euismod taciti quam praesent curae congue a.
      </p>
    </div>
  )
}
