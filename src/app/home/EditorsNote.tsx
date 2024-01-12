import { JupiterLogo, MobileGrain } from "@/components"
import { BigGuy, HugeGuy } from "@/utils/layout"
import {
  DesktopEditorContainer,
  MobileEditorContainer,
  EditorCover,
  EditorNote,
} from "./styled"
import Image from "next/image"
import dariaSignature from "../../../public/signatures/daria.png"
import camilleSignature from "../../../public/signatures/camille.png"
import { useBreakpoints } from "@/utils/hooks"

export function EditorsNote() {
  const { isMobile, isSmallDesktop, isDesktop, isLargeDesktop } =
    useBreakpoints()
  const getResponsiveSignatureSize = (): number => {
    if (isSmallDesktop) return 200
    if (isDesktop) return 250
    if (isLargeDesktop) return 350
    return 50 // is mobile
  }

  return isMobile ? (
    <MobileEditorContainer>
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

      {/* <div style={{ display: "flex", alignItems: "flex-end", gap: "2em" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Image
            width={getResponsiveSignatureSize()}
            src={camilleSignature}
            alt="Signature of Camille"
          />
          Camille Bacon
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Image
            width={getResponsiveSignatureSize()}
            src={dariaSignature}
            alt="Signature of Daria"
          />
          Daria Harper
        </div>
      </div> */}
    </MobileEditorContainer>
  ) : (
    <DesktopEditorContainer>
      <EditorCover>
        <div style={{ height: "100%" }}>
          <div style={{ height: "20%", width: "50%", padding: "16px" }}>
            <JupiterLogo color="white" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "60%",
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
              src={camilleSignature}
              alt="Signature of Camille"
            />
            Camille Bacon
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Image
              width={getResponsiveSignatureSize()}
              src={dariaSignature}
              alt="Signature of Daria"
            />
            Daria Harper
          </div>
        </div>
      </EditorNote>
    </DesktopEditorContainer>
  )
}
