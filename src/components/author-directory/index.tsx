import { StyledAuthorLink, AuthorDirectoryContainer } from "./styled"

export function AuthorDirectory({ homePage }: { homePage?: boolean }) {
  const names = [
    "Akwaeke Emezi",
    "Joshua Segun",
    "Diallo Simon-Ponte",
    "J Wortham",
    "Rianna Jade Parker",
  ]
  return (
    <AuthorDirectoryContainer>
      {names.map((name) => (
        <StyledAuthorLink
          homePage={homePage || false}
          href={`/magazine/${name.split(" ")[0].toLowerCase()}`}
        >
          {name}
        </StyledAuthorLink>
      ))}
    </AuthorDirectoryContainer>
  )
}
