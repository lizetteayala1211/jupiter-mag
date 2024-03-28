import { screenMdMin, screenLgMed, screenXlMin } from "@/utils/constants"
import styled from "styled-components"

export const FloatingMenuContainer = styled.ul`
  position: sticky;
  position: -webkit-sticky;
  list-style-type: none;

  top: 50%;

  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    text-transform: uppercase;
    color: var(--color-transparent-white);
  }

  li:hover {
    color: white;
    transition: 0.5s;
  }

  .active {
    color: white;
    transition: 0.5s;
  }

  /* smaller desktops */
  @media only screen and (min-width: ${screenMdMin}) {
    h5 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
    }
  }

  /* wide desktops */
  @media only screen and (min-width: ${screenLgMed}) {
    h5 {
      font-size: 32px;
    }
    p {
      font-size: 16px;
    }
  }

  /* extra wide desktops */
  @media only screen and (min-width: ${screenXlMin}) {
    h5 {
      font-size: 42px;
    }
    p {
      font-size: 20px;
    }
  }
`
