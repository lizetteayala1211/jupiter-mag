import { issue2Metadata } from "./article"
import {
  StyledAuthorLink,
  AuthorDirectoryContainer,
  AuthorText,
  AuthorTitle,
} from "./styled"

export function AuthorDirectory({ homepage }: { homepage?: boolean }) {
  const isHomePage = homepage!! ? homepage : false
  return (
    <AuthorDirectoryContainer>
      {issue2Metadata.map((author) => (
        <StyledAuthorLink
          key={author.author}
          $homepage={isHomePage.toString()}
          href={`/issue/1/article/${author.author.split(" ")[0].toLowerCase()}`}
        >
          <AuthorText>{author.author}</AuthorText>
          <AuthorTitle>{author.title}</AuthorTitle>
        </StyledAuthorLink>
      ))}
    </AuthorDirectoryContainer>
  )
}
