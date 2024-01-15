import { StyledAuthorLink, AuthorDirectoryContainer } from "./styled"

export function AuthorDirectory({ homepage }: { homepage?: boolean }) {
  const names = [
    "Akwaeke Emezi",
    "Jenna “J” Wortham",
    "Joshua Segun",
    "Diallo Simon-Ponte",
    "Rianna Jade Parker",
  ]
  return (
    <AuthorDirectoryContainer>
      {names.map((name) => (
        <StyledAuthorLink
          key={name}
          homepage={homepage}
          href={`/magazine/${name.split(" ")[0].toLowerCase()}`}
        >
          {name}
        </StyledAuthorLink>
      ))}
    </AuthorDirectoryContainer>
  )
}
