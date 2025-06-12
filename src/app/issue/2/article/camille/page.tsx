"use client"

import { ArticleBase } from "@/components"

import { issue2Metadata } from ".."
import { ArticleContainer } from "../../styled"

import title from "../../../../../../public/titles/bacon.svg"
import cover from "../../../../../../public/titles/Jupiter_title_Bacon.png"

import { ArticleCover } from "../../ArticleCover"

export default function Page() {
  return (
    <ArticleBase
      next={issue2Metadata[0]}
      previous={issue2Metadata[5]}
      issue={2}
      position="0% 90% 0% 0%"
      svg={
        <ArticleCover
          svg={title}
          png={cover}
          title={issue2Metadata[5].title}
          author={issue2Metadata[5].author}
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
      <p style={{ paddingInlineStart: "12px", color: "white" }}>I.</p>

      <p style={{ color: "white" }}>
        He asks us if we can hear the water. And in the next breath, if we can
        hear him. (Inhale) if we can hear the water, (exhale) if we can hear
        him—again and again, lulling our ears beyond our heads, opening our
        pores like palms made for listening. Seated and flanked by the towering
        forms of fellow artist Laurent Valère&apos;s{" "}
        <a
          target="_blank"
          href="https://www.laurentvalereartstudio.com/cap-110-1"
        >
          Cap 110 Memorial
        </a>
        , Julien gives us a poem: an incantation that incarnates the fundamental
        insurgence of this gathering. It&apos;s more communion than conference,
        for the wind and waves have willed it so…
      </p>
      <p style={{ color: "white" }}>
        Tonight, his voice is not only his voice. Tonight, his utterance is
        pierced by the incandescent flair of Jacques Coursil&apos;s trilling
        trumpet and a symphony of erosion as ancient waves hurl themselves onto
        old stone below. Tonight, we have accepted the invitation to teeter with
        him on the cliff&apos;s edge. Tonight, he gives us verses keen on
        un-keeping, intent on un-mooring our melancholy and meeting something
        more vast than sky. I don&apos;t remember a single thing he said, but
        the feeling lived on—latent and thrumming and ready to become what
        you&apos;re reading now.
      </p>
      <p style={{ color: "white" }}>
        As his oratory impulse receded back into the cavern of his rib cage like
        a snake coiling around its own fresh flesh, he put the handheld mic
        he&apos;d been cradling down into the grass and angled his eyes toward
        immensity. Behind him loomed, still, the fifteen forms with their heads
        bowed down toward the precipice in perpetual testimony. Around him
        coalesced the final yelps of brass, a sonic cloud of electrons orbiting
        the nucleus of our infinite possibility.
      </p>
      <p style={{ color: "white" }}>
        On the yearning heels of Coursil&apos;s trembling horn, <br />
        we ascend together into the night sky like a{" "}
        <a
          target="_blank"
          href="https://pierrejoris.com/blog/edouard-glissant-1928-2011/"
        >
          high cry
        </a>
        , <br />
        Commanding something more than mere melody. <br />
      </p>

      <p style={{ paddingInlineStart: "12px", color: "white" }}>II.</p>

      <p style={{ color: "white" }}>
        <i style={{ color: "white" }}>
          To hail from an archipelago is to know something special about mending
        </i>
        —as such is the apotropaic spirit of experimental filmmaker, musician,
        sculptor, performance artist, and poet{" "}
        <a target="_blank" href="https://www.juliencreuzet.com/">
          Julien Creuzet
        </a>
        . In preparation to represent France at the 60th Venice Biennale and in
        lieu of a traditional “press conference,” the Martinican artist
        organized an odyssey through the arteries of his island as a means of
        introducing those who would later write about his work to the topography
        and imaginary from which his tentacular practice flows.
      </p>
      <p style={{ color: "white" }}>
        This is the first time a Martinican artist has held a convening of this
        nature on the island. Likewise, this is the first time a Martinican
        artist&apos;s work will make itself manifest in the{" "}
        <a href="https://www.instagram.com/attila_cataracte/?igsh=eXN4aDJleG83NjNs">
          French Pavilion
        </a>
        .{" "}
      </p>

      <p style={{ paddingInlineStart: "12px", color: "white" }}>III.</p>
      <p style={{ color: "white" }}>
        We&apos;ve reached the fold of night that precedes slurred and swirling,
        the fold still lined with lucidity and laced with laughter. The poet
        tells me this: “Badam is an onomatopoeia as well as the other name of
        the local almond nut in the Ocean Indien: noix de badam. I made a jeu de
        mots mixing the two textures. The onomatopoeia is the one we use in
        Martinique when something hits you. It is also used when something hits
        the floor.”
      </p>

      <p style={{ color: "white" }}>
        <i style={{ color: "white" }}>BADAM</i> (the poem is a prophecy) <br />
        <i style={{ color: "white" }}>BADAM</i> (we stand: seized, spellbound, and reminded of an) <br />
        <i style={{ color: "white" }}>BADAM</i> (airborne assailant. the metropole is the “something” that
        “hits you.”) <br />
        <i style={{ color: "white" }}>BADAM</i>
        <br />
        <i style={{ color: "white" }}>BADAM</i>
        <br />
        <i style={{ color: "white" }}>BADAM</i>
      </p>
      <p style={{ color: "white" }}>
        Simone Lagrand&apos;s voice is thunder passed through windpipes. As her
        utterances populate the veranda on which we have gathered to share our
        first meal, her lungs demand their own fullness and, by osmosis, ours do
        too. Syllables catapult, ricochet off her fountain of a poem, conjuring
        the feeling of whatever happens to a branch after a butterfly has landed
        on it, or that which occurs in the air after a hummingbird, propelled by
        a heart that pumps as fast as its diaphanous wings, has insisted upon
        its own flight, again.
      </p>
      <p style={{ color: "white" }}>
        BADAM: a crescendo of potential energy wailing downward, all kinetic—but
        buoyant nonetheless
      </p>
      <p style={{ color: "white" }}>
        <i style={{ color: "white" }}>
          to hail from an archipelago is to know something special about
          refusing to sink
        </i>
      </p>

      <p style={{ paddingInlineStart: "12px", color: "white" }}>IV.</p>

      <p style={{ color: "white" }}>
        “Quantum entanglement” explains how two particles can be intimately
        connected even if separated by billions of light-years of space, such
        that “
        <a
          target="_blank"
          href="https://www.nobelprize.org/prizes/physics/2022/press-release/"
        >
          what happens to one of the particles in an entangled pair determines
          what happens to the other particle, even if they are far apart.
        </a>
        ” The implications of quantum entanglement, when parsed through the
        prism of Black feminism and, specifically, the musings of our prescient
        foremother Octavia Butler, recall how gloriously malleable we are to one
        another: “
        <a
          target="_blank"
          href="https://www.oasisacademysouthbank.org/uploaded/South_Bank/Curriculum/Student_Learning/Online_Library/KS5/Parable_of_the_Sower_by_Octavia_E._Butler.pdf"
        >
          All that you touch, / You Change. / All that you Change, / Changes
          you.
        </a>
        ”
      </p>
      <p style={{ color: "white" }}>
        We can expand this framework up to the level of relation, like when we
        surrender to the crushing risk and kaleidoscopic thrill of being made
        anew in love&apos;s image. Or, like when I feel my forebears
        recalibrating my compass, speaking through nothing and across everything
        to guide me across the puckered lips of eternal flux. Or, like during
        carnival when the intoxicating density of bèlè drums swallow any sense
        of separation, any sense of me-ness, and deliver us all into the
        crackling center of black hole-esque singularity—that giving-over to
        rhythm wherein we excrete nothing but salt and forget to mind whose body
        it came from.
      </p>
      <p style={{ color: "white" }}>And what if we swell the scale further? </p>
      <p style={{ color: "white" }}>
        We can turn to quantum entanglement also as a means to read the
        relationship between France and its neo-colonies: like how they
        asphyxiate our land with concrete and chlordecone without realizing they
        too are porous to the poison. Or, like when the hexagon decides an
        artist who hails from its purposeful periphery will speak for the entire
        nation without accounting for all the ideologies that such a decision so
        delightfully undermines. By way of this apprehension, we may refuse to
        celebrate the hexagon for acknowledging that its head is made and
        maintained by a triangle. Such a framework encourages an insurgent
        interpretation of what the presence of Julien&apos;s work in Venice{" "}
        <i>means</i>, i.e. turns our attention toward what it <i>disrupts</i>,{" "}
        toward a ceremonious undoing of national identity.
      </p>
      <p style={{ color: "white" }}>
        France&apos;s regime has long depended on assimilatory rhetoric, as
        evinced in part by the evisceration of language that indexes relational
        difference. For example, hyphens are a ghost in the country&apos;s
        socio-political lexicon. You are not Franco-Martinican or
        Franco-Guadeloupean, or Franco anything else, you&apos;re French, just
        French, all else dissolving into the universal solvent that is the
        metropole&apos;s multi-century-long wash. In Martinique, we call it{" "}
        <i>la blès</i> (the wound), the psychosomatic and spiritual accumulation
        of subjugation, the immense and holistically felt weight of living under
        European domination.
      </p>
      <p style={{ color: "white" }}>
        Concurrently, the ethos of the island is one of <i>débrouillardise</i>
        —our incredible capacity to cope, to keep inventing ourselves under
        volcanic pressure against our livelihood, to reify a cadence of
        aliveness informed by profuse familiarity with the anatomy of violence,
        and simultaneously aware of and inhabiting an other-way or other-wise.{" "}
      </p>
      <p style={{ color: "white" }}>
        <i>Débrouillardise</i> is the aortic root of our expression, of our
        action, of our waiting and wanting, which also means there&apos;s an
        asymmetry to the equation of entanglement here: the appearance of
        Julien&apos;s work in the French Pavilion materializes a way of being
        that is specific to Martinicans&apos; will and abandons the perception
        of the Antilles as endlessly open to the projection of external
        meanings. To posit that France and Martinique are quantumly entangled,
        then, is to recall that meanings are made through what Édouard Glissant
        terms{" "}
        <a
          target="_blank"
          href="https://032c.com/magazine/edouard-glissant-and-hans-ulrich-obrist"
        >
          <i>“tourbillons de rencontre”</i>
        </a>{" "}
        (whirlwinds of encounter), and thus, that our understanding of France is
        all but immune to its collision with Martinique, all but safe from the
        artist&apos;s rewriting.
      </p>
      <p style={{ color: "white" }}>
        Julien puts Martinique at the center of the frame and demands engagement
        on the island&apos;s own terms, on his own terms. He refuses to partake
        in the charade of translation, refuses to make his offerings legible to
        a country whose self-perception depends on misreading him. He has
        brought us all here to bask in the splendor of empire&apos;s undoing.
      </p>
      <p style={{ color: "white" }}>
        It all feels like a wink. And the wink is our way, is our donning of{" "}
        <i>débrouillardise</i>.
      </p>
      <p style={{ color: "white" }}>
        Indeed, in step with Julien&apos;s work, we redress <i>la blès</i>.
      </p>

      <p style={{ paddingInlineStart: "12px", color: "white" }}>V.</p>

      <p style={{ color: "white" }}>
        It&apos;s pre-coffee early, but the birds and the trees are already
        exchanging notes about the sun&apos;s unspooling, so we follow suit. The
        bus grinds to a halt and we begin down the path to the residence where
        Édouard Glissant thought the thoughts, loved the people, wrote the
        writings (including our beloved <i>Poetics of Relation</i>), and offered
        his final exhale to the island. The house,{" "}
        <a target="_blank" href="https://www.edouardglissantartfund.com/">
          recently transformed into a residency program
        </a>
        , hums like a beacon down the way. The pebbles we press with our
        footfalls feel like a red carpet rolled out for freedom to take on
        flesh, for sovereignty to saunter across.
      </p>
      <p style={{ color: "white" }}>
        After serving ourselves a vivifying dose of coconut water from an
        endlessly perspiring vessel, Daria and I go to the bathroom to relieve
        our foreheads, also endlessly perspiring, and reapply the liquid blush
        we use as lipstick. Feeling fresh, we photograph ourselves in the mirror
        and register the fact that our luminary&apos;s reflection was here too,
        that this is where he beheld his own image daily: a perfect moment of{" "}
        <a
          target="_blank"
          href="https://avo-translations.co.uk/23-untranslatable-japanese-words-with-beautiful-meanings"
        >
          kyouka suigetsu
        </a>
        . We can&apos;t touch him / but his memory is loud, loud, loud in the
        walls. As we exit the lavatory, I catch a glimpse of his straw hat
        perched atop a conical pile of books.
      </p>
      <p style={{ color: "white" }}>
        We are here to inaugurate the house&apos;s new life as a residency, and
        also because Julien is going to be{" "}
        <a
          target="_blank"
          href="https://www.facebook.com/institutfrancais.pageofficielle/videos/233150353191847/"
        >
          in conversation
        </a>{" "}
        with Cindy Sissokho and Céline Kopp, the curators of this year&apos;s
        Pavilion, as well as Eva Nguyen Binh, the president of the Institut
        français, on the topic of the exhibition. Today, we will hear him utter
        its name for the first time:{" "}
        <i>
          Attila cataracte ta source aux pieds des pitons verts finira dans la
          grande mer gouffre bleu nous nous noyâmes dans les larmes marées de la
          lune
        </i>{" "}
        (Attila cataract your source at the feet of the green peaks will end up
        in the great sea blue abyss we drowned in the tidal tears of the moon).
        The title references the Martinican landscape and the <i>“débordant”</i>{" "}
        (unbounded) imaginaries it sends crackling into the atmosphere like
        tectonic plates refashioning themselves to make earth buckle. He speaks
        about how the works will prompt a devotional register of attention and I
        blush into the understanding that, this year, the French Pavilion will
        be an ode to the magma that made us.
      </p>
      <p style={{ color: "white" }}>
        Further,{" "}
        <i>
          Attila cataracte ta source aux pieds des pitons verts finira dans la
          grande mer gouffre bleu nous nous noyâmes dans les larmes marées de la
          lune
        </i>{" "}
        will orient our contemplation toward emancipatory ontologies that
        macerate in unintelligibility and unearth a reverence for esoteric ways
        of knowing grounded in the chaos of pure feeling. The artworks will
        encourage the audience to relinquish their manufactured sense of
        immunity to entropy and demand a full body interpretation, not just a
        cerebral or “intellectual” one—they will ask us to bring all that we
        have not yet named within ourselves and to imbibe the mystery of being
        without having to call it anything.
      </p>
      <p style={{ color: "white" }}>
        For the duration of the dialogue, the artist answers sparingly: an
        easeful testament to his own agentive force, as if to epitomize
        Glissant&apos;s directive of one&apos;s{" "}
        <a
          target="_blank"
          href="https://www.jackie-inhalt.net/reh/bilder/edouard-glissant-for-opacity.pdf"
        >
          “right to opacity.”
        </a>{" "}
        He sits poised, tracing the edges of clouds. Feet tucked gently beneath
        him, Julien balances the ample length of his cutlass—spread latent
        across his knees. I realize, then, he hasn&apos;t put it down a single
        time since the conference-cum-communion began. Once the metronome of the
        exchange with Cindy, Céline, and Eva halts, the blade, licked by
        negative space in the form of a scolopendre, returns home. Using his
        body as a sheath, he tucks it tenderly between his tricep and rib cage,
        the tip pointing behind him like a scorpion&apos;s stinger. While the
        gesture could be read as a physical signifier of his capacity to extract
        blood, it could also be understood as an act of adornment, as a
        benediction, as a self-ordainment. A fifth limb poised to protect.
      </p>

      <p style={{ paddingInlineStart: "12px", color: "white" }}>VI.</p>

      <p style={{ color: "white" }}>
        We step, now, into the rustling throat of Absalon Forest: the birthplace
        of surrealism. As we plunge down a narrow, moss-lined staircase that
        leads to a gargantuan waterfall, Julien makes a point to remind us that
        Suzanne Roussi Césaire, her husband, and André Breton walked this very
        same path, that they came here to muse together about the suscitation of
        a post-war aesthetic capable of leveraging the cyclonic bounty of the
        subconscious.{" "}
      </p>
      <p style={{ color: "white" }}>
        The undeniable here-ness of our writerly cosmology and the thick
        seduction of a looming forest&apos;s wisdom sends Daria and I rushing
        back to the bus. Riffling madly through our tote bags, we grab our
        bikinis and, surrendering to a gush of anticipation, find a cavern to
        strip in—wholly unconcerned with who can see. We tread over jagged
        bedrock, floating over potential punctures as quickly as we possibly
        can, closing the gap between our bodies and the water&apos;s velocity to
        feel it all fall into the open space where our skulls meet the spirits.
        The water is all but merciful, coaxing a series of sharp inhales and
        testing how much we can take. Wading, wading, calling freshwater to
        unfold us, permission is granted. We scuttle up onto the rock&apos;s
        face, scale the sides until we are as close to the tumble as we can get
        without surrendering our necks, and embrace immediately, drunk on our
        own rapturous laughter and that totalizing feeling of reality melting
        into something more habitable.{" "}
      </p>
      <p style={{ color: "white" }}>
        Ensconced in the safety of Daria&apos;s arms, I wonder for a while about
        the cascade&apos;s enraptured expanse and think to myself: no wonder
        Suzanne and her comrades came here to write the world anew. She has been
        with us all along the way, threading that glistening{" "}
        <a
          target="_blank"
          href="https://monoskop.org/images/0/04/Cesaire_Suzanne_The_Great_Camouflage_Writings_of_Dissent_1941-1945_2012_part.pdf"
        >
          “tightrope of our hope”
        </a>{" "}
        across spacetime right to the event horizon that is this gathering. Now
        cue Julien and his co-conspirators, all fingers and fortitude, ready to
        keep weaving.{" "}
      </p>
      <p style={{ color: "white" }}>
        Indeed, Suzanne is with us now, marveling at her prayer: answered /
        alight / ablaze.{" "}
      </p>
    </ArticleContainer>
  )
}
