"use client"

import { AuthorDirectory, Base } from "@/components"

// styled assets
import { Authors, Main } from "./styled"
import { AuthorBackground } from "./AuthorBackground"

import { Credits } from "./Credits"
import { AuthorAbouts } from "./AuthorAbouts"
import { EditorsNote } from "./EditorsNote"
import { Lottie } from "@/components/lottie-container"

// todo: add back greain to home page so that it doesn't overlpa the lottie file -> might invovle a refactor with how lottie is loaded in
export default function Page() {
  return (
    <Base>
      <Main>
        <Authors>
          <Lottie path="/static/jupiter1.lottie.json" />
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
