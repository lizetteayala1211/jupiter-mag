import { issue1Metadata } from "@/app/magazine"
import { StyledAuthorLink, AuthorDirectoryContainer } from "./styled"

export function AuthorDirectory({ homepage }: { homepage?: boolean }) {
  const isHomePage = homepage!! ? homepage : false
  return (
    <AuthorDirectoryContainer>
      {issue1Metadata.map((author) => (
        <StyledAuthorLink
          key={author.author}
          $homepage={isHomePage.toString()}
          href={`/magazine/${author.author.split(" ")[0].toLowerCase()}`}
        >
          {author.author}
        </StyledAuthorLink>
      ))}
    </AuthorDirectoryContainer>
  )
}
