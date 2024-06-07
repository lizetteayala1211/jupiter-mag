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
          <p> Editors in Chief: Camille Bacon and Daria Harper </p>
          <p> Editorial Assistant: Niara Hightower </p>
          <MediumGuy />
          <p> Design Team: Sebastien Pierre and Lizette Ayala </p>
          <p> Web Development: Lizette Ayala </p>
          <MediumGuy />
        </ColophonColumn>

        <ColophonColumn>
          <p> Collaborators: </p>
          <p> Aimee Meredith Cox, BlackMass Publishing & Adanne Bookshop — Brooklyn NY </p>
          <p> Taylor Renee Aldridge & Reparations Club — Los Angeles, CA </p>
          <p> Asmaa Walton (Black Art Library), Aleiya Lindsay-Olu (Periodicals), André Moore (Aa Publishing), Kesswa, Sabetye, Zoe Talley, and The Shepherd  </p>
          <p> Ireon Roach, Victor Musoni, Arts + Public Life, and Parkway Pictures, Chicago, IL  </p>
          <MediumGuy />
          <p> Acknowledgments: </p>
          <p> We extend the utmost gratitude to those who have vivified the expansive spirit of Jupiter’s third orbit… </p>
          <MediumGuy />
        </ColophonColumn>
      </ColophonContainer>
    </div>
  )
}
