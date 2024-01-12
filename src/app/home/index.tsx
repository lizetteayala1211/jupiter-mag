"use client"

import { GetStaticProps } from "next"
import { Base } from "@/components/base"
import { JupiterAnimation } from "@/app/home/JupiterAnimation"

// styled assets
import {
  Authors,
  EditorCover,
  EditorNote,
  Lottie,
  Main,
  PunctureOne,
  PunctureTwo,
} from "./styled"
import { HugeGuy } from "@/utils/layout"
import { JupiterLogo } from "@/components/JupiterLogo"
import { AuthorBackground } from "./AuthorBackground"

import { Credits } from "./Credits"
import { AuthorAbouts } from "./AuthorAbouts"
import { AuthorDirectory } from "./AuthorDirectory"

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    // show not found route in production and other non development environments
    notFound: process.env.NODE_ENV !== "development",
  }
}

export default function Home() {
  return (
    <Base homePage>
      <div
        style={{
          position: "absolute",
          margin: "50%",
          zIndex: 10,
          top: 300,
          left: -18,
        }}
      >
        <PunctureOne />
        <PunctureTwo />
      </div>
      <Main>
        <Lottie>
          <JupiterAnimation />
        </Lottie>
        <EditorCover>
          <div style={{ height: "20%", width: "50%", padding: "16px" }}>
            <JupiterLogo color="white" />
          </div>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <div>Editor&apos;s</div>
            <div>Note</div>
          </div>
        </EditorCover>
        <EditorNote className="abhaya-libre">
          <p style={{ fontSize: "20px" }}>
            Consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur.
          </p>
          <HugeGuy />
          <p style={{ fontSize: "16px" }}>
            oluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
            in ea voluptate velit esse quam nihil molestiae consequatur, vel
            illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. eatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.eatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
        </EditorNote>
        <Authors>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              left: "10%",
              right: "10%",
            }}
          >
            <AuthorDirectory />

            <AuthorAbouts />

            <HugeGuy />
            <HugeGuy />

            <Credits />
          </div>
          <AuthorBackground />
        </Authors>
      </Main>
    </Base>
  )
}
