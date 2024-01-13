"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"
import { issue1Metadata } from ".."

export default function Akwaeke() {
  return (
    <ArticleBase
      next={issue1Metadata[1]}
      svg={<Cover />}
      position={{ padding: "1em" }}
    >
      <Article />
    </ArticleBase>
  )
}
