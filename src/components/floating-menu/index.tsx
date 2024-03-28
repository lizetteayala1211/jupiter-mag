import { FloatingMenuContainer } from "./styled"

type FloatingMenuProps = { issue: number }

export function FloatingMenu({ issue }: FloatingMenuProps) {
  return (
    <FloatingMenuContainer>
      <li style={{ fontSize: "24px", textTransform: "none" }}>Issue {issue}</li>
      <li>
        <a href="#editorsNote">Editor&apos;s note</a>
      </li>
      <li>
        <a href="#articles">Articles</a>
      </li>
      <li>
        <a href="#writers">Writers</a>
      </li>
      <li>
        <a href="#colophon">Colophon</a>
      </li>
      <li>
        <a href="http://jupiter-mag.com/issue/1">Issue {issue === 1 ? 2 : 1}</a>
      </li>
    </FloatingMenuContainer>
  )
}
