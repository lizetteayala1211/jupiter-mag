"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"
import { issue1Metadata } from ".."

export default function Jenna() {
  return (
    <ArticleBase
      next={issue1Metadata[2]}
      svg={<Cover />}
      position="30% 50% 0% 0%"
      issue={1}
    >
      <Article />
    </ArticleBase>
  )
}
