import { issue4Metadata } from "@/app/issue/4/article"
import { StyledAuthorLink, AuthorDirectoryContainer } from "./styled"

export function AuthorDirectory({ homepage }: { homepage?: boolean }) {
  const isHomePage = homepage!! ? homepage : false
  return (
    <AuthorDirectoryContainer>
      {issue4Metadata.map((author) => (
        <StyledAuthorLink
          key={author.author}
          $homepage={isHomePage.toString()}
          href={`/issue/4/article/${author.author.split(" ")[0].toLowerCase()}`}
        >
          {author.author}
        </StyledAuthorLink>
      ))}
    </AuthorDirectoryContainer>
  )
}
