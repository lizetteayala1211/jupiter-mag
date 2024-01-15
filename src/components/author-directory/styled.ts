import { screenMdMin, screenLgMin, screenXlMin } from "@/utils/constants"
import Link from "next/link"
import styled from "styled-components"

export const StyledAuthorLink = styled(Link)<{ homepage: boolean | undefined }>`
  font-family: "Alverata Medium";
  text-transform: uppercase;
  font-size: 32px;
  color: var(--color-transparent-white);

  &:hover {
    color: var(--color-white);
  }

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    ${(props) =>
      props.homepage &&
      `color: var(--color-transparent-black);

    &:hover {
      color: var(--color-black);
    }`}
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
`
