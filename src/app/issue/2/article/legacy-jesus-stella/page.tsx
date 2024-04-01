"use client"

import { ArticleBase } from "@/components"

import { issue2Metadata } from ".."

export default function Page() {
  return (
    <ArticleBase
      next={issue2Metadata[5]}
      previous={issue2Metadata[3]}
      position="0% 80% 50% 0%"
      issue={2}
      svg={<svg></svg>}
    >
      {/* <Article /> */}
      hello
    </ArticleBase>
  )
}
