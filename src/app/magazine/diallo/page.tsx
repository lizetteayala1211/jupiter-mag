"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"
import { issue1Metadata } from ".."

export default function Diallo() {
  return (
    <ArticleBase
      next={issue1Metadata[4]}
      svg={<Cover />}
      position="-10em 12em 0 0"
    >
      <Article />
    </ArticleBase>
  )
}
