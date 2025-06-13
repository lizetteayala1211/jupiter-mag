import { screenLgMin, screenMdMin, screenXlMin, screenXsMin } from "@/utils/constants"
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
    color: #000000;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  .subtitle {
    color: #666666;
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

/* <!-- Mobile Device CSS (Small Screens) --> */ 

@media only screen and (min-width: 375px) and (max-device-width : 481px) {
  .article-img {
    width: 80% !important;
    height: 80% !important;
  }

  .article-img-cap {
    width: 90% !important;
  }
}
`
