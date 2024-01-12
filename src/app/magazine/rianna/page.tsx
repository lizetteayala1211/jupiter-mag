"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"
import { articles } from ".."

export default function Rianna() {
  return (
    <ArticleBase
      next={articles[0]}
      svg={<Cover />}
      position={{
        display: "flex",
        justifyContent: "flex-end",
        paddingTop: "24em",
      }}
    >
      <Article />
    </ArticleBase>
  )
}
