"use client"

import { GetStaticProps } from "next"
import { Base } from "@/components"
import { JupiterAnimation } from "@/app/home/JupiterAnimation"

// styled assets
import {
  Authors,
  Lottie,
  Main,
  PunctureContainer,
  PunctureOne,
  PunctureTwo,
} from "./styled"
import { HugeGuy } from "@/utils/layout"
import { AuthorBackground } from "./AuthorBackground"

import { Credits } from "./Credits"
import { AuthorAbouts } from "./AuthorAbouts"
import { AuthorDirectory } from "./AuthorDirectory"
import { EditorsNote } from "./EditorsNote"

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
      <PunctureContainer>
        <PunctureOne />
        <PunctureTwo />
      </PunctureContainer>
      <Main>
        <Lottie>
          <JupiterAnimation />
        </Lottie>

        <Authors>
          <EditorsNote />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              left: "10%",
              right: "10%",
              zIndex: 10,
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
