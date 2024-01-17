import { ArticleContainerStyles } from "@/utils/layout"
import styled from "styled-components"

export const ArticleStyles = styled(ArticleContainerStyles)`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ol {
    margin: 0;
    padding: 0;
  }
  table td,
  table th {
    padding: 0;
  }

  .c3 {
    padding-top: 0pt;
    padding-bottom: 0pt;
    orphans: 2;
    widows: 2;
    text-align: left;
    height: 11pt;
  }
  .c6 {
    padding-top: 0pt;
    padding-bottom: 0pt;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  .c2 {
    color: #000000;
    text-decoration: none;
    vertical-align: baseline;
    font-style: normal;
  }
  .c19 {
    -webkit-text-decoration-skip: none;
    color: #1155cc;
    text-decoration: underline;
    text-decoration-skip-ink: none;
  }
  .c15 {
    padding-top: 0pt;
    padding-bottom: 0pt;
    text-align: left;
  }
  .c5 {
    font-family: "Alverata Light";
    font-style: italic;

    .c13 {
      font-family: "Alverata Light";
      font-weight: 400;
    }
    .c0 {
      font-family: "Alverata Light";
      font-weight: 400;
    }
    .c17 {
      orphans: 2;
      widows: 2;
      height: 11pt;
    }
    .c20 {
      max-width: 468pt;
      padding: 72pt 72pt 72pt 72pt;
    }
    .c1 {
      border: 1px solid black;
      margin: 5px;
    }
    .c16 {
      font-weight: 400;
      font-family: "Alverata Light";
    }
    .c18 {
      orphans: 2;
      widows: 2;
    }
    .c22 {
      color: inherit;
      text-decoration: inherit;
      /* These are technically the same, but use both */
      overflow-wrap: break-word;
      word-wrap: break-word;

      -ms-word-break: break-all;
      /* This is the dangerous one in WebKit, as it breaks things wherever */
      word-break: break-all;
      /* Instead use this non-standard one: */
      word-break: break-word;

      /* Adds a hyphen where the word breaks, if supported (No Blink) */
      -ms-hyphens: auto;
      -moz-hyphens: auto;
      -webkit-hyphens: auto;
      hyphens: auto;
    }
    .c8 {
      width: 33%;
      height: 1px;
    }
    .c21 {
      font-family: "Alverata Light";
      font-weight: 700;
    }
    .c9 {
      font-style: italic;
    }
    .c12 {
      vertical-align: super;
    }
    .c14 {
    }
    .c7 {
      text-indent: 36pt;
    }
    .c10 {
    }

    .title {
      padding-top: 0pt;
      color: #000000;
      padding-bottom: 3pt;
      font-family: "Alverata Light";
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    .subtitle {
      padding-top: 0pt;
      color: #666666;
      padding-bottom: 16pt;
      font-family: "Alverata Light";
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    li {
      color: #000000;
      font-family: "Alverata Light";
    }
    p {
      margin: 0;
      color: #000000;
      font-family: "Alverata Light";
    }
    h1 {
      padding-top: 20pt;
      color: #000000;
      padding-bottom: 6pt;
      font-family: "Alverata Light";
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    h2 {
      padding-top: 18pt;
      color: #000000;
      padding-bottom: 6pt;
      font-family: "Alverata Light";
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    h3 {
      padding-top: 16pt;
      color: #434343;
      padding-bottom: 4pt;
      font-family: "Alverata Light";
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    h4 {
      padding-top: 14pt;
      color: #666666;
      padding-bottom: 4pt;
      font-family: "Alverata Light";
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    h5 {
      padding-top: 12pt;
      color: #666666;
      padding-bottom: 4pt;
      font-family: "Alverata Light";
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    h6 {
      padding-top: 12pt;
      color: #666666;
      padding-bottom: 4pt;
      font-family: "Alverata Light";
      page-break-after: avoid;
      font-style: italic;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
  }
`
