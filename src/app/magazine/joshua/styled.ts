// styles copied and pasted from google docs exported html and edited therefrom

import { screenMdMin, screenLgMin } from "@/utils/constants"
import styled from "styled-components"

export const ArticleStyles = styled.div`
  line-height: 40px;
  font-weight: 400;
  font-family: "Alverata Light";

  ol {
    margin: 0;
    padding: 0;
  }
  table td,
  table th {
    padding: 0;
  }
  .c3 {
    color: #000000;
    text-decoration: none;
    vertical-align: baseline;
    font-style: italic;
  }
  .c1 {
    color: #000000;
    text-decoration: none;
    vertical-align: baseline;
    font-style: normal;
  }
  .c0 {
    padding-top: 0pt;
    padding-bottom: 0pt;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  .c6 {
    background-color: #ffffff;
    max-width: 468pt;
    padding: 72pt 72pt 72pt 72pt;
  }
  .c4 {
    margin-left: 72pt;
    text-indent: 36pt;
  }
  .c2 {
    height: 11pt;
  }
  .c7 {
    margin-left: 36pt;
  }
  .c5 {
    font-style: italic;
  }
  .title {
    padding-top: 0pt;
    color: #000000;
    padding-bottom: 3pt;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  .subtitle {
    padding-top: 0pt;
    color: #666666;
    padding-bottom: 16pt;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  li {
    color: #000000;
  }
  p {
    margin: 0;
    color: #000000;
    font-size: 12px;

    /* smaller desktops */
    @media only screen and (min-width: ${screenMdMin}) {
      font-size: 12px;
    }

    /* wide desktops */
    @media only screen and (min-width: ${screenLgMin}) {
      font-size: 14px;
    }
  }
  h1 {
    padding-top: 20pt;
    color: #000000;
    padding-bottom: 6pt;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  h2 {
    padding-top: 18pt;
    color: #000000;
    padding-bottom: 6pt;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  h3 {
    padding-top: 16pt;
    color: #434343;
    padding-bottom: 4pt;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  h4 {
    padding-top: 14pt;
    color: #666666;
    padding-bottom: 4pt;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  h5 {
    padding-top: 12pt;
    color: #666666;
    padding-bottom: 4pt;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  h6 {
    padding-top: 12pt;
    color: #666666;
    padding-bottom: 4pt;
    page-break-after: avoid;
    font-style: italic;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
`
