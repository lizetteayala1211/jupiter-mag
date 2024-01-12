"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"
import { Article } from "./article"

export default function Diallo() {
  return (
    <ArticleBase
      svg={<Cover />}
      position={{
        paddingTop: "10em",
      }}
    >
      <Article />
    </ArticleBase>
  )
}
