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
          <p> Jupiter Magazine Issue 003: The Theater of Refusal </p>
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
          <p> New York: Aimee Meredith Cox, BlackMass Publishing & Adanne Bookshop </p>
          <p> Los Angeles: Taylor Renee Aldridge & Reparations Club </p>
          <p> Detroit: Asmaa Walton (Black Art Library), Aleiya Lindsay-Olu (Periodicals), André Moore (Aa Publishing), KESSWA, Zoe Talley, SABYTE & Kem Kem </p>
          <p> Chicago: Ireon Roach, Victor Musoni, Denny Mwaura, Arts + Public Life, Black Film Club Chi, Blanc Gallery & Parkway Pictures </p>
          <MediumGuy />
          <p> Acknowledgments: </p>
          <p> We extend the utmost gratitude to those who have vivified the expansive spirit of Jupiter’s third orbit… </p>
          <MediumGuy />
        </ColophonColumn>
      </ColophonContainer>
    </div>
  )
}
