import { StyledAuthorLink, AuthorDirectoryContainer } from "./styled"

export function AuthorDirectory() {
  return (
    <AuthorDirectoryContainer>
      <AuthorLink name="Akwaeke Emezi" />
      <AuthorLink name="Joshua Segun" />
      <AuthorLink name="Diallo Simon-Ponte" />
      <AuthorLink name="J Wortham" />
      <AuthorLink name="Rianna Jade Parker" />
    </AuthorDirectoryContainer>
  )
}

function AuthorLink({ name }: { name: string }) {
  return (
    <StyledAuthorLink href={`./magazine/${name.split(" ")[0].toLowerCase()}`}>
      {name}
    </StyledAuthorLink>
  )
}
