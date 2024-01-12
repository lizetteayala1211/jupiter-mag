"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"

export default function Joshua() {
  return (
    <ArticleBase
      svg={<Cover />}
      position={{ display: "flex", justifyContent: "flex-end" }}
    >
      Joshua
    </ArticleBase>
  )
}
