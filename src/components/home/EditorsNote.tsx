import { Header, JupiterLogo } from "@/components"
import { BigGuy, HugeGuy } from "@/utils/layout"
import {
  DesktopEditorContainer,
  MobileEditorContainer,
  EditorCover,
  EditorNote,
} from "./styled"
import Image from "next/image"
import dariaSignatureBlack from "../../../public/signatures/daria_black.png"
import camilleSignatureBlack from "../../../public/signatures/camille_black.png"
import dariaSignatureWhite from "../../../public/signatures/daria_white.png"
import camilleSignatureWhite from "../../../public/signatures/camille_white.png"
import { useBreakpoints } from "@/utils/hooks"

export function EditorsNote() {
  const { isMobile, isSmallDesktop, isDesktop } = useBreakpoints()
  const getResponsiveSignatureSize = (): number => {
    if (isMobile) return 150
    if (isSmallDesktop) return 175
    if (isDesktop) return 225
    return 350
  }

  return isMobile ? (
    <MobileEditorContainer>
      <Header />
      <EditorCover>
        <div>Editor&apos;s</div>
        <div>Note</div>
      </EditorCover>
      <BigGuy />
      <p style={{ fontSize: "20px" }}>
        Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur.
      </p>
      <BigGuy />
      <p style={{ fontSize: "16px" }}>
        oluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error
        sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo.
      </p>
      <HugeGuy />
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
        <div style={{ height: "100%" }}>
          <div style={{ height: "20%", width: "50%", padding: "16px" }}>
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
        <p style={{ fontSize: "20px" }}>
          Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur.
        </p>
        <HugeGuy />
        <p style={{ fontSize: "16px" }}>
          oluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis
          iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo.
        </p>

        <HugeGuy />

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
