"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"

export default function Rianna() {
  return (
    <ArticleBase
      svg={<Cover />}
      position={{
        display: "flex",
        justifyContent: "flex-end",
        paddingTop: "24em",
      }}
    >
      Rianna
    </ArticleBase>
  )
}
