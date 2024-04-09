"use client"

import { StaticImageData } from "next/image"
import { ArticleAuthorImage, ArticleCoverImage } from "./styled"

export function ArticleCover({
  svg,
  png,
  title,
  author,
}: {
  svg: StaticImageData
  png: StaticImageData
  title: string
  author: string
}) {
  return (
    <div style={{}}>
      <ArticleCoverImage src={png} alt={title} priority />
      <ArticleAuthorImage src={svg} alt={author} />
    </div>
  )
}
