"use client"

import { ArticleBase } from "@/components"
import { Cover } from "./cover"

export default function Diallo() {
  return (
    <ArticleBase svg={<Cover />} position={null}>
      Diallo
    </ArticleBase>
  )
}
