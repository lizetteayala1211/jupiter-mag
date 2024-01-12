"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"

export default function J() {
  return (
    <ArticleBase
      svg={<Cover />}
      position={{
        paddingTop: "24em",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Article />
    </ArticleBase>
  )
}
