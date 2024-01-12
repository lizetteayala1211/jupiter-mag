import { StyledAuthorLink, AuthorDirectoryContainer } from "./styled"

export function AuthorDirectory({ homePage }: { homePage?: boolean }) {
  const names = [
    "Akwaeke Emezi",
    "J Wortham",
    "Joshua Segun",
    "Diallo Simon-Ponte",
    "Rianna Jade Parker",
  ]
  return (
    <AuthorDirectoryContainer>
      {names.map((name) => (
        <StyledAuthorLink
          key={name}
          homePage={homePage || false}
          href={`/magazine/${name.split(" ")[0].toLowerCase()}`}
        >
          {name}
        </StyledAuthorLink>
      ))}
    </AuthorDirectoryContainer>
  )
}
