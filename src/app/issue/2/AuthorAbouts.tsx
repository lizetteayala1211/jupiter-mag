import { StaticImageData } from "next/image"
import {
  ContributorCardContainer,
  ContributorPhoto,
  Slide,
  Row,
  ScrollerContainer,
  ScrollerOuterContainer,
} from "./styled"

import dummy from "../../../../public/photos/j.png"
import { useBreakpoints } from "@/utils/hooks"

export function AuthorAbouts() {
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
                paddingInlineStart: "152px",
                paddingBlockEnd: "56px",
              }
        }
      >
        <h1
          style={
            isMobile
              ? {
                  fontSize: "40px",
                  lineHeight: "32px",
                }
              : {
                  fontSize: "72px",
                  lineHeight: "64px",
                }
          }
        >
          Our <br />
          Contributors
        </h1>
      </div>
      <ScrollerOuterContainer>
        <ScrollerContainer>
          <DesktopSlideOne />
          <DesktopSlideTwo />
        </ScrollerContainer>
      </ScrollerOuterContainer>
    </>
  )
}

type ContributorProps = {
  author: string
  photo: StaticImageData
  desc: string
}
function ContributorCard({ author, photo, desc }: ContributorProps) {
  return (
    <ContributorCardContainer>
      <h5>{author}</h5>
      <ContributorPhoto src={photo} alt={`Photo of ${author}`} />
      <p>{desc}</p>
    </ContributorCardContainer>
  )
}

function DesktopSlideOne() {
  return (
    <Slide>
      <Row>
        <ContributorCard
          author={"1"}
          key={1}
          photo={dummy}
          desc={
            "Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante. Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante."
          }
        />
        <ContributorCard
          author={"2"}
          key={2}
          photo={dummy}
          desc={
            "Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante. Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante."
          }
        />
      </Row>
      <Row>
        <ContributorCard
          author={"3"}
          key={3}
          photo={dummy}
          desc={
            "Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante. Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante."
          }
        />
        <ContributorCard
          author={"4"}
          key={4}
          photo={dummy}
          desc={
            "Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante. Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante."
          }
        />
      </Row>
    </Slide>
  )
}

function DesktopSlideTwo() {
  return (
    <Slide>
      <Row>
        <ContributorCard
          author={"5"}
          key={5}
          photo={dummy}
          desc={
            "Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante. Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante."
          }
        />
        <ContributorCard
          author={"6"}
          key={6}
          photo={dummy}
          desc={
            "Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante. Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante."
          }
        />
      </Row>
      <Row>
        <ContributorCard
          author={"7"}
          key={7}
          photo={dummy}
          desc={
            "Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante. Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante."
          }
        />
        <ContributorCard
          author={"8"}
          key={8}
          photo={dummy}
          desc={
            "Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante. Fusce viverra euismod ullamcorper. Praesent ante purus, feugiat eu risus nec, placerat varius tortor. Morbi vulputate augue sed arcu finibus lacinia. Maecenas hendrerit eleifend quam eget commodo. Quisque sit amet cursus elit. In cursus fermentum magna sit amet maximus. Aenean et neque leo. Ut ac elit ante."
          }
        />
      </Row>
    </Slide>
  )
}
