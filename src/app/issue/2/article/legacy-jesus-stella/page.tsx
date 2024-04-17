"use client"

import { ArticleBase } from "@/components"

import { issue2Metadata } from ".."
import { ArticleContainer } from "../../styled"

import desktopTitle from "../../../../../../public/titles/binion.svg"
import mobileTitle from "../../../../../../public/titles/binion_mobile.svg"
import cover from "../../../../../../public/titles/Jupiter_title_binion.png"

import { useBreakpoints } from "@/utils/hooks"
import { ArticleCover } from "../../ArticleCover"
import styled from "styled-components"

export default function Page() {
  const { isMobile } = useBreakpoints()

  return (
    <ArticleBase
      next={issue2Metadata[1]}
      previous={issue2Metadata[6]}
      position="0% 90% 0% 0%"
      issue={2}
      svg={
        <ArticleCover
          svg={isMobile ? mobileTitle : desktopTitle}
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
      <LocalStyles>
        <p className="c1">
          <span>Below, </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.legacyrussell.com/&amp;sa=D&amp;source=editors&amp;ust=1713324863704548&amp;usg=AOvVaw2Q1fZY9wJWnUIkwBQYlq0x">
              Legacy Russell
            </a>
          </span>
          <span>, </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.jesushilario.com/&amp;sa=D&amp;source=editors&amp;ust=1713324863704856&amp;usg=AOvVaw01QRGh5gfwfyx-LFfuwI_5">
              Jes
            </a>
          </span>
          <span className=" c9 ">
            <a href="https://www.google.com/url?q=https://www.jesushilario.com/&amp;sa=D&amp;source=editors&amp;ust=1713324863704988&amp;usg=AOvVaw0KcIqT5Q_s0ks98AI_WJFa">
              &uacute;
            </a>
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.jesushilario.com/&amp;sa=D&amp;source=editors&amp;ust=1713324863705106&amp;usg=AOvVaw0s__fUwnEdftTI3kQAIzPe">
              s Hilario-Reyes
            </a>
          </span>
          <span>,</span>
          <span>&nbsp;and</span>
          <span>&nbsp;</span>
          <span>
            <a href="https://www.google.com/url?q=https://www.stellaraebinion.com&amp;sa=D&amp;source=editors&amp;ust=1713324863705284&amp;usg=AOvVaw3U_qpMmutkk2TuH1WW7CVK">
              Stella Rae Binion
            </a>
          </span>
          <span>&nbsp;are in conversation </span>
          <span>on the topic of Drexciya, devotion, and repair. </span>
          <span>This interview has been edited for length and poeticism.</span>
        </p>
        <p className="c1 c2">
          <span className="c4 c9 "></span>
        </p>
        <hr />
        <p className="c1 c2">
          <span className="c3 "></span>
        </p>
        <p className="c1 c9 c2">
          <span className="c3 "></span>
        </p>
        <p className="c1">
          <span className="c9 ">
            here, in the denseness of static impossibility, we descend to an
            insurgent heaven.{" "}
          </span>
          <span className="c9  c14">
            i call out and hear my six times great grandma&rsquo;s sister sing.{" "}
          </span>
          <span className="c4  c9">
            the depths alive as disappearance, as protection, as cannot find us,
            as ain&rsquo;t finna be found, as we find each other, as becoming.
            we breathe.
          </span>
        </p>
        <p className="c1">
          <span className="c4 c9 ">
            the motion of the earth is the motion of blackness. do you feel our
            rhythm?
          </span>
        </p>
        <p className="c1">
          <span className="c4 c9 ">running away, sovereign. </span>
        </p>
        <p className="c1 c2">
          <span className="c4 c9 "></span>
        </p>
        <p className="c1 c13">
          <span className="c4 c9 ">&mdash;Stella Rae Binion </span>
        </p>
        <p className="c1 c2">
          <span className="c4 c9 "></span>
        </p>
        <hr />
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>Stella Rae Binion</span>
          <span>: In </span>
          <span>
            <a href="https://www.google.com/url?q=https://archive.org/details/isbn_9781849353984/page/n3/mode/2up&amp;sa=D&amp;source=editors&amp;ust=1713324863706136&amp;usg=AOvVaw197-ergx86qlvUXyT-L3hm">
              unbreathable
            </a>
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://archive.org/details/isbn_9781849353984/page/n3/mode/2up&amp;sa=D&amp;source=editors&amp;ust=1713324863706294&amp;usg=AOvVaw0dx9ue_Yt4PPOE7wF0yo31">
              &nbsp;circumstances
            </a>
          </span>
          <span className="c4 ">, what are your gills? </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>Jes</span>
          <span className="c9 ">&uacute;</span>
          <span>s Hilario-Reyes</span>
          <span>
            : Gills are just the apparatus of breathing underwater or breathing
            in denseness. It&#39;s the bare minimum of what you need to
            function.{" "}
          </span>
          <span>Carrying</span>
          <span className="c4 ">
            &nbsp;with my friends and family are my gills, knowing that I can go
            to a space or time to dissolve.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            Legacy Russell: Lately I&rsquo;ve been reminding myself that there
            have been so many folks who have been here before, who have
            navigated the very condition of the world&rsquo;s impossibility, who
            came to the edge of a breaking point and survived anyway. Recently
            that has been the gill:{" "}
          </span>
          <span>
            at the edge of catastrophe, I recognize that we are engineered to do
            critical and speculative work that can extend beyond our current
            reality. This is the reason why we should keep going. &nbsp;
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            SRB: We are here today in honor of the legacies and manifestations
            of the{" "}
          </span>
          <span>Detroit techno duo </span>
          <span>
            <a href="https://www.google.com/url?q=https://tresorberlin.com/artist/drexciya/&amp;sa=D&amp;source=editors&amp;ust=1713324863707016&amp;usg=AOvVaw3W6N42SNYST7Svnabo1P_3">
              Drexciya
            </a>
          </span>
          <span>
            , who imagine a world at the Atlantic&#39;s floor, born from the
            self-emancipated wombs of African women flown and thrown overboard
            during the{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://slaveryandremembrance.org/articles/article/?id%3DA0032&amp;sa=D&amp;source=editors&amp;ust=1713324863707204&amp;usg=AOvVaw3VbU5S_kr6TyFhYbReAzvm">
              Middle Passage
            </a>
          </span>
          <span>.</span>
          <span>&nbsp;W</span>
          <span>
            ater-breathing and militant, James Marcel Stinson and Gerald Donald
            sonify the revolution of this gilled generation. Drexciya warned
            listeners to{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.youtube.com/watch?v%3D5k6wmU8kTg4%26ab_channel%3DIceCreamMusic&amp;sa=D&amp;source=editors&amp;ust=1713324863707434&amp;usg=AOvVaw10Z3yZNn3dnd9Lu714eUby">
              &ldquo;beware&rdquo; and &ldquo;proceed with caution&rdquo;
            </a>
          </span>
          <span className="c4 ">
            &nbsp;with electrifying eruptions, bubbling low-frequency
            intensities, and sharp-edged steady irregularities. These are the
            sounds of their disruption. We are their descendants, too. When did
            you both first encounter this resistant underwater
            extending-of-life? Can you remember the first time you heard
            Drexciyan frequencies?
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            LR: I went to graduate school in the UK and was very lucky to cross
            paths with{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://dutchartinstitute.eu/page/1994/kodwo-eshun&amp;sa=D&amp;source=editors&amp;ust=1713324863707773&amp;usg=AOvVaw0-9I01lwql3OqF2FWLu53c">
              Kodwo Eshun
            </a>
          </span>
          <span>
            . With intersecting work and scholarship, as someone who&rsquo;s
            deeply embedded in art history, I saw how aspects of Drexciya could
            be instructive. Artists such as{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.hauserwirth.com/artists/firelei-baez/&amp;sa=D&amp;source=editors&amp;ust=1713324863708034&amp;usg=AOvVaw1PEo3302Q29z6Ow_1NRxGK">
              Firelei B&aacute;ez
            </a>
          </span>
          <span className=" c8">&nbsp;</span>
          <span className="c4 ">
            continue forward the mythos through their own work and practice. I
            also think a subterranean and/or aqueous life maps deeply to the
            geographical site and ontology of the club. The sonic in
            relationship to bodily presence, as Drexciya has instructed, has
            been really meaningful to me across many different points of my
            life.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>JHR: </span>
          <span>
            Techno and house have been very present in my upbringing. Drexciya
            specifically, techno generally. I had to liberate myself first in a
            way to really understand techno or Drexciya, to understand this
            resistant underwater life. I&rsquo;m a big Drexciya fan. The
            &ldquo;proceed with caution&rdquo; in your question I know is from
            &ldquo;Bubble Metropolis.&rdquo; When I first started DJing,{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://soundcloud.com/rumorschicago/rumors-mix-series-001-morenxxx?ref%3Dclipboard%26p%3Di%26c%3D0%26si%3DD04987AB719D4D76848B14C75F4FBF8F%26utm_source%3Dclipboard%26utm_medium%3Dtext%26utm_campaign%3Dsocial_sharing&amp;sa=D&amp;source=editors&amp;ust=1713324863708484&amp;usg=AOvVaw12bhcSF9zilDcbU8vMWuTB">
              my
            </a>
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://soundcloud.com/rumorschicago/rumors-mix-series-001-morenxxx?ref%3Dclipboard%26p%3Di%26c%3D0%26si%3DD04987AB719D4D76848B14C75F4FBF8F%26utm_source%3Dclipboard%26utm_medium%3Dtext%26utm_campaign%3Dsocial_sharing&amp;sa=D&amp;source=editors&amp;ust=1713324863708703&amp;usg=AOvVaw1O4mLCAuiR-d6vtO770odk">
              first ever mix
            </a>
          </span>
          <span>&nbsp;opened with &ldquo;Bubble Metropolis.&rdquo;</span>
          <span>&nbsp;It was for this queer party called </span>
          <span>
            <a href="https://www.google.com/url?q=https://soundcloud.com/rumorschicago&amp;sa=D&amp;source=editors&amp;ust=1713324863708891&amp;usg=AOvVaw0kKPPmo3aB-1GutdCvIZXz">
              Rumors
            </a>
          </span>
          <span>&nbsp;in Chicago with </span>
          <span>
            <a href="https://www.google.com/url?q=https://ra.co/podcast/919&amp;sa=D&amp;source=editors&amp;ust=1713324863709025&amp;usg=AOvVaw2rq_eVPXAiNYh9ofNtpmle">
              Ariel Zetina
            </a>
          </span>
          <span>&nbsp;a</span>
          <span>nd Del Hale as </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.instagram.com/misstwinkusa&amp;sa=D&amp;source=editors&amp;ust=1713324863709182&amp;usg=AOvVaw34qCo5Ho4-0JmP9-LwndJZ">
              Miss Twink USA
            </a>
          </span>
          <span>
            . [Drexciya&rsquo;s] music is quite capacious and it informs so much
            about my life and the work that I engage with&mdash;worlding and
            resonance and dialectics&mdash;all of that is embedded in what
            I&#39;m thinking about. Like, Drexciya fan forever! &nbsp;
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            SRB: Such a transcendent offering, honoring the depths of Black
            creation, these sprawlings that come off of the legacy of Drexciya
            itself, people like Kodwo and artists who have been inspired and
            continued their practice in various iterations. It&rsquo;s honor
            work.{" "}
          </span>
          <span>
            I swim through honor in my day to day, practicing honoring as a form
            of prayer
          </span>
          <span>, a practice of </span>
          <span className=" c10">summoning.</span>
          <span>
            &nbsp;Drexciya does this: their deep tradition of calling forth and
            resurrecting drowned histories. The practice of calling forth is so
            central to Black feminist practice and a Black devotional
            divination. So,{" "}
          </span>
          <span>
            I want to acknowledge all those who may not be with us, who we may
            not know, but we remember, who reveal themselves in every particle,
            wave, and motion
          </span>
          <span className="c4 ">. </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>I want to think with</span>
          <span>
            &nbsp;Saidiya Hartman&#39;s essential and noble project of{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.moma.org/audio/playlist/298/4088&amp;sa=D&amp;source=editors&amp;ust=1713324863709741&amp;usg=AOvVaw2hTPh5CJLjxPbtkaLgQ9iq">
              critical fabulation
            </a>
          </span>
          <span>&nbsp;here. </span>
          <span>
            How do you engage in the necessity of remembering? Of calling forth
            experimental histories?{" "}
          </span>
          <span>
            What is our role as the legacy of those who did not make it?
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span className="c4 ">
            LR: Well, I think that the very idea of existing in a Black
            personhood and a queer personhood is in relationship to this
            question of &ldquo;not making it.&rdquo; It comes with dilemmas and
            crises in understanding what it means to keep going or to have the
            privilege to keep going, to continue. Particularly when it is at the
            sacrifice of so many. How do we bear witness to the contributions of
            those who are in the room and who are not? How do we choose to take
            up the task of carrying forward their memory?
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>Critical fabulation creates a space for </span>
          <span>speculation</span>
          <span>, space for a </span>
          <span className=" c10">what if. </span>
          <span>What</span>
          <span className=" c10">&nbsp;</span>
          <span>
            does it mean for there to be folks who are able to continue forward?
            I feel like it&rsquo;s a really immense and dense challenge&mdash;to
            question what one&#39;s responsibility is.{" "}
          </span>
          <span>
            There are so many people bound up within each of us who we are
            trying to grapple with every day, narrate toward, continue to exist
            through and in purpose of.
          </span>
          <span>
            &nbsp;For me, remembering becomes really important in relationship
            to experimental histories. There is so much when I reflect, for
            example, about{" "}
          </span>
          <span className=" ">
            <a href="https://www.google.com/url?q=https://thekitchen.org/&amp;sa=D&amp;source=editors&amp;ust=1713324863710387&amp;usg=AOvVaw1NrQc5KnfwPznHxmzkYvUX">
              The Kitchen
            </a>
          </span>
          <span>.</span>
          <span>&nbsp;The fact that there are 4,000 artists in </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.getty.edu/research/special_collections/notable/the_kitchen.html&amp;sa=D&amp;source=editors&amp;ust=1713324863710626&amp;usg=AOvVaw2DIwTQjui9E3ZztN0Sfqg_">
              The Kitchen Archive
            </a>
          </span>
          <span>; asking </span>
          <span className=" c10">who is remembered</span>
          <span>
            &nbsp;is a project within itself. The radical work of being
            responsible for those memories is thinking differently about who
            gets to be remembered.
          </span>
          <span>
            &nbsp;Perhaps that is the real responsibility inside of cultural
            production and creative work: recognizing the entitlement and the
            privilege and extending it broadly so that more people can live
            inside of it.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span className="c4 ">
            JHR: I&#39;ve always thought of remembering as a decolonial act, but
            I don&#39;t necessarily know if I fully agree with that sentiment.
            So much of the work is excavation and redress. And so much about
            Detroit techno and Drexciya, specifically, was about the
            conscientious notion of filling the rupture. Knowing that so much is
            gone and so
          </span>
        </p>
        <p className="c1">
          <span>
            much needs to be filled. In a sense, Drexciya is redressing the
            wound. Drexciya is critical fabulation and{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://brooklynrail.org/2019/02/art_books/Tavia-Nyongos-Afro-Fabulations-The-Queer-Drama-of-Black-Life&amp;sa=D&amp;source=editors&amp;ust=1713324863711287&amp;usg=AOvVaw1HCsUoOMdwbhltucis76KT">
              afro-fabulation
            </a>
          </span>
          <span className="c4 ">
            . I think fantasy and fiction and science fiction are quite
            generative in producing potential. Potential is hopeful and
            fulfilling. I think my role in this entanglement is staying true to
            myself. As someone who loves fantasy and sci-fi, I&#39;ve gotten to
            a point in my own practice where I think I&rsquo;ve figured out what
            I need from it: the blurriness that comes with fabulation. More like
            a kaleidoscope effect maybe, rather than blur.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            SRB: I want to continue situating us back into the underwater site
            of Drexciya: the bottom of the ocean. This site is uncolonized,
            unseen, so deeply feared by so many land people. How does{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.jackie-inhalt.net/reh/bilder/edouard-glissant-for-opacity.pdf&amp;sa=D&amp;source=editors&amp;ust=1713324863711635&amp;usg=AOvVaw166tBAdu3eA7uZSU1uNpCh">
              opacity
            </a>
          </span>
          <span>
            , or the condition afforded by the absolute depths, offer us an
            antidote, perhaps hope, perhaps a fugitive escape, from capitalism
            and white supremacy?{" "}
          </span>
          <span>
            How does this site of opacity nurture and generate as a womb might?
            &nbsp;
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            JHR: I love pulling in the womb and the depths to think about
            opacity. I think opacity has this really incredible power of closing
            in. Opacity does not necessarily have a relationship with whiteness.
            It doesn&#39;t have to be invested in that sort of system. I think
            recognizing difference shouldn&#39;t be about transparency.{" "}
          </span>
          <span>Unintelligibility and confusion are quite </span>
          <span>impenetrable</span>
          <span>, which is why it&rsquo;s antidotal.</span>
          <span>
            &nbsp;Whiteness seeks to make sense of things, to flatten, to index.
            But so much about Black life and language is ineffable, working in
            tandem with the fluidity and speed of blackness. Motion is integral
            to fugitivity, perpetually rendering and reifying. And Legacy, you
            have a quote in your book{" "}
          </span>
          <span className="  c10">
            <a href="https://www.google.com/url?q=https://www.legacyrussell.com/GLITCHFEMINISM&amp;sa=D&amp;source=editors&amp;ust=1713324863712104&amp;usg=AOvVaw1xcEG6XgEwZpaQ04caQMDq">
              Glitch Feminism
            </a>
          </span>
          <span>&nbsp;that I feel like really gets to that: </span>
          <span>
            &ldquo;Our blur is a dance floor at 4AM, that moment where in the
            crush of all-bodies lit up under strobes like firecrackers, we
            become no-body, and in the gorgeous crush of no-body,{" "}
          </span>
          <span className=" c10">we become every-body</span>
          <span>.&rdquo;</span>
          <span>
            &nbsp;I think that&#39;s a beautiful way to describe the perpetual
            disembodiment and re-embodiment. But opacity is also quite porous,
            it has holes{" "}
          </span>
          <span>and is cavernous,</span>
          <span className="c4 ">
            &nbsp;like the bottom of the ocean is. So, it does let some of us
            in.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span className="c4 ">
            LR: I think that&#39;s powerful. I believe deeply that not
            everything is for everybody. A very important Black strategy.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            Being inside the imperial structure of institutional space requires
            an assumption of access to all of us, informed by a{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.pbs.org/independentlens/blog/from-true-believer-to-the-help-how-the-white-gaze-has-shown-hollywoods-shortsightedness/&amp;sa=D&amp;source=editors&amp;ust=1713324863712626&amp;usg=AOvVaw3dInQdZGbYmPrXLEkU3Aou">
              white gaze
            </a>
          </span>
          <span>
            &nbsp;and a white infrastructure of sight. Opacity allows a model of{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.minorcompositions.info/wp-content/uploads/2013/04/undercommons-web.pdf&amp;sa=D&amp;source=editors&amp;ust=1713324863712819&amp;usg=AOvVaw3VYTuVXspdc_kP2qM5FL9O">
              fugitivity
            </a>
          </span>
          <span>
            . It is an enclosure, it&#39;s an encryption. It&rsquo;s also the
            woodshed, it&rsquo;s the backstage, it&#39;s the rehearsal site,
            it&#39;s the after-hours. Some of these models of porousness can be
            structured intentionally, as you said Jes&uacute;s so gorgeously, to
            let those who need to be held, be held, while also acknowledging
            those who need to be set apart for the mechanisms of protection and
            nurturing that we deserve. The reproductions of different ideas of
            fantasy and speculation can allow for that to occur, and occur
            through and beyond the mechanics of reproduction that are purely
            biological, which really asks us to think differently about what are
            the structures of family and of community that allow for us to be
            carried forward and sustained.{" "}
          </span>
          <span>
            The bigger question maybe is what does that room look like in terms
            of social and cultural reproduction?
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span className="c4 ">
            SRB: The hinge of the word &ldquo;re/produce,&rdquo; Legacy.
            There&#39;s so much to be thought about there.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            LR: It&rsquo;s really important to ask what does the womb teach us?
            There are parts of this that can be instructive. We see this with
            the history of Drexciya&mdash;the womb is this site that in so many
            ways is self-contained, but also is a radical political site.{" "}
          </span>
          <span>
            So what does it mean to think about this idea of the womb and of
            reproduction as being something that can extend beyond our physical
            self and take on new definitions?
          </span>
          <span>
            &nbsp;This could help us better understand how to broaden our reach
            toward one another, a broader project, a conspiracy even with a
            mission and a purpose.
          </span>
          <span className="c12  c8">&nbsp;</span>
        </p>
        <p className="c1 c2">
          <span className="c12  c8"></span>
        </p>
        <p className="c1">
          <span>SRB: I&rsquo;m witnessing an </span>
          <span>as above, so below </span>
          <span>
            mirroring right now: the womb on this very intimate, internal scale,
            and then also the womb as a broader site of generation. I want to
            think about how the womb is cataloged to the human.{" "}
          </span>
          <span>
            Holding close to our gilled Drexciyan ancestors, what possibilities
            exist for us outside of the role of human?
          </span>
          <span>
            &nbsp;How can we talk about our more-than-humanness, our
            outside-of-humanness, without discounting our humanity?{" "}
          </span>
          <span>
            Why fight for inclusion in a framework that isn&#39;t big enough for
            us?
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>JHR:</span>
          <span>
            &nbsp;I really do believe that being human is more than enough.
            Earth is really enough.
          </span>
          <span>
            &nbsp;So much of the history of our subjugation has been about being
            outside of human. But I&#39;m also coming from a Caribbean
            background and so much of that life is anthropomorphic, outside and
            more than human, it&rsquo;s magical in a way. I think a lot about{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.newmuseum.org/exhibitions/view/wangechi-mutu-intertwined-1&amp;sa=D&amp;source=editors&amp;ust=1713324863713823&amp;usg=AOvVaw34ELs4kuqqfX_jpUQZ24cv">
              Wangechi Mutu&rsquo;s
            </a>
          </span>
          <span className="c4 ">
            &nbsp;work in this anthropomorphic sense.{" "}
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            I&#39;d say it&#39;s a human tendency to attribute our bodies to
            other species. Like, I don&#39;t think a snake is thinking about
            having legs as much as we&#39;re thinking about having gills or
            wings.
          </span>
          <span>&nbsp;In my work I use </span>
          <span>that </span>
          <span className="c4 ">
            as a means to explore futurity and the potential in generating an
            outside. And I think queer nightlife also has that potential
            embedded in it as well. The night and the darkness and our lack of
            vision produces that effect. The night being the space of obscurity,
            mischief, and invisibility.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            SRB: If humanness is enough, then what is this historical tension
            between humans and{" "}
          </span>
          <span>machines</span>
          <span>
            ? You both have work regarding mechanism and digital space. Legacy,
            all of your consideration of the
          </span>
          <span>&nbsp;glitch</span>
          <span>. Jes&uacute;s, what you describe as the </span>
          <span>&ldquo;failure of mechanical optics.&rdquo;</span>
          <span className="c4 ">
            &nbsp;What are the technologies of survival? How are we in
            conversation with other-than-humanness?
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            LR: As Jes&uacute;s noted, there&rsquo;s an interesting tension with
            the category of human and our exclusion. The very language and
            theorizing around a{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://monoskop.org/images/4/4c/Haraway_Donna_1985_A_Manifesto_for_Cyborgs_Science_Technology_and_Socialist_Feminism_in_the_1980s.pdf&amp;sa=D&amp;source=editors&amp;ust=1713324863714510&amp;usg=AOvVaw1Z57eK6nu0gVAVdwtm1scY">
              cyborgian
            </a>
          </span>
          <span>
            &nbsp;politic, for instance, inherently has anti-blackness built
            inside of it. And also, I recognize the tendency to lean into the{" "}
          </span>
          <span>mythos of cyborg</span>
          <span>
            &nbsp;to try to reconstruct through and away from an anti-Black
            premise. Simultaneously what does it really mean to try to advocate
            to fit inside of an infrastructure that{" "}
          </span>
          <span>is so</span>
          <span className="c4 ">
            &nbsp;failed, as you initially posed, Stella? The very idea of
            human&mdash;it&rsquo;s an infrastructure that has been so
            manipulated to serve clear agendas that work against the possibility
            of our existing into the future. To reshape or redefine what human
            needs to be, I think, reflects on the needs of Black and queer
            communities and what we feel like we deserve.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>JHR: Absolutely. I work in and </span>
          <span>think</span>
          <span>
            &nbsp;about this contention [of human and machine] quite often.
            I&rsquo;m not in one area or the other, it&rsquo;s always a battle.
            Technology requires the literal lives of people. It&rsquo;s so
            pronounced especially right now with what is happening in the{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.aljazeera.com/news/2024/2/21/a-guide-to-the-decades-long-conflict-in-dr-congo&amp;sa=D&amp;source=editors&amp;ust=1713324863714992&amp;usg=AOvVaw1NEl8EEDOitrrUlUSAe-v_">
              Congo
            </a>
          </span>
          <span>&nbsp;and in </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.aa.com.tr/en/world/genocide-and-more-the-varied-forms-of-destruction-in-gaza/3131585&amp;sa=D&amp;source=editors&amp;ust=1713324863715181&amp;usg=AOvVaw3sNSw9GVmA01Zhv3HhBkZd">
              Gaza
            </a>
          </span>
          <span>, </span>
          <span>
            where Black and brown lives are being extracted and murdered for the
            sake of resources and land to sustain the{" "}
          </span>
          <span>mechanical</span>
          <span>
            &nbsp;need for the next [tech] thing. And all the technology we have
            is mostly a byproduct of military funding and expansion.{" "}
          </span>
          <span>So much of our tech has ghosts, and they haunt.</span>
          <span className="c4 ">
            &nbsp;What is the transformative work really needed to evolve the
            idea of what the cyborg is or what the android could be? There&#39;s
            also the question of artificial intelligence, there&#39;s so much I
            want to unravel in that. But it&#39;s all in tandem with the
            apocalypse of the Middle Passage.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            The question about the technologies of our survival brings me back
            to techno. Absolutely techno.{" "}
          </span>
          <span>
            There&#39;s so much about techno that is about the integration of
            the human and the machine,
          </span>
          <span>&nbsp;as well as the reorganization and </span>
          <span>hijacking of time.</span>
          <span>
            &nbsp;It literally makes time. You could be at a set and it could
            feel like years. There is also a reason why it came out of Detroit
            at the precipice of the expansion of th
          </span>
          <span>e </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.smithsonianmag.com/history/separating-truth-myth-so-called-golden-age-detroit-auto-industry-180972139/&amp;sa=D&amp;source=editors&amp;ust=1713324863715736&amp;usg=AOvVaw35830dVxPEEDWopQVulMnw">
              motor industry
            </a>
          </span>
          <span>.</span>
          <span className=" c8">&nbsp;</span>
          <span>De</span>
          <span>troit was in bed with the machine, the motor</span>
          <span>.</span>
          <span>&nbsp;The incorporation of the </span>
          <span>
            <a href="https://www.google.com/url?q=https://soundcloud.com/sirensirensirens&amp;sa=D&amp;source=editors&amp;ust=1713324863716020&amp;usg=AOvVaw2lSwz6tJtuAdMHZzNDz5W2">
              siren
            </a>
          </span>
          <span>
            &nbsp;in electronic music as a way to revisit the site of trauma, to
            completely transform it and glitch it into something otherwise and
            expansive. Even sampling{" "}
          </span>
          <span>is dialectical</span>
          <span className=" c8">, </span>
          <span>
            and is regenerative. It is language and it travels like language.
            Maybe the technology of our survival is more like an{" "}
          </span>
          <span>armature</span>
          <span>.</span>
          <span className=" c8">&nbsp;</span>
          <span>
            Or maybe it&#39;s the wildness that one brings out of another. Or
            maybe there&#39;s something technological about language and
            dialectics and opacity that should be considered in this question.
            Or maybe it&#39;s the ability to perpetually render the constant
            mobility. Maybe that&#39;s the technology.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>SRB: I want to return to a notion of aliveness. </span>
          <span>The tendency to attach to the </span>
          <span>nonhuman</span>
          <span>
            , to the cyborg, I see as a fear of &ldquo;not making it,&quot; of
            the inevitability of unaliveness.
          </span>
          <span>
            &nbsp;Particularly in blackness, the constancy of fear and the
            tenuousness of life that is so embedded and assumed within our
            bodies. I{" "}
          </span>
          <span>want to talk</span>
          <span>&nbsp;about your </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.youtube.com/watch?v%3D0_67L1ldYgI%26ab_channel%3DLoopholeofRetreat%253AVenice&amp;sa=D&amp;source=editors&amp;ust=1713324863716578&amp;usg=AOvVaw29hr4-PHbIUuqEBRsCEKK2">
              Sunday Sermon
            </a>
          </span>
          <span>&nbsp;at the</span>
          <span>
            <a href="https://www.google.com/url?q=https://simoneleighvenice2022.org/loophole-of-retreat/&amp;sa=D&amp;source=editors&amp;ust=1713324863716756&amp;usg=AOvVaw0Z1g-2zVZKhkAnQMk3WRpC">
              &nbsp;Loophole of Retreat
            </a>
          </span>
          <span>&nbsp;gathering, Legacy, and the freedom generated in </span>
          <span>not making it.</span>
          <span>&nbsp;The &ldquo;</span>
          <span>independence in an anti-life</span>
          <span>&rdquo; as you phrased it. </span>
          <span>I</span>
          <span>sn&rsquo;t this what blackness is? Aliveness despite.</span>
          <span>&nbsp;</span>
          <span>
            And I want to ask a series of questions back to you, Legacy, that
            you posed that Sunday in Venice: Are we living now in an{" "}
          </span>
          <span>afterlife</span>
          <span className="c4 ">
            ? How do we understand our proximities to unaliveness? What are the
            stakes of our aliveness?
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span className="c4 ">
            LR: It feels really important to recognize that our very mobility,
            the fact of our aliveness as Black or animated or vertical, is in
            itself something that is rendered a threat by a white imagination.
            The very idea that blackness can move in its subjectivity, in its
            empowerment, in its conspiracy, in its collaboration, in its
            community, in its opacity&mdash;these are things that I think
            dictate a deep and complex pathology and paranoia within a white
            thought.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            As it relates to stakes, in order for aliveness to no longer be
            perceived as a threat within the infrastructure of a supremacist
            frame, blackness must be rendered as still, as frozen, as held, and
            as captive. That actually becomes part of the strategy to flatten
            out what a selfhood can be, and to really rob or render extinct an
            idea of a Black personhood that has the right to move and the right
            to engage and broaden their aliveness.{" "}
          </span>
          <span>
            So it becomes incredibly urgent and important to think about the
            stakes of aliveness as something that is part of our radicality,
            something that we should be resurrecting for those who did not
            &ldquo;make it.&rdquo; &nbsp;
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            JHR: This is such a chilling set of questions. It led me to think
            about salt. I&#39;ve been thinking a lot about salt the past six
            months. I&#39;m always thinking about motion. There&#39;s{" "}
          </span>
          <span>this poem </span>
          <span>by </span>
          <span>
            <a href="https://www.google.com/url?q=https://globalsocialtheory.org/thinkers/edouard-glissant-2/&amp;sa=D&amp;source=editors&amp;ust=1713324863718011&amp;usg=AOvVaw0soZgjv095zTeGd-pGPAER">
              &Eacute;
            </a>
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://globalsocialtheory.org/thinkers/edouard-glissant-2/&amp;sa=D&amp;source=editors&amp;ust=1713324863718203&amp;usg=AOvVaw1elS1YTdOpT1Tx43gFYh6F">
              douard Glissant
            </a>
          </span>
          <span className="c4 ">
            &nbsp;that I&#39;ve been sitting with that I would love to share in
            this context. Really just its ending, because I feel like it applies
            to this question of what&#39;s at stake of our aliveness. It goes as
            follows:
          </span>
        </p>
        <p className="c1 c2">
          <span className="c11  c10"></span>
        </p>
        <p className="c1 c15">
          <span className="c11  c10">
            Sand saver of solitude, When we pass into forever, O night, more
            than the path struck with twilight&#39;s alone, In the infinity of
            sand its route, In the valley of night its route, And yet upon the
            salt, There are only calyxes, Encompassing the stem posts of these
            seas, Where delight is infinite to me, And what to say of the ocean,
            Except that it waits.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c11  c10"></span>
        </p>
        <p className="c1 c15">
          <span className=" c10 c11">
            The holy rape of imperfect light upon light to be perfected by the
            unknown gentleness forcing gentleness to open itself. You are love
            that passes beside me. Oh village of deaths, but your water is
            thicker than my leaves will ever be heavy. And what to say of the
            ocean, except that it waits. Toward the infinite flesh is the
            waiting, broken at the root, an evening of hail.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c11  c10"></span>
        </p>
        <p className="c1 c15">
          <span className="c11  c10">
            Oh, to be farther from you than, for example, air from root. I have
            no longer leaf or sap, but I go back up into the fields and the
            storms which are roads of the contrary of knowledge. Here in the air
            of myself, and emboldened myself with oblivion, if the hail comes,
            and what to say of the ocean except that it waits.
          </span>
        </p>
        <p className="c1 c2">
          <span className=" c8 c12"></span>
        </p>
        <p className="c1">
          <span>
            There&#39;s something about salt that is so potent&mdash;ephemera as
            evidence, the mobility and motion that blackness and queerness
            embody. Of course, I think about the clubs. I always think about the
            clubs. Something that&#39;s so Black about the club (not all of them
            you know, it&#39;s very specific) is the deeply devotional aspect
            that is embedded in those spaces, but also in{" "}
          </span>
          <span>its</span>
          <span>&nbsp;participants. </span>
          <span>
            You&#39;re really giving your body, your sweat, your energy, your
            best, your worst, your everything to the music. There&#39;s
            something quite devotional about that which goes unspoken. So I
            think about salt as evidence: sweat that has crystallized and grown
            up upon itself to produce mirrors and fragments and abstractions.
            Entangled in the deathward-leaning existence that we inhabit, our
            saving grace is motion. Fugitivity in itself is so much about that.
          </span>
          <span className="c4 ">&nbsp;</span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>I want to bring up a </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.poetryfoundation.org/poets/fred-moten&amp;sa=D&amp;source=editors&amp;ust=1713324863719417&amp;usg=AOvVaw1InzkQb3TvkwCPcIAIaix_">
              Fred Moten
            </a>
          </span>
          <span>&nbsp;quote. </span>
          <span>He&rsquo;s really my type of diabolical </span>
          <span>for real</span>
          <span>. He says in </span>
          <span className="  c10">
            <a href="https://www.google.com/url?q=https://www.dukeupress.edu/black-and-blur&amp;sa=D&amp;source=editors&amp;ust=1713324863719868&amp;usg=AOvVaw1KbbJ4rd8DzJD3RzvIJOaN">
              Black and Blur
            </a>
          </span>
          <span>,</span>
          <span className="c4 ">&nbsp;</span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1 c15">
          <span>Dis</span>
          <span>
            order is our service, our antidote, and anteroom, our vestibule
            without a story. We can&#39;t survive intact. We can only survive if
            we&#39;re not intact. Our danger and saving power is an always open
            door. Our venue is mutual infusion, the holy of holies in the wall,
            glory in a kind of open chastity, where the explicit body reveals
            itself demure and disappearance. Unenforced, slid, venereally
            unnatural, and convivial, we claim slur against drill and document.
            Confirmation of the flesh is queer and evangelical
          </span>
          <span>.</span>
          <span className="c4 ">&nbsp;</span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            And I feel like that really answers the question of aliveness.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            SRB: Let&rsquo;s talk about the club. I&rsquo;ve always thought of
            sound akin to water,{" "}
          </span>
          <span>echolocational</span>
          <span>
            &nbsp;vibration, both a conduit between realms, species, cultures,
            and geographies. How can the sonic bring us beyond this realm,
            beyond the conditions of our subjugation? Perhaps closer to a Black
            celestial sight rendered in heaven or sea? How is Black queer
            nightlife in the subterranean scene of the club, a manifestation and{" "}
          </span>
          <span>alchemization</span>
          <span>&nbsp;of, as </span>
          <span>
            <a href="https://www.google.com/url?q=http://faculty.hampshire.edu/ccox/Cox.Interview%2520with%2520Kodwo%2520Eshun.pdf&amp;sa=D&amp;source=editors&amp;ust=1713324863720632&amp;usg=AOvVaw022pRUzHWFMJFo_JAS9cAe">
              Kodwo Eshun articulates
            </a>
          </span>
          <span>, the </span>
          <span>&ldquo;</span>
          <span>
            crushing pressure,&rdquo; the &ldquo;insulation and isolation&rdquo;
          </span>
          <span>&nbsp;of the absolute depths</span>
          <span className="c4 ">?</span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span className="c4 ">
            JHR: Sound does not ask permission. It moves through you regardless.
            It&#39;s dialectical, it bounces back, it reverberates, it reflects,
            it divides.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            I really want to think about the physics behind sound&mdash;water
            actually gives shape to sound and they are similar in how they{" "}
          </span>
          <span>move</span>
          <span>&nbsp;through material and how they </span>
          <span>dissipate</span>
          <span>. I had an experience at </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.instagram.com/dwellerforever&amp;sa=D&amp;source=editors&amp;ust=1713324863721589&amp;usg=AOvVaw1Tg9msNouFuPgSf4O6DKx_">
              Dweller
            </a>
          </span>
          <span>&nbsp;last year, at </span>
          <span>
            <a href="https://www.google.com/url?q=https://sageintrospekt.bandcamp.com/&amp;sa=D&amp;source=editors&amp;ust=1713324863721771&amp;usg=AOvVaw1UsVd_pZcFJGk_T3Qk1gy2">
              Introspekt
            </a>
          </span>
          <span>&rsquo;s</span>
          <span className=" c8">&nbsp;</span>
          <span>set at</span>
          <span className=" c8">&nbsp;</span>
          <span>
            <a href="https://www.google.com/url?q=https://www.instagram.com/nowadaysnyc/&amp;sa=D&amp;source=editors&amp;ust=1713324863721977&amp;usg=AOvVaw2LswlLK1vjHTVY4jcWOreC">
              Nowadays Nonstop
            </a>
          </span>
          <span>
            , an iconic DJ. In these bass-heavy moments there were synthesizer
            samples that came up from under me. They erupted. It felt like the
            sound literally sliced through me. I don&#39;t know how to describe
            it really, but it felt so visceral. So delightful.{" "}
          </span>
          <span>
            [Those synths] felt so alien and outside, so incredibly
            transportive.{" "}
          </span>
          <span>
            It&#39;s weird to put something like that into words because sound
            and techno (and in this instance it was a dub track) are Black
            genres that really put into practice and materialize the{" "}
          </span>
          <span>ineffable</span>
          <span className=" c8">.</span>
          <span className="c4 ">
            &nbsp;Where language seems to fail, sound flourishes.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            The role of the DJ is also timekeeping. Like I said before, with
            techno, you have the ability to make time&mdash;a couple hours can
            feel like a day. You can really make the dancers toil.{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.instagram.com/julianahuxtable/?hl%3Den&amp;sa=D&amp;source=editors&amp;ust=1713324863722433&amp;usg=AOvVaw0Oyu3qwuCTlHq-Mw4G-lUW">
              Juliana Huxtable
            </a>
          </span>
          <span>&nbsp;and </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.instagram.com/jasss_inc?igsh%3DMXkwcWM0ZHp5NHV1eA%253D%253D&amp;sa=D&amp;source=editors&amp;ust=1713324863722594&amp;usg=AOvVaw1watu2sWCGRBUd0zz6Ne7x">
              JASSS
            </a>
          </span>
          <span>&nbsp;played this</span>
          <span className=" c8">&nbsp;</span>
          <span>set</span>
          <span>&nbsp;at </span>
          <span>
            <a href="https://www.google.com/url?q=https://ra.co/promoters/101265&amp;sa=D&amp;source=editors&amp;ust=1713324863722829&amp;usg=AOvVaw0cXrHnnvY79bbowCO24tsE">
              Merge
            </a>
          </span>
          <span className="c4 ">
            &nbsp;this New Year&rsquo;s. I was only there for a couple hours but
            it felt like years. The space we were in had so much potential, I
            felt like I could really live there. I walked out of that foggy
            warehouse in Bushwick that morning and the sun felt like
            Technicolor. Like the saturation got boosted. I had so much hope. I
            slept good that night. But I don&#39;t prescribe the language of
            utopia to these moments at all either, that&#39;s a lie. And not
            everybody is welcome, going back to what Legacy mentioned,
            it&rsquo;s not for everybody. That&#39;s really important. The most
            vital part of it all is this communal becoming. How we become
            enmeshed in this amorphous soup of becoming and unbecoming that
            feels beyond this realm, but truly is what makes us more human.
            Maybe that&#39;s the result of that crushing pressure you mentioned,
            a blurring into one another, at those moments at the depths.
            It&rsquo;s so sexy and sweaty and aqueous in nature. We are
            subverting and disregarding our conditions of subjugation.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            SRB: Experiencing time is so surreal when you&#39;re in that
            absolute depth, that sweaty, hot, infinite place. Thinking about
            Drexciya makes me want to consider this particular solid land that
            we currently dwell upon as a constraint. What are the possibilities
            of an elsewhere, underwater or otherwise? What are our possibilities
            of creation, of change, of alchemy, of transformation? How does the
            sonic, the intangible, the ungraspable, the{" "}
          </span>
          <span>uncolonizable</span>
          <span className="c4 ">
            , the renderings of the persistence of Black life, create the
            conditions of futurity? What are we making?
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span className="c4 ">
            LR: Black folks have always existed at the end of the world. I think
            queerness, too, has always existed at the end of the world. We must
            give ourselves permission for the beginnings of many worlds. What
            does that look like? How can that be something that is supported and
            celebrated, while simultaneously untangling and unspooling the
            complications of endings&mdash;endings of worlds, of people, of
            histories?
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            I&#39;m coming back to this word entitlement. What does it mean to
            feel entitled to speculation and possibility that gives us the range
            and decadence and abundance that we so deserve?
          </span>
          <span>
            &nbsp;The question of what we are making, I think is a really
            beautiful question. I don&#39;t know if there&#39;s a singular
            answer, but what I do know is that the unspooling of this ending of
            the world feels like it must intersect with the reimagination and
            restructuring of a world that can continue to give us life, continue
            to invest in and protect our life systems.{" "}
          </span>
          <span>
            Acknowledging also that research is different than life&mdash;we
            can&#39;t constantly live inside the theory of our own blackness, we
            actually need to think about what it means to create space for
            aliveness to exist outside of our theoretical frame.
          </span>
          <span className="c4 ">
            &nbsp;I think [this] is what I&#39;m trying to make. How can we be
            present with one another and not flattened through the lens of
            scholarship? Life is not in a book, it&rsquo;s not something that is
            always contained. It has a necessary wildness that extends beyond
            the page and beyond the theory and beyond the classroom and beyond
            the institution. The vastness beyond, the extension of shadow, may
            be the place where a new beginning is created altogether.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            JHR: Absolutely, yes. Drexciya&rsquo;s somewhere in the Atlantic,
            yet on their later projects, they do shoot outward into space. But
            space is relative to us. I feel like the possibilities are just
            harsher. Our bodies are simply accustomed to e
          </span>
          <span>arth&#39;s</span>
          <span>
            &nbsp;gravity; the human capacity to hold our breath is like one to
            two minutes. Drexciya is definitely{" "}
          </span>
          <span>tearing</span>
          <span className="c4 ">
            , but earth is enough for me. And I guess the elsewhere I&#39;m
            interested in is the dismantling that Legacy is talking about, that
            sort of confrontation. It&#39;s not an abandonment or an escapism,
            but the ability to embody so many spaces, too. My fugitivity is not
            tied up with where I was born or where I came from, it&#39;s tied up
            with my sense of belonging to the people around me and to the
            culture I&#39;m a part of.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            Sovereignty to a geographic pinning is futile, especially after the
            Middle Passage.
          </span>
          <span>
            &nbsp;As the spirit of Black life is ever mobile, I&rsquo;m
            generating sovereignty and futurity toward the drifting body,{" "}
          </span>
          <span className=" c10">to</span>
          <span>&nbsp;the drifting body. That is </span>
          <span>ultimately</span>
          <span>
            &nbsp;the undercurrent of my practice as an artist: ephemerality,
            land practices, archiving, generating 3-D space, performance, et
            cetera. We are so bound up with memorializing and monumentalization,
            which ultimately produces stillness, which is counterintuitive to
            the{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.poetryfoundation.org/poems/53479/fugitivity-is-immanent-to-the-thing-but-is-manifest-transversally&amp;sa=D&amp;source=editors&amp;ust=1713324863724165&amp;usg=AOvVaw2RhYRiAGdGmvjCXYy1C1Rk">
              fugitivity
            </a>
          </span>
          <span>
            &nbsp;of blackness. Stella, you keep mentioning this term alchemy,
            and I really love it. That&#39;s such a good word. It makes me think
            about potions and elixirs, w
          </span>
          <span>
            hich is where I&#39;m at, too: that sense of wonder. I really
            believe that wonder is the act that returns us to love, especially
            when we&#39;ve reached our limit.
          </span>
          <span className="c4 ">
            &nbsp;And that true transformation at the site of trauma is the hard
            work, but in many ways, it&#39;s much more rewarding.
          </span>
        </p>
        <p className="c1">
          <span className="c4 ">&nbsp;</span>
        </p>
        <p className="c1">
          <span>SRB: Yes, all the lessons that the earth provides us are </span>
          <span className=" c10">more</span>
          <span>
            &nbsp;than enough. I&#39;ve been recognizing the generosity of the
            earth. I&rsquo;m so struck by your choice of language,
            &ldquo;drifting body.&rdquo; It thinks with the underwater, with the
            lessons of the water, with the pace and the texture of the water. I
            was just in the Caribbean for the first time, in Trinidad and
            Tobago. The Caribbean Sea is the most surreal place I&#39;ve ever
            been. It felt like coming home. I was deeply present with the
            constancy of waves, how they are truly never ceasing. The waves have
            been here since the beginning of this earth and the waves will
            continue. Thinking with, always,{" "}
          </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.octaviabutler.com/&amp;sa=D&amp;source=editors&amp;ust=1713324863724566&amp;usg=AOvVaw27Ko7Iy-C7Fela8_plei1I">
              Octavia Butler
            </a>
          </span>
          <span>&rsquo;s</span>
          <span className="c4 ">
            &nbsp;spell of hope: &ldquo;God is Change&rdquo;&hellip;
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>JHR: Yes! </span>
          <span className="  c10">
            <a href="https://www.google.com/url?q=https://godischange.org/the-book-of-the-living/&amp;sa=D&amp;source=editors&amp;ust=1713324863724999&amp;usg=AOvVaw2U19LsPc9j4lAM7m7mjdqW">
              Earthseed
            </a>
          </span>
          <span>.</span>
          <span className=" c4">&nbsp;</span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>
            SRB: &hellip;I&rsquo;ve learned lessons of coming and going, of how
            change is the only inevitable, the only constant. Stillness is
            un-inherent to the earth&#39;s rhythm. Somehow that gives me so much
            hope. When I&#39;m confronting the despair of imperialism, and how
            stuck it is, I think about how change must occur. It is the only
            natural thing. It is the only divine thing. I&rsquo;m like, oh the
            empire{" "}
          </span>
          <span className=" c10">will </span>
          <span>fall. It </span>
          <span className=" c10">will</span>
          <span className="c4 ">
            &nbsp;change. It is in the nature of this world.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>A </span>
          <span>somatic practitioner </span>
          <span>
            <a href="https://www.google.com/url?q=https://www.selflovetribute.com/&amp;sa=D&amp;source=editors&amp;ust=1713324863725675&amp;usg=AOvVaw1cLRQSkyXcA6UobLsPbf1L">
              Care
            </a>
          </span>
          <span>&nbsp;</span>
          <span>
            told me recently that there is rupture in every relationship, yet
            what creates a secure relationship is the ability to repair.
            It&rsquo;s not about lack of disturbance, it is about how we grow
            forward from the disturbance, from the rupture.
          </span>
          <span>
            &nbsp;Capitalism is purely rupture, supported by disposability and
            turnover. There is no mind to repair, there is no mind for a future,
            for a forward. A core dimension in most{" "}
          </span>
          <span>indigenous knowledge formations and practices </span>
          <span className="c4 ">
            is how repair is always a possibility. There are always
            possibilities of future. We can repair with this earth&mdash;all the
            earth wants us to do is repair. It&rsquo;s offering us lessons. When
            you said earth is enough, for me the earth is everything.
          </span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span className="c4 ">JHR: Yes, redress. Redress the world.</span>
        </p>
        <p className="c1 c2">
          <span className="c4 "></span>
        </p>
        <p className="c1">
          <span>LR: I&rsquo;m here for it. </span>
        </p>
      </LocalStyles>
    </ArticleContainer>
  )
}

const LocalStyles = styled.div`
  ol {
    margin: 0;
    padding: 0;
  }
  table td,
  table th {
    padding: 0;
  }
  .c3 {
    color: #444746;
    font-weight: 400;
    text-decoration: none;
    vertical-align: baseline;
  }
  .c1 {
    padding-top: 0pt;
    padding-bottom: 0pt;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  .c4 {
    color: #000000;
    font-weight: 400;
    text-decoration: none;
    vertical-align: baseline;
  }
  .c11 {
    color: #000000;
    font-weight: 400;
    text-decoration: none;
    vertical-align: baseline;
  }
  .c12 {
    color: #000000;
    text-decoration: none;
    vertical-align: baseline;
  }

  .c5 {
    max-width: 468pt;
    padding: 72pt 72pt 72pt 72pt;
  }
  .c7 {
    color: inherit;
    text-decoration: inherit;
  }
  .c9 {
  }
  .c13 {
    text-indent: 36pt;
  }
  .c15 {
    margin-left: 36pt;
  }
  .c10 {
    font-style: italic;
  }
  .c14 {
    color: #444746;
  }
  .c8 {
    font-weight: 700;
  }
  .c2 {
    height: 11pt;
  }
  .title {
    padding-top: 0pt;
    color: #000000;
    padding-bottom: 3pt;

    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  .subtitle {
    padding-top: 0pt;
    color: #666666;
    padding-bottom: 16pt;

    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  li {
    color: #000000;
  }
  p {
    margin: 0;
    color: #000000;
  }
  h1 {
    padding-top: 20pt;
    color: #000000;
    padding-bottom: 6pt;

    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  h2 {
    padding-top: 18pt;
    color: #000000;
    padding-bottom: 6pt;

    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  h3 {
    padding-top: 16pt;
    color: #434343;
    padding-bottom: 4pt;

    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  h4 {
    padding-top: 14pt;
    color: #666666;
    padding-bottom: 4pt;

    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  h5 {
    padding-top: 12pt;
    color: #666666;
    padding-bottom: 4pt;

    page-break-after: avoid;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  h6 {
    padding-top: 12pt;
    color: #666666;
    padding-bottom: 4pt;

    page-break-after: avoid;
    font-style: italic;
    orphans: 2;
    widows: 2;
    text-align: left;
  }
  hr {
    background-color: #666666;
  }
`
