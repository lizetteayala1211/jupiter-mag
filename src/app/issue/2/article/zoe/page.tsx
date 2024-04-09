"use client"

import { ArticleBase } from "@/components"

import { ArticleCover } from "../ArticleCover"
import { issue2Metadata } from ".."

import hopkins1 from "../../../../../../public/photos/Hopkins_Image1.png"
import hopkins2 from "../../../../../../public/photos/Hopkins_Image2.png"
import hopkins3 from "../../../../../../public/photos/Hopkins_Image3.png"
import { ArticleContainer, ArticleImage, FooterContainer } from "../../styled"
import { CaptionContainer } from "@/utils/layout"

import title from "../../../../../../public/titles/hopkins.svg"
import cover from "../../../../../../public/titles/Jupiter_title_Hopkins.png"

export default function Page() {
  return (
    <ArticleBase
      next={issue2Metadata[3]}
      previous={issue2Metadata[1]}
      position="0% 80% 50% 0%"
      issue={2}
      svg={
        <ArticleCover
          svg={title}
          png={cover}
          title={issue2Metadata[0].title}
          author={issue2Metadata[0].author}
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
      <p>
        I&apos;ll start with an imprint. The mark of a life, burrowing itself
        into the rough skin of time. An index of flesh and feeling etched into a
        centurial being.
      </p>

      <p>
        If you look closely enough, you&apos;ll see it. There, on the Rotunda at
        the University of Virginia, a slight buckle in a building&apos;s facade
        where the fingerprints of an enslaved brickmaker—one of the fifteen who
        made the 900,000 bricks used to construct that structure—refused to mask
        his work.<sup>1</sup> An intractable residue of labor quite literally
        sealed in stone. An indentation haunted with the press/ure of Black
        being and making. This imprint is not supposed to be there: the
        buildings would be majestic, would announce themselves, but the terrible
        fact of how they came to be would have to remain quiet. A secret tucked
        behind all those thick layers of Neoclassical Jeffersonian architecture,
        all the “great” American intellect sealed therein.
      </p>

      <p>This fingerprint is my monument. A Black presence endures. </p>

      <p>
        I do not know the name of the person who laid that brick on that lawn,
        so I will cherish this other language of presence instead. No name to
        hold, so I hold the negative space created in the throes.
      </p>

      <ArticleImage
        src={hopkins1}
        alt="Imprint of anonymous enslaved fingers at the UVA Rotunda. Image Courtesy of Mabel O. Wilson."
      />
      <CaptionContainer>
        Imprint of anonymous enslaved fingers at the UVA Rotunda. Image Courtesy
        of Mabel O. Wilson.
      </CaptionContainer>

      <p>
        I do not know the name of the person who laid that brick on that lawn,
        so I will cherish this other language of presence instead. No name to
        hold, so I hold the negative space created in the throes of contact
        between wet brick and thumb or index finger. A reliquary made of weight,
        work, and a life that insistently testifies to the fact that it was
        lived. A gift to the horizon of years.
      </p>

      <p>
        When I learned of this anonymous Black mason, I thought of the artist
        Martin Puryear and the way he has used bricks to make a sculpture about
        eternity.
      </p>

      <p>
        Forgive me for the drama, but with Puryear, I cannot help but succumb to
        reverence. A kind of breathless feeling of having arrived somewhere in
        harmony with the sacred. It is the artist&apos;s own reverence—his
        utter, undying devotion to the materials that he works with, their
        poetics, and the craft that they make possible—that I find so precious,
        so prone to prayer-full encounters. His is a practice that truly honors
        the traditions of making that it springs from: masonry, woodworking,
        welding. But Puryear isn&apos;t just knowledgeable about these craft
        traditions, he inhabits them with every part of himself. In his own
        words: “my creativity flows from my brain through my hands to the work.”
        <sup>2</sup>
      </p>

      <p>
        Things were textured with a certain lucidity on that Wednesday afternoon
        when dear Camille Bacon and I headed upstate from Grand Central to visit
        Puryear&apos;s newly commissioned sculpture, <i>Lookout</i> (2023), at
        Storm King Art Center. It was during that beautiful juncture of autumn
        when the leaves are quivering with decisive readiness to fall. The air
        seemed lined with a particular clarity, urging me toward a witnessing
        that is rare in its depth and wholeness. We made our way to the top of
        the hill where the sculpture sits. And so it was. We came and we
        witnessed.
      </p>

      <ArticleImage
        src={hopkins2}
        alt="Martin Puryear, <i>Lookout</i>, 2023. Image Courtesy of Storm King Art Center."
      />
      <CaptionContainer>
        Martin Puryear, <i>Lookout</i>, 2023. Image Courtesy of Storm King Art
        Center.
      </CaptionContainer>

      <p>
        Casting its interminable gaze out into the hills, soaking in the cool
        sun, the first thing to know about <i>Lookout</i>, is that it plans to
        live a very long life. Puryear believes it will outlast the
        institutional life of Storm King itself. I believe this too. The
        installation, which is more of an architecture that one steps inside of
        than a sculpture that one looks at, was made using the kind of materials
        that laugh in the face of time, that only know tenacious ways of being.
        It is made of red bricks that are sutured together with an exceptionally
        durable kind of hydraulic cement sourced from Rosendale, NY.<sup>3</sup>{" "}
        Because of the particular chemical composition of this cement, during
        its construction,
        <i>Lookout</i> grew in strength with each layer, and will continue to
        get stronger as the cement fully cures—a process that can take up to
        twelve months.<sup>4</sup> Imagine all that we can learn from a material
        that gets stronger as it gets older.
      </p>

      <p>
        The second thing to know about <i>Lookout</i> is that it seems, at
        first, to live a paradox of form and physics. The architecture of the
        thing, once comprehended, will make you shudder in awe of what it means
        for the ostensibly impossible to make itself manifest, and undeniably
        so.
        <i>Lookout</i> was conceived out of an ancient masonry technique known
        as the Nubian vaulting, which Puryear originally encountered during a
        trip to Mali.<sup>5</sup> I am still wrapping my head around this wonder
        of design: the layers of red clay bricks are nestled together by way of
        a method that allows them to build in undulation. Nubian vaulting
        rebukes the rigid and unyielding verticality that one would typically
        expect of a brick structure and, instead, beckons <i>Lookout</i> to
        curve in double: its opening arches like the mouth of a tunnel, but then
        it pivots toward the heavens, up with the vertical curve of a dome. It
        is shaped like an invitation for embrace.
      </p>

      <ArticleImage
        src={hopkins3}
        alt="Inside of <i>Lookout</i>. Image courtesy of Storm King Art Center."
      />
      <CaptionContainer>
        Inside of <i>Lookout</i>. Image courtesy of Storm King Art Center.
      </CaptionContainer>

      <p>
        It&apos;s a shape I&apos;ve never seen before and I couldn&apos;t have
        imagined before I saw it. For starters, it is a wholly impractical thing
        to do: who would think to use rectilinear bricks to assemble a curved
        material? A rounded thing made of straightness? Right. Leave it to the
        Black aesthetic tradition to delight in the non-utilitarian way of doing
        things, to steal the logic of your crushing linearity and make it swell
        with supple shape.
      </p>
      <p>
        All curving and careening, <i>Lookout</i> is Blackness at an angle. It
        is an architecture for those of us who are enduringly wayward, who
        perpetually insist on going with the curves. Black being always at a
        tilt, like those bricks and all their doming. A swerve that disrupts
        those ideological architectures of hard-edged rigidity which keep trying
        to bend us out of shape.
      </p>
      <p>
        I&apos;m obsessed with the way that Puryear&apos;s sculpture makes time
        curve too. The way that it is made with an ancient technique yet already
        so aware of its future, already prepared to outlive me.
      </p>
      <p>
        <i>Lookout</i> reminds me of what I know about time—that it is frenzied
        and errant, that it dances in wild circles, that it pushes and pulls
        back and forth—which incarnates a set of questions about physics.
        Recently, I have been looking to the physicist and queer feminist Karen
        Barad, who has made it possible for me to love science. In one of their
        writings, Barad explains a phenomenon known as{" "}
        <i>temporal diffraction</i>: a principle in quantum physics that
        describes the way that particles can exist in multiple temporalities at
        the same time.<sup>6</sup>
      </p>
      <p>
        Under the framework of classical physics, only waves are capable of
        producing diffraction—the pattern of spread and enlargement that is
        formed when quantum matter meets an obstacle.<sup>7</sup> However, as
        Niels Bohr discovered, quantum physics tells us that <i>particles</i>{" "}
        like electrons, neutrons, and atoms are also capable of wave-like
        behavior.
        <sup>8</sup>
        Thus, akin to waves, they too can diffract. They too can stretch across
        many places at once. When particles behave like waves and diffract, they
        produce what&apos;s known as a state of <i>superposition</i>, wherein a
        particle simultaneously exists between several positions in space.
        <sup>9</sup>
        According to Barad, particles can also produce a temporal diffraction in
        which they are “indeterminately coexisting at multiple times—for
        example, yesterday, today, and tomorrow.”<sup>10</sup>
      </p>
      <p>
        In describing the capacity of quantum matter to exist multiply in times,
        Barad upends everything I presumed to be fundamental to existence and
        time. Their words dance within my memory of <i>Lookout</i>: “Here-now
        and there-then have become unmoored,”<sup>11</sup> they write, and I
        think of the way that all times burst out from Puryear&apos;s
        architecture, the way the particulate matter of his deeply historic
        materials exist in anticipation of their own future. Something like a
        superposition of time(s) is intrinsic to the fiber of{" "}
        <i>Lookout&apos;s</i> being.
      </p>
      <p>
        I think also of the whole matter of the structures&apos; curves and
        angles. I look at them and trace those microscopic ripples of concavity
        that are produced when a particle diffracts, when its seemingly
        coherent, localized existence ripples. And the ripple of that
        fingerprint at the Rotunda in Virginia: a curve much larger than quantum
        particles but smaller than <i>Lookout</i>, a curve at the scale of
        touch. They are talking to each other, these defiant shapes. Particles
        acting like waves, bricks acting like diffracted particles, and a finger
        bending the shape of memory. Matter misbehaving, <i>Black like me.</i>
        <sup>12</sup>
      </p>
      <p>
        As Puryear teaches us, and as our aforementioned, anonymous, steadfast
        co-conspirator in Virginia reveals, the vibration of Black life teems
        from those quantum particles that Barad writes of. Indeed, Blackness is
        always rhyming with the universe and vice versa. Arcing and overlapping
        into curves of multiplicity and endurance. The charge of Black life is
        always mattering itself through endurance by any means necessary. The
        marks of Black being persist, inextinguishable, irreducible, and
        slanted. Yes, we will bear down on your architecture for hundreds of
        years. We will encode our presence at universities, on hilltops, in
        museums. Can&apos;t erase the fullness of us. Can&apos;t extinguish our
        will to bend and curve in the midst of it all.
      </p>
      <p>
        Call us fungible if you wish, but you can&apos;t dispose of us when
        we&apos;re written into everything around you.
      </p>
      <p>When we endure and endure. At all angles possible. </p>

      <FooterContainer>
        <p>
          <sup>1</sup> I learned of this imprint at a talk by architectural
          historian Mabel O. Wilson at the Center for Art Researches and
          Alliances in New York. For more on enslaved labor at the University of
          Virginia, see Mitch Farish, “Behind Serpentine Walls: Centering
          Enslaved Laborers at UVA,” UVA Library News and Announcements (blog),
          January 25, 2022,
          <a href="https://news.library.virginia.edu/2022/01/25/uva-walking-tour-enslaved-african-americans-at-uva/">
            https://news.library.virginia.edu/2022/01/25/uva-walking-tour-enslaved-african-americans-at-uva/
          </a>
        </p>
        <p>
          .<sup>2</sup> “Storm King : Exhibition : Martin Puryear: Process and
          Scale [EXH.152],” accessed March 8, 2024,
          <a href="https://collections.stormking.org/Detail/occurrences/207">
            https://collections.stormking.org/Detail/occurrences/207
          </a>
          .
        </p>
        <p>
          <sup>3</sup> Personal correspondence with Adela Goldsmith, Curatorial
          Assistant at Storm King.
        </p>
        <p>
          <sup>4</sup> Ibid
        </p>
        <p>
          <sup>5</sup> “Storm King : Exhibition : Martin Puryear: Lookout
          [EXH.149],” accessed March 8, 2024,
          <a href="https://collections.stormking.org/Detail/occurrences/204">
            https://collections.stormking.org/Detail/occurrences/204
          </a>
          .
        </p>
        <p>
          <sup>6</sup> Karen Barad, “Troubling Time/s and Ecologies of
          Nothingness: Re-Turning, Re-Membering, and Facing the Incalculable,”
          <i>New Formations: A Journal of Culture/Theory/Politics</i> 92, no. 1
          (2018): 56–86.
        </p>
        <p>
          <sup>7</sup> Ibid
        </p>
        <p>
          <sup>8</sup> Ibid
        </p>
        <p>
          <sup>9</sup> Ibid
        </p>
        <p>
          <sup>10</sup> Ibid, 67
        </p>
        <p>
          <sup>11</sup> Karen Barad, “Quantum Entanglements and Hauntological
          Relations of Inheritance: Dis/Continuities, SpaceTime Enfoldings, and
          Justice-to-Come,” Derrida Today 3, no. 2 (November 2010): 240–68,
          <a href="https://doi.org/10.3366/drt.2010.0206">
            https://doi.org/10.3366/drt.2010.0206
          </a>
          .
        </p>
        <p>
          <sup>12</sup> “Black like me” is culled from the final line of
          Langston Hughes’ <i>Dream Variations</i>, originally published 1924.
        </p>
      </FooterContainer>
    </ArticleContainer>
  )
}
