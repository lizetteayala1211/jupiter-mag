import { GradientLetter, GradientLetterContainer } from "./styled"

export function BackgroundTitle({ title }: { title: string }) {
  const titleLength = title.length
  const letters = []

  for (let i = 0; i++; i < titleLength) {
    letters.push(<GradientLetter>{title[i]}</GradientLetter>)
  }

  console.log(letters)

  return <GradientLetterContainer>{letters}</GradientLetterContainer>
}
