"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"
import { issue4Metadata } from ".."

export default function Amandine() {
  return (
    <ArticleBase
      next={issue4Metadata[4]}
      position="0% 80% 50% 0%"
      issue={4}
    >
      <Article />
    </ArticleBase>
  )
}