import React from "react"
import { issue2Metadata } from "./article"
import {
  StyledAuthorLink,
  AuthorDirectoryContainer,
  AuthorText,
  TitleText,
  EllipseContainer,
} from "./styled"

export function AuthorDirectory({ homepage }: { homepage?: boolean }) {
  const isHomePage = homepage!! ? homepage : false
  const [hoveredArticle, setHoveredArticle] = React.useState("")

  return (
    <AuthorDirectoryContainer>
      {issue2Metadata.map((author) => (
        <div style={{ position: "relative" }} key={author.author}>
          <EllipseSvg
            hovering={hoveredArticle === author.author}
            longTitle={author.longTitle || false}
          />
          <StyledAuthorLink
            $homepage={isHomePage.toString()}
            href={`/issue/1/article/${author.author
              .split(" ")[0]
              .toLowerCase()}`}
            onMouseEnter={() => setHoveredArticle(author.author)}
            onMouseLeave={() => setHoveredArticle("")}
          >
            <AuthorText>{author.author}</AuthorText>
            <TitleText $longTitle={author.longTitle ? "true" : "false"}>
              {author.title}
            </TitleText>
          </StyledAuthorLink>
        </div>
      ))}
    </AuthorDirectoryContainer>
  )
}

function EllipseSvg({
  longTitle,
  hovering,
}: {
  longTitle: boolean
  hovering: boolean
}) {
  return hovering ? (
    <EllipseContainer $longTitle={longTitle.toString()}>
      <svg
        width="794"
        height="422"
        viewBox="0 0 794 422"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform={`transform: rotate(10deg)`}
      >
        <ellipse
          cx="397.14"
          cy="210.899"
          rx="433.774"
          ry="116.465"
          transform="rotate(24.8378 397.14 210.899)"
          fill="url(#paint0_diamond_1092_6)"
        />
        <defs>
          <radialGradient
            id="paint0_diamond_1092_6"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(397.14 201.118) rotate(89.836) scale(133.669 801.545)"
          >
            <stop offset="0.245" stopColor="#030A18" />
            <stop offset="0.555" stopColor="#434F64" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </EllipseContainer>
  ) : (
    <EllipseContainer style={{}} />
  )
}
