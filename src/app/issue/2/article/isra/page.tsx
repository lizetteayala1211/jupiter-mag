"use client"

import { ArticleBase } from "@/components"

import { issue2Metadata } from ".."

export default function Page() {
  return (
    <ArticleBase next={issue2Metadata[2]} position="0% 80% 50% 0%">
      {/* <Article /> */}
      hello
    </ArticleBase>
  )
}
