import { FloatingMenuContainer } from "./styled"

type FloatingMenuProps = { issue: number }

export function FloatingMenu({ issue }: FloatingMenuProps) {
  return (
    <FloatingMenuContainer>
      <h5>Issue {issue}</h5>
      <p>Editor&apos;s note</p>
      <p>Writers Note</p>
      <p>Colophon</p>
      <p>Issue {issue === 1 ? 2 : 1}</p>
    </FloatingMenuContainer>
  )
}
