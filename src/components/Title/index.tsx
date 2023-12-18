import {
  GradientLetter,
  GradientLetterContainer,
  GradientTitleContainer,
} from "./styled"
// import { useAppDispatch } from "@/providers/AppStateProvider"
// import { AppActionType, Pages } from "@/state/AppState"
import { Pages } from "@/state/AppState"

export function Title({ title }: { title: Pages }) {
  const titleLength = title.length
  const letters = []
  // const appDispatch = useAppDispatch()
  // appDispatch({ type: AppActionType.SET_PAGE, value: title })

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
