"use client"

import Image, { StaticImageData } from "next/image"

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
    <div>
      <Image
        style={{ width: "100vw", height: "30vh", objectFit: "contain" }}
        src={png}
        alt={title}
        priority
      />
      <Image src={svg} alt={author} />
    </div>
  )
}
