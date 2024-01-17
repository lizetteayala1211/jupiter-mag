"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"
import { issue1Metadata } from ".."

export default function Joshua() {
  return (
    <ArticleBase next={issue1Metadata[3]} svg={<Cover />} position="0 20em 0 0">
      <Article />
    </ArticleBase>
  )
}
