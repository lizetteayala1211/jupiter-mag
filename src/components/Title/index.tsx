import { Pages } from "@/state/AppState"
import {
  GradientLetter,
  GradientLetterContainer,
  GradientTitleContainer,
} from "./styled"

export function Title({ pageTitle }: { pageTitle: Pages }) {
  const titleLength = pageTitle?.length
  const letters = []

  const getSpacing = (i: number) => {
    const weirdLetters = "r" || "t"
    if (i !== 0 && pageTitle[i] === weirdLetters) {
      return i * 48
    } else if (i !== 0) {
      return i * 44
    }
    return 0
  }

  for (let i = 0; i < titleLength; i++) {
    console.log("spacing: ", getSpacing(i))
    letters.push(
      <GradientLetterContainer
        key={`index_${i}_letter_${pageTitle[i]}`}
        style={{ marginLeft: `${getSpacing(i)}px` }}
      >
        <GradientLetter>{pageTitle[i]}</GradientLetter>
      </GradientLetterContainer>
    )
  }

  return (
    <GradientTitleContainer aria-label={pageTitle}>
      {letters}
    </GradientTitleContainer>
  )
}
