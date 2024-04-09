"use client"

import { ArticleBase } from "@/components"

import { issue2Metadata } from ".."
import { ArticleContainer } from "../../styled"

import desktopTitle from "../../../../../../public/titles/binion.svg"
import mobileTitle from "../../../../../../public/titles/binion_mobile.svg"
import cover from "../../../../../../public/titles/Jupiter_title_binion.png"

import { useBreakpoints } from "@/utils/hooks"
import { ArticleCover } from "../ArticleCover"

export default function Page() {
  const { isMobile } = useBreakpoints()

  return (
    <ArticleBase
      next={issue2Metadata[1]}
      previous={issue2Metadata[6]}
      position="0% 80% 50% 0%"
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
      <p>
        Below, <a href="https://www.legacyrussell.com/">Legacy Russell</a>,
        <a href="https://www.jesushilario.com/">Jesús Hilaro-Reyes</a> and
        <a href="https://www.stellaraebinion.com">Stella Rae Binion</a> are in
        conversation on the topic of Drexciya, devotion, and repair. This
        interview has been edited for length and poeticism.{" "}
      </p>

      <hr style={{ backgroundColor: "grey" }} />

      <p>
        here, in the denseness of static impossibility, we descend to an
        insurgent heaven. i call out and hear my six times great grandma&apos;s
        sister sing. the depths alive as disappearance, as protection, as cannot
        find us, as ain&apos;t finna be found, as we find each other, as
        becoming. we breathe.
        <br />
        the motion of the earth is the motion of blackness. do you feel our
        rhythm? <br />
        running away, sovereign.
      </p>
      <p>– Stella Rae Binion </p>

      <hr style={{ backgroundColor: "grey" }} />

      <p>
        SRB: In{" "}
        <a href="https://archive.org/details/isbn_9781849353984/page/n3/mode/2up">
          unbreathable circumstances
        </a>
        , what are your gills?
      </p>

      <p>
        JHR: Gills are just the apparatus of breathing underwater or breathing
        in denseness. It&apos;s the bare minimum of what you need to function.
        Carrying with my friends and family are my gills, knowing that I can go
        to a space or time to dissolve.
      </p>

      <p>
        LR: Lately I&apos;ve been reminding myself that there have been so many
        folks who have been here before, who have navigated the very condition
        of the world&apos;s impossibility, who came to the edge of a breaking
        point and survived anyway. Recently that has been the gill: at the edge
        of catastrophe, I recognize that we are engineered to do critical and
        speculative work that can extend beyond our current reality. This is the
        reason why we should keep going.
      </p>

      <p>
        SRB: We are here today in honor of the legacies and manifestations of
        the Detroit techno duo{" "}
        <a href="https://tresorberlin.com/artist/drexciya/">Drexciyia</a>, who
        imagine a world at the Atlantic&apos;s floor, born from the
        self-emancipated wombs of African women flown and thrown overboard
        during the{" "}
        <a href="https://slaveryandremembrance.org/articles/article/?id=A0032">
          Middle Passage
        </a>
        . Water breathing and militant, James Marcel Stinson and Gerald Donald
        sonify the revolution of this gilled generation. Drexciya warned
        listeners to{" "}
        <a href="https://www.youtube.com/watch?v=5k6wmU8kTg4&ab_channel=IceCreamMusic">
          &quot;beware&quot; and &quot;proceed with caution&quot;
        </a>{" "}
        with electrifying eruptions, bubbling low frequency intensities, and
        sharp edged steady irregularities. These are the sounds of their
        disruption. We are their descendants, too. When did you both first
        encounter this resistant underwater extending-of-life? Can you remember
        the first time you heard Drexciyan frequencies?
      </p>

      <p>
        LR: I went to graduate school in the UK and was very lucky to cross
        paths with{" "}
        <a href="https://dutchartinstitute.eu/page/1994/kodwo-eshun">
          Kodwo Eshun
        </a>
        . With intersecting work and scholarship, as someone who&apos;s deeply
        embedded in art history, I saw how aspects of Drexciya could be
        instructive. Artists such as{" "}
        <a href="https://www.hauserwirth.com/artists/firelei-baez/">
          Firelei Báez
        </a>{" "}
        continue forward the mythos through their own work and practice. I also
        think a subterranean and or aqueous life maps deeply to the geographical
        site and ontology of the club. The sonic in relationship to bodily
        presence, as Drexciya has instructed, has been really meaningful to me
        across many different points of my life.
      </p>

      <p>
        JHR: Techno and house have been very present in my upbringing. Drexciya
        specifically, techno generally. I had to liberate myself first in a way
        to really understand techno or Drexciya, to understand this resistant
        underwater life. I&apos;m a big Drexciya fan. The &quot;proceed with
        caution&quot; in your question I know is from &quot;Bubble
        Metropolis&quot;. When I first started DJing,{" "}
        <a href="https://soundcloud.com/rumorschicago/rumors-mix-series-001-morenxxx?ref=clipboard&p=i&c=0&si=D04987AB719D4D76848B14C75F4FBF8F&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
          my first ever mix
        </a>{" "}
        opened with &quot;Bubble Metropolis&quot;. It was for this queer party
        called
        <a href="https://soundcloud.com/rumorschicago">Rumors</a> in Chicago
        with <a href="https://ra.co/podcast/919">Ariel Zetina</a> and Del Hale
        as <a href="https://www.instagram.com/misstwinkusa">Ms. Twink USA</a>.
        [Drexciya&apos;s] music is quite capacious and it informs so much about
        my life and the work that I engage with—worlding and resonance and
        dialectics—all of that is embedded in what I&apos;m thinking about.
        Like, Drexciya fan forever!
      </p>

      <p>
        SRB: Such a transcendent offering, honoring the depths of Black
        creation, these sprawlings that come off of the legacy of Drexciya
        itself, people like Kodwo and artists who have been inspired and
        continued their practice in various iterations. It&apos;s honor work. I
        swim through honor in my day to day, practicing honoring as a form of
        prayer, a practice of <i>summoning</i>. Drexciya does this: their deep
        tradition of calling forth and resurrecting drowned histories. The
        practice of calling forth is so central to Black Feminist practice and a
        Black devotional divination. So, I want to acknowledge all those who may
        not be with us, who we may not know, but we remember, who reveal
        themselves in every particle, wave, and motion.
      </p>

      <p>
        I want to think with Sadiya Hartman&apos;s essential and noble project
        of{" "}
        <a href="https://www.moma.org/audio/playlist/298/4088">
          Critical Fabulation
        </a>{" "}
        here. How do you engage in the necessity of remembering? Of calling
        forth experimental histories? What is our role as the legacy of those
        who did not make it?{" "}
      </p>

      <p>
        LR: Well, I think that the very idea of existing in a Black personhood
        and a queer personhood is in relationship to this question of &quot;not
        making it.&quot; It comes with dilemmas and crises in understanding what
        it means to keep going or to have the privilege to keep going, to
        continue. Particularly when it is at the sacrifice of so many. How do we
        bear witness to the contributions of those who are in the room and who
        are not? How do we choose to take up the task of carrying forward their
        memory?
      </p>

      <p>
        Critical fabulation creates a space for speculation, space for a what
        if. What does it mean for there to be folks who are able to continue
        forward? I feel like it&apos;s a really immense and dense challenge—to
        question what one&apos;s responsibility is. There are so many people
        bound up within each of us who we are trying to grapple with every day,
        narrate toward, continue to exist through and in purpose of. For me,
        remembering becomes really important in relationship to experimental
        histories. There is so much when I reflect, for example, about{" "}
        <a href="https://thekitchen.org/">The Kitchen</a>. The fact that there
        are 4,000 artists in The Kitchen&apos;s archive asking who is remembered
        is a project within itself. The radical work of being responsible for
        those memories is thinking differently about who gets to be remembered.
        Perhaps that is the real responsibility inside of cultural production
        and creative work: recognizing the entitlement and the privilege and
        extending it broadly so that more people can live inside of it.
      </p>

      <p>
        JHR: I&apos;ve always thought of remembering as a decolonial act, but I
        don&apos;t necessarily know if I fully agree with that sentiment. So
        much of the work is excavation and redress. And so much about Detroit
        techno and Drexciya, specifically, was about the conscientious notion of
        filling the rupture. Knowing that so much is gone and so much needs to
        be filled. In a sense, Drexciya is redressing the wound. Drexciya is
        Critical Fabulation and{" "}
        <a href="https://brooklynrail.org/2019/02/art_books/Tavia-Nyongos-Afro-Fabulations-The-Queer-Drama-of-Black-Life">
          Afro Fabulation
        </a>
        . I think fantasy and fiction and science fiction are quite generative
        in producing potential. Potential is hopeful and fulfilling. I think my
        role in this entanglement is staying true to myself. As someone who
        loves fantasy and sci-fi, I&apos;ve gotten to a point in my own practice
        where I think I figured out what I need from it: the blurriness that
        comes with fabulation. More like a kaleidoscope effect maybe, rather
        than blur.
      </p>

      <p>
        SRB: I want to continue situating us back into the underwater site of
        Drexciya: the bottom of the ocean. This site is uncolonized, unseen, so
        deeply feared by so many land people. How does{" "}
        <a href="https://www.jackie-inhalt.net/reh/bilder/edouard-glissant-for-opacity.pdf">
          opacity
        </a>
        , or the condition afforded by the absolute depths, offer us an
        antidote, perhaps hope, perhaps a fugitive escape, from capitalism and
        white supremacy? How does this site of opacity nurture and generate as a
        womb might?
      </p>

      <p>
        JHR: I love pulling in the womb and the depths to think about opacity. I
        think opacity has this really incredible power of closing in. Opacity
        does not necessarily have a relationship with whiteness. It doesn&apos;t
        have to be invested in that sort of system. I think recognizing
        difference shouldn&apos;t be about transparency. Unintelligibility and
        confusion are quite impenetrable, which is why it&apos;s antidotal.
        Whiteness seeks to make sense of things, to flatten, to index. But so
        much about Black life and language is ineffable, working in tandem with
        the fluidity and speed of blackness. Motion is integral to fugitivity,
        perpetually rendering and reifying. And Legacy, you have a quote in your
        book{" "}
        <i>
          <a href="https://www.legacyrussell.com/GLITCHFEMINISM">
            Glitch Feminism
          </a>
        </i>{" "}
        that I feel like really gets to that: &quot;Our blur is a dance floor at
        4:00 a.m. That moment where in the crush of all bodies lit up under
        strobes like firecrackers, we become nobody, and in the gorgeous crush
        of nobody, we become everybody.&quot; I think that&apos;s a beautiful
        way to describe the perpetual disembodiment and re-embodiment. But
        opacity is also quite porous, it has holes and is cavernous, like the
        bottom of the ocean is. So, it does let some of us in.
      </p>
      <p>
        LR: I think that&apos;s powerful. I believe deeply that not everything
        is for everybody. A very important Black strategy.
      </p>

      <p>
        Being inside the imperial structure of institutional space requires an
        assumption of access to all of us, informed by a{" "}
        <a href="https://www.pbs.org/independentlens/blog/from-true-believer-to-the-help-how-the-white-gaze-has-shown-hollywoods-shortsightedness/">
          white gaze
        </a>{" "}
        and a white infrastructure of sight. Opacity allows a model of
        <a href="https://www.minorcompositions.info/wp-content/uploads/2013/04/undercommons-web.pdf">
          fugitivity
        </a>
        . It is an enclosure, it&apos;s an encryption. It&apos;s also the
        woodshed, it&apos;s the backstage, it&apos;s the rehearsal site,
        it&apos;s the after-hours. Some of these models of porousness can be
        structured intentionally, as you said Jesus so gorgeously, to let those
        who need to be held, be held, while also acknowledging those who need to
        be set apart for the mechanisms of protection and nurturing that we
        deserve. The reproductions of different ideas of fantasy and speculation
        can allow for that to occur, and occur through and beyond the mechanics
        of reproduction that are purely biological, which really asks us to
        think differently about what are the structures of family and of
        community that allow for us to be carried forward and sustained. The
        bigger question maybe is what does that room look like in terms of
        social and cultural reproduction?
      </p>

      <p>
        SRB: The hinge of the word &quot;re/produce,&quot; Legacy. There&apos;s
        so much to be thought about there.
      </p>
      <p>
        LR: It&apos;s really important to ask what does the womb teach us? There
        are parts of this that can be instructive. We see this with the history
        of Drexciya—the womb is this site that in so many ways is
        self-contained, but also is a radical political site. So what does it
        mean to think about this idea of the womb and of reproduction as being
        something that can extend beyond our physical self and take on new
        definitions? This could help us better understand how to broaden our
        reach toward one another, a broader project, a conspiracy even with a
        mission and a purpose.
      </p>
      <p>
        SRB: I&apos;m witnessing an as above, so below mirroring right now: the
        womb on this very intimate, internal scale, and then also the womb as a
        broader site of generation. I want to think about how the womb is
        cataloged to the human. Holding close to our gilled Drexciyan ancestors,
        what possibilities exist for us outside of the role of human? How can we
        talk about our more-than-humanness, our outside-of-humanness, without
        discounting our humanity? Why fight for inclusion in a framework that
        isn&apos;t big enough for us?
      </p>
      <p>
        JHR: I really do believe that being human is more than enough. Earth is
        really enough. So much of the history of our subjugation has been about
        being outside of human. But I&apos;m also coming from a Caribbean
        background and so much of that life is anthropomorphic, outside and more
        than human, it&apos;s magical in a way. I think a lot about{" "}
        <a href="https://www.newmuseum.org/exhibitions/view/wangechi-mutu-intertwined-1">
          Wangechi Mutu&apos;s
        </a>{" "}
        work in this anthropomorphic sense.
      </p>

      <p>
        I&apos;d say it&apos;s a human tendency to attribute our bodies to other
        species. Like, I don&apos;t think a snake is thinking about having legs
        as much as we&apos;re thinking about having gills or wings. In my work I
        use that aspect as a means to explore futurity and the potential in
        generating an outside. And I think queer nightlife also has that aspect
        embedded in it as well. The night and the darkness and our lack of
        vision produces that effect. The night being the space of obscurity,
        mischief, and invisibility.
      </p>
      <p>
        SRB: If humanness is enough, then what is this historical tension
        between humans and machines? You both have work regarding mechanism and
        digital space. Legacy, all of your consideration of the glitch. Jesus,
        what you describe as the &quot;failure of the mechanical optics.&quot;
        What are the technologies of survival? How are we in conversation with
        other-than-humanness?
      </p>
      <p>
        LR: As Jesus noted, there&apos;s an interesting tension with the
        category of human and our exclusion. The very language and theorizing
        around a{" "}
        <a href="https://monoskop.org/images/4/4c/Haraway_Donna_1985_A_Manifesto_for_Cyborgs_Science_Technology_and_Socialist_Feminism_in_the_1980s.pdf">
          cyborgian
        </a>{" "}
        politic, for instance, inherently has anti-blackness built inside of it.
        And also, I recognize the tendency to lean into the mythos of cyborg to
        try to reconstruct through and away from an anti-black premise.
        Simultaneously what does it really mean to try to advocate to fit inside
        of an infrastructure that is so failed, as you initially posed, Stella?
        The very idea of human—it&apos;s an infrastructure that has been so
        manipulated to serve clear agendas that work against the possibility of
        our existing into the future. To reshape or redefine what human needs to
        be, I think, reflects on the needs of Black and queer communities and
        what we feel like we deserve.
      </p>

      <p>
        JHR: Absolutely. I work in and think about this contention [of human and
        machine] quite often. I&apos;m not in one area or the other, it&apos;s
        always a battle. Technology requires the literal lives of people.
        It&apos;s so pronounced especially right now with what is happening in
        the{" "}
        <a href="https://www.aljazeera.com/news/2024/2/21/a-guide-to-the-decades-long-conflict-in-dr-congo">
          Congo
        </a>{" "}
        and in{" "}
        <a href="https://www.aa.com.tr/en/world/genocide-and-more-the-varied-forms-of-destruction-in-gaza/3131585">
          Gaza
        </a>
        , where Black and brown lives are being extracted and murdered for the
        sake of resources and land to sustain the mechanic need for the next
        [tech] thing. And all the technology we have is mostly a byproduct of
        military funding and expansion. So much of our tech has ghosts, and they
        haunt. What is the transformative work really needed to evolve the idea
        of what the cyborg is or what the android could be? There&apos;s also
        the question of artificial intelligence, there&apos;s so much I want to
        unravel in that. But it&apos;s all in tandem with the apocalypse of the
        Middle Passage.{" "}
      </p>

      <p>
        The question about the technologies of our survival brings me back to
        techno. Absolutely techno. There&apos;s so much about techno that is
        about the integration of the human and the machine, as well as the
        reorganization and hijacking of time. It literally makes time. You could
        be at a set and it could feel like years. There is also a reason why it
        came out of Detroit at the precipice of the expansion of the{" "}
        <a href="https://www.smithsonianmag.com/history/separating-truth-myth-so-called-golden-age-detroit-auto-industry-180972139/">
          motor industry
        </a>
        . Detroit was in bed with the machine, the motor. The incorporation of
        the <a href="https://soundcloud.com/sirensirensirens">siren</a> in
        electronic music as a way to revisit the site of trauma, to completely
        transform it and glitch it into something otherwise and expansive. Even
        sampling is dialectical, and is regenerative. It is language and it
        travels like language. Maybe the technology of our survival is more like
        an armature. Or maybe it&apos;s the wildness that one brings out of
        another. Or maybe there&apos;s something technological about language
        and dialectics and opacity that should be considered in this question.
        Or maybe it&apos;s the ability to perpetually render the constant
        mobility. Maybe that&apos;s the technology.
      </p>

      <p>
        SRB: I want to return to a notion of aliveness. The tendency to attach
        to the non-human, to the cyborg, I see as a fear of &quot;not making
        it,&quot; of the inevitability of unaliveness. Particularly in
        blackness, the constancy of fear and the tenuousness of life that is so
        embedded and assumed within our bodies. I want to talk about your{" "}
        <a href="https://www.youtube.com/watch?v=0_67L1ldYgI&ab_channel=LoopholeofRetreat%3AVenice">
          Sunday Sermon
        </a>{" "}
        at the{" "}
        <a href="https://simoneleighvenice2022.org/loophole-of-retreat/">
          Loophole of Retreat
        </a>{" "}
        gathering, Legacy, and the freedom generated in &quot;not making
        it.&quot; the freedom in the &quot;independence of after-life&quot; as
        you phrased it. Isn&apos;t this what blackness is? Aliveness despite.
        And I want to ask a series of questions back to you, Legacy, that you
        posed that Sunday in Venice: are we living now in an afterlife? How do
        we understand our proximities to unaliveness? What are the stakes of our
        aliveness?
      </p>
      <p>
        LR: It feels really important to recognize that our very mobility, the
        fact of our aliveness as Black or animated or vertical, is in itself
        something that is rendered a threat by a white imagination. The very
        idea that blackness can move in its subjectivity, in its empowerment, in
        its conspiracy, in its collaboration, in its community, in its opacity
        —these are things that I think dictate a deep and complex pathology and
        paranoia within a white thought.
      </p>
      <p>
        As it relates to stakes, in order for aliveness to no longer be
        perceived as a threat within the infrastructure of a supremacist frame,
        blackness must be rendered as still, as frozen, as held, and as captive.
        That actually becomes part of the strategy to flatten out what a
        selfhood can be, and to really rob or render extinct an idea of a Black
        personhood that has the right to move and the right to engage and
        broaden their aliveness. So it becomes incredibly urgent and important
        to think about the stakes of aliveness as something that is part of our
        radicality, something that we should be resurrecting for those who did
        not &quot;make it.&quot;
      </p>

      <p>
        JHR: This is such a chilling set of questions. It led me to think about
        salt. I&apos;ve been thinking a lot about salt the past six months.
        I&apos;m always thinking about motion. There&apos;s this poem by{" "}
        <a href="https://globalsocialtheory.org/thinkers/edouard-glissant-2/">
          Edouard Glissant
        </a>{" "}
        that I&apos;ve been sitting with that I would love to share in this
        context. Really just its ending, because I feel like it applies to this
        question of what&apos;s at stake of our aliveness. It goes as follows:
      </p>

      <p>
        <i>
          “Sand saver of solitude, When we pass into forever, O night, more than
          the path struck with twilight&apos;s alone, In the infinity of sand
          its route, In the valley of night its route, And yet upon the salt,
          There are only calyxes, Encompassing the stem posts of these seas,
          Where delight is infinite to me, And what to say of the ocean, Except
          that it waits.
        </i>
      </p>
      <p>
        <i>
          The holy rape of imperfect light upon light to be perfected by the
          unknown gentleness forcing gentleness to open itself. You are love
          that passes beside me. Oh village of deaths, but your water is thicker
          than my leaves will ever be heavy. And what to say of the ocean,
          except that it waits. Toward the infinite flesh is the waiting, broken
          at the root, an evening of hail.
        </i>
      </p>
      <p>
        <i>
          Oh, to be farther from you than, for example, air from root. I have no
          longer leaf or sap, but I go back up into the fields and the storms
          which are roads of the contrary of knowledge. Here in the air of
          myself, and emboldened myself with oblivion, if the hail comes, and
          what to say of the ocean except that it waits.”
        </i>
      </p>

      <p>
        There&apos;s something about salt that is so potent—ephemera as
        evidence, the mobility, and motion that blackness and queerness embody.
        Of course, I think about the clubs. I always think about the clubs.
        Something that&apos;s so Black about the club (not all of them you know,
        it&apos;s very specific) is the deeply devotional aspect that is
        embedded in those spaces, but also in its participants. You&apos;re
        really giving your body, your sweat, your energy, your best, your worst,
        your everything to the music. There&apos;s something quite devotional
        about that which goes unspoken. So I think about salt as evidence: sweat
        that has crystallized and grown up upon itself to produce mirrors and
        fragments and abstractions. Entangled in the deathward-leaning existence
        that we inhabit, our saving grace is motion. Fugitivity in itself is so
        much about that.
      </p>

      <p>
        I want to bring up a{" "}
        <a href="https://www.poetryfoundation.org/poets/fred-moten">
          Fred Moten
        </a>{" "}
        quote. He&apos;s really my type of diabolical for real. He says in{" "}
        <i>
          <a href="https://www.dukeupress.edu/black-and-blur">Black and Blur</a>
        </i>
        , “This order is our service, our antidote and anteroom, our vestibule
        without a story. We can&apos;t survive intact. We can only survive if
        we&apos;re not intact. Our danger and saving power is an always open
        door. Our venue is mutual infusion, the holy of holies in the wall,
        glory in a kind of open chastity where the explicit body reveals itself
        demure and disappearance. Transcribed, unenforced, slid, veneerally
        unnatural and convivial, we claim slur against drill and document.
        Confirmation of the flesh is queer and evangelical.” And I feel like
        that really answers the question of aliveness.
      </p>

      <p>
        SRB: Let&apos;s talk about the club. I&apos;ve always thought of sound
        akin to water, echolocational vibration, both a conduit between realms,
        species, cultures, and geographies. How can the sonic bring us beyond
        this realm, beyond the conditions of our subjugation? Perhaps closer to
        a Black celestial sight rendered in heaven or sea? How is Black queer
        nightlife in the subterranean scene of the club, a manifestation and
        alchemization of, as Kodwo Eshun articulates, “the crushing pressure,
        the insulation, and isolation” of the absolute depths?
      </p>

      <p>
        JHR: Sound does not ask permission. It moves through you regardless.
        It&apos;s dialectical, it bounces back, it reverberates, it reflects, it
        divides.
      </p>

      <p>
        I really want to think about the physics behind sound—water actually
        gives shape to sound and they are similar in how they move through
        material and how they dissipate. I had an experience at{" "}
        <a href="https://www.instagram.com/dwellerforever">Dweller</a> last
        year, at{" "}
        <a href="https://sageintrospekt.bandcamp.com/">Introspekt&apos;s</a> set
        at <a href="https://www.instagram.com/nowadaysnyc/">Nowadays Nonstop</a>
        , an iconic DJ. In these bass-heavy moments there were synthesizer
        samples that came up from under me. They erupted. It felt like the sound
        literally sliced through me. I don&apos;t know how to describe it
        really, but it felt so visceral. So delightful. [Those synths] felt so
        alien and outside, so incredibly transportive. It&apos;s weird to put
        something like that into words because sound and techno (and in this
        instance it was a dub track) are Black genres that really put into
        practice and materialize the ineffable. Where language seems to fail,
        sound flourishes.
      </p>

      <p>
        The role of the DJ is also timekeeping. Like I said before, with techno,
        you have the ability to make time—a couple hours can feel like a day.
        You can really make the dancers toil.{" "}
        <a href="https://www.instagram.com/julianahuxtable/?hl=en">
          Juliana Huxtable
        </a>{" "}
        and{" "}
        <a href="https://www.instagram.com/jasss_inc?igsh=MXkwcWM0ZHp5NHV1eA%3D%3D">
          Jasss
        </a>{" "}
        played this set at <a href="https://ra.co/promoters/101265">Merge</a>{" "}
        this New Year&apos;s. I was only there for a couple hours but it felt
        like years. The space we were in had so much potential, I felt like I
        could really live there. I walked out of that foggy warehouse in
        Bushwick that morning and the sun felt like Technicolor. Like the
        saturation got boosted. I had so much hope. I slept good that night. But
        I don&apos;t prescribe the language of utopia to these moments at all
        either, that&apos;s a lie. And not everybody is welcome, going back to
        what Legacy mentioned, it&apos;s not for everybody. That&apos;s really
        important. The most vital part of it all is this communal becoming. How
        we become enmeshed in this amorphous soup of becoming and unbecoming
        that feels beyond this realm, but truly is what makes us more human.
        Maybe that&apos;s the result of that crushing pressure you mentioned, a
        blurring into one another, at those moments at the depths. It&apos;s so
        sexy and sweaty and aqueous in nature. We are subverting and
        disregarding our conditions of subjugation.
      </p>
      <p>
        SRB: Experiencing time is so surreal when you&apos;re in that absolute
        depth, that sweaty, hot, infinite place. Thinking about Drexciya makes
        me want to consider this particular solid land that we currently dwell
        upon as a constraint. What are the possibilities of an elsewhere,
        underwater or otherwise? What are our possibilities of creation, of
        change, of alchemization, of transformation? How does the sonic, the
        intangible, the ungraspable, the un-colonizable, the renderings of the
        persistence of Black life, create the conditions of futurity? What are
        we making?{" "}
      </p>
      <p>
        LR: Black folks have always existed at the end of the world. I think
        queerness, too, has always existed at the end of the world. We must give
        ourselves permission for the beginnings of many worlds. What does that
        look like? How can that be something that is supported and celebrated,
        while simultaneously untangling and unspooling the complications of
        endings—endings of worlds, of people, of histories?{" "}
      </p>
      <p>
        I&apos;m coming back to this word entitlement. What does it mean to feel
        entitled to speculation and possibility that gives us the range and
        decadence and abundance that we so deserve? The question of what we are
        making, I think is a really beautiful question. I don&apos;t know if
        there&apos;s a singular answer, but what I do know is that the
        unspooling of this ending of the world feels like it must intersect with
        the reimagination and restructuring of a world that can continue to give
        us life, continue to invest in and protect our life systems.
        Acknowledging also that research is different than life—we can&apos;t
        constantly live inside the theory of our own blackness, we actually need
        to think about what it means to create space for aliveness to exist
        outside of our theoretical frame. I think [this] is what I&apos;m trying
        to make. How can we be present with one another and not flattened
        through the lens of scholarship? Life is not in a book, it&apos;s not
        something that is always contained. It has a necessary wildness that
        extends beyond the page and beyond the theory and beyond the classroom
        and beyond the institution. The vastness beyond, the extension of
        shadow, may be the place where a new beginning is created altogether.{" "}
      </p>
      <p>
        JHR: Absolutely, yes. Drexciya&apos;s somewhere in the Atlantic, yet on
        their later projects, they do shoot outward into space. But space is
        relative to us. I feel like the possibilities are just harsher. Our
        bodies are simply accustomed to Earth&apos;s gravity; the human capacity
        to hold our breath is like one to two minutes. Drexciya is definitely
        tearing, but Earth is enough for me. And I guess the elsewhere I&apos;m
        interested in is the dismantling that Legacy is talking about, that sort
        of confrontation. It&apos;s not an abandonment or an escapism, but the
        ability to embody so many spaces, too. My fugitivity is not tied up with
        where I was born or where I came from, it&apos;s tied up with my sense
        of belonging to the people around me and to the culture I&apos;m a part
        of.{" "}
      </p>

      <p>
        Sovereignty to a geographic pinning is futile, especially after the
        Middle Passage. As the spirit of Black life is ever mobile, I&apos;m
        generating sovereignty and futurity towards the drifting body, to the
        drifting body. That is ultimately the undercurrent of my practice as an
        artist: ephemerality, land practices, archiving, generating 3-D space,
        performance, et cetera. We are so bound up with memorializing and
        monumentalization, which ultimately produces stillness, which is
        counterintuitive to the{" "}
        <a href="https://www.poetryfoundation.org/poems/53479/fugitivity-is-immanent-to-the-thing-but-is-manifest-transversally">
          fugitivity
        </a>{" "}
        of blackness. Stella, you keep mentioning this term alchemy, and I
        really love it. That&apos;s such a good word. It makes me think about
        potions and elixirs, which is where I&apos;m at, too: that sense of
        wonder. I really believe that wonder is the act that returns us to love,
        especially when we&apos;ve reached our limit. And that true
        transformation at the site of trauma is the hard work, but in many ways,
        it&apos;s much more rewarding.
      </p>

      <p>
        SRB: Yes, all the lessons that the earth provides us are <i>more</i>{" "}
        than enough. I&apos;ve been recognizing the generosity of the earth.
        I&apos;m so struck by your choice of language, “drifting body.” It
        thinks with the underwater, with the lessons of the water, with the pace
        and the texture of the water. I was just in the Caribbean for the first
        time, in Trinidad and Tobago. The Caribbean Sea is the most surreal
        place I&apos;ve ever been. It felt like coming home. I was deeply
        present with the constancy of waves, how they are truly never ceasing.
        The waves have been here since the beginning of this Earth and the waves
        will continue. Thinking with, always,{" "}
        <a href="https://www.octaviabutler.com/">Octavia Butler&apos;s</a> spell
        of hope: “God is Change”…
      </p>

      <p>
        JHR: Yes!{" "}
        <i>
          <a href="https://godischange.org/the-book-of-the-living/">
            Earthseed.
          </a>
        </i>
      </p>

      <p>
        SRB: …I&apos;ve learned lessons of coming and going, of how change is
        the only inevitable, the only constant. Stillness is un-inherent to the
        earth&apos;s rhythm. Somehow that gives me so much hope. When I&apos;m
        confronting the despair of imperialism, and how stuck it is, I think
        about how change must occur. It is the only natural thing. It is the
        only divine thing. I&apos;m like, oh the empire <i>will</i> fall. It{" "}
        <i>will</i>
        change. It is in the nature of this world.
      </p>

      <p>
        A somatic practitioner,{" "}
        <a href="https://www.selflovetribute.com/">Care ()</a>, told me recently
        that there is rupture in every relationship, yet what creates a secure
        relationship is the ability to repair. It&apos;s not about lack of
        disturbance, it is about how we grow forward from the disturbance, from
        the rupture. Capitalism is purely rupture, supported by disposability
        and turnover. There is no mind to repair, there is no mind for a future,
        for a forward. A core dimension in most indigenous knowledge formations
        and practice is how repair is always a possibility. There are always
        possibilities of future. We can repair with this earth—all the earth
        wants us to do is repair. It&apos;s offering us lessons. When you said
        earth is enough, for me the earth is everything.
      </p>
      <p>JHR: Yes, redress. Redress the world.</p>
      <p>LR: I&apos;m here for it. </p>
    </ArticleContainer>
  )
}
