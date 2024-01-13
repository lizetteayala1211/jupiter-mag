"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"
import { issue1Metadata } from ".."

export default function Joshua() {
  return (
    <ArticleBase
      next={issue1Metadata[2]}
      svg={<Cover />}
      position={{ right: 0 }}
    >
      <Article />
    </ArticleBase>
  )
}
