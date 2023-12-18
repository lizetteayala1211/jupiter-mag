import {
  GradientLetter,
  GradientLetterContainer,
  GradientTitleContainer,
} from "./styled"

export function Title({ title }: { title: string }) {
  const titleLength = title.length
  const letters = []

  for (let i = 0; i < titleLength; i++) {
    letters.push(
      <GradientLetterContainer
        style={i !== 0 ? { marginLeft: `${i * 52}px` } : {}}
      >
        <GradientLetter>{title[i]}</GradientLetter>
      </GradientLetterContainer>
    )
  }

  return (
    <GradientTitleContainer aria-label={title}>
      {letters}
    </GradientTitleContainer>
  )
}
