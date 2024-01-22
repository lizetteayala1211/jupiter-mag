import { ArticleStyles } from "./styled"
import Image from "next/image"
import img1 from "../../../../public/photos/jImg1.jpeg"
import img2 from "../../../../public/photos/jImg2.jpeg"
import img3 from "../../../../public/photos/jImg3.png"
import { CaptionContainer, Epigraph } from "@/utils/layout"

export function Article() {
  return (
    <ArticleStyles>
      <>
        <br />
        <Epigraph>
          <span>My mouth could not find a language. / </span>
          <span>I find</span>
          <span>&nbsp;myself instead,</span>
        </Epigraph>
        <span className="c4 c3" style={{ fontSize: "16px" }}>
          —Dionne Brand
        </span>
        <br />
      </>
      <p className="c0 c5">
        <span className="c4 c3"></span>
      </p>
      <div className="c18">
        <p className="c0">
          <span className="c3">
            Like light, language does not have to travel in a straight line. It
            can bend ideas the same way light rays reshape the way images appear
            under water.{" "}
          </span>
          <span className="c3">They take turns. </span>
          <span className="c3">
            In space, gravity requires light to change its behavior around
            massive objects; On earth, our need and curiosity asks the same of
            speech and syntax.
          </span>
          <span className="c3">&nbsp; &nbsp;</span>
        </p>
        <br />
        <p className="c0">
          <span className="c3">
            In Dionne Brand&rsquo;s poetry collection,{" "}
          </span>
          <span className="c3 c6">Land to Light On</span>
          <span className="c3">
            , she diagrams her extradition from language so exquisitely and also
            makes the case for the radical potentiality within it. Following her
            observation that she finds herself instead of language she adds,
            almost as an afterthought, &ldquo;useless as that,&rdquo; as though
            to suggest that finding the self without the means to understand it
            is to render the self without use.{" "}
          </span>
          <span className="c3">
            And what freedoms can be found within a self that has no use
          </span>
          <span className="c3">&mdash;</span>
          <span className="c3">
            use as defined by the same systems that deploy language to produce
            the useless world that we find ourselves living in?
          </span>
        </p>
        <p className="c0">
          <span className="c2">&nbsp;</span>
        </p>
        <p className="c0">
          <span className="c3">
            Toni Morrison, in her 1993 acceptance speech for the Nobel Prize in
            Literature, cautioned against resting too easily on the laurels of
            language. Her work orbited around a suspicion of language&rsquo;s
            capacity to mask its danger through its mundanity; To stay vigilant
            about the tools we use every day is to remember that they are
            technologies with methods capable of destroying histories and
            narratives with as much grace as creating them. &ldquo;
          </span>
          <span className="c3 c11">
            It must be rejected, altered and exposed,&rdquo; she said.
            I&rsquo;ve studied these instructions for years and lately, the past
            participle of &ldquo;altered&rdquo; feels most exhilarating.{" "}
          </span>
          <span className="c3">
            The flimsiness of language itself is succinctly being rejected and
            exposed all the time, in direct view, mostly on social media. But
            perhaps the way to do that is not through more words, but through{" "}
          </span>
          <span className="c3">
            looking to see what else we already know how to do, rather than try
            to begin anew and find novelty along the way.
          </span>
        </p>
        <br />
        <p className="c0">
          <span className="c3">
            In 2019, the critic Kimberly Drew astutely observed in an article
            for Office Magazine that opera was becoming a popular
            &ldquo;architecture for the future of Black cultural
            production&rdquo;; And now, five years later, that observation seems
            to be accelerating and expanding.{" "}
          </span>
          <span className="c3">
            Perhaps that is because opera is, by definition, epic, and can match
            the scale of Black prophecy, imagination, and urgency. It is
            bombastic, as an artist working on her own opera told me in a recent
            conversation, capacious enough to hold the vast expanses of ideas
            and desires for transformation that are unfolding in our lifetime.{" "}
          </span>
          <span>
            <sup>[a]</sup>
          </span>

          <span className="c3">Opera is the plural of the Latin word </span>
          <span className="c3 c6">opus</span>
          <span className="c4 c3">
            , work that is, by definition, exponential.
          </span>
        </p>

        <br />
        <p className="c0">
          <span className="c4 c3">
            One history traces the art form back to the sixteenth and
            seventeenth centuries, in Florence, Italy, though a friend who works
            in theater recently reminded me that opera itself is just the word
            that a multiplicity of ideas, disciplines, and practices were
            corralled into over time. Opera is what we call the medium, but it
            has other names and knowings and histories before the taxonomizing
            by the Italians. Perhaps we are only just beginning to see what an
            opera is and what it can do&mdash;and conversely, what language, in
            its unadulterated form, cannot.
          </span>
        </p>
        <br />
        <div style={{ display: "flex", gap: "1em", paddingTop: "1em" }}>
          <Image
            style={{ width: "50%", height: "50%" }}
            src={img1}
            alt="Woman sitting at piano"
          />

          <Image
            style={{ height: "50%", width: "50%" }}
            src={img2}
            alt="Silouhette of a man"
          />
        </div>
        <CaptionContainer>
          <i>X’ene’s Witness</i>, presented by Los Angeles Nomadic Division
          [LAND], images courtesy of Justen Leroy and 718 Photography
        </CaptionContainer>
        <p className="c0">
          <span className="c3">
            Last fall, I was in Los Angeles, California at a cavernous marble
            temple, watching a piece created by Justen LeRoy called{" "}
          </span>
          <span className="c3 c6">X&rsquo;ene&rsquo;s Witness</span>
          <span className="c3">
            , billed as a live opera to &ldquo;highlight Black environmentalism.
          </span>
          <span className="c3">&rdquo;</span>
          <span className="c3">
            &nbsp;Ultimately, LeRoy is trying to find new ways to talk about the
            climate, both the planet and what the scholar Christina Sharpe
            defines as &ldquo;the totality of our environments; The weather is
            the total climate; and that climate is anti-black.
          </span>
          <span className="c3">&rdquo;</span>
          <sup className="c3">
            <a href="#ftnt1" id="ftnt_ref1">
              [1]
            </a>
          </sup>
          <span className="c3">
            &nbsp;LeRoy describes his upbringing in South Central Los Angeles
            and wanting to engage his community with bigger conversations about
            where we live and the how and the why of it. LeRoy hopes to bridge
            these dialogues with vocal nuances, looking for connection between
            familiar emotional chords in Black sound and those of the earth
            itself. The performance took notes from classical operatic
            performances like{" "}
          </span>
          <span className="c3 c6">Phantom of the Opera</span>
          <span className="c3">, </span>
          <span className="c3 c6">Rocky Horror</span>
          <span className="c3">, and paranoid thrillers </span>
          <span className="c3 c6">Frankenstein</span>
          <span className="c3 c4">
            : Productions laden with curiosities about our obligations and
            relationships to each other and the thorniness of trying to create
            something new&mdash;whether love, life forms, queer utopias.
          </span>
        </p>
        <br />
        <p className="c0">
          <span className="c4 c3">
            We were there to bear witness to an exorcism, perhaps, a purging, of
            the known in search of the unknown. It felt like a medicine ceremony
            or a tightly controlled experiment to release emotions. The show
            orbited around X&rsquo;ene Sky and her spiritual awakening,
            articulated through a scale of sound and song. Oftentimes her
            vocalizations erupted into high pitched screams or laughter. The
            music, both emanating from her body and the soundtrack composed by
            LeRoy and Alexander Hadyn, and a chorus of gospel singers, had a
            body too. Many bodies, all trying to find each other and create
            something (coaxed into being with stunning choreography by the
            artist Qwenga). A feeling filled the space, asking as much of us as
            the performers themselves.
          </span>
        </p>
        <p className="c0 c5">
          <span className="c4 c2"></span>
        </p>
        <Image
          style={{ width: "100%", height: "100%" }}
          src={img3}
          alt="Woman sitting at piano"
        />
        <CaptionContainer>
          <i>X’ene’s Witness</i>, presented by Los Angeles Nomadic Division
          [LAND], images courtesy of Justen Leroy and 718 Photography
        </CaptionContainer>
        <p className="c0">
          <span className="c3">
            One of LeRoy&rsquo;s previous pieces also worked to connect Black
            expressionist sounds to those of the utterances of the earth.{" "}
          </span>
          <span className="c3 c6">Lay Me Down In Praise</span>
          <span className="c3">
            , which was exhibited as part of a collaboration between the
            California African American Museum and Art + Practice, drew
            connections between gospel&rsquo;s wordless moan and the
            &ldquo;moans&rdquo; emitted by the earth amidst anthropocentric
            climate abuse, from the sounds of the ocean to the rustling of the
            trees. There is a collective remembering of the intelligence of the
            body, of the throat, of the moan as a means to connect ourselves to
            a larger picture of being and existence
          </span>
          <span className="c3">.</span>
          <span className="c3">
            &nbsp;It only makes sense, then, for artists to begin working with
            gestures, limbs, and vocal chords, those mechanisms beyond words,
            those that accompany words, those that preempt them and ultimately
            replace them.{" "}
          </span>
          <span className="c3">
            Sometimes what needs to be said comes through the vocal{" "}
          </span>
          <span className="c3">chords</span>
          <span className="c3">
            &nbsp;and out of the mouth; other times it comes up through the body
            and out through the skin. Our hands, mouths, hips have syntax;
            cutting eyes, sucking teeth, sweeping movements have a grammar. New
            sentences can be formed there.
          </span>
          <sup>
            <a href="#cmnt2" id="cmnt_ref2">
              [b]
            </a>
          </sup>
        </p>

        <br />
        <p className="c0">
          <span className="c4 c3">
            Perhaps the language we are trying to rewrite is a language of self.
          </span>
        </p>

        <br />
        <p className="c0">
          <span className="c3">
            This forming, this reaching is a pushing against the limits of
            language that not only breaks ideas about what it is possible to
            say, but what it is possible to do. These new choreographies even
            feel present in the atmospheric shift in popular culture, from
            Beyonc&eacute;&rsquo;s{" "}
          </span>
          <span className="c3 c6">Renaissance</span>
          <span className="c3">&nbsp;to Andr&eacute; 3000&rsquo;s </span>
          <span className="c3 c6">New Blue Sun</span>
          <span className="c3">
            . The former embodies the need to shout affirmations in unison,
            communal proclamations of love and belonging, meant to be
            experienced collectively, the choral amplification doubling as a
            validation of worth and acceptance and autonomy. Andr&eacute;
            3000&rsquo;s album arrives in a moment when people seem to need the
            exact opposite: An invitation to meander, to go inward, to let the
            mind quiet and wander, an excuse to slow down and stop speaking for
            a little while, offering inspiration to try something new. The song
            titles seem to say a lot while revealing very little, the
            instruments arriving and departing with dignity and quietude.
            It&rsquo;s not an album to memorize or even stay attuned to.{" "}
          </span>
          <span className="c3">
            It&rsquo;s also music for releasing the self as a means to find it.
          </span>
          <span className="c4 c3">&nbsp;</span>
        </p>
        <br />
        <p className="c0">
          <span className="c4 c3">
            This is a tradition that can be traced throughout music history. For
            example, in 1975, Dizzy Gillespie gathered Sarah Vaughan, Joe
            Carroll, Al Haig, and other jazz greats for a reunion concert that
            aired on PBS. The performance is an electric capsule of a sonic era
            that defined their careers; It is a perfectly respectable showcase,
            the ideal soundtrack for making dinner at home on a cozy night. But
            about halfway through, the performance splits open. Something peels
            back, slips out, is revealed.
          </span>
        </p>
        <br />
        <p className="c0">
          <span className="c3">
            Vaughan is winding down a particularly slinky performance of
            &ldquo;Round Midnight,&rdquo; not so much singing as she is
            releasing sound in the shape of decades of practice, grief parceled
            out in legible packets.
          </span>
          <span className="c3">
            &nbsp;Perhaps it&rsquo;s the way Vaughan loosens her jaw and allows
            the song to lose its shape a little. Maybe it&rsquo;s the way she
            works the lyrics into new shapes, kneading them into new forms.
            After she finishes, the band immediately jumps into an uptempo riff
            on Gillespie&rsquo;s &ldquo;Oop Pop a Da.&rdquo; The song has less
            business with the way wind moves through a brass instrument and
            everything to do with the speed, innovation, and creativity of the
            mouth. Most notably,{" "}
          </span>
          <span className="c3">scatting</span>
          <span className="c4 c3">. </span>
        </p>
        <br />
        <p className="c0">
          <span className="c4 c3">
            The vibes are ecstatic, the skills on display virtuosic. The
            audience&rsquo;s polite applause is not sufficient for the level of
            majesty and mastery on display. In the version I watched, the feed
            seems to short-circuit as though the technology used to upload this
            footage can&rsquo;t contain the electricity crackling through the
            performance. There&rsquo;s a kinetic energy threaded throughout that
            reflects the hypomanic times, a love of art and music paired with
            the perpetual disappointment and heartache of America and all that
            language and art and culture didn&rsquo;t do.
          </span>
        </p>
        <p className="c0">
          <span className="c4 c2">&nbsp;</span>
        </p>
        <p className="c0">
          <span className="c3">
            Scatting rose out of necessity, a flurry of dropped paper during a
            record taping, and freestyling in lieu of lyrics, as the lore goes.
            But isn&rsquo;t it equally possible that this new form of orality
            arose from an urgent desire to explore the seam between speech and
            music, organization and chaos, human and machine, legibility and
            illegibility? And perhaps the need to say something that could only
            be felt, rather than heard?{" "}
          </span>
          <span className="c3">Scatting</span>
          <span className="c3">
            &nbsp;arrived at a time when the velocity of jazz&rsquo;s co-option
            was dizzying; perhaps as a means to protect Black opacity and
            creativity by birthing a new art form that is almost impossible to
            duplicate.{" "}
          </span>
          <span className="c3">
            It&rsquo;s a performance of profundity, posterity. A record of
            genius and the ways intelligence can be improvised
          </span>
          <span className="c4 c3">.</span>
        </p>
        <br />
        <p className="c0">
          <span className="c3">
            Decolonizing the land is one task, decolonizing our bodies, our
            throats, our emanations, our expressions is another.
          </span>
          <span className="c3">
            &nbsp;How do you choose a tongue to use when they are all bitten,
            thick with blood?
          </span>
          <sup>
            <a href="#cmnt3" id="cmnt_ref3">
              [c]
            </a>
          </sup>
          <span className="c3">
            &nbsp;There is no easy option, no peaceful option. The betrayal,
            resonating{" "}
          </span>
          <span className="c3">
            at a register high enough and sharp enough that it resembles a
            sheathed knife
          </span>
          <span className="c4 c3">
            , is already apparent in the necessity of choice. These revelations
            feel rooted in a newfound interest in what the body is able to do.
            What the lungs can do. Improvising. Feeling our way toward something
            new and unfamiliar in the hopes of finding new frameworks,
            structures, and paradigms that work better.
          </span>
        </p>
        <br />
        <p className="c0">
          <span className="c3">
            When the science fiction author Octavia Butler wrote that
            &ldquo;There&rsquo;s nothing new under the sun, but there are new
            suns,&rdquo;
          </span>
          <sup className="c3">
            <a href="#ftnt2" id="ftnt_ref2">
              [2]
            </a>
          </sup>
          <span className="c3">
            &nbsp;she didn&rsquo;t mean we were out of potentiality; she meant
            that there is a fecund place of possibility beyond the fields of
            fatigue and exhaustion. We just have to feel for it.
          </span>
          <sup className="c3">
            <a href="#ftnt3" id="ftnt_ref3">
              [3]
            </a>
          </sup>
        </p>
        <br />
        <hr className="c16" />
        <br />
        <CaptionContainer>
          <div>
            <p className="c8">
              <a href="#ftnt_ref1" id="ftnt1">
                [1]
              </a>
              <span className="c10">&nbsp;Christina Sharpe, </span>
              <span className="c6 c10">
                In the Wake: On Blackness and Being
              </span>
              <span className="c10">.</span>
            </p>
          </div>
          <div>
            <p className="c8">
              <a href="#ftnt_ref2" id="ftnt2">
                [2]
              </a>
              <span className="c10">
                &nbsp;Epigraph to Octavia Butler&rsquo;s incomplete book,{" "}
              </span>
              <span className="c10 c6">Parable of the Trickster</span>
              <span className="c4 c15 c10">. </span>
            </p>
          </div>
          <div>
            <p className="c8">
              <a href="#ftnt_ref3" id="ftnt3">
                [3]
              </a>
              <span className="c10">
                &nbsp;Title culled from the following text: Fred Moten, &ldquo;
              </span>
              <span className="c10">Black Mo&rsquo;nin&rsquo;,&rdquo; in </span>
              <span className="c10 c6">Loss: The Politics of Mourning</span>
              <span className="c10">, David L. Eng and David Kazanjian.</span>
              <span className="c10">&nbsp;</span>
            </p>
          </div>
        </CaptionContainer>
      </div>
    </ArticleStyles>
  )
}
