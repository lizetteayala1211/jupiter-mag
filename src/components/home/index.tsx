"use client"

import { AuthorDirectory, Base, DesktopGrain, MobileGrain } from "@/components"

// styled assets
import { Authors, Main } from "./styled"
import { AuthorBackground } from "./AuthorBackground"

import { Credits } from "./Credits"
import { AuthorAbouts } from "./AuthorAbouts"
import { EditorsNote } from "./EditorsNote"
import { useBreakpoints } from "@/utils/hooks"

export function Home() {
  const { isMobile } = useBreakpoints()

  return (
    <Base>
      <Main>
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
              gap: "12em",
            }}
          >
            <AuthorDirectory homepage />

            <AuthorAbouts />

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
