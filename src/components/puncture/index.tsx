import { PunctureContainer, PunctureOne, PunctureTwo } from "./styled"

export function Puncture({ position }: { position: any }) {
  return (
    <PunctureContainer style={position}>
      <PunctureOne />
      <PunctureTwo />
    </PunctureContainer>
  )
}
