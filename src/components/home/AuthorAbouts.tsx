import { HugeGuy } from "@/utils/layout"
import {
  AuthorContainer,
  AuthorPhoto,
  AuthorTextContent,
  AuthorTitle,
  AuthorBody,
  AuthorAboutsContainer,
} from "./styled"
import { useBreakpoints } from "@/utils/hooks"
import Image from "next/image"

// author photos
import akwaeke from "../../../public/photos/akwaeke.png"
import diallo from "../../../public/photos/diallo.png"
import j from "../../../public/photos/j.png"
import joshua from "../../../public/photos/joshua.png"
import rianna from "../../../public/photos/rianna.png"

export function AuthorAbouts() {
  const { isSmallDesktop, isDesktop, isLargeDesktop } = useBreakpoints()
  const getResponsiveImageSize = (): number => {
    if (isSmallDesktop) return 250
    if (isDesktop) return 300
    if (isLargeDesktop) return 500
    return 50 // is mobile
  }

  return (
    <AuthorAboutsContainer>
      <AuthorContainer>
        <AuthorPhoto>
          <Image
            width={getResponsiveImageSize()}
            style={{ height: "auto" }}
            src={akwaeke}
            alt="Picture of the Akwaeke"
          />
        </AuthorPhoto>
        <AuthorTextContent>
          <AuthorTitle>Akwaeke Emezi</AuthorTitle>
          <AuthorBody>
            Akwaeke Emezi (they/them) is the author of the New York Times
            bestseller The Death of Vivek Oji, which was a finalist for the
            Dylan Thomas Prize, the Los Angeles Times Book Prize, and the
            PEN/Jean Stein Award; Pet, a finalist for the National Book Award
            for Young People&apos;s Literature, a Walter Honor Book, and a
            Stonewall Honor Book; Freshwater, which was named a New York Times
            Notable Book and shortlisted for the PEN/Hemingway Award, the New
            Public Library Young Lions Fiction Award, the Lambda Literary Award,
            and the Center for Fiction&apos;s First Novel Prize; Dear Senthuran:
            A Black Spirit Memoir, which won the 2022 ALA Stonewall Prize for
            Best Nonfiction Book; and most recently, Content Warning:
            Everything, their debut poetry collection; Bitter, their second
            young adult novel; and You Made A Fool of Death with Your Beauty,
            their debut romance novel. Their next novel, LITTLE ROT, is
            forthcoming from Riverhead in June 2024. Selected as a 5 Under 35
            honoree by the National Book Foundation and featured on a Time cover
            as a Next Generation Leader, they are based in liminal spaces.
          </AuthorBody>
        </AuthorTextContent>
      </AuthorContainer>
      <AuthorContainer>
        <AuthorPhoto>
          <Image
            width={getResponsiveImageSize()}
            style={{ height: "auto" }}
            src={joshua}
            alt="Picture of the Joshua"
          />
        </AuthorPhoto>
        <AuthorTextContent>
          <AuthorTitle>Joshua Segun-Lean</AuthorTitle>
          <AuthorBody>
            Joshua Segun-Lean&apos;s writing has appeared in The Republic
            Magazine, The Brooklyn Rail, and elsewhere.
          </AuthorBody>
        </AuthorTextContent>
      </AuthorContainer>
      <AuthorContainer>
        <AuthorPhoto>
          <Image
            width={getResponsiveImageSize()}
            style={{ height: "auto" }}
            src={diallo}
            alt="Picture of the Diallo"
          />
        </AuthorPhoto>
        <AuthorTextContent>
          <AuthorTitle>Diallo Simon-Ponte</AuthorTitle>
          <AuthorBody>
            Diallo Simon-Ponte is a writer and curator currently working at
            Gagosian Gallery. Since starting there in the fall of 2021, he has
            supported over 16 exhibitions of artists including Cy Gavin, Rick
            Lowe, Deana Lawson, Tyler Mitchell, and Amanda Williams among
            others. Outside of the gallery Simon-Ponte curated Home as Corpus
            for the fashion brand Head of State by Taofeek Abijako and worked as
            a curatorial assistant on Virgil Abloh: Figures of Speech at the
            Brooklyn Museum, Cowboy by Helmut Lang at Hannah Traore Gallery, and
            the 2023 Yale Photography MFA show at Amanita gallery. He is an
            alumni curator of the Black Art Sessions by Ebony Haynes. His
            bylines include Apollon Journal and Just Smile Magazine.
          </AuthorBody>
        </AuthorTextContent>
      </AuthorContainer>
      <AuthorContainer>
        <AuthorPhoto>
          <Image
            width={getResponsiveImageSize()}
            style={{ height: "auto" }}
            src={j}
            alt="Picture of the J"
          />
        </AuthorPhoto>
        <AuthorTextContent>
          <AuthorTitle>Jenna J Wortham</AuthorTitle>
          <AuthorBody>
            Jenna J Wortham (they/them) is a sound healer, reiki practitioner,
            herbalist, and community care worker oriented towards healing
            justice and liberation. J is also a staff writer for The New York
            Times Magazine, and co-host of the podcast “Still Processing.” J is
            the proud editor of the visual anthology “Black Futures,” along with
            Kimberly Drew. J is currently working on a book about the body and
            dissociation called “Work of Body.”
          </AuthorBody>
        </AuthorTextContent>
      </AuthorContainer>
      <AuthorContainer>
        <AuthorPhoto>
          <Image
            width={getResponsiveImageSize()}
            style={{ height: "auto" }}
            src={rianna}
            alt="Picture of the Rianna"
          />
        </AuthorPhoto>
        <AuthorTextContent>
          <AuthorTitle>Rianna Jade Parker</AuthorTitle>
          <AuthorBody>
            Rianna Jade Parker is a critic, art historian, curator and
            researcher based in South London where she studied her MA in
            Contemporary Art Theory at Goldsmiths College, University of London.
            She is a Contributing Editor of Frieze magazine and co-curated War
            Inna Babylon: The Community&apos;s Struggle for Truths and Rights at
            the Institute of Contemporary Arts, London.
            <HugeGuy />
            Her first book A Brief History of Black British Art was published by
            Tate in 2022. Her second title, An Unfinished History of Black
            Artists is forthcoming with Quarto Books in 2024, and she is
            represented by The Wiley Agency.
          </AuthorBody>
        </AuthorTextContent>
      </AuthorContainer>
    </AuthorAboutsContainer>
  )
}
