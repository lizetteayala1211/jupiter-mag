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
          <p> Jupiter Magazine </p>
          <MediumGuy />
          <p> Published by: Jupiter </p>
          <p> Publication Year: 2025 </p>
          <MediumGuy />
          <p> Co-Founders: Camille Bacon & Daria Simone Harper </p>
          <p> Editor-in-Chief: Camille Bacon </p>
          <p> Operations & Managing Editor: Daria S. Harper </p>
          <MediumGuy />
          <p> Editorial Assistant: Niara Hightower </p>
          <p> Creative Director: Sebastien Pierre </p>
          <p> Web Design and Development: Lizette Ayala </p>
          <MediumGuy />
        </ColophonColumn>

        <ColophonColumn>
          <p> Contributors: </p>
          <p> Hanif Abdurraqib, Doreen St. Felix, Harmony Holiday, KJ Abudu, Olukemi Lijadu, Tiana Reid, and Yume Murphy. </p>
          <MediumGuy />
          <p> Acknowledgments: </p>
          <p> This project is supported by Critical Minded, an initiative to invest in cultural critics of color cofounded by The Nathan Cummings Foundation and The Ford Foundation. </p>
          <MediumGuy />
          <p> We thank and we praise our friends, collaborators, co-conspirators, and families (both enfleshed and beyond, both chosen and of origin), our ancestors and our spirit guides, who have offered us the immeasurable guidance, velocity, direction, and foresight needed to bring Jupiter to this side of the horizon. </p>
          <MediumGuy />
        </ColophonColumn>
      </ColophonContainer>
    </div>
  )
}
