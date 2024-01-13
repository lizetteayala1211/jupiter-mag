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
      position="0% 80% 50% 0%"
    >
      <Article />
    </ArticleBase>
  )
}
