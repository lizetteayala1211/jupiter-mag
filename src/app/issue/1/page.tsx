"use client"

import { Base } from "@/components"

// styled assets
import { Authors, Main } from "./styled"
import { AuthorBackground } from "./AuthorBackground"

import { Credits } from "./Credits"
import { AuthorAbouts } from "./AuthorAbouts"
import { EditorsNote } from "./EditorsNote"
import { AuthorDirectory } from "./AuthorDirectory"
import { Lottie } from "@/components/lottie-container"

// todo: add back again to home page so that it doesn't overlap the lottie file -> might involve a refactor with how lottie is loaded in
export default function Page() {
  return (
    <Base homePage>
      <Main>
        <Authors>
          <Lottie path="/static/jupiter1.lottie.json" color="#6E4774" />
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
