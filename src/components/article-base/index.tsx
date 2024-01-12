import { Article, ArticleBaseContainer, Cover } from "./styled"

export function ArticleBase({
  children,
  svg,
  position,
}: {
  children: React.ReactNode
  svg: React.ReactNode
  position: any
}) {
  return (
    <ArticleBaseContainer>
      <Cover style={position}>{svg}</Cover>
      <Article>
        <div>{children}</div>ß
      </Article>
    </ArticleBaseContainer>
  )
}
