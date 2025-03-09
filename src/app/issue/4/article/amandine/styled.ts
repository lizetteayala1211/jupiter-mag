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

  .title {
    padding-top: 0pt;
    /* color: #000000; */
    color: white;
    padding-bottom: 3pt;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }

  .subtitle {
    padding-top: 0pt;
    color: white;
    padding-bottom: 16pt;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }

  li {
    color: white;
  }

  p {
    margin: 0;
    color: white;
  }

  h1 {
    padding-top: 20pt;
    color: white;
    padding-bottom: 6pt;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }

  h2 {
    padding-top: 18pt;
    color: white;
    padding-bottom: 6pt;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }

  h3 {
    padding-top: 16pt;
    color: white;
    padding-bottom: 4pt;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }

  h4 {
    padding-top: 14pt;
    color: white;
    padding-bottom: 4pt;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }

  h5 {
    padding-top: 12pt;
    color: white;
    padding-bottom: 4pt;
    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }

  h6 {
    padding-top: 12pt;
    color: white;
    padding-bottom: 4pt;
    page-break-after: avoid;
    font-style: italic;
    orphans: 2;
    widows: 2;
    text-align: left;
  }

/* <!-- Desktop Device (Large Screens) CSS --> */  

@media only screen and (min-width: 1026px) and (max-width: 1281px) {
  div {
    padding: 0 20% !important;
  }
}


/* <!-- Desktop/Laptop Device (Medium Screens) CSS --> */  

@media only screen and (min-width: 962px) and (max-width: 1025px) {
  div {
    padding: 0 20% !important;
  }
}

/* <!-- Tablet Device CSS --> */  

@media only screen and (min-width: 641px) and (max-width: 961px) {
  div {
    padding: 0 10% !important;
  }
}

/* <!-- Mobile Device CSS (Small Screens) --> */ 

@media only screen and (min-width: 375px) and (max-device-width : 481px) {
  div {
    padding: 0 4.5% !important;
  }
  
}

/* <!-- Mobile Device CSS (X-Small Screens) --> */ 

@media only screen and (min-width: 320px) and (max-device-width : 374px) {
  div {
    padding: 0 4% !important;
  }
}

`
