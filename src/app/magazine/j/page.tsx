"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"
import { issue1Metadata } from ".."

export default function J() {
  return (
    <ArticleBase next={issue1Metadata[4]} svg={<Cover />}>
      <Article />
    </ArticleBase>
  )
}
