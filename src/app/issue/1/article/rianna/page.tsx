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
      position="0% 80% 30% 0%"
    >
      <Article />
    </ArticleBase>
  )
}
