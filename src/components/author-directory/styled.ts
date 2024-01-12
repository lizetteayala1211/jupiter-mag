import { screenMdMin, screenLgMin } from "@/utils/constants"
import Link from "next/link"
import styled from "styled-components"

export const StyledAuthorLink = styled(Link)`
  font-family: "Alverata Medium";
  text-transform: uppercase;
  font-size: 32px;
  color: var(--color-transparent-white);

  &:hover {
    color: var(--color-white);
  }
`

export const AuthorDirectoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8em 0 8em 0;

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    padding: 8em 0 12em 0;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    padding: 12em 0 16em 0;
  }
`
