"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"
import { issue5Metadata } from ".."

export default function Kj() {
  return (
    <ArticleBase
      next={issue5Metadata[5]}
      position="0% 80% 50% 0%"
      issue={5}
    >
      <Article />
    </ArticleBase>
  )
}