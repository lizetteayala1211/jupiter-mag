"use client"

import { ArticleBase } from "@/components"

import { issue2Metadata } from ".."
import { ArticleContainer, ArticleImage } from "../../styled"
import { BigGuy, CaptionContainer } from "@/utils/layout"
import isra1 from "../../../../../../public/photos/Isra_Rene_Image1.png"

import title from "../../../../../../public/titles/rene.svg"
import cover from "../../../../../../public/titles/Jupiter_title_rene.png"
import { ArticleCover } from "../../ArticleCover"

export default function Page() {
  return (
    <ArticleBase
      next={issue2Metadata[4]}
      previous={issue2Metadata[2]}
      position="0% 90% 0% 0%"
      issue={2}
      svg={
        <ArticleCover
          svg={title}
          png={cover}
          title={issue2Metadata[2].title}
          author={issue2Metadata[2].author}
        />
      }
    >
      <Article />
    </ArticleBase>
  )
}

function Article() {
  return (
    <ArticleContainer>
      <p style={{ color: "white" }}>
        <i>
          Did you know that the moon doesn&apos;t produce its own light? The
          glow of the sun reflects onto its surface to animate it.{" "}
        </i>
      </p>
      <ArticleImage
        src={isra1}
        alt="Image saved by author at W Cullerton St & S Halsted St, January 30, 2024, 4:17pm."
      />
      <CaptionContainer>
        image saved by author at <br />
        W Cullerton St & S Halsted St, <br />
        january 30; 4:17pm
      </CaptionContainer>
      <p style={{ lineHeight: "32px", color: "white" }}>
        Lately, I&apos;ve made it a point to take wide-eyed walks from my
        apartment in Pilsen to my hosting job in River North—one hour and twenty
        minutes of dream pop and viaducts turned industrial techno and Chicago
        Riverwalk. Treading along one late afternoon I found that the moon
        floated as brightly as a freshwater pearl in a deep blue sky. My
        curiosity swelled as though this pearly moon was washed ashore, just for
        me. I scoured the web to understand how it posed such luminosity in the
        middle of the day. Eventually, I stumbled onto what astrophysicists call
        periapsis. I learned that periapsis can be considered a closeness and
        that the closeness you may find that lasts for days holds the same
        strength as a closeness that lasts over the span of years.
      </p>
      <p style={{ lineHeight: "32px", color: "white" }}>
        For as long as we could, the moon and I followed one another and during
        those passing moments I felt as close to self-surrender and allowance
        and possibility and withdrawal and obscurity and invisibility all
        sutured together. <i>(culled from my diary, January 30, 2024)</i>
      </p>
      <BigGuy />
      <p style={{ textAlign: "center", color: "white" }}>
        <b>
          <i>The way one encounters what one cannot see</i>
        </b>
      </p>
      <p style={{ color: "white" }}>
        In astronomy, for every two-body system that shares an elliptical orbit,
        there will always exist a period of time where the masses are at their
        closest point of approach. This proximal junction is known as
        “periapsis,” a circular orbit whose trajectory varies depending on the
        two objects in relation. For instance, the periapsis of a planet around
        a star diverges widely and dramatically from the periapsis of a
        satellite around an asteroid. The orbital revolution of each two-body
        reference is dictated by its own comportment—reflecting unique
        coordination, guidance, and parameters. I began to wonder about the ways
        that orbital elements of a two-body system are not conditional to
        celestial objects but could translate intimately to people, places, or
        even beingness. I thought about a bright and brief periapsis you might
        feel with a flower one morning when noticing the dew from the night
        before still lingering on its petals, or the everlasting periapsis felt
        with a body of water as you mutually shape and reshape over time, or the
        sweet and dizzying spiral of lovers who share a diaphanous glance across
        a room filled with strangers.{" "}
      </p>
      <p style={{ textAlign: "center", color: "white" }}>*</p>
      <p style={{ color: "white" }}>
        At one point or another, in any relationship that you have with someone
        or something, there exists a periapsis: the intimately mundane points of
        encounter that follow a path of discrete magnitude toward the
        possibility of becoming an unfathomable world apart and away from. The
        locus of periapsis considers intimacy as a spatial and temporal
        presence. It collapses the region of violence brought on by the current
        apocalypse and brings the substance of supportive alignment to the
        forefront. I find myself preoccupied with how this phenomenon formulates
        the closeness needed to create a boundless space of no/thingness known
        as a black hole—an abyss, a recess, a chasm, an opening, a lacuna, a
        clearing, a (trap) door—emphasizing the supple invocation of darkness
        and shadows as grounds for speculation, contestation, and possibility.
        The space of no/thingness created at the moment where two bodies find
        themselves at the point of closest encounter fascinates me, especially
        when those organic bodies are Black and femme. The theoretical parallels
        between the condition of Blackness and planetary dark matter as{" "}
        <a target="_blank" href="https://www.dukeupress.edu/dark-matters">
          “invisible and unknowable, yet somehow still there,”
        </a>{" "}
        as carefully circled by Black studies and surveillance studies scholar
        Simone Browne, demands slowness and sustained attention.{" "}
      </p>
      <p style={{ textAlign: "center" , color: "white" }}>*</p>
      <p style={{ color: "white" }}>
        In a{" "}
        <a
          target="_blank"
          href="https://thefeministwire.com/2016/03/conjuring-june-jordan/"
        >
          love letter
        </a>{" "}
        written by Alexis De Veaux about June Jordan, De Veaux narrates the
        expansive and enduring love shared in their periapsis. Recounting the
        exact moment she met Jordan, she hums, “I encounter her.{" "}
        <i>The way one encounters what one cannot see</i>—force, cosmic energy,
        the way, I imagine, planets, stars, other constellations encounter each
        other; by way of light, vibration, cruising the other&apos;s orbit. I do
        not see her come in.” De Veaux offers me another reading of the
        embodiment of “invisible” and “unknowable” through her use of{" "}
        <i>encounter</i> as simultaneously casual and monumentous. The quietude
        of <i>encounter</i> as not a space of enunciation and articulation, but
        as a no-place where love meets projecting a covering of protection
        brimming with expansive fulfillment. The periapsis of De Veaux and
        Jordan seems tied to the often overlooked, but not unnoticed, love act
        of presently listening. Jordan&apos;s orbital revolution isn&apos;t
        announced with De Veaux, she simply arrives—existing in a manner of
        peripherality that became an energizing force which moved mountains in
        their worlds. This subtle and everlasting force of attraction, which is
        already understood as the imaginary concept of “gravitational fields,”
        generates the means for which circularity in love is made possible:
        periapsis allows for love to remain as a force, though its pull varies
        throughout time.
      </p>
      <p style={{ textAlign: "center" , color: "white" }}>*</p>
      <p style={{ color: "white" }}>
        De Veaux has written and published many love letters to and about
        Jordan. And as I understand it, it has become a gesture of benevolent
        conjuring; a devotional act, a durational holding of love as a faculty,
        a continuum of periapsis that defies the laws of spacetime by way of
        determination not to allow her memory and their love to evaporate. De
        Veaux and Jordan occupied a periapsis whose intimacies unsettled,
        untethered, and unbound their autonomously beheld constitution while
        being a defensible dwelling for one another. Perhaps their closeness
        provided particular shelter and discrete boundaries or strategies of
        queer, femme assembly and dissemblance. Nevertheless, with every circle
        they made around each other, their closeness created (w)hole worlds
        apart from the destruction around them.
      </p>
      <p style={{ textAlign: "center" , color: "white" }}>
        <b>
          <i>The way one encounters what one cannot see</i>
        </b>
      </p>
      <div style={{ color: "white" }}>
        And yet, periapsis is not solely reserved to the digestible
        understanding of the two-body system. Bodies can be tangible and still
        abstracted. Bodies can refer to (non)human organisms and also to the
        looming unseen self. This is the case for Linda Sharrock, whose
        periapsis—the orbital revolution between her and the underbelly of her
        subconscious—I find most striking. In 1970, Linda and Sonny Sharrock
        delivered to the world a reaming album of proportional and illegible
        delight: <i>Black Woman</i>, wherein imminent infinity lives in minutia.
        &quot;Portrait of Linda in Three Colors, All Black&quot; is the final
        and descending track where she offers vocality as a siren of welcome and
        warning. In the previous four tracks, Sharrock syncopates us to her
        rhyme of pleasure and desire of disorienting pentatonic scales and once
        we arrive at the last track, her haunting self-portrait, she meets
        herself—another modality of periapsis—with the cacophonic melodies of
        yearning, sovereignty, and incalculable imaginings of Black femme
        eruption. Sharrock&apos;s <i>encounter</i> of self in this format
        imbibes from the same well as De Veaux&apos;s <i>encounter</i> with
        Jordan, only the other orbiting body in Sharrock&apos;s two-body system
        is her own specter. Sharrock wails{"      "}screams{"     "}hollers
        {"      "}rages
        {"    "}
        cries
        {"     "}whimpers{"     "}coos{"      "}murmurs{"       "}croons. All
        signaling the exposure that takes place when one is at the closest point
        of approach with its own interiority—full and utter transparency.
        Sharrock encounters the dimensions of herself as a durational holding,
        conjuring an evocative momentum that maintains the temporal promise of
        catharsis found in the sensations of incomprehensible screaming. A
        scream requires an open mouth, which is inherently an{" "}
        <a
          target="_blank"
          href="https://read.dukeupress.edu/liquid-blackness/article/6/2/130/319813/The-Ontology-of-Open-MouthsThe-Scream-and-the"
        >
          ontological instance of a black hole
        </a>
        . As Anderson billows, “To scream is a physiological response to terror,
        yes, but it&apos;s also something born of laughter, grief, ecstasy, or
        rage, all of which ultimately represent catharsis.” Sharrock’s{" "}
        <i>encounter</i> ripples in Anderson&apos;s understanding of &quot;to
        scream.&quot; The <i>periapsis</i> that faces Sharrock in her prismed
        mirror does not empty out quietly into the night but instead it distills
        into its own darkness by br(e)aking into the drive toward total
        annihilation—it doubles down
        <br />
        <div style={{ color: "white" }}>
          and
          <br />
          down
        </div>
        <div style={{ textAlign: "center", color: "white"}}>
          and
          <br />
          down
        </div>
        <div style={{ textAlign: "right", color: "white" }}>
          and
          <br />
          down
        </div>
        some more. <br />
        It is flushed with crosscuts of dispersed dissipation, creating
        dimensional folds in time so that she may breathe fully into her own
        unknown.
      </div>
      <BigGuy />
      <p style={{ textAlign: "center", color: "white" }}>
        <b>
          <i>The way one encounters what one cannot see</i>
        </b>
      </p>
      <p style={{ color: "white" }}>
        Periapsis—if either with a body in or outside of the self—reminds me of
        the elliptically dynamic and complicated love that courses through our
        interrelation and subjectivity. For me, the argument of periapsis has
        evolved into the paradigm of periapsis, or:{" "}
      </p>
      <p style={{ textAlign: "center", color: "white" }}>
        <i>The way one encounters what one cannot see </i> <br />
        <i>The way one encounters what one cannot hear</i> <br />
        <i>The way one encounters what one cannot fathom</i> <br />
        <i>The way one encounters what one cannot perceive</i> <br />
        <i>The way one encounters what one cannot explain</i> <br />
        <i>The way one encounters what one cannot decode</i> <br />
        <i>The way one encounters what one cannot translate</i> <br />
        <i>The way one encounters what one cannot decipher</i> <br />
        <i>The way one encounters what one cannot articulate</i> <br />
        <i>The way one encounters what one cannot determine</i> <br />
        <i>The way one encounters what one cannot consume</i> <br />
        <i>The way one encounters what one cannot translate</i> <br />
        <i>The way one encounters what one cannot comprehend</i> <br />
        <i>The way one encounters what one cannot disentangle </i> <br />
        <i>The way one encounters what one cannot grasp</i> <br />
        <i>The way one encounters what one cannot………</i> <br />
      </p>
      <p style={{ color: "white" }}>
        <i>
          Thank you Alexis De Veaux and June Jordan and Linda Sharrock and Lila
          Young and…
        </i>
      </p>
    </ArticleContainer>
  )
}
