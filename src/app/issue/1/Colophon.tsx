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
        position: "relative",
        left: "30px",
      }}
    >
      <h3 style={{ paddingBottom: "84px" }}>Colophon</h3>
      <ColophonContainer>
        <ColophonColumn>
          <p>Jupiter Magazine</p>
          <p>Published by: Jupiter and Dogbeach</p>
          <MediumGuy />
          <p>Publication Year: 2024</p>
          <p>Editorial Team: Camille Bacon, Daria Harper</p>
          <p>Editorial Assistant: Niara Hightower</p>
          <p>Design Team: DogBeach;</p>
          <p>
            Creative Director: Sebastien Pierre, Design Director: Alyssa Klimo,
            Art Director: Erica Ohmi
          </p>
          <MediumGuy />
          <p>Web Development: Nishat Firoj</p>
          <MediumGuy />
          <p>
          Contributors: Akwaeke Emezi, Jenna “J” Wortham, Joshua Segun-Lean,
          Rianna Jade Parker, and Diallo
          </p>
          <p>Simon-Ponte</p>
          <p>
          This project is supported by Critical Minded, an initiative to invest in
          cultural critics of color cofounded by The Nathan Cummings Foundation
          and The Ford Foundation
          </p>
        <MediumGuy />
        </ColophonColumn>

        <ColophonColumn>
          <p>Acknowledgments:</p>
          <p>
             We extended the utmost gratitude to the following people, each of whom
             have vivified the expansive spirit of Jupiter…
          </p>
          <MediumGuy />
          
          <p>Rashid Shabazz of Critical Minded</p>
          <p>Bora Kim and Elizabeth Baribeau of Artadia</p>
          <p>
            Hannah Gottlieb-Graham, Sue Ariza, Ashley Tyner and Anna Bane of ALMA
            Communications
          </p>
          <p>McArthur Binion</p>
          <p>Josh Brainin</p>
          <p>Kimberly Drew</p>
          <p>Jessica Lynne</p>
          <p>Franklin Sirmans</p>
          <p>Laura Walton</p>
          <p>Immanuel Wilkins</p>
          <MediumGuy />
          <p>
          Finally, we thank and we praise our families (both enfleshed and beyond,
          both chosen and of origin), our ancestors and our spirit guides, who
          have offered us the immeasurable velocity, direction, and foresight
          needed to bring Jupiter to this side of the horizon.
          </p>
        </ColophonColumn>
      </ColophonContainer>
    </div>
  )
}
