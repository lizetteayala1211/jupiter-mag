"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"
import { articles } from ".."

export default function Akwaeke() {
  return (
    <ArticleBase
      next={articles[1]}
      svg={<Cover />}
      position={{ padding: "1em" }}
    >
      <Article />
    </ArticleBase>
  )
}
