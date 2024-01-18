import { screenLgMin, screenMdMin, screenXlMin } from "@/utils/constants"
import { ArticleContainerStyles } from "@/utils/layout"
import styled from "styled-components"

export const ArticleStyles = styled(ArticleContainerStyles)`
  ol {
    margin: 0;
    padding: 0;
  }
  table td,
  table th {
    padding: 0;
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
  .c8 {
    padding-top: 0pt;
    padding-bottom: 0pt;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  .c12 {
    padding-top: 0pt;
    padding-bottom: 0pt;
    text-align: left;
  }
  .c4 {
    color: #000000;
    text-decoration: none;
    vertical-align: baseline;
    font-style: normal;
  }
  .c14 {
    background-color: #ffffff;
    max-width: 468pt;
    padding: 72pt 72pt 72pt 72pt;
  }

  .c9 {
    padding-top: 4px;
    padding-bottom: 2em;

    @media only screen and (min-width: ${screenMdMin}) {
    }
  }
  .c7 {
    border: 1px solid black;
    margin: 5px;
  }

  .c16 {
    width: 33%;
    height: 1px;
  }
  .c5 {
    height: 11pt;
  }

  .c6 {
    font-style: italic;
  }
  .c11 {
    color: #22201c;
  }
  .c17 {
    padding: 4em 1em 2em 1em;
    font-size: 24px;
    font-style: italic;

    /* smaller desktops */
    @media only screen and (min-width: ${screenMdMin}) {
      padding: 40px;
    }

    /* wide desktops */
    @media only screen and (min-width: ${screenLgMin}) {
      padding: 60px;
    }

    /* extra wide desktops */
    @media only screen and (min-width: ${screenXlMin}) {
      padding: 100px;
    }
  }
  .c18 {
    padding: 0 10% 0 8%;
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
