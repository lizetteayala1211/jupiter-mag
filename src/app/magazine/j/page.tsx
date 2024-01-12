"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"
import { articles } from ".."

export default function J() {
  return (
    <ArticleBase
      next={articles[4]}
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
