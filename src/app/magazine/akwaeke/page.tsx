"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"

export default function Akwaeke() {
  return (
    <ArticleBase svg={<Cover />} position={{ padding: "1em" }}>
      <Article />
    </ArticleBase>
  )
}
