"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"
import { articles } from ".."

export default function Diallo() {
  return (
    <ArticleBase
      next={articles[3]}
      svg={<Cover />}
      position={{
        paddingTop: "10em",
      }}
    >
      <Article />
    </ArticleBase>
  )
}
