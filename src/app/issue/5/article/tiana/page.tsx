"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"
import { issue5Metadata } from ".."

export default function Tiana() {
  return (
    <ArticleBase
      next={issue5Metadata[4]}
      position="0% 80% 50% 0%"
      issue={5}
    >
      <Article />
    </ArticleBase>
  )
}