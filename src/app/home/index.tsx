"use client"

import { GetStaticProps } from "next"
import Image from "next/image"
import { Base } from "@/components/base"
import { JupiterAnimation } from "@/app/home/JupiterAnimation"

// styled assets
import {
  Authors,
  EditorCover,
  EditorNote,
  Lottie,
  Main,
  PunctureOne,
  PunctureTwo,
  StyledAuthorLink,
  AuthorTitle,
  AuthorBody,
  AuthorContainer,
  AuthorPhoto,
  AuthorContent,
} from "./styled"
import { HugeGuy, MediumGuy } from "@/utils/layout"
import { JupiterLogo } from "@/components/JupiterLogo"
import { AuthorBackground } from "./AuthorBackground"

// author photos
import akwaeke from "../../../public/photos/akwaeke.png"
import diallo from "../../../public/photos/diallo.png"
import j from "../../../public/photos/j.png"
import joshua from "../../../public/photos/joshua.png"
import rianna from "../../../public/photos/rianna.png"
// import { Stream } from "@cloudflare/stream-react"

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    // show not found route in production and other non development environments
    notFound: process.env.NODE_ENV !== "development",
  }
}

export default function Home() {
  return (
    <Base homePage>
      <div
        style={{
          position: "absolute",
          margin: "50%",
          zIndex: 10,
          top: 300,
          left: -18,
        }}
      >
        <PunctureOne />
        <PunctureTwo />
      </div>
      <Main>
        <Lottie>
          <JupiterAnimation />
          {/* <Stream autoplay muted loop src="40f77307c32f578347df0b2123f78522" /> */}
        </Lottie>
        <EditorCover>
          <div style={{ height: "20%", width: "50%", padding: "16px" }}>
            <JupiterLogo color="white" />
          </div>
          <div
            style={{
              height: "80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <div>Editor&apos;s</div>
            <div>Note</div>
          </div>
        </EditorCover>
        <EditorNote className="abhaya-libre">
          <div>
            <p style={{ fontSize: "20px" }}>
              Consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur.
            </p>
            <HugeGuy />
            <p style={{ fontSize: "16px" }}>
              oluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. eatae vitae dicta
              sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.eatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et
              dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </EditorNote>
        <Authors>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              top: "24em",
              left: "10%",
              right: "10%",
            }}
          >
            {/* Author directory */}
            <>
              <AuthorLink name="Akwaeke Emezi" />
              <AuthorLink name="Joshua Segun" />
              <AuthorLink name="Diallo Simon-Ponte" />
              <AuthorLink name="J Wortham" />
              <AuthorLink name="Rianna Jade Parker" />
            </>

            <HugeGuy />

            {/* Author abouts */}
            <>
              <AuthorContainer>
                <AuthorPhoto>
                  <Image src={akwaeke} alt="Picture of the Akwaeke" />
                </AuthorPhoto>
                <AuthorContent>
                  <AuthorTitle>Akwaeke Emezi</AuthorTitle>
                  <AuthorBody>
                    Akwaeke Emezi (they/them) is the author of the New York
                    Times bestseller The Death of Vivek Oji, which was a
                    finalist for the Dylan Thomas Prize, the Los Angeles Times
                    Book Prize, and the PEN/Jean Stein Award; Pet, a finalist
                    for the National Book Award for Young People&apos;s
                    Literature, a Walter Honor Book, and a Stonewall Honor Book;
                    Freshwater, which was named a New York Times Notable Book
                    and shortlisted for the PEN/Hemingway Award, the New Public
                    Library Young Lions Fiction Award, the Lambda Literary
                    Award, and the Center for Fiction&apos;s First Novel Prize;
                    Dear Senthuran: A Black Spirit Memoir, which won the 2022
                    ALA Stonewall Prize for Best Nonfiction Book; and most
                    recently, Content Warning: Everything, their debut poetry
                    collection; Bitter, their second young adult novel; and You
                    Made A Fool of Death with Your Beauty, their debut romance
                    novel. Their next novel, LITTLE ROT, is forthcoming from
                    Riverhead in June 2024. Selected as a 5 Under 35 honoree by
                    the National Book Foundation and featured on a Time cover as
                    a Next Generation Leader, they are based in liminal spaces.
                  </AuthorBody>
                </AuthorContent>
              </AuthorContainer>
              <AuthorContainer>
                <AuthorPhoto>
                  <Image src={joshua} alt="Picture of the Joshua" />
                </AuthorPhoto>
                <AuthorContent>
                  <AuthorTitle>Joshua Segun-Lean</AuthorTitle>
                  <AuthorBody>
                    Joshua Segun-Lean&apos;s writing has appeared in The
                    Republic Magazine, The Brooklyn Rail, and elsewhere.
                  </AuthorBody>
                </AuthorContent>
              </AuthorContainer>
              <AuthorContainer>
                <AuthorPhoto>
                  <Image src={diallo} alt="Picture of the Diallo" />
                </AuthorPhoto>
                <AuthorContent>
                  <AuthorTitle>Diallo Simon-Ponte</AuthorTitle>
                  <AuthorBody>
                    Diallo Simon-Ponte is a writer and curator currently working
                    at Gagosian Gallery. Since starting there in the fall of
                    2021, he has supported over 16 exhibitions of artists
                    including Cy Gavin, Rick Lowe, Deana Lawson, Tyler Mitchell,
                    and Amanda Williams among others. Outside of the gallery
                    Simon-Ponte curated Home as Corpus for the fashion brand
                    Head of State by Taofeek Abijako and worked as a curatorial
                    assistant on Virgil Abloh: Figures of Speech at the Brooklyn
                    Museum, Cowboy by Helmut Lang at Hannah Traore Gallery, and
                    the 2023 Yale Photography MFA show at Amanita gallery. He is
                    an alumni curator of the Black Art Sessions by Ebony Haynes.
                    His bylines include Apollon Journal and Just Smile Magazine.
                  </AuthorBody>
                </AuthorContent>
              </AuthorContainer>
              <AuthorContainer>
                <AuthorPhoto>
                  <Image src={j} alt="Picture of the J" />
                </AuthorPhoto>
                <AuthorContent>
                  <AuthorTitle>J Wortham</AuthorTitle>
                  <AuthorBody>
                    J Wortham (they/them) is a sound healer, reiki practitioner,
                    herbalist, and community care worker oriented towards
                    healing justice and liberation. J is also a staff writer for
                    The New York Times Magazine, and co-host of the podcast
                    “Still Processing.” J is the proud editor of the visual
                    anthology “Black Futures,” along with Kimberly Drew. J is
                    currently working on a book about the body and dissociation
                    called “Work of Body.”
                  </AuthorBody>
                </AuthorContent>
              </AuthorContainer>
              <AuthorContainer>
                <AuthorPhoto>
                  <Image src={rianna} alt="Picture of the Rianna" />
                </AuthorPhoto>
                <AuthorContent>
                  <AuthorTitle>Rianna Jade Parker</AuthorTitle>
                  <AuthorBody>
                    Rianna Jade Parker is a critic, art historian, curator and
                    researcher based in South London where she studied her MA in
                    Contemporary Art Theory at Goldsmiths College, University of
                    London. She is a Contributing Editor of Frieze magazine and
                    co-curated War Inna Babylon: The Community&apos;s Struggle
                    for Truths and Rights at the Institute of Contemporary Arts,
                    London.
                    <HugeGuy />
                    Her first book A Brief History of Black British Art was
                    published by Tate in 2022. Her second title, An Unfinished
                    History of Black Artists is forthcoming with Quarto Books in
                    2024, and she is represented by The Wiley Agency.
                  </AuthorBody>
                </AuthorContent>
              </AuthorContainer>
            </>

            <HugeGuy />
            <HugeGuy />

            {/* Credits */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>Jupiter Magazine </p>
              <p>Published by: Dogbeach Jupiter </p>
              <MediumGuy />
              <p>Publication Year: 2024</p>
              <p>
                Editorial Team: Camille Bacon, Daria Harper, xxxxxx, xxxxxxxx,
                xxxxxxxxx
              </p>
              <p>Design Team: DogBeach;</p>
              <p>
                Creative Director: Sebastien Pierre, Design Director: Alyssa
                Klimo, Art Director: Erica Ohmi{" "}
              </p>
              <MediumGuy />

              <p>Web Development: Nishat Firoj </p>
              <MediumGuy />

              <p>
                Contributors: Awaeke Emezi, Joshua Segun, Rianna Jade Parker, J
                Wortham, Diallo Simon-Ponte{" "}
              </p>
              <MediumGuy />

              <p>
                Photography and Illustrations by: [List of Photographers and
                Illustrators] (do we want to put that here?){" "}
              </p>
              <MediumGuy />

              <p>Acknowledgments: xxxxxxx, xxxxxxx, xxxxxxxxxxx </p>
              <MediumGuy />

              <p>
                This magazine represents the culmination of a year-long journey
                of creative exploration and collaboration. (placeholder){" "}
              </p>
              <MediumGuy />
              <p>
                (Do we need this? this makes it feels forced) At Dogbeach Design
                Studio, we are committed to pushing the boundaries of design and
                storytelling.
              </p>
              <MediumGuy />
              <p>
                We would like to extend our heartfelt thanks to our talented
                team, our contributors, and, most importantly, our readers,
                xxxxx.
              </p>
            </div>
          </div>
          <AuthorBackground />
        </Authors>
      </Main>
    </Base>
  )
}

function AuthorLink({ name }: { name: string }) {
  return <StyledAuthorLink href={`./magazine/${name}`}>{name}</StyledAuthorLink>
}
