import { screenMdMin, screenLgMin, screenXlMin } from "@/utils/constants"
import Link from "next/link"
import styled from "styled-components"

export const StyledAuthorLink = styled(Link)<{ $homepage: string }>`
  font-family: "Alverata Medium";
  text-transform: uppercase;
  font-size: 32px;
  ${(props) =>
    props.$homepage === "true" &&
    `color: var(--color-transparent-black);

    &:hover {
      color: var(--color-black);
    }`}

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    font-size: 80px;
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMin}) {
    font-size: 100px;
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    font-size: 120px;
  }
`

export const AuthorDirectoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8em 0 2em 0;

  @media only screen and (min-width: ${screenMdMin}) {
    padding: 4em 0 4em 0;
  }
`
