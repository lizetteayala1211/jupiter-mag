import { MediumGuy } from "@/utils/layout"
import { ColophonColumn, ColophonContainer } from "./styled"

export function Colophon() {
  return (
    <div
      style={{
        padding: "64px 32px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 style={{ paddingBottom: "84px" }}>Colophon</h3>
      <ColophonContainer>
        <ColophonColumn>
          <p> Jupiter Magazine Issue 004: Of Prophecy </p>
          <p> Published by: Jupiter Magazine </p>
          <MediumGuy />
          <p> Publication Year: 2024 </p>
          <p> Editors in Chief: Camille Bacon & Daria Simone Harper </p>
          <p> Editorial Assistant: Niara Hightower </p>
          <MediumGuy />
          <p> Design Team: Sebastien Pierre & Lizette Ayala </p>
          <p> Web Development: Lizette Ayala </p>
          <MediumGuy />
        </ColophonColumn>

        <ColophonColumn>
          <p> Collaborators: </p>
          <MediumGuy />
          <MediumGuy />
          <p> Acknowledgments: </p>
          <MediumGuy />
        </ColophonColumn>
      </ColophonContainer>
    </div>
  )
}
