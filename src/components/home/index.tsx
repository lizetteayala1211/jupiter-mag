"use client"

import { GetStaticProps } from "next"
import { Base, DesktopGrain, MobileGrain } from "@/components"
import { JupiterAnimation } from "@/components/home/JupiterAnimation"

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
import { useBreakpoints } from "@/utils/hooks"

export function Home() {
  const { isMobile } = useBreakpoints()

  return (
    <Base homePage>
      {!isMobile ? (
        <PunctureContainer>
          <PunctureOne />
          <PunctureTwo />
        </PunctureContainer>
      ) : null}

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
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {isMobile ? <MobileGrain /> : <DesktopGrain />}
      </div>
    </Base>
  )
}
