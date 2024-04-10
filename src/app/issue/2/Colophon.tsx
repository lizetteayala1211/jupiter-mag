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
          <p>Jupiter Magazine</p>
          <p>Published by: Jupiter and Dogbeach</p>
          <MediumGuy />
          <p>Publication Year: 2024</p>
          <p>Editors in Chief: Camille Bacon and Daria Harper</p>
          <p>Editorial Assistants: Niara Hightower and Kay Brown</p>
          <p>Design Team: DogBeach;</p>
          <p>
            Creative Director: Sebastien Pierre, Design Director: Alyssa Klimo,
            Art Director: Erica Ohmi
          </p>
          <MediumGuy />
          <p>Web Development: Nishat Firoj</p>
          <MediumGuy />
          <p>
            Contributors: Legacy Russell, Jesús Hillario-Reyes, Stella Rae
            Binion, Alexis Pauline Gumbs, Zoë Hopkins, isra rene, Rohan Ayinde,
            Daria S. Harper, and Camille Bacon
          </p>
          <MediumGuy />
        </ColophonColumn>

        <ColophonColumn>
          <p>Acknowledgments:</p>
          <p>
            This project is supported by Critical Minded, an initiative to
            invest in cultural critics of color cofounded by The Nathan Cummings
            Foundation and The Ford Foundation
          </p>
          <p>
            We extended the utmost gratitude to the following people, each of
            whom have vivified the expansive spirit of Jupiter…
          </p>
          <p>Rashid Shabazz of Critical Minded</p>
          <p>Claire Malloy and Megan Karangutkar of Artadia </p>
          <p>Kennedy Yanko </p>
          <p>Racquel Chevremont </p>
          <p>Abby Pucker</p>
          <p>Olasunkanmi Jeffrey Asunmonu </p>
          <p>Derek Harper</p>
          <MediumGuy />
          <p>
            Finally, we thank and we praise our families (both enfleshed and
            beyond, both chosen and of origin), our ancestors and our spirit
            guides, who have offered us the immeasurable velocity, direction,
            and foresight needed to bring Jupiter to this side of the horizon.
          </p>
        </ColophonColumn>
      </ColophonContainer>
    </div>
  )
}
