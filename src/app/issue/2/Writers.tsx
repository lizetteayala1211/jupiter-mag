import { StaticImageData } from "next/image"
import {
  ContributorPhoto,
  ContributorBody,
  ContributorCardContainer,
  ContributorsSectionTitle,
} from "./styled"

import { useBreakpoints } from "@/utils/hooks"

import ayinde from "../../../../public/photos/ayinde.png"
import binion from "../../../../public/photos/binion.png"
import gumbs from "../../../../public/photos/gumbs.png"
import hopkins from "../../../../public/photos/hopkins.png"
import jesus from "../../../../public/photos/jesus.png"
import rene from "../../../../public/photos/rene.png"
import russell from "../../../../public/photos/russell.png"
import camilleAndDaria from "../../../../public/photos/camille_daria.png"

export function Writers() {
  const { isMobile } = useBreakpoints()
  return (
    <>
      <div
        style={
          isMobile
            ? {
                display: "flex",
                width: "100%",
                paddingInlineStart: "60px",
                paddingBlockEnd: "16px",
                justifyContent: "flex-start",
              }
            : {
                display: "flex",
                width: "100%",
                justifyContent: "flex-start",
                paddingBlockEnd: "56px",
              }
        }
      >
        <ContributorsSectionTitle>Writers</ContributorsSectionTitle>
      </div>
      <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
        <ContributorCard
          long
          author="Legacy Russell"
          key={4}
          photo={russell}
          desc={
            <p>
              Legacy Russell is a curator and writer. Born and raised in New
              York City, she is the Executive Director & Chief Curator of
              experimental arts institution The Kitchen. Formerly she was the
              Associate Curator of Exhibitions at The Studio Museum in Harlem.
              Russell holds an MRes with Distinction in Art History from
              Goldsmiths, University of London with a focus in Visual Culture.
              Her academic, curatorial, and creative work focuses on gender,
              performance, digital selfdom, internet idolatry, and new media
              ritual. Russell&apos;s written work, interviews, and essays have
              been published internationally. She is the recipient of the Thoma
              Foundation 2019 Arts Writing Award in Digital Art, a 2020
              Rauschenberg Residency Fellow, a recipient of the 2021 Creative
              Capital Award, a 2022 Pompeii Commitment Digital Fellow and a 2023
              Center for Curatorial Leadership Fellow. Her first book is Glitch
              Feminism: A Manifesto (2020). Her second book, BLACK MEME, is
              forthcoming via Verso Books.
            </p>
          }
        />
        <ContributorCard
          long
          author="Jesús Hilario-Reyes"
          key={5}
          photo={jesus}
          desc={
            <p>
              Currently based in Brooklyn, New York, Jesús Hilario-Reyes, (San
              Juan, Puerto Rico) is an antidisciplinary artist with a
              Bachelor&apos;s in Fine Arts Studio from the School of the Art
              Institute of Chicago who is currently pursuing their MFA at Yale
              University. Recently a recipient of the Drawing a Blank Artist
              Grant, the Leslie Lohman Museum Fellowship, the Lighthouse Works
              Fellowship (2022) and the Bemis Center Residency (2022) program.
              Jesús Hilario-Reyes has exhibited/screened/performed most notably
              at Frieze (London), e-Flux (NYC) ,Gladstone Gallery (NYC), The
              Kitchen (NYC), Museum of Contemporary Art Chicago, Black Star Film
              Festival (Philadelphia, PN), Mana Contemporary (Chicago, IL), Real
              Art Ways (Hartford, CT), Rudimento (Quito, ECUA), Parasol Unit
              (London,UK), and Gladstone Gallery (NYC). While situating their
              practice at the crossroads of sonic performance, land
              installation, and expanded cinema, their iterative works examine
              carnival and rave culture throughout the West; to take on a
              remedial approach to the effects of
              &quot;destierro&quot;.Destierro is an untranslatable Spanish term
              that is most akin to being &quot;torn from the land&quot;.
              They&apos;ve contextualized the term to traverse towards ideas of
              Black and Queer fugitivy. Interwoven in the midst of these notions
              is a concern for the im/possibility of the Black Body and the
              failure of mechanical optics
            </p>
          }
        />
        <ContributorCard
          author="stella rae binion"
          key={6}
          photo={binion}
          desc={
            <p>
              stella rae binion (they/she) aspires to breathe underwater,
              embodying an ongoing project of “undrowning” (after alexis pauline
              gumbs) and speculations of continuance. stella rae is a
              chicago-based poet, filmmaker, and bodywork practitioner. her
              practice includes research of the poetic frequencies of fugitivity
              and the black outdoors, honor work as prayer and divination,
              witnessing intimacies through language and imaging, and the
              protection and celebration of black queer people. stella rae
              received a BA in media theory and creative writing from brown
              university in 2023.{" "}
            </p>
          }
        />

        <ContributorCard
          author="Alexis Pauline Gumbs"
          key={1}
          photo={gumbs}
          desc={
            <p>
              Alexis Pauline Gumbs is a Queer Black Feminist Love Evangelist and
              an aspirational cousin to all life. She is/they are the author of
              several books, most recently{" "}
              <i>Undrowned: Black Feminist Lessons from Marine Mammals</i>, and
              has a forthcoming biography,{" "}
              <i>Survival is a Promise: The Eternal Life of Audre Lorde</i>. She
              is/they are the co-founder of the Mobile Homecoming Trust, an
              intergenerational experiential living library of Black LBGTQ
              brilliance.
            </p>
          }
        />
        <ContributorCard
          author="Zoë Hopkins"
          key={0}
          photo={hopkins}
          desc={
            <p>
              Zoë Hopkins is a writer and critic based in New York. She received
              her BA in art history and African American studies at Harvard
              University, and is currently working on her MA in modern and
              contemporary art at Columbia University, where she researches
              conceptual art of the Black diaspora. Her writing has been
              published in Frieze Magazine, Artforum, The Brooklyn Rail,
              ArtReview and Hyperallergic, as well as several exhibition
              catalogs.
            </p>
          }
        />

        <ContributorCard
          author="isra rene"
          key={2}
          photo={rene}
          desc={
            <p>
              isra rene is a writer and artist based in Chicago, IL from Capitol
              Heights, MD
            </p>
          }
        />
        <ContributorCard
          long
          author="Rohan Ayinde"
          key={3}
          photo={ayinde}
          desc={
            <>
              <p>
                Rohan Ayinde is an anadisciplinary artist and poet based between
                London and Chicago. His work traverses audio, visual and
                literary forms and often embraces installation and performance.
                Through an entanglement with the phenomenon of the black hole,
                his practice attempts to excavate an architecture of ideology
                through the analytical framework of black feminist thought.
                Investigating how the politics of place intersects with the
                conceptual, his poems, drawings, videos and performance work are
                translations and sketches of landscapes built from a freedom
                best imagined by writers like Octavia Butler, Ursula Le Guin,
                Lola Olufemi and Edouard Glissant.{" "}
              </p>
              <br />
              <p>
                Ayinde is one half of the wayward/motile collaborative duo
                i.as.in.we, with friend/producer/dancer Yewande YoYo Odunubi. He
                received his MA in Visual and Critical Studies from SAIC (2019)
                and on graduating was a curatorial fellow with ACRE (2019-2023).
                In 2021 he was awarded the fifth Stuart Hall Library
                Artist&apos;s Residency. In 2024, Ayinde was admitted to the
                inaugural cohort of the Rose Choreographic School. He is the
                gallery director at Blanc (Chicago), and has curated multiple
                shows there. He is currently co-directing iwoyi, a
                5-screen-installation with Tayo Rapoport for the exhibition
                Beyond The Bassline: 500 years of Black British Music at the
                British Library (2024).
              </p>
            </>
          }
        />
        <ContributorCard
          long
          author="Camille and Daria"
          key={3}
          photo={camilleAndDaria}
          desc={<></>}
        />
      </div>
    </>
  )
}

type ContributorProps = {
  author: string
  photo: StaticImageData
  desc: React.ReactNode
  long?: boolean
}
function ContributorCard({ author, photo, desc, long }: ContributorProps) {
  const longStr = long ? long.toString() : "false"
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        scrollSnapAlign: "center",
        margin: "32px",
      }}
    >
      <h5 style={{ width: "100%", marginInlineStart: "12px" }}>{author}</h5>

      <ContributorCardContainer $long={longStr}>
        <ContributorPhoto src={photo} alt={`Photo of ${author}`} />
        <ContributorBody $long={longStr}>{desc}</ContributorBody>
      </ContributorCardContainer>
    </div>
  )
}
