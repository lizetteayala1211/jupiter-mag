import { FloatingMenuContainer } from "./styled"

type FloatingMenuProps = { issue: number }

export function FloatingMenu({ issue }: FloatingMenuProps) {
  return (
    <FloatingMenuContainer>
      <h4>Issue {issue}</h4>
      <p style={{ fontSize: "16px" }}>Editor&apos;s note</p>
      <p style={{ fontSize: "16px" }}>Writers Note</p>
      <p style={{ fontSize: "16px" }}>Colophon</p>
      <p style={{ fontSize: "16px" }}>Issue {issue === 1 ? 2 : 1}</p>
    </FloatingMenuContainer>
  )
}
