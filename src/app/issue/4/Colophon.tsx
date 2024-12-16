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
          <p> Jupiter Magazine <i> Issue 004: Of Prophecy </i> </p>
          <p> Published by: Jupiter Magazine </p>
          <p> Publication Year: 2024 </p>
          <MediumGuy />
          <p> Co-Founders: Camille Bacon and Daria S. Harper </p>
          <p> Editor-in-Chief: Camille Bacon </p>
          <p> Operations & Managing Editor: Daria S. Harper </p>
          <p> Editorial Assistant: Niara Hightower </p>
          <MediumGuy />
          <p> Creative Director: Sebastien Pierre </p>
          <p> Web Design and Development: Lizette Ayala </p>
          <MediumGuy />
          <p> Contributors: 
          Imani Perry, Amandine Nana, Camille Bacon, Rhya Marlene Moffitt, Daria S. Harper, Angelique Rosales Salgado, and Rikki Byrd. </p>
        </ColophonColumn>

        <ColophonColumn>
          <p> Acknowledgments: 
          <MediumGuy />
          This project is supported by Critical Minded, an initiative to invest in cultural critics of color cofounded by The Nathan Cummings Foundation and The Ford Foundation.
          <MediumGuy />
          We extend the utmost gratitude to the following people, each of whom have vivified the expansive spirit of Jupiter…
          <MediumGuy />
          Rashid Shabazz of Critical Minded 
          <br></br>
          Jessica Lynne and Taylor Renee Aldridge of ARTS.BLACK 
          <br></br>
          Patton Hindle, Claire Malloy and Megan Karangutkar of Artadia 
          <br></br>
          Gwendolyn Hatten Butler 
          <br></br>
          Franklin Sirmans 
          <br></br>
          ART NOIR 
          <br></br>
          Brendan Fernandes
          <br></br>
          Kent Kelley 
          <br></br>
          Blanc Gallery 
          <br></br>
          Gwendolyn Perry Davis 
          <br></br>
          Elijah Heyward III 
          <br></br>
          Kate Neisser 
          <br></br>
          Ludovic Nkoth
          <br></br>
          Library Street Collective  
          <br></br>
          Todd J. Baisch 
          <br></br>
          Maynard Monrow (DeWoody Collection / BUNKER)
          <br></br>
          Matthew Roling 
          <br></br>
          Lisa Applebaum
          <br></br>
          Justice Kurtis T. Wilder (Ret.) 
          <br></br>
          Mary L Kramer 
          <br></br>
          Dr Kaili and Roderick Hardamon 
          <br></br>
          Denise J. Lewis
          <br></br>
          Nate Wallace
          <br></br>
          Lane Coleman 
          <MediumGuy />
          Finally, we thank and we praise our families (both enfleshed and beyond, both chosen and of origin), our ancestors and our spirit guides, who have offered us the immeasurable guidance, velocity, direction, and foresight needed to bring Jupiter to this side of the horizon.
          </p>
          <MediumGuy />
        </ColophonColumn>
      </ColophonContainer>
    </div>
  )
}
