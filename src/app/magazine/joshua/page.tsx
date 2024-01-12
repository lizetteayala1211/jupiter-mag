"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"
import { articles } from ".."

export default function Joshua() {
  return (
    <ArticleBase
      next={articles[2]}
      svg={<Cover />}
      position={{ display: "flex", justifyContent: "flex-end" }}
    >
      <Article />
    </ArticleBase>
  )
}
