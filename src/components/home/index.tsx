"use client"

import { AuthorDirectory, Base } from "@/components"

// styled assets
import { Authors, Main } from "./styled"
import { AuthorBackground } from "./AuthorBackground"

import { Credits } from "./Credits"
import { AuthorAbouts } from "./AuthorAbouts"
import { EditorsNote } from "./EditorsNote"

export function Home() {
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
    </Base>
  )
}
