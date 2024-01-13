"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"
import { issue1Metadata } from ".."

export default function Rianna() {
  return (
    <ArticleBase
      next={issue1Metadata[0]}
      svg={<Cover />}
      position={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Article />
    </ArticleBase>
  )
}
