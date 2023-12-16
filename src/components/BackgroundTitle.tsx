import { GradientLetter, GradientLetterContainer } from "./styled"

export function BackgroundTitle({ title }: { title: string }) {
  const titleLength = title.length
  const letters = []

  for (let i = 0; i < titleLength; i++) {
    letters.push(<GradientLetter>{title[i]}</GradientLetter>)
  }

  return <GradientLetterContainer>{letters}</GradientLetterContainer>
}
