"use client"

import { Base } from "@/components"

// styled assets
import {
  ContentSection,
  EditorsNoteSection,
  EditorsNoteTitleSection,
  // FloatingMenuSection,
  LogoSection,
  LottieSection,
  Main,
  SignatureContainer,
  SignaturesSection,
} from "./styled"

import { JupiterLogo } from "@/components"
// import { FloatingMenu } from "@/components/floating-menu"
// import { Lottie } from "@/components/lottie-container"
import { Colophon } from "./Colophon"

import { useIntersectionObserver } from "@/utils/hooks"
import camilleSignature from "../../../../public/signatures/camille_white.png"
import dariaSignature from "../../../../public/signatures/daria_white.png"
import EditorNoteImg from "../../../../public/photos/parable.jpg"

import CamilleTitleCard from "../../../../public/photos/Jupiter_Issue4_title-cards-camille_02_03.jpg"
import SaltShed from "../../../../public/photos/salt-shed.jpg"

import DariaTitleCard from "../../../../public/photos/Jupiter_Issue4_title-cards-daria_02_05.jpg"
import ShaperofGod from "../../../../public/photos/AArtist_REDCAT_ShaperOfGod_Install-01.jpg"
import LosAngelesTimes from "../../../../public/photos/ASoG_Install18.jpg"

import RikkiTitleCard from "../../../../public/photos/Jupiter_Issue4_title-cards-rikki_02_07.jpg"

import RhyaTitleCard from "../../../../public/photos/Jupiter_Issue4_title-cards-rhya_02_04.jpg"
import Performance from "../../../../public/photos/001_Performance_VANESSAGERMAN.jpg"
import LibraryIandII from "../../../../public/photos/02_Gray-Center_vanessa-german.jpg"
import LibraryII from "../../../../public/photos/03_Gray-Center_vanessa-german.jpg"
import HeartOpenerI from "../../../../public/photos/04_Gray-Center_vanessa-german.jpg"
import HeartOpenerII from "../../../../public/photos/05_vg_GC_LC_Prop-17.jpg"
import Universe from "../../../../public/photos/06_Gray-Center_vanessa-german.jpg"
import LoveSong from "../../../../public/photos/07_Gray-Center_vanessa-german.jpg"
import AltarofLove from "../../../../public/photos/08_Gray-Center_vanessa-german.jpg"
import AltarofGrief from "../../../../public/photos/09_Gray-Center_vanessa-german.jpg"

import AmadineTitleCard from "../../../../public/photos/Jupiter_Issue4_title-cards-amadine_02_02.jpg"
import Indeterminacy from "../../../../public/photos/indeterminacy.png"
import BirdnLava from "../../../../public/photos/bird-and-lava.png"
import Blackwater from "../../../../public/photos/black-water.png"
import Hypershape from "../../../../public/photos/hypershape.png"

import ImaniTitleCard from "../../../../public/photos/Jupiter_Issue4_title-cards-imani_02_01.jpg"

import AngeliqueTitleCard from "../../../../public/photos/Jupiter_Issue4_title-cards-angelique_02_06.jpg"
import LifeoftheParty from "../../../../public/photos/Life-of-the-Party.png"
import BillieHoliday from "../../../../public/photos/BillieHoliday.png"
import JamesBaldwin from "../../../../public/photos/JamesBaldwin.jpg"

import "./styles.css"

// todo: add back grain to home page so that it doesnt overlap the lottie file -> might invovle a refactor with how lottie is loaded in
export default function Page() {
  useIntersectionObserver()

  return (
    <Base homePage>
      <Main color="black">
        <LottieSection>
          <div className="video-container">
            <video width="560" height="315" src="../videos/Jupiter_video_issue4_1920x1080_01.mp4" muted playsInline loop={true} data-autoplay="" autoPlay={true} ></video>
          </div>
        </LottieSection>

        <LogoSection>
          <JupiterLogo color="white" width={143} height={53} />
        </LogoSection>

        <EditorsNoteTitleSection>
          <pre id="editorsNote"/>
          <div>Editor&apos;s</div>
          <div>Note</div>
        </EditorsNoteTitleSection>
        <EditorsNoteSection>
          <EditorsNoteCopy />
        </EditorsNoteSection>

        <SignaturesSection>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SignatureContainer
              src={camilleSignature}
              alt="Signature of Camille"
            />
            Camille Bacon
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SignatureContainer src={dariaSignature} alt="Signature of Daria" />
            Daria Simone Harper
          </div>
        </SignaturesSection>

        <ContentSection>

          <pre id="colophon" />
          {/* divider */}
          <div
            style={{
              marginTop: "112px",
              height: "1px",
              width: "100%",
              backgroundColor: "#FFFFFFBF",
            }}
          />
          <Colophon />
        </ContentSection>
      </Main>
    </Base>
  )
}

function EditorsNoteCopy() {
  return (
    <div
      style={{
        fontSize: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        margin: "16px",
      }}
    >
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={EditorNoteImg} alt="Parable of Sower Cover" className="parable"/>
    </div>
    <p>
    <span className="centered small"> Octavia E. Butler&#39;s Parable of the Sower, published by Warner Books in 1995. Cover art by John Jude Palencar. </span>
    <br/><br/>
    &#8220;There is no end <br/>
    To what a living world <br/>
    Will demand of you.&#8221; <br/>
    —Lauren Oya Olamina in Octavia E. Butler&#39;s <i> Parable of the Sower </i>
    <br/><br/>
    With her eyes firmly shut against the environment that surrounds her and insistently open to the world she is bending into being, Lauren Oya Olamina, the protagonist of Octavia E. Butler&#39;s <i> Parable of the Sower </i> &#40;1993&#41; and <i> Parable of the Talents </i> &#40;1998&#41; is &#8220;Shaping God.&#8221; 
    <br/><br/>
    The vision is entombed at the apex of her inhale, lungs full of enlivened potential. Stood on the edge of a shifting horizon, her hair is meticulously plaited into a crown, an inverted cradle for her crackling mind. From around her head emanates a nebula of sky-blue haze. She is encircled by the cosmos: a crescent moon, a dappling of stars, fluorescent forms emanating from the celestial environment that envelops her. Her serene visage is illuminated by a source lying beyond the frame. Positioned at her heart&#39;s center is a glowing emblem of the earth. Coalescing in her soul&#39;s eye and framed between her two hands is something we cannot see, but can sense nonetheless through the mood of the image. Otherworldly and contemplative, this is a portrait of forethought. This is a portrait of conjure. This is a portrait of Lauren Olamina.
    <br/><br/>
    Lauren Olamina is listening. Lauren Olamina is feeling. Lauren Olamina is plotting. 
    <br/><br/>
    Like Lauren, Butler was listening, feeling, and plotting. Beyond that, she was <i> prophesying. </i> While readily associated with Greek mythology and Christian traditions, propheticism can too be attributed to the uncanny precision of Butler&#39;s body of work, namely the <i> Parables. </i> Taking notes from her, we have organized our fourth issue around the theme <i> of Prophecy. </i>
    <br/><br/>
    Though she is most often described as &#8220;prescient,&#8221; i.e. &#8220;having or showing knowledge of events before they take place,&#8221; &#40;<i>Parable of the Sower </i> begins in 2024 and coalesces around twinned relational and ecological collapse / Andrew Steele Jarret, the fascist president in <i> Parable of the Talents </i> <i> &#40;Sower&#39;s </i> sequel, published in 1998&#41;, runs his campaign on the back of the slogan &#8220;make America great again&#8221;&#41;, Butler&#39;s fortitude indeed stretches past prescience and lands firmly in the realm of &#8220;prophetic.&#8221; She is not only a fortune teller for the fate of humanity &#40;as in, <i> this is what&#39;s going to happen </i>&#41;, but also a writer invested in mapping and articulating the adaptations we must undergo in order to reach and walk in the future that is foretold in the first place &#40;as in, <i> this is what you can do about the inevitable </i>&#41;. Beyond imagining a world teetering on the edge of social, political, and environmental apocalypse as well as the emotional environments of those living through such transformations, Butler, through the <i> Parables, </i> provides an instruction manual of sorts for our continued survival. The narratives therein, as in the case of prophecies, not only prognosticate but sculpt reality—they are both the water running the rock smooth and the shards of sediment the flow takes with it.
    <br/><br/>
    Likewise, the writers gathered here &#40;Imani Perry, Amandine Nana, Rhya Marlene Moffitt, Angelique Rosales Salgado, Rikki Byrd, as well as Daria and I&#41;, and the artists we weave worlds of language around &#40;Lorna Simpson, Torkwase Dyson, vanessa german, Harmony Holiday, Lauren Halsey, Tiff Massey, American Artist, and Kelela&#41; inflect our horizon of contemporary cultural production with incandescent lightning rods that electrify our impulses toward cultivating the insurgent imaginations we need to survive amidst an ongoing condition wherein &#8220;there is no end to what a living world will demand of you.&#8221; Each of the writers holding hands across this table of contents and those they&#39;ve chosen to build relation with through the page continue this legacy of grappling earnestly with what our living requires. We hope that the <i> prophesying </i> encountered in this issue can focus the direction of and guide that adaptation as well.   
    <br/><br/>
    Further, we adorn Butler herself, not just her writings, with the adjective of &#8220;prophetic.&#8221; As is the case in her works of fiction, Butler&#39;s interviews serve as anchoring warnings through which we may prepare ourselves to meet the world we have inherited with the sharp criticality and incisiveness we need to reshape it too. In <a href="https://charlierose.com/videos/28978" target="_blank" className="styled"> a conversation with Charlie Rose </a> conducted three weeks before her 53rd birthday, Butler said: &#8220;I&#39;ve been complaining about the number of would-be leaders who seem to be willing to sacrifice half their country if they can just rule over the rest. I mean, we seem to have had, since the end of the Cold War, too many people like that.&#8221; We are struck by how, though uttered in 2000, this statement could have emerged in response to the ongoing genocide in Gaza and the IOF&#39;s expansion into Lebanon and Iran, as well as the extractionist reign of terror &#40;perpetuated foremost by the United States&#41; that continues to wreak havoc both domestically and globally. 
    <br/><br/>
    In response to Butler&#39;s complaint, we maintain that experimental arts writing and cultural criticism can serve as one wrench in the operations of those &#8220;would-be leaders&#8221; who abide by the logics that feed the mouth of fascism. Here, we corroborate Mandy Harris Williams&#39;s essay &#8220; <a href="http://hman.love/journal/critique-as-care" target="_blank" className="styled"> Critique as Care </a>,&#8221; in which she states: &#8220;Critique holds fascism as its enemy. … With social and political criticism out of the way, fascism is left to flourish.&#8221; We hope you will engage with this issue basked in a solicitude for the worlds attuned to regard, civic responsibility, and mutual dependence from which Harris Williams&#39;s and Butler&#39;s statements, and those found in each of these contributions, emerge. 
    </p>
    <br/><br/><br/><br/><br/><br/>

    {/* <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={CamilleTitleCard} alt="Camille Title Card" className="titlecard" />
    </div>
    <br/>
    <p className="Camille-Bacon-04">
    <i> &#8220;It says that, as a talking bird, the raven… <br/>
    represents prophecy and insight.&#8221; </i> <a href="https://www.vulture.com/2023/02/kelela-raven.html" target="_blank" className="styled"> —Kelela </a>
    <br/><br/>
    <span className="justified"> She opens with her song. &#8220;She&#8221; as in Kelela, &#8220;her&#8221; as in the woman I was seeing. </span>
    <br/>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={SaltShed} alt="Kelela performing at the Salt Shed by Joel Meinholz" className="textinnerimg hor camille" />
    </div>
    <br/>
    That night, September prepared to take her curtain call and a crescent moon dangled delicately above Chicago&#39;s Salt Shed as Kelela crooned the final lines of &#8220;<a href="https://www.youtube.com/watch?v=FQ-zGi6zyPw" target="_blank" className="styled"> Cherry Coffee </a>&#8221; and slipped, without warning, into &#8220;<a href="https://www.youtube.com/watch?v=XQEGP3CaWEs" target="_blank" className="styled">Jupiter. </a>&#8221; We&#39;d talked about these songs before, the ones we regard as respective sonic portraits of ourselves, the ones that unburden our breath. 
    <br/><br/>   
    Several months earlier the moon yawned itself toward totality, giving all of us a beacon to howl at. I gathered with two friends to attend Kelela&#39;s party at Good Room, Brooklyn <sup><a href="#fn1" id="ref1">1</a></sup>, where her recently released <a href="https://www.youtube.com/watch?v=5l3sE4Y5-vw&list=PLjpdY-hPtpeNy8wqkOwZXo4jMsz6u2yFR" target="_blank" className="styled"> RAVE:N, The Remixes </a> was reinterpreted by DJs including BEARCAT, DJ SWISHA, and Niara Sterling &#40;among others&#41; and coalesced into a centripetal force of thrashing sound to spin, amplify, and release our storms of sentiment into. Awash in a pandemonious symphony of synth and strobe, a new prism through which to see in the dark emerged from the throbbing crowd like another beacon. Her right cheek was punctuated with a beauty mark whose form is akin to an inverted exclamation point, or a trembling star. Even as she flickered in and out of view, fusing with the oceanic magma of the crowd, the fact of her existence was the centrifuge around which my attention singularly focused. Her gaze, decidedly directed at the DJ booth, rhymed with the moon spilling itself open above us. Her eyes were like moons too—not waning, but waxing, and pulling all the water in my body toward her. Like Kelela&#39;s catalog, how she struck me was fierce and immediate—blaring and harmonizing with the dense and decadent belly of the club into which she disappeared shortly after. 
    <br/><br/>
    Kelela&#39;s albums, EP, and mixtapes are a blazing totem around which so many of us gather to feel the gravity, consequence, and sanctity of our own selves. If it is indeed true—and I think it is—that, as Audre Lorde <a href="https://makinglearning.wordpress.com/wp-content/uploads/2014/01/poetry-is-not-a-luxury-audre-lorde.pdf" target="_blank" className="styled"> writes </a>, &#8220;the quality of light by which we scrutinize our lives has direct bearing upon the product which we live, and upon the changes which we hope to bring about through those lives,&#8221; then Kelela&#39;s discography is one that has, since 2017, vastly sharpened and made more exacting the glimmering beams through which I shape and reshape &#8220;the product which [I] live.&#8221; Her sonic worlds extend permission to demand more for myself from my relationships, namely my romantic commitments. 
    <br/><br/>
    <a href="https://www.youtube.com/watch?v=l227G1KSWks&list=OLAK5uy_n0YCnLhLgsZdJLXjvL7ZZUkKR_MUu7YrU" target="_blank" className="styled"> <i> Take Me Apart &#40;2017&#41;,</i></a> a bildungsroman of an album, pervaded my second coming of age: the period in which I was excising and clawing my way out of malignant intimacies and beginning to understand which faces of the divine were mine to mirror. <a href="https://kelela.warp.net/format/229637-hallucinogen" target="_blank" className="styled"> <i> Hallucinogen &#40;2015&#41;</i></a> and <a href="https://www.youtube.com/watch?v=9oX4v5WyM5A&list=OLAK5uy_l7t3MyMHb1xAtvJg6KZw675meEPMNNysg" target="_blank" className="styled"> <i>CUT 4 ME &#40;2013&#41;,</i></a> her first two releases &#40;a mixtape and EP respectively&#41;, are the places I go when I need to remember how sacred my unruliness is. <a href="https://kelela.warp.net/format/1177020-raven" target="_blank" className="styled"> <i>Raven &#40;2023&#41;,</i></a> her second studio production wherein, as Kelela shared in an <a href="https://www.vulture.com/2023/02/kelela-raven.html" target="_blank" className="styled"> interview, </a> &#8220;a lot of what [she&#39;s] dealing with is the emotional stuntedness of men,&#8221; washed me back up onto my own shores in the aftermath of relationships which, even in their magnificence, flattened me. The chorus of her offerings are trusted companions as I continue to learn how to love responsibly, as I stand on the ledge of becoming. 
    <br/><br/>
    On that brimming September evening in Chicago, Kelela emerged from under an oneiric canopy of orange light and took her mark on a stage populated only by her body and a grand piano. Draped in a dress hued somewhere between freshly drawn blood and a voluptuous red wine, she stood <br/>
    as if on a baptismal font. 
    <br/><br/>
    Our siren offered us a sonorous serenade, the flesh of each song stripped back to expose its ivory skeleton. Her voice, laced with the piano&#39;s adagios, conjured a cathedral of feeling in the air above our heads, one expansive enough for the full environment of our emotions to dwell in. The music&#39;s potent bareness, its reduction to the most essential sum of parts, was mirrored by the mode of illumination that flooded the sparse stage. Right before her performance began, an architectural matrix of metallic bars &#40;a structure that&#39;s usually left suspended up high where it remains largely invisible to the audience&#41; with a row of spotlights clinging to its length crawled languidly toward the ground. Kelela&#39;s acoustic ballads filled the air like intoxicants, coaxing a swell of embodied aqueous flow. Friends and lovers held close to one another and swayed beneath her, <br/>
    as if a congregation.  
    <br/><br/>
    Yes, those of us who return to Kelela&#39;s gospel as many do a pew are indeed our own congregation and it is to church &#40;thought of most expansively here&#41; we go to seek guidance in the face of the muddied clarity and gnarled magnificence that accompanies any rupture.
    <br/><br/>
    Some days after Good Room and some weeks before Salt Shed, &#8220;<a href="https://www.youtube.com/watch?v=sGX9GawLLZY&list=OLAK5uy_mm8aLnmMzldAQiM2RuNz0mtm4ZsiwhEBY&index=11" target="_blank" className="styled"> Bruises</a>&#8221; blared through my brain and, amidst my own heartbreak, I decided to try and <i> &#8220;find another way.&#8221; </i> I thought that meant turning the headlights of my heart in a different direction entirely, toward new lovers. Under the mercy of the music I&#39;ve since arrived at a second reading of the lyric, one that gives credence to the possibility of repair, in finding &#8220;another way&#8221; toward a road already trodden. Or, perhaps that path is actually the <i> &#8220;right, right, right, right, just right&#8221; </i> of the reminder that my <i> own </i> love is the endless clearing, the fountain of infinitude, the cosmic loop always making more of itself.
    <br/><br/>
    This insight comes to a head in the reflecting pool that is Kelela&#39;s &#8220;<a href="https://www.youtube.com/watch?v=XQEGP3CaWEs" target="_blank" className="styled">Jupiter.</a>&#8221; The piercingly sincere lullaby indexes two stages of resurgence and calls to mind what Octavia Butler&#39;s protagonist Lauren Oya Olamina said in <i> Parable of the Sower </i> &#40;1993&#41; about how &#8220;In order to rise / From its own ashes / A phoenix / First / Must / Burn&#8221;—a naming of what it takes to resurrect from your own debris 
    <br/> by inhabiting <br/>
    the dense forest of mourning that all endings espouse and willing yourself to hold faith in the fact that your heart will come around the bend, that you will land in a glade more verdant and resplendent than you ever could have imagined, that a love that meets your shore with ease is an inevitability if you choose to believe it so &#40;<i>&#8220;find a light in a cold color&#8221;</i>&#41; and, <br/>
    by waking <br/>
    up everyday willing to inhabit the aching kiln of self-revelation, to look at the entire expanse of yourself unflinchingly: the rugged edges, all the parts the river has yet to run smooth, all the metal that refuses to be mollified &#40;<i>&#8220;I think I know me now&#8221;</i>&#41;. <br/>
    Both of these phases require you to be brave enough to make an ally of the metaphysical mystery, to accept the ambivalence of an unsteady heart, to refuse to force your own hand, to inhabit the moments that precede a shedding of skin as their own quiet triumph. They demand a stratospheric degree of emotional, spiritual, mental, and somatic rigor, all forged and intensified in a crucible of adoration from all those that hold up a magnifying glass to your interiority. 
    <br/><br/>
    For so many of us, Kelela&#39;s music is a hand that keeps the faucet of our bravery and faith flowing. From there, it allows love in all forms to remain imaginable and inhabitable even amidst echo chambers of disappointment and the turmoil of endings and their associated transmogrifications. Her lyrics conduct us closer—Butch Morris style<sup><a href="#fn2" id="ref2">2</a></sup>—to the thrilling center of the risk inherent to all intimacy, and arm us with the improvisatory faculties we need to move together as the tectonic plates perpetually shift beneath and between us. In the crux of her willingness to acknowledge that all love &#40;like all improvisation&#41; requires us to practice faith <i> for real, </i> to put it all on the line with no assurances other than ourselves, she extends that valor, through the music, to those who listen. She slices away all the artifice just enough to give us permission to turn toward crevices of feeling we&#39;ve previously denied for fear of being swallowed. Whether she&#39;s expressing existential longing, renewal, anger, lamentation, delight, or rapture, her music wields blades that cut right into the inciting incidents our feelings emerge from, exposing their scintillating guts and in so doing, her music holds open a space in which to practice self-confrontation, not unlike what unfolds within the sanctum of a confession booth.
    <br/><br/>
    Certainly, the theological tonalities of Kelela&#39;s discography hold a pedagogical presence. She &#8220;<a href="https://open.spotify.com/episode/19jCr8yLdr9KJXSjXB93nT?si=6debd30d48604be0" target="_blank" className="styled"> takes love as seriously as scholarly work </a>&#8221; and her investment in studying the anatomy of her intimate life feeds directly into the fortitude of her eminent sound. Swathed in the sonic fog that emulates enraptured church organs throughout &#8220;<a href="https://www.youtube.com/watch?v=UEHpX1RQt7A" target="_blank" className="styled"> Holier </a>,&#8221; she reminds us that the holiest thing we can do is wear our hearts on our sleeves, refuse to hide the wound, and allow ourselves to be cradled in and by community: &#8220;thought I was good but I&#39;m not / and though it troubles my heart / don&#39;t want to cover the scar / so I go where they hold me down.&#8221; Her commitment to unwavering self-witnessing &#40;&#8220;that&#39;s what you&#39;re looking at… you are looking at me looking in the mirror,&#8221; she <a href="https://www.vulture.com/2023/02/kelela-raven.html" target="_blank" className="styled"> declares </a>&#41; beckons us to be earnest students of our own relational lives too, even when it hurts. In its &#8220;<a href="https://open.spotify.com/episode/19jCr8yLdr9KJXSjXB93nT?si=6debd30d48604be0" target="_blank" className="styled"> emotional integrity </a>,&#8221; her music is a teacher to me and, thus, takes a place beside the Black feminist writers and theorists that trace a vocabulary for the stakes of our relational dependencies. She stands tall next to the likes of Audre Lorde and bell hooks, both of whom advocate for fervent openness to feeling as pathways to freedom by way of their oft-cited &#8220;<a href="https://uk.sagepub.com/sites/default/files/upm-binaries/11881_Chapter_5.pdf" target="_blank" className="styled"> Uses of the Erotic </a>&#8221; &#40;1978&#41; and <a href="https://wtf.tw/ref/hooks.pdf" target="_blank" className="styled"> <i> All About Love </i> </a> &#40;1999&#41; as well as <a href="https://www.boaeditions.org/products/the-collected-poems-of-lucille-clifton?srsltid=AfmBOoo-CWMF6RWhAXlq8gU5ZtWybAQLMZTnfkJi0qvpm39S4llRQR2Q" target="_blank" className="styled"> Lucille Clifton </a>, <a href="https://rep.club/products/pursuit-revolutionary-love?srsltid=AfmBOooQLdFJwcASF6I_2R54YNy-VN_6F_5CFUfQuVQOyekAc_eNN1VW" target="_blank" className="styled"> Joy James </a>, <a href="https://deptof.love/Letter_2" target="_blank" className="styled"> Rhea Dillon </a> and so many others who preach the doctrine of vulnerability&#39;s pantheon of potentiality.
    <br/><br/>
    Kelela helps us conjure the tenacity to consider that we must remain available to all the ways love transforms us, even if some of it is brutal, even as some of it is ecstatic. When I put my headphones in and say yes to the seductively honest embrace of her offerings, I can let myself unravel, unspool, unfurl, melt, dissolve, and disintegrate. I can marshall the ability to refuse to abide by the impulse to protect myself from the threat of disappointment by repudiating the full range of my longings. In the company of her music, I may soak in the prodigious pool of my voraciousness and thus the fullness of my aliveness. 
    <br/><br/>
    Even as I position Kelela&#39;s music as a site of divinity and world-bending wisdom, it is crucial to name, also, the peril of the pedestal, the indignity of deification. As we watch those we once considered idols fall from grace, we are called to reconsider what we can and wish to expect from those we ostensibly look up to. That being said, Kelela has thus far defined herself as an artist who, along with the aforementioned emotional integrity within the sinews of her music and the lived life it teems out from, exists too along an unmistakable axis of artistic integrity. I understand such a quality as the development of one&#39;s own ethical positions and a persistent willingness to re-ascertain and shift them—both in word and in action—as new information is introduced into the equation and demands an alternative course of action, which is its own theistic and pedagogical tenet. 
    <br/><br/>
    She modeled this when she took a near <a href="https://www.nytimes.com/2023/02/02/arts/music/kelela-raven.html" target="_blank" className="styled"> six-year hiatus </a>,<sup><a href="#fn3" id="ref3">3</a></sup> which involved reevaluating her political alignment with her collaborators and drafting a multimedia syllabus of texts which she now shares with those she collaborates and/or shares close proximity with. Imagine it as a litmus test of their capacity to practice the behaviors needed to materialize a world that orients around and attends to Black women&#39;s safety, which is the same world her music imagines, emerges from, and wills into being. The syllabus is, like her sonic manifestos, an additional example of her concerted action of pulling closer to a reality that refuses to clip the wingspan of our wanting and, instead, insists upon the inhabitation of a feral life of feeling.
    <br/><br/>
    Another critical dimension of her artistic integrity lies in the precision and specificity with which she names her audience. Her open articulation of Black women and queer people as her addressees recalls the artist Simone Leigh&#39;s <a href="https://www.instagram.com/p/BxiJI58gl4t/?utm_source=ig_embed&utm_campaign=loading" target="_blank" className="styled"> articulation of Black women as her &#8220;primary audience&#8221; </a> and Toni Morrison&#39;s precise evocation that her &#8220;<a href="https://portsmouthinstitute.org/wp-content/uploads/2020/07/Morrison_Memory-Creation.pdf" target="_blank" className="styled">métier is Black.</a>&#8221; Kelela&#39;s integrity—both emotional and artistic—perhaps they&#39;re the same thing—makes her music a galvanizing place in which to land over, and over, and over again as it generously challenges me, as a listener, to model the same in my love and writing practices &#40;<i>perhaps they&#39;re the same thing </i>&#41;.  
    <br/><br/>
    I return now to that floating beam at the Salt Shed, to how the contraption bathing Kelela in splendor reveals the infrastructure of its own illumination. As the synths swarm our senses and she invites us to look not only at the light, but where it spills out from, tonight&#39;s lesson becomes searingly clear: I must practice the bravery necessary to be a full participant in the thorny and thrilling entanglement that intimacy demands, to study my own center with a piercing degree of honesty, and to live in a more graciously complete relation with all four chambers of my own heart&#39;s horizons. If I hide the exquisitely fragile<sup><a href="#fn4" id="ref4">4</a></sup> infrastructure of my own illumination, I evade the risk inherent to what it means to embody integrity as a writer and as a lover alike.
    <br/><br/>
    The crescendo is yet to be realized. And so continues my edifying arch toward the unsteady yet assured sound of a thunder clap at the close of &#8220;<a href="https://www.youtube.com/watch?v=XQEGP3CaWEs" target="_blank" className="styled">Jupiter</a>&#8221; and the swelling precipice of Kelela&#39;s voice when she sings once more: &#8220;<i>I think I know me now.</i>&#8221; 
    </p> 
    <span className="footnotes camille">
    <p>
    <ol>
        <li id="fn1"> These parties, wherein Kelela invited local DJs to spin and reinterpret her new tracks took place in New York, D.C., and Los Angeles throughout Summer 2024.  <a href="#ref1">↩</a></li> <br/>
        <li id="fn2"> Butch Morris is credited for devising a practice of &#8220;conduction,&#8221; which allowed him to engineer a structure within which his band and those who shared the stage with him could improvise. The method involves a family of somatic semiotics, a series of hand gestures and expressions that guide the musicians in their collective freefall. <a href="#ref2">↩</a></li> <br/>
        <li id="fn3"> Such a move also models a refusal of extractive frameworks that equate one&#39;s visibility with their success and Kelela&#39;s trust that the enduring sustainability of her practice requires abiding by her own timescale, which I interpret as its own exuberant embodiment of emotional and artistic integrity alike. <a href="#ref3">↩</a></li> <br/>
        <li id="fn4"> I borrow this turn of phrase from a Jo Malone fragrance. <a href="#ref4">↩</a></li>
    </ol>
    </p>
    </span>
    <br/><br/><br/><br/><br/><br/> */}

    {/* <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={DariaTitleCard} alt="Daria Title Card" className="titlecard" />
    </div>
    <br/>
    <p className="Daria-Harper-04">
    At long last, we have reached the landscape which lies just ahead of rupture. The air itself laden with whispers of possibility, of what exists beyond our here and now. Within this seemingly never-ending expanse, everything seems to be waiting, or begging, to break apart, to come undone. Many of us, enduring turbulent heartache in the face of perpetual destruction, have unearthed new crevices within ourselves to hold <i> grief and love and grief and love at the same time.<sup><a href="#fn1" id="ref1">1</a></sup> </i>
    <br/><br/>
    As we grow terrifyingly familiar with devastation, and lean into our comforts with more fervor, may we never forget the truth which exists on the other side of a blaze. A resolution made possible only by way of rebirth. These new horizons that we&#39;re reaching toward <i> demand </i> rupture, a fissure in the face of a ravaging system.
    <br/><br/>
    We are currently bearing witness not only to violence against our people by way of senseless genocides, but also to the forced deterioration of the very land which we inhabit. Our ways of learning, seeing, loving, knowing, and being are all seemingly under threat. It is in these moments especially—when refusing to look away from the world pulls me away from my center, when I feel distant from and unfamiliar with the depth of knowing which rests inside me—that I call on my guides. Forebearers in this realm and the next, whose wisdom both anchors me and allows me to fly. 
    <br/><br/>
    For about a decade now, one such resting and galvanizing place where I am guaranteed to be ushered back to myself, is within the writings of foremother and science fiction writer, Octavia E. Butler. Since my introduction to Butler as a teenager, every engagement with her words has become a convening with the divine. I was around seventeen when I first read Butler&#39;s 1993 science fiction novel, <i> Parable of the Sower. </i> I held deep admiration for the characters in this text, who managed to live in a world that was painfully parallel to the one I inherited, particularly the way they moved through the storms in their lives with a sense of trust. Something between faith in God, and faith in oneself. I was emboldened, granted permission to harness all of the knowledge which I have access to. That which exists outside lines of sight, and yet allows me to shape the world in front me.
    <br/><br/>
    In the summer of 2020, several months into the COVID-19 pandemic, I began hosting a virtual book club which was birthed, in part, by a decision I made to revisit <i> Parable of the Sower. </i> I was reaching for many things: closeness with my community, some semblance of a daily rhythm, and also texts which might offer refuge and invigoration with equal fervor. The story, set in the year 2024, orbits around a teenaged Black girl named Lauren Oya Olamina, resident of a fictitious and dystopic Southern California town called Robledo, who unexpectedly takes on the role of leader after her gated community is viciously attacked and set ablaze. Violently separated from her family, and forced to journey away from the only home she&#39;s ever known, Lauren garners strength and wherewithal by relying on a religion she&#39;s developed called Earthseed, which reminds us, among other parables, that:
    <br/><br/>
    <i> A victim of God may, </i>
    <br/>
    <i> Through forethought and planning, </i>
    <br/>
    <i> Become a shaper of God.<sup><a href="#fn2" id="ref2">2</a></sup> </i>
    <br/><br/>
    My decision to begin our book club by reading <i>Parable of the Sower</i>  was an intentional one. On the one hand, it was many folks&#39; first time encountering this text, and in the midst of a particularly unpredictable year for us all. The characters in <i> Parable </i> witness an authoritarian politician running for president, are forced to deal with the cataclysmic repercussions of climate change and environmental racism, and experience the severe weight of wealth gaps; all of which continue to resemble our reality. Yet, reading the book in that moment, especially as a collective, somehow felt like a salve. Within her texts, Butler summons worlds anew. Attuned to the patterns of history, she speaks of the future with a sense of clarity. Thus, making way for us to discover our own capacity to do the same. Butler&#39;s pages are full of characters grappling with their own self-possession and attuning themselves to their  purposes, both as individuals and as a community. Ignited by Butler&#39;s unwavering prescience, her writing offered a poignant lens through which we might cast forth our own visions for the horizons we wish to stretch into. It became evident that to take heed of Butler&#39;s message also meant to answer her call. 
    <br/><br/>
    Some three years later, I was conducting research when I stumbled upon an online archive of <i> Shaper of God </i> &#40;2022&#41;, an art installation by an individual named American Artist. It had taken place in Los Angeles, just a twenty-minute drive from Butler&#39;s hometown. This work would become an ongoing project, a devotion to the life and legacy of Butler. 
    <br/><br/>
    I soon realized that the person behind this body of work was the same American Artist who I first encountered from a close distance during my time as an undergraduate student at The New School university in New York. The conceptual artist and educator had received their MFA from The New School&#39;s Parsons School of Design in 2015, the same year that I matriculated. Only a few years into shaping the pillars of their professional artistic practice, they were instructing a course at the institution&#39;s Eugene Lang College of Liberal Arts, entitled <i> Identity & The Body / Anti-Body, Designing Digital Knowledges: Production, Action, Labor </i> alongside digital designer Marcea Decker. 
    <br/><br/>
    Within <i> Shaper of God, </i> remnants of Artist&#39;s early thought experiments surrounding race, digital technology, place, and science take on expansive new forms. Presented at REDCAT in downtown LA, we take a glimpse into an entanglement between Artist and Butler that spans across time and space.
    <br/><br/>
    Set against stark white gallery walls, Artist&#39;s installation displays a less harrowing landscape than Butler illustrates throughout her text, at least initially. Upon a closer read, however, apocalyptic vignettes snap into clear view, reflecting and riffing on various scenes from the dystopian novel. The interior of the gallery is split in two by a towering partition of neatly laid stone, on top of which stands a stretch of gnarled and foreboding barbed wire. Titled <i> Robledo Community Wall &#40;Olamina cul-de-sac&#41; </i> &#40;2022&#41;, this work parallels the prominent walls that &#40;fail to&#41; defend Lauren Olamina&#39;s predominantly Black Robledo community from external threats. 
    <br/><br/>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={ShaperofGod} alt="American Artist, Shaper of God, (Installation view)" className="textinnerimg hor daria" />
    </div>
    <br/>
    <span className="centered"> American Artist, <i> Shaper of God, </i> &#40;Installation view&#41; 2022. REDCAT, Los Angeles, CA. </span>
    <br/><br/>
    Artist draws equally on Butler&#39;s personal life—a selection of Butler&#39;s journal entries and drawings are also featured in the exhibition—as they do from subject matter and themes within the author&#39;s work. A spiked steel gate juts out from <i> Robledo Community Wall, </i> giving way to a view of <i> To Acorn &#40;1984&#41; </i> &#40;2022&#41;, a steel sculpture in the form of a bus stop, not unlike the posts where Butler would have waited on her travels throughout the sprawling city of Los Angeles. Butler never learned to drive, so her bus rides became a sacred time for her to write. At the base of the sculpture lies a grouping of firm steel leaves with their points stretched upwards, not unlike an agave plant that Butler surely encountered across the region. A slight curvature pulls the body of each leaf slightly away from the plant&#39;s core. Layered together, it&#39;s as if the small shrub has been frozen in the midst of a splendorous blossoming, opening up to the heavens while unyielding on earth. As Artist nods to this detail of Butler&#39;s life, they are also making a direct reference to Butler&#39;s text,
    <br/>
    <i> To Acorn. </i>
    <br/>
    renders the utopic geography of Lauren&#39;s post-Robledo community as a tangible destination. for Artist and Butler, 
    <br/>
    for us?
    <br/>
    Throughout <i> Parable, </i> acorns are an ever-present signifier of rebirth and the possibility of new life. In the beginning of the book, Lauren and her family regularly consume acorn bread, something that Lauren&#39;s father learned from reading a book about how Indigenous people made use of the nut. At the end of the novel, when Lauren and her group reach their new home, they decide to name their small community &#39;Acorn,&#8221; and ceremoniously plant a number of oak trees throughout the land after burying their dead. 
    <br/><br/>
    Both Artist and Butler spring from a lineage of Black people concerned with art and science in and around Southern California. Hailing from Altadena—where Butler &#40;b. 1947&#41; lived in the late 80s and 90s—the artist also attended Butler&#39;s alma mater, John Muir High School, next door in Pasadena, Butler&#39;s hometown. Artist has reflected on driving by NASA&#39;s Jet Propulsion Laboratory &#40;JPL&#41; in Pasadena as a teen on their way to school, noting, &#8220;...It was always this strange, almost sci-fi-ish site, because it&#39;s this extremely advanced space institute that&#39;s sitting in this canyon, that&#39;s kind of on its own, and it&#39;s surrounded by these suburbs. It felt like something out of a movie.&#8221;<sup><a href="#fn3" id="ref3">3</a></sup> Butler, too, would have been mapping her own paths of lived experience around this site and the surrounding area.
    <br/>
    <span className="centered"> <i> &#39;is there something in the water?&#8221;</i><sup><a href="#fn4" id="ref4">4</a></sup> </span>
    <br/><br/>
    Environment and landscape, especially the aforementioned Los Angeles suburbs, thus act as vital connective tissue within the body of <i> Shaper of God. </i> These sites which hold a particular resonance for Artist and Butler, along with the fictionalized areas named in <i> Parable, </i> become portals to understanding shared knowledge systems, both empirically and divinely derived.
    <br/><br/>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={LosAngelesTimes} alt="ananarive Due, “What if we were already living in Octavia Butler&#39;s &#39;Parable of the Sower&#39;?”, Los Angeles Times" className="textinnerimg hor daria" />
    </div>
    <br/>
    <span className="centered"> American Artist, <i> Shaper of God, </i> &#40;Installation view&#41; 2022. REDCAT, Los Angeles, CA. 
    </span>
    <br/><br/>
    Over the years of research which informed <i> Shaper of God, </i> Artist developed intentional connections with the individuals who have long carried Butler&#39;s legacy forward. The artist conducted part of their research for the exhibition during their time as a grantee at the Los Angeles County Museum of Art &#40;LACMA&#41; Art + Technology Lab, who organized the exhibition in collaboration with JPL. They were in sustained dialogue with Ayana Jamieson, the co-founder of the Octavia E. Butler Legacy Network. Additional research for the show was carried out at the Octavia E. Butler archive at The Huntington in Southern California.
    <br/><br/>
    I finally met Artist earlier this year during my visit to their studio in Brooklyn on an especially warm day in early August. We sat amidst some of their sculptural work, materials, and documents. Calm and measured, the artist spoke with me about what was presently on their mind in terms of their work and the world. 
    <br/><br/>
    &#8220;I find that there&#39;s a surprising limit in people&#39;s imaginations of what my practice is, or what it can be,&#8221; Artist told me during our conversation that day. &#39;This is the longest I&#39;ve spent exploring one idea, or set of ideas. It&#39;s been both short and long.&#8221;
    <br/><br/>
    It is this careful mining of the living, breathing archive, which made way for the tentacular, almost amorphous, expressions of <i> Shaper of God. </i> Artist&#39;s ability to oscillate between medium with clarity and precision can teach us a lot about the value of remaining malleable when enacting that which can only be described as memory work, a sort of cultural caretaking. Charting new ways to transmute their years of research into knowledge production, Artist had initially designed a <i> Shaper of God </i> web component, or &#39;research machine&#8221; as they call it, which was commissioned by KADIST via its <i> Ways of Reading </i> initiative and eventually led to the REDCAT installation. Entering the website, I was first struck by the sonic envelopment as a singular, ringing frequency poured out from my computer, before eventually settling into a quiet murmur. Simultaneously, an animation of a map of the United States appears, layered with a series of annotations pointing toward the western portion of the map, before eventually giving way to a grid of cells that resemble file cabinets. Designed to &#8220;form connections between the life and work of Octavia E. Butler[,] the presence of rocket science and sci-fi in Los Angeles, and a shared migration pattern of African-diasporic families from the South to the West [the Second Great Migration],&#8221;<sup><a href="#fn5" id="ref5">5</a></sup> this web work &#40;which is still undergoing development&#41; will be populated over time by information culled from Artist&#39;s research, informing future iterations of the project.
    <br/><br/>
    Since the inception of <i> Shaper of God, </i> new tendrils of the work continue to emerge. In 2023, Artist employed AI to generate an image showing the architectural form of a chicken coop that belonged to Butler&#39;s grandmother before it burned down, which the author talked about in her personal writings. The work, <a href="https://www.latimes.com/lifestyle/image/story/2023-11-20/american-artist-octavia-butler" target="_blank" className="styled"> <i> Study for Estella Butler&#39;s Apple Valley Autonomy </i> &#40;2023&#41;, </a> stemmed from Artist&#39;s meditation around the notion of making your way in a new place. Apple Valley refers to the desert town in California where Butler&#39;s grandmother procured some land after migrating from the South amidst racial terror in the 1930s. Artist, whose family also migrated to Southern California from the South and had to cultivate new ways of living, was able to trace additional overlap between Butler&#39;s personal life and their own lineage. Earlier this month, from November 1st through 4th, Artist presented <i> The Monophobic Response </i> &#40;2024&#41;, a two-channel film and sculptural installation at LACMA which carefully alters the 1936 static rocket engine test that launched the United States&#39;s venture into space travel. The film saw Artist theirself carry out an actual rocket engine test fire in the Mojave Desert in the summer of 2024 and film this process.
    <br/><br/>
    Artist refers to their work as thought experiments; I like to think of them as provocations, and in some cases prophecies. Over the last decade, Artist&#39;s works have been born out of a set of questions aimed at subverting dominant narratives around race, technology, visibility, knowledge production, and consumption. Early works involved online performances, in which Artist thwarted algorithmic functions by posting coded information on social media and web platforms, often making use of different forms of redaction. In 2023, Artist mounted Security Theater, a site-specific installation consisting of a spherical black form hanging directly in the center of the Guggenheim Museum&#39;s famed rotunda. A thin silver ring wrapped around the object&#39;s diameter, its glossy surface reflecting the environment around it, while simultaneously concealing CCTV cameras in its core. Coinciding with Going Dark: <i> The Contemporary Figure at the Edge of Visibility </i> &#40;2024&#41;, the installation extended into a room showing live surveillance of the inside of the museum. Entry into this section required visitors to lock their phones away in pouches to limit any documentation. Artist brought us face to face with a sort of collective performance of safety, and further, drew attention to our own participation in this spectacle, whether actively or passively. This work leaves me considering what pieces of ourselves—in the form of information, imagery, and beyond—are being taken from us, and which pieces we are giving away. 
    <br/><br/>
    In 2013, Artist legally changed their name in an effort to muddle the commonly held assumptions around who might take on the title of, or be referred to, as an &#8220;American artist.&#8221; At the time, they were struggling to consider and call themselves an artist, wrestling with the weight of what assuming such a role might mean. By fully embodying an otherwise anonymous phrase, Artist has managed to de-center their own identity within their practice while simultaneously offering subtle assertions around the ways that race and gender impact the role of an &#8220;American artist.&#8221; By way of their practice, Artist reifies the truth that it is the duty of the artist to shepherd and carry forward the work of their forebearers, as much as it is to bring forth their own ideas.
    <br/><br/>
    A foregrounding element of both Artist and Butler&#39;s offerings is their unique ways of speaking truth to power—in the form of crumbling institutions, failed systems of governance, and beyond. In a conversation with Tananarive Due for the <i> Los Angeles Times, </i> the renowned science fiction author and educator asked the artist to reflect on their own ideal community, in the spirit of Earthseed, and share something which they &#8220;see[k] shelter from.&#8221; Artist responded: &#8220;One thing that I think about seeking shelter from, which hasn&#39;t really been possible for me, is from institutional obligation. From having to align myself with institutions that I feel are compromising my values.&#8221;<sup><a href="#fn6" id="ref6">6</a></sup> This admittance rings true for countless artists and cultural workers—myself included—who can feel beholden to institutions that are swift to extract their wisdom, and just as swift to discard any traces of them from the record, an act rooted in the same lack of care which allows for the perpetual violence against &#40;and attempted erasure of&#41; our physical bodies on a global scale. Artist reminds us that engagement with such institutions, nearly always in the name of bountiful resources and support, often demands that the work take on disruptive forms. How might we wrestle with the history of these establishments to chart forth in new territory? As these institutions become obsolete before our eyes, what unfeigned places of shelter might we build in their stead? 
    <br/><br/>
    While Artist&#39;s research-work beside Butler&#39;s footpaths holds a mirror to our reality surrounding the limitations and harms of the evergrowing systems which govern our world, it also offers a subtle undercurrent which I find myself clinging to. It&#39;s not exactly hope, but rather a sense of responsibility on a universal scale. A remembrance that as we collectively trace and chronicle our patterns, and practice forethought and planning, we hold some power to shape what we want this reality, this existence, to be. That we may shape God.
    <br/><br/>
    <i> &#8220;I began writing about power because I had so little.&#8221; </i>
    <br/>
    <i> &#8211;Octavia E. Butler </i>
    </p>
    <span className="footnotes daria">
    <p>
    <ol>
        <li id="fn1"> vanessa german, <i> GRIEF AND LOVE AND GRIEF AND LOVE AT THE SAME TIME, </i> 2024, <a href="https://www.kasmingallery.com/content/feature/3576/43267/" target="_blank" className="styledli"> https://www.kasmingallery.com/content/feature/3576/43267/ </a> <a href="#ref1">↩</a></li> <br/>
        <li id="fn2"> Octavia Butler, <i> Parable of the Sower, </i> 1993 <a href="#ref2">↩</a></li> <br/>
        <li id="fn3"> Tananarive Due, &#8220;What if we were already living in Octavia Butler&#39;s &#39;Parable of the Sower&#39;?&#8221;, <i> Los Angeles Times, </i> 2022, <a href="https://www.latimes.com/lifestyle/image/story/2022-05-18/american-artist-new-exhibition-excavates-the-future-octavia-butler-built-in-her-work" target="_blank" className="styledli"> https://www.latimes.com/lifestyle/image/story/2022-05-18/american-artist-new-exhibition-excavates-the-future-octavia-butler-built-in-her-work </a> <a href="#ref3">↩</a></li> <br/>
        <li id="fn4"> Shaper of God &#40;research machine&#41; by American Artist, 2021&#8208;ongoing, <a href="https://kadist.org/program/shaper-of-god/" target="_blank" className="styledli"> https://kadist.org/program/shaper-of-god/ </a> <a href="#ref4">↩</a></li> <br/>
        <li id="fn5"> Ibid. <a href="#ref5">↩</a></li> <br/>
        <li id="fn6"> Tananarive Due, &#8220;What if we were already living in Octavia Butler&#39;s &#39;Parable of the Sower&#39;?&#8220;, Los Angeles Times, 2022, <a href="https://www.latimes.com/lifestyle/image/story/2022-05-18/american-artist-new-exhibition-excavates-the-future-octavia-butler-built-in-her-work" target="_blank" className="styledli"> https://www.latimes.com/lifestyle/image/story/2022-05-18/american-artist-new-exhibition-excavates-the-future-octavia-butler-built-in-her-work </a> <a href="#ref6">↩</a></li> <br/>
    </ol>
    </p>
    </span>
    <br/><br/><br/><br/><br/><br/> */}

    {/* <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={RikkiTitleCard} alt="Rikki Title Card" className="titlecard" />
    </div>
    <br/>
    <p className="Rikki-Byrd-04">
    <span className="centered"> I. </span>
    <br/><br/>
    I have arrived at the place that it used to be. 
    <br/><br/>
    The remaining material bears no mention of the now removed statue. There are no footnotes telling me what used to be here, why it is now gone, some promise for a future recuperative monument, what TK Smith has considered &#8220;<a href="https://www.artpapers.org/monumental-futures/" target="_blank" className="styled">an often-distasteful American response</a>&#8221; that &#8220;fill[s]&#8221; in &#8220;absences&#8221; without proper redress.<sup><a href="#fn1" id="ref1">1</a></sup>
    <br/><br/>
    The statue of Christopher Columbus was removed from Tower Grove Park in my hometown of St. Louis, Missouri in 2020, amidst an ongoing Black political movement catalyzed by the murders of George Floyd and Breonna Taylor. When I look at this empty plinth, void of narrative, as much as it is void of its monument, I think of loss. Not of the figure no longer here, but of the loss caused by the many figures like him who have been memorialized through the erection of public dedications of such size. The pillaging, destruction, and death that had to happen for these figures to have a chance to cast their shadows against hot gravel; the true scale, the true magnitude, is really the loss. How do we contend with this?
    <br/><br/>
    In an essay titled &#8220;Writing Black Beauty,&#8221; Jennifer C. Nash considers beautiful writing as one possible response. She argues that beautiful writing is a new form in Black feminist thinking and scholarship that not only expands &#8220;our collective conception of where black beauty is found, staged, performed, and articulated,&#8221; but also illustrates the &#8220;expansive political potential of black beauty beyond critiquing the long-standing exclusion of black women from discourses of the beautiful.&#8221;<sup><a href="#fn2" id="ref2">2</a></sup> Attending to an archive of contemporary writing by theorists such as Christina Sharpe and Saidiya Hartman—the former describes beauty &#8220;<a href="https://www.e-flux.com/journal/105/303916/beauty-is-a-method/" target="_blank" className="styled"> as a method </a>,&#8221; and the latter positions beauty as &#8220;<a href="https://wwnorton.com/books/9780393357622" target="_blank" className="styled"> a way of creating possibility in the space of enclosure </a>&#8221;—Nash follows up this line of thinking in her recently published book <a href="https://www.dukeupress.edu/how-we-write-now" target="_blank" className="styled"> <i> How We Write Now: Living with Black Feminist Theory</i></a>, where she insists that we treat loss &#8220;as an aesthetic question.&#8221;<sup><a href="#fn3" id="ref3">3</a></sup> Instead of ascribing it to frivolity, Nash brings to our attention the ways beauty is substantive, malleable, and a critical material useful for not only responding to despair, but also envisioning and gesturing toward other possibilities. 
    <br/><br/>
    In addition to beautiful Black feminist writing, I turn to contemporary artists Lauren Halsey and Tiff Massey to think of what other forms this critical beauty might take. Both artists cast Black beauty in an array of materials at monumental scales, understanding the art history in hair weaves and barrettes as much as they do the work of Donald Judd and ancient Egyptian architecture. They make it clear that Black beauty, itself, is a monument worthy of scale and rigor.
    <br/><br/>
    <span className="centered"> II. </span>
    <br/><br/>
    Two days after the summer equinox in 2023, I arrived on the rooftop of The Metropolitan Museum of Art with a dear friend. We were greeted by two sphinxes made of hand-carved gypsum on wood. Set behind them were two towering pillars with pharoah-like figures atop them and a massive shrine of the same material, all in dedication to South Central Los Angeles. Titled <a href="https://www.metmuseum.org/exhibitions/roof-commission-lauren-halsey" target="_blank" className="styled"><i> the eastside of south central los angeles hieroglyph prototype architecture &#40;I&#41;</i>, </a> Halsey&#39;s sculpture was commissioned by the museum for its Roof Garden. Welcoming museum visitors to walk and linger around and inside of the sculpture, the work was as devotional as it was invitational. 
    <br/><br/>
    On one side of Halsey&#39;s sculpture, a collage of the backs and sides of heads were etched into the panels and adorned with a variety of hairstyles: Bantu knots; Caesar haircuts with designs of an Ankh, the Eye of Horus, and the word &#8220;swag.&#8221; On another side were more figures with hairstyles including a high-top fade with &#8220;Lil Bit&#8221; scrupulously scrawled into it, and on yet another side,  greetings and affirmations in an array of fonts that read &#8220;Waz Up!&#8221;, &#8220;Kenfolks,&#8221; and:
    <br/><br/>
    &#8220;Be Ye Who Ye Is. <br/>
    Because if you ain&#39;t who you <br/>
    Is <br/>
    You ain&#39;t who you think <br/>
    You Is.&#8221;
    <br/><br/>
    The text existed as a sort of poem for the people, which reminded me of the canonical sonnet by Lucille Clifton, &#8220;<a href="https://www.poetryfoundation.org/poems/50974/wont-you-celebrate-with-me" target="_blank" className="styled">won&#39;t you celebrate with me</a>,&#8221; that inspires this essay&#39;s title. In the opening lines of her poem, Clifton queries: &#8220;what did i see to be except myself?&#8221;<sup><a href="#fn4" id="ref4">4</a></sup> Walking around, through, and near Halsey&#39;s sculpture, and reflecting on it again in the here and now, I consider the ways the artist makes Black beauty matter and politic, through which the shaping of &#8220;a kind of life&#8221;—as Clifton describes in her reflection on self-making—can be enacted. 
    <br/><br/>
    One characteristic that I&#39;ve long observed of monuments is the way that they cast penumbrae, how you can find yourself in them depending on where you stand. The towering form of <i> the eastside of south central los angeles hieroglyph prototype architecture &#40;I&#41; </i> consumes you. Yet, it&#39;s significant that Halsey&#39;s monument, erected on the top of The MET and looming over Fifth Avenue, is unable to cast a shadow onto the beaconed street of profuse capital. Instead, she casts shadows in which we are not proclaiming power over another, but ones in which we see each other. 
    <br/><br/>
    Despite the massive scale of the work, I found myself in relation to two B-girls carved into the material who greeted me just below my 5&#180; 1&#8243; stature. Their backs are pressed against each other, wearing oversized bottoms, boots, and their ears adorned with hoop earrings. I looked up and spotted a FUBU logo hovering atop a spaceship and was reminded of the time my mother dressed me in an oversized FUBU jersey and Timberland boots when I was in elementary school. I thought I was the flyest girl that day, the size of the jersey swallowing me, while simultaneously swaddling me in something made for us, by us. Halsey&#39;s sculpture made me feel the same, covered and seen in each other&#39;s likeness.
    <br/><br/>
    In 2020, I followed along on the artist&#39;s Instagram page &#40;<a href="https://www.instagram.com/summaeverythang/?hl=en" target="_blank" className="styled">@summaeverything</a>&#41; as she turned a warehouse next to her studio into a center that sought to provide holistic support for her community during the COVID-19 pandemic. Scores of food filled the warehouse and were distributed readily. Halsey&#39;s orientation toward her practice as a mode of civic duty that exceeds her sculptural offerings is, too, a monumental ode to beauty, an expression that should also be about the action, about seeing the people as beautiful and worthy enough of care.  
    <br/><br/>
    Likewise, across the expanse of her interdisciplinary practice, Tiff Massey draws attention to the accouterments of Black beauty. On the almost-eve of the summer equinox in 2024, I walked the labyrinth-like halls of the Detroit Institute of Arts searching for Massey&#39;s exhibition in the museum&#39;s galleries. <a href="https://dia.org/events/exhibitions/tiff-massey-7-mile-livernois" target="_blank" className="styled"> <i>7 Mile + Livernois</i>, </a> the title Massey chose for the exhibition, is a dedication to a Black business and fashion district in Detroit. 
    <br/><br/>
    Then, I saw them: <br/>
    stainless steel, <br/>
    linked, <br/>
    geometric cubes protruding from a wall. <br/>
    And, I knew not only the reference, <br/>
    but the provocation, as well. 
    <br/><br/>
    I smirked looking up at <i> Whatupdoe &#40;part I&#41;. </i> It reminded of the chain-link necklaces that sat atop the collarbones of the many Black folk cast throughout my childhood. Inside of the exhibition, more geometric cubes, titled <i> Whatupdoe, </i> spilled from a wall onto the floor in one gallery. On the wall of another room was <i> I Remember Way Back When </i> &#40;2023&#41;, for which Massey used red-stained wood to create 11 scaled-up hair barrettes, the kind typically made of plastic that snap together. 
    <br/><br/>
    Across from <i> I Remember Way Back When </i> &#40;2023&#41; was another wall with a sculpture titled  <i> Baby Bling </i> &#40;2023&#41; made of large metal cylinders colored in a candy-apple red that are connected by black woven rope and cinched with brass to create 11 more barrettes &#40;the kind that wrap around little girls&#39; ponytails&#41;. At this work, I recalled a childhood photo taken of me. With a wide toothless smile spread across my face, I pose for the camera with my hands on my make-believe hips modeling a hairstyle done by my mother: two ponytails made up of several synthetic braids, and each wrapped in large, white hair barrettes. One other work, <i> I&#39;ve Got Bundles and I Got Flewed Out &#40;Green&#41; </i> &#40;2023&#41;, reminded me explicitly of the impact of Black beauty, and what happens when it is disregarded. On a stretch of black canvas made of several panels, Massey created an array of Black hairstyles made of gradients of green Kanekalon hair. Similar to Halsey&#39;s panels of Bantu knots and haircuts, I recognized several of the styles: the fishtail, the cornrows with beads, the French roll. And I recalled an incident which I am still finding language for. 
    <br/><br/>
    What I am willing to share at the moment is this: <i> When I was a child, my hair was once undone by someone who did not see it as beautiful, and this was my first lesson in learning how to make myself small. Before this moment, in my world, to be beautiful was to glimmer and shine, to have a tempo. This came through, for me, in the single gold tooth that gleamed from the mouths of family members, the acrylic nails that typed on computers, high heels across vinyl floors, the holding-sprayed hair that crunched once taken down. Despite this lesson &#40;and many more as I got older&#41; in being diminutive, I maintained a keen awareness that to be beautiful in my world was to be big, to be boisterous, to be boundless, to laugh with a full belly, to write our names on our nails, belts, and T-shirts, as much as we did on paper. And when I could decide for myself, I chose &#40;and continue to choose, everyday&#41; to be big, practicing these gestures in beauty &#40;like carrying forth my maternal lineage&#39;s skills in design through my commitment to the history of Black fashion and letting memories of watching my mother and godmother braid hair filter through my hands as I gather the courage to braid my little sister&#39;s into box braids&#41; as an archive and ritual. </i>
    <br/><br/>
    Halsey and Massey give these gestures form by sculpturally cementing them into canon. Although their works are not public like most monuments, both artists make monuments of their publics, so that someone like me can find myself in it. I look up and they confirm that I am indeed worthy of it all. These are not monuments of replacement, and not necessarily of repair, but they are of recognition, an inflection of the majesty of the Black quotidian.
    <br/><br/>
    <span className="centered"> III. </span>
    <br/><br/>
    In an editor&#39;s letter for the <a href="https://www.artpapers.org/monumental-interventions/" target="_blank" className="styled"> Fall/Winter 2020 issue of <i> Art Papers </i> </a> titled <i>Monumental Interventions</i>, Sarah Higgins writes of the Latin etymology of the word &#8220;monument,&#8221; which means &#8220;something that reminds.&#8221; Returning my attention to the way monuments cast shadows, I am thinking of the ways such shadows remind us of the stretch of a figure&#39;s impact and legacy, the warped history for which they were once a beacon toppled now in an act of defiance. Where might we locate the beauty in such a fall, this alteration of the shadow?  
    <br/><br/>
    Halsey and Massey have found it in the personal, turning to the cities and neighborhoods that shaped them, for which they are now giving shape through their practice. Through their works, I am reminded of the singed hair and laughter at the beauty shop. My mother&#39;s makeshift hair salon in the corner of our two-bedroom apartment was one such monument and my late godmother&#39;s hair braiding salon, another; both were as much sites of labor as they were momentous occasions for the Black girls and women who came on the weekends for their dose of beautification and gossip, the black hair gel that kept edges smoothed wafting through the air, a smell that I can recall, one that reminds. These are the shadows in which I stand proudly. One prophecy, then, is to have no qualms about seeking beauty in a world that otherwise would prefer your destruction, prefer your memories be insignificant and small. 
    <br/><br/>
    So, I have decided on these beautiful reminders as my monuments. We cannot undo history, and the remaking of a new one is filled with success and failure, but what if we begin by recollecting the small things that make us who we are, that, taken together, make us big? 
    <br/><br/>
    For who else are we to be except ourselves?
    </p>
    <span className="footnotes rikki">
    <p>
    <ol>
        <li id="fn1"> TK Smith, “Monumental Futures,” <i>Art Papers,</i> 44, no. 2 &#40;Fall/Winter 2020&#41;: 26-31, 27. <a href="#ref1">↩</a></li> <br/>
        <li id="fn2"> Jennifer Nash, “Writing Black Beauty,” <i> Signs: Journal of Women in Culture and Society </i> 45, 1 &#40;2019&#41;: 101&#8208;122. <a href="#ref2">↩</a></li> <br/>
        <li id="fn3"> Jennifer Nash, How We Write Now: Living with Black Feminist Theory, &#40;Durham: Duke University Press, 2024&#41;, 5. <a href="#ref3">↩</a></li> <br/>
        <li id="fn4"> Lucille Clifton, “won&#39;t you celebrate with me,” in <i> Book of Light, </i> ed. &#40;Copper Canyon Press, 1993&#41; <a href="#ref4">↩</a></li> <br/>
    </ol>
    </p>
    </span>
    <br/><br/><br/><br/><br/><br/> */}

    {/* <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={RhyaTitleCard} alt="Rhya Title Card" className="titlecard" />
    </div>
    <br/>
    <p className="Rhya-Marlene-Moffitt-04">
        <span className="right"> &#8220;Saturday, July 20, 2024
        <br/><br/>
        All that you touch
        <br/><br/>
        You Change.
        <br/><br/><br/><br/>
        All that you Change
        <br/><br/>
        Changes you.&#8221;
        <br/><br/>
        —Lauren Oya Olamina<sup><a href="#fn2" id="ref2">2</a></sup>
        <br/><br/><br/><br/>
        Friday, July 19, 2024
        <br/><br/>
        <i> At the end of this reality there is a bridge—the bridge is inside of you but not inside of your body. </i>
        <br/><br/>
        <i> Take this bridge to get to the next _______, all of your friends are there; death is not real and we </i>
        <br/><br/>
        <i> are all dj&#39;s. </i>
        <br/><br/>
        —vanessa german, exhibition title </span>
        <br/><br/>
        vanessa german&#39;s first solo museum exhibition in Chicago opened at the Reva and David Logan Center for the Arts the day before Lauren Oya Olamina&#39;s opening entry in <i> Earthseed: The Books of the Living </i> in Octavia E. Butler&#39;s <i> Parable of the Sower </i> &#40;1993&#41;. Although german&#39;s exhibition and Butler&#39;s Parable were created years and states apart, I think <i> with </i> german and Butler as prophets on the same timeline. To speak of prophecy—clear seeing, feeling, knowing—is to speak of a future condition, that which has yet to come and is destined to arrive. Yet german and Butler shift the temporality of prophesying—they speak to a here and now that reminds us of the interconnection of all beings, time, and space. 
        <br/><br/>
        german&#39;s installation was born out of a class titled &#8220;Paraäcademia: Art, Spirituality, and Social Healing,&#8221; which she co-taught this year while the inaugural Joyce Foundation Fellow at the University of Chicago&#39;s Richard and Mary L. Gray Center for Arts and Inquiry. The nine-week course, in actuality, extended over six months as the education included the physical time in the classroom and an &#8220;integrati[on]&#8221; period that culminated in the students&#39; experience of the works german created from it.<sup><a href="#fn3" id="ref3">3</a></sup> The course sought to be a medicine that wonders at the possibility of loving students responsibly by creating in a space free of uncaring criticism. 
        <br/><br/>
        She flew into Chicago each week, &#40;meta&#41;physically closing the space between her studio and classroom. The site-specificity of german&#39;s work is a cornerstone of its creation, and this exhibition, reflective of her time in the city, invoked a third prophet from the onset as she situated herself within an alternate, simultaneous timeline to Sun Ra through an opening performance at the <i> Fountain of Time </i> &#40;1920&#41;—an outdoor sculpture by Lorado Taft on the South Side of Chicago where Sun Ra was known for preaching. 
        <br/><br/>
        <i> vanessa approaches the gathering dressed in white—shimmering fabric adorns a hoop skirt, flowers affixed at her crown and around her sleeves—as a character in a story that she has created for today: &#8220;The Queen of Safety Pins.&#8221; As she saunters my way, I stumble to clear the path for her, but she glides over to me and attaches a safety pin to my sweater. In that moment, she presses her hands to my heart-space and I feel an energy—what must surely be a type of magic—flood through me. I cannot deny the experience as I am awash in the tide that lingers even as she makes her way to enrapture the next person. Through her thoughtful touch, she takes something mundane and familiar—the safety pin—and transforms it into a medicine. </i>
        <br/><br/>
        <i> Caught in the flood, I am carried back/across six months earlier to vanessa&#39;s classroom where I was a student. As she pins past and present together, I remember vanessa has taught me to follow &#8220;the current of my consciousness&#8221;<sup><a href="#fn4" id="ref4">4</a></sup> as it flows through the gap between the two. She creates an opening through which I can watch the scene at Fountain of Time as it merges with my memory of the work we did in class: sitting around a table with vanessa as she channels a poem with us, each of us offering a word, phrase, or color to be woven into the assemblage of sound that becomes a meditation. I am reminded as I watch vanessa pressed to a tree, touchingfeeling, that knowledge that I have forgotten to remember comes only through being. </i>
        <br/><br/>
        Does <i> the wisdom </i> that <i> rises </i> through <i> her </i> come <i> from </i> this <i> rhizomatic rootedness </i> in <i> no place </i> but <i> all places in time at once? </i> Does it <i> heal her </i> in <i> the ways </i> that <i> she </i> has <i> helped facilitate </i> my <i> own healing? If everything you touch you change, what happens to everything you feel? </i>
        <br/><br/>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <SignatureContainer src={Performance} alt="Performance at the Fountain of Time, Washington Park by vanessa german, Gray Center Fellowship Exhibition" className="textinnerimg hor rhya" />
        </div>
        <br/>
        <span className="centered small"> Performance at the Fountain of Time, Washington Park by vanessa german, Gray Center Fellowship Exhibition, 2024, at the Reva & David Logan Center for the Arts. Courtesy of the artist / Kasmin, New York; Logan Center Exhibitions; and the Richard and Mary L. Gray Center for Arts and Inquiry at the University of Chicago. Photo by Robert Chase Heishman and Robert Salazar. </span>
        <br/><br/>
        german gives us an education in listening to feeling, in learning to <i> &#8220;recognize the frequency of yes.&#8221;<sup><a href="#fn5" id="ref5">5</a></sup> </i> In class, we practiced mark making free of judgment by silencing the critic and surrendering to our consciousnesses. Together, we transformed lumps of clay, tiny portions of personal yet communal earth with only one instruction: leave a hole and leave a fingerprint. Our pieces came together in <i> THE SOUL IS A LIBRARY I and II </i> &#40;all works 2024&#41;. The conjuring we did in class lingers as you continue through the exhibit, pushing you to wonder what it might look like to lead, create, and simply <i> be </i> heart-first. Indeed, for german, the opposite of love isn&#39;t hate or indifference—but judgment, and we make with this in mind.
        <br/><br/>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <SignatureContainer src={LibraryIandII} alt="THE SOUL IS A LIBRARY I and II" className="textinnerimg hor rhya" />
        </div>
        <br/>
        <span className="centered small"> <i> THE SOUL IS A LIBRARY I and II, </i> 2024.
        Installation view of vanessa german's Gray Center Fellowship Exhibition, 2024, at the Reva & David Logan Center for the Arts. Courtesy of the artist / Kasmin, New York; Logan Center Exhibitions; and the Richard and Mary L. Gray Center for Arts and Inquiry at the University of Chicago. Photo by Robert Chase Heishman and Robert Salazar. </span>
        <br/><br/>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <SignatureContainer src={LibraryII} alt="THE SOUL IS A LIBRARY II" className="textinnerimg hor rhya" />
        </div>
        <br/>
        <span className="centered small"> <i> THE SOUL IS A LIBRARY II, </i> 2024.
        Installation view of vanessa german's Gray Center Fellowship Exhibition, 2024, at the Reva & David Logan Center for the Arts. Courtesy of the artist / Kasmin, New York; Logan Center Exhibitions; and the Richard and Mary L. Gray Center for Arts and Inquiry at the University of Chicago. Photo by Robert Chase Heishman and Robert Salazar. </span>
        <br/><br/>
        german narrates the story of the class&#39;s inception and expounds upon Sun Ra&#39;s influence on the work in <i> Heart-Opener &#40;pyramid&#41;. </i> As her voice floats through the attached headphones &#40;not pictured&#41; and a stellated dodecahedron spins atop a lapis turntable, she recounts a story, she casts a spell: 
        <br/><br/>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <SignatureContainer src={HeartOpenerI} alt="Heart-Opener (pyramid)" className="textinnerimg hor rhya" />
        </div>
        <br/>
        <span className="centered small"> <i> Heart-Opener &#40;pyramid&#41;, </i> 2024. 
        Installation view of vanessa german's Gray Center Fellowship Exhibition, 2024, at the Reva & David Logan Center for the Arts. Courtesy of the artist / Kasmin, New York; Logan Center Exhibitions; and the Richard and Mary L. Gray Center for Arts and Inquiry at the University of Chicago. Photo by Robert Chase Heishman and Robert Salazar. </span>
        <br/><br/>
        As she worked to enact such a space in the Chicago classroom, she unknowingly initiated a sculptural encounter with Sun Ra. He followed her to her studio and elicited a pull within her to create a four-sided, golden pyramid, despite architecture and geometry having never made their way into her work before. Soon after the pull expanded into a knowing and she began to assemble the sculpture, <a href="https://www.youtube.com/watch?v=8_f5e9eJpLw" target="_blank" className="styled"> &#8220;Tapestry From An Asteroid&#8221; </a> by Sun Ra rang out from her studio manager&#39;s playlist. <i> Heart-Opener &#40;pyramid&#41; </i> had already been completed with its crystal antennae calling out to him when german finally saw a <a href="https://www.youtube.com/watch?v=rmqe_v11q3U" target="_blank" className="styled"> video of Sun Ra&#39;s 1989 performance </a> on late-night show <i> Night Music, </i> wherein he produces a four-sided, golden pyramid that rhymed with the one she had just created. Sun Ra must surely be nodding to her across time, both producing and answering her call. 
        <br/><br/>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <SignatureContainer src={HeartOpenerII} alt="Heart-Opener (pyramid)" className="textinnerimg hor rhya" />
        </div>
        <br/>
        <span className="centered small"> <i> Heart-Opener &#40;pyramid&#41;, </i> 2024. 
        vanessa german in her studio. Photo by Jordan Whitten. </span>
        <br/><br/>
        Throughout german's exhibition, this notion of interconnection, of reaching across timespace to a past and future that are always already present, comes through the motif of extended hands. Usually, they reach up: up and out from the crown of the rose quartz-assembled head in <i> Chicago Altar of Love inspired by the ride-share driver who told me how to make it in Chicago, she says: Don&#39;t be Afraid. Keep Your Eyes Open &#40;2024&#41;; </i> up and out from the top of a black onyx head suspended within a found basketball hoop in <i> Dr. Massey and The Nature of the Known Universe; </i> up and out of a wrought iron sigil in <i> INTUITIVE MAGIC AND THE BODY. </i> Each of these hands, covered in gold, look to reach up &#40;to touch&#41; and out &#40;to feel&#41;.
        <br/><br/>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <SignatureContainer src={Universe} alt="Dr. Massey and the Nature of the Known Universe" className="textinnerimg ver rhya" />
        </div>
        <br/>
        <span className="centered small"> <i> Dr. Massey and the Nature of the Known Universe, 2024. </i> Installation view of vanessa german's Gray Center Fellowship Exhibition, 2024, at the Reva & David Logan Center for the Arts. Courtesy of the artist / Kasmin, New York; Logan Center Exhibitions; and the Richard and Mary L. Gray Center for Arts and Inquiry at the University of Chicago. Photo by Robert Chase Heishman and Robert Salazar.  
        </span>
        <br/><br/>
        Occasionally, the hands take on different forms. For instance, Sun Ra's golden hand &#8220;rising up the back to carry the night of sounds on his infinite and eternal shoulders&#8221;<sup><a href="#fn6" id="ref6">6</a></sup> in <i> Master Blaster; </i> or, <i> Boombox from the 5th dimension. </i> His pyrite hand rises up and out from the earth that props up the boombox while still being a part of it, rooting into a groundedness while reaching to join a symphony of blue minerals. You might easily miss his pat on the back if you ignore the voice coaxing you to orbit the sculpture completely, if you forget to remember to maintain awareness of all that exists around and within and through you even when not directly in front of you. Whether you catch it or not, there is an antidote that flows from his gleaming palm, edging around the corners, seeking and finding you regardless of whether you see it coming. 
        <br/><br/>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <SignatureContainer src={LoveSong} alt="(left) Love Song; or The Quelling of that Great Grief of Immortality or (center) Master Blaster; or, Boombox from the 5th dimension or (right) THE HEALER— or (far right) INTUITIVE MAGIC AND THE BODY " className="textinnerimg hor rhya" />
        </div>
        <br/>
        <span className="centered small"> <i> &#40;left&#41; Love Song; or The Quelling of that Great Grief of Immortality, </i> 2024, &#40;center&#41; <i> Master Blaster; </i> or, <i> Boombox from the 5th dimension, </i> 2024, &#40;right&#41; <i> THE HEALER— </i> ,2024, &#40;far right&#41; <i> INTUITIVE MAGIC AND THE BODY, </i> 2024.
        <br/>
        Installation view of vanessa german's Gray Center Fellowship Exhibition, 2024, at the Reva & David Logan Center for the Arts. Courtesy of the artist / Kasmin, New York; Logan Center Exhibitions; and the Richard and Mary L. Gray Center for Arts and Inquiry at the University of Chicago. Photo by Robert Chase Heishman and Robert Salazar.
        <br/><br/> </span>
        <i> THE HEALER— </i> is the only work in the exhibit that has two hands and it is the only work where the hands are outstretched. Strung along its torso are the prayer beads we made in class, now dipped in gold and bound to one another—our prayer beads are our first lesson in german&#39;s method of assemblage, one that carefully brings together found objects, earth, and intention to teach us about the inextricability of the one from the whole. Our intentions work together and reach out, all &#8220;the grace [you] could imagine&#8221;<sup><a href="#fn7" id="ref7">7</a></sup> emanating from the fingertips of the twinned golden appendages.
        <br/><br/>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <SignatureContainer src={AltarofLove} alt="Heart-Opener &#40;pyramid&#41; Chicago Altar of Love inspired by the ride-share driver who told me how to make it in Chicago, she says: Don&#39;t be Afraid. Keep Your Eyes Open" className="textinnerimg hor rhya" />
        </div>
        <br/>
        <span className="centered small"> <i> INTUITIVE MAGIC AND THE BODY, </i> &#40;left&#41; 2024, &#40;center&#41; <i> THE HEALER— </i> , 2024, &#40;right&#41; Heart-Opener &#40;pyramid&#41;, 2024, &#40;under <i> Heart-Opener &#40;pyramid&#41; Chicago Altar of Love inspired by the ride-share driver who told me how to make it in Chicago, she says: Don&#39;t be Afraid. Keep Your Eyes Open, </i> 2024. Installation view of vanessa german's Gray Center Fellowship Exhibition, 2024, at the Reva & David Logan Center for the Arts. Courtesy of the artist / Kasmin, New York; Logan Center Exhibitions; and the Richard and Mary L. Gray Center for Arts and Inquiry at the University of Chicago. Photo by Robert Chase Heishman and Robert Salazar. </span>
        <br/><br/>
        german&#39;s work is the completed object and experience of her exhibition title, the poem that explicates it. She honors the psychic process of assembly—recognizing that all that she touches will change her and whatever she has touched will change the piece. She also recognizes that not all that she touches and that touches her can be seen. The work, then, is also as much the object as the feeling that goes into it. Thus, in this exhibition and others, german works with both materials such as rose quartz, sodalite, sea jasper, plaster—and immaterials: 
        <br/><br/>
        <span className="right"> &#8220;deep affection for humankind,&#8221;<sup><a href="#fn8" id="ref8">8</a></sup>
        <br/><br/>
        &#8220;a redemption song hummed on the way to the kitchen,&#8221;<sup><a href="#fn9" id="ref9">9</a></sup>
        <br/><br/>
        &#8220;the directness of a conscious gaze,&#8221;<sup><a href="#fn10" id="ref10">10</a></sup>
        <br/><br/>
        &#8220;the healing bodies of water touching the land that we know of as Chicago,&#8221;
        <sup><a href="#fn11" id="ref11">11</a></sup><br/><br/>
        &#8220;ancestors to come,&#8221;<sup><a href="#fn12" id="ref12">12</a></sup>
        <br/><br/>
        &#8220;the beginning and the end switching places all the time,&#8221;<sup><a href="#fn13" id="ref13">13</a></sup>
        <br/><br/>
        &#8220;crying out for justice, the Congo, the Sudan,&#8221;<sup><a href="#fn14" id="ref14">14</a></sup>
        <br/><br/>
        &#8220;love and grief with no space between them.&#8221;<sup><a href="#fn15" id="ref15">15</a></sup> </span>
        <br/><br/>
        Within everything she creates, there is literal and metaphysical laying on of hands, and there cannot be healing without an acknowledgement of pain. german, who describes herself as &#8220;mostly earthling,&#8221;<sup><a href="#fn16" id="ref16">16</a></sup> teaches us to feel and dream for the world with reminders of the human injustices and genocides happening around us: Gaza, Congo, Sudan—within her work there is always love and also grief, <a href="https://www.instagram.com/reel/C3qvgwBMo-7/?igsh=MXQxNDFzdzVsc3A2Yw==" target="_blank" className="styled"> at the same time. </a>
        <br/><br/>
        <i> Prophecy comes to us through unspectacular teachers so long as we maintain an open awareness. Each class, our homework is to bring a magical object and a magical immaterial. I return </i> to THE SOUL IS A LIBRARY I <i> and spot a damaged watch I carried to class and gave vanessa. The watch&#39;s face is dark brown and the hands are rose gold. The second hand is broken, disconnected from the others, haphazardly pointing to the numbered date, frozen in time. There will be ten moments when the watch will be correct throughout the duration of the exhibition, but the second hand will always be askew. There will never be an instance of wholeness without holding the broken. It reminds me that we &#8220;cannot truly be blindsided by anything&#8221;<sup><a href="#fn17" id="ref17">17</a></sup> because there is prophecy all around and within us. </i>
        <br/><br/>
        <i> In Altar of Grief and Transformation from the place where I was scammed by humans out of $700 one night in chicago when I had a mean toothache and the pain had blinded my common senses, </i> german demonstrates the importance of touchingfeeling even in moments when it&#39;s easier to numb and safer to hide.
        <br/><br/>
        Touchingfeeling is represented here by a blue gardening glove as a hand. It does not reach up or out, but falls flat from under a sequined pillow upon which a lapis-kyanite-sodalite head lies. It is the only hand in the exhibit we might literally try on: a grief meant to be witnessed, shared. There is the blue, limp hand, but—as it lies against a mirrored rectangular prism—there is also the shadow of that hand, and the reflection of that hand, and the reflection of the shadow of that hand, an allegory for how grief spills out, flooding, pouring beyond its bounds. It is here, yet elsewhere as well. It does not sit in isolation but also reaches and also touches, and in so doing, changes and is changed, feels and is felt. At the feet of the teacher that is grief, we are collectively transformed.
        <br/><br/>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <SignatureContainer src={AltarofGrief} alt="Altar of Grief and Transformation from the place where I was scammed by humans out of $700 one night in chicago when I had a mean toothache and the pain had blinded my common senses" className="textinnerimg ver rhya" />
        </div>
        <br/>
        <span className="centered small"> <i> Altar of Grief and Transformation from the place where I was scammed by humans out of $700 one night in chicago when I had a mean toothache and the pain had blinded my common senses, </i> 2024. Installation view of vanessa german's Gray Center Fellowship Exhibition, 2024, at the Reva & David Logan Center for the Arts. Courtesy of the artist / Kasmin, New York; Logan Center Exhibitions; and the Richard and Mary L. Gray Center for Arts and Inquiry at the University of Chicago. Photo by Robert Chase Heishman and Robert Salazar. </span>
        <br/><br/>
        <i> I have not been scammed out of money today, but too often, it&#39;s hard not to feel like the Academy is taking something valuable away from me. Today, I cannot conceal enough sorrow to keep it out of the classroom space, so I allow soundless tears to stream down my face. I enter the space vanessa has constructed as the paraäcademy because it seems to me the best salve to the pain enacted by its foil. Under her redemptive tutelage, I allow the mundane to be felt as extraordinary, as a complete catalog of the pains that I have felt once and now again. vanessa must see me because she guides us in a meditation that seeks to take our grief and alchemize it into something that can fly; to make it small enough that it can fit into our hands; to take it, loving it completely before allowing it to fly away. </i> 
        <br/><br/>
        What happens when we hold awareness for the ways that love and grief appear within the body as record of a reality that can be bent, is bending now as we approach it with 
        <br/><br/>
        <span className="right"> a prayer
        <br/><br/>
        a meditation
        <br/><br/>
        &#8220;a focused hope?&#8221;<sup><a href="#fn18" id="ref18">18</a></sup> </span>
        <br/><br/>
        <i> During one of our last classes, vanessa gives a mini artist talk about her rose quartz pieces. She casually mentions being a triple empath, but the concept stays with me, so it&#39;s the first question I ask when <a href="https://www.journals.uchicago.edu/doi/10.1086/731126" target="_blank" className="styled"> interviewing her for Portable Gray. </a> Triple empathy—prescient feeling, seeing, knowing—contributes to her heightened state of awareness: &#8220;It&#39;s not just the feeling, but it&#39;s the feeling that comes before the feeling and it&#39;s the space in between knowing about that, the is-ness of it.&#8221;<sup><a href="#fn19" id="ref19">19</a></sup> Her explanation makes me wonder again about touchingfeeling and my mind resurfaces Lauren Olamina&#39;s condition of hyperempathy in </i> Parable of the Sower: <i> her orientation to being is structured by literally feeling the pain and pleasure of others. If Lauren can even feel a bullet through the flesh of a dog or a lover&#39;s tingling euphoria, how much must she always be transformed and transforming through witnessing the effervescent flow of all forms of life through her? What happens when we, like Lauren, like vanessa, allow our bodies and sensoria to be radically porous as a way of perceiving, experiencing the world? </i>  
        <br/><br/>
        With golden hands, with a blue hand, with grief, with love—all without judgment—german is a prophet for the world. Her vision is clear, prescient while present, assembling disparate pieces into cohesion, transmuting the pain of existence into something beautiful without erasing the anguish. german&#39;s work holds us responsibly in both love and grief, leads us today, yesterday, and tomorrow for here and now, providing us an image of ourselves and all we might still be in spite of _______. As we become brave enough to &#8220;look to the edges of [our realities]&#8221;<sup><a href="#fn20" id="ref20">20</a></sup> and find that those edges blur softly into familiar focus, we might begin to understand why she behooves us to remember: 
        <br/><br/>
        <span className="right"> There are no destinations, only origins.&#8221;<sup><a href="#fn21" id="ref21">21</a></sup> </span>
    </p>
    <span className="footnotes rhya">
    <p>
    <ol>
        <li id="fn1"> touchingfeeling: to approach emotion with curiosity and awareness, an acceptance of its flow, an openness to experience; also/or stirring sensation &#40;v.&#41; // sensation stirring &#40;n.&#41; <a href="#ref1">↩</a></li> <br/>
        <li id="fn2"> Octavia Butler, <i> Parable of the Sower, </i> 1993. <a href="#ref2">↩</a></li> <br/>
        <li id="fn3"> <a href="https://www.journals.uchicago.edu/doi/10.1086/731126" target="_blank" className="styledli"> Interview </a> with vanessa german by Solana Adeokun in vanessa german&#39;s &#8220;The Artist as the Complete Technology of Being-ness,&#8221; <i> Portable Gray </i> issue 12: Paraäcademia, 2024. Published by the Richard and Mary L. Gray Center for Arts and Inquiry at the University of Chicago. <a href="#ref3">↩</a></li> <br/>
        <li id="fn4"> Paraphrased from class conversation with vanessa german. <a href="#ref4">↩</a></li> <br/>
        <li id="fn5"> Author&#39;s <a href="https://www.journals.uchicago.edu/doi/10.1086/731126" target="_blank" className="styledli"> interview </a> with vanessa german in vanessa german&#39;s &#8220;The Artist as the Complete Technology of Being-ness,&#8221; <i> Portable Gray </i> issue 12: Paraäcademia, 2024. <a href="#ref5">↩</a></li> <br/>
        <li id="fn6"> vanessa german, <i> Master Blaster; </i> or, <i> Boombox from the 5th dimension, </i> 2024.
        <a href="#ref6">↩</a></li> <br/>
        <li id="fn7"> From Baby Suggs&#39;s sermon in the Clearing in Toni Morrison&#39;s <i>  Beloved, </i> 1987. <a href="#ref7">↩</a></li> <br/>
        <li id="fn8"> vanessa german, <i> Chicago Altar of Love inspired by the ride-share driver who told me how to make it in Chicago, she says: Don&#39;t be Afraid. Keep Your Eyes Open, </i> 2024. <a href="#ref8">↩</a></li> <br/>
        <li id="fn9"> vanessa german, <i> Love Song; </i> or <i> The Quelling of that Great Grief of Immortality, </i> 2024. <a href="#ref9">↩</a></li> <br/>
        <li id="fn10"> Ibid. <a href="#ref10">↩</a></li> <br/>
        <li id="fn11"> german, <i> Chicago Altar of Love. </i> <a href="#ref11">↩</a></li> <br/>
        <li id="fn12"> Ibid. <a href="#ref12">↩</a></li> <br/>
        <li id="fn13"> vanessa german, <i> Master Blaster; </i> or, <i> Boombox from the 5th Dimension, </i> 2024. <a href="#ref13">↩</a></li> <br/>
        <li id="fn14"> german, <i> Love Song. </i> <a href="#ref14">↩</a></li> <br/>
        <li id="fn15"> german, <i> Master Blaster. </i> <a href="#ref15">↩</a></li> <br/>
        <li id="fn16"> vanessa german&#39;s instagram bio. <a href="#ref16">↩</a></li> <br/>
        <li id="fn17"> vanessa german&#39;s sonic words from <i> Heart-Opener &#40;pyramid&#41;, </i> 2024. <a href="#ref17">↩</a></li> <br/>
        <li id="fn18"> vanessa used these terms interchangeably, each as synonymous with the other. <a href="#ref18">↩</a></li> <br/>
        <li id="fn19"> Author&#39;s <a href="https://www.journals.uchicago.edu/doi/10.1086/731126" target="_blank" className="styledli"> interview </a> with vanessa german in vanessa german&#39;s &#8220;The Artist as the Complete Technology of Being-ness,&#8221; <i> Portable Gray </i> issue 12: Paraäcademia, 2024. <a href="#ref19">↩</a></li> <br/>
        <li id="fn20"> Paraphrased from a note from vanessa german to the author. <a href="#ref20">↩</a></li> <br/>
        <li id="fn21"> Placard in the exhibition. <a href="#ref21">↩</a></li> <br/>
    </ol>
    </p>
    </span>
    <br/><br/><br/><br/><br/><br/> */}

    {/* <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={AmadineTitleCard} alt="Amadine Title Card" className="titlecard" />
    </div>
    <br/>
    <p className="Amandine-Nana-04">
    <span className="centered"> <i> I am all the geographies that can save me by Amandine Nana </i> </span>
    <br/>
    <span className="centered"> <i> &#40;translated from French to English by Chrystel Oloukoi&#41; </i> </span>
    <br/>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={Indeterminacy} alt="Torkwase Dyson, Indeterminacy #1 (Black Compositional Thought)" className="textinnerimg ver amadine" />
    </div>
    <br/>
    <span className="centered"> Torkwase Dyson, <i> Indeterminacy #1 &#40;Black Compositional Thought&#41;, </i> 2022. © Torkwase Dyson. </span>
    <br/><br/>
    <i> Before the chaos 
    <br/>
    Before the fire
    <br/>
    Before the walls fell
    <br/>
    Before the escape
    <br/>
    Well before the imperative to run
    <br/>
    Lauren was ready to survive
    <br/>
    Beyond the walls of her community
    <br/>
    Beyond the walls of Robledo
    <br/>
    Lauren was &#8220;learning to fly, to levitate [her]self&#8221; </i>
    <br/>
    &#8220;No one is teaching me.
    <br/>
    I&#39;m just 
    <br/>
    learning on my own,
    <br/>
    little by little,
    <br/>
    dream lesson by dream lesson&#8221;<sup><a href="#fn2" id="ref2">2</a></sup>
    <br/>
    <i> She had an intimate knowledge / But she was still gripped by the fear / Of not being able to control her direction </i>
    <br/><br/>
    In Torkwase Dyson&#39;s artworks, 
    <br/>
    a line may bifurcate and take unexpected but fated paths,
    <br/>
    two lines may intersect with a curve or avoid it
    <br/>
    another line may suddenly join other shapes and geographies, regardless of distance.
    <br/>
    Proximity may seep into distance.
    <br/><br/>
    Assembling a vocabulary of curvilinear and rectilinear shapes, Torkwase&#39;s textured and multiscalar paintings, sculptures, and drawings offer a multiplicity of possible movement strategies. Consistent with the artist&#39;s mark making ideology of <a href="https://pelicanbomb.com/art-review/2017/black-interiority-notes-on-architecture-infrastructure-environmental-justice-and-abstract-drawing" target="_blank" className="styled"> &#8220;black compositional thought,&#8221;<sup><a href="#fn3" id="ref3">3</a></sup> </a> her artworks never deny the obstacles and oppressive systems seeking to prevent our mobility. The mere act of persisting in motion is far from anodyne for marginalized people descending from colonization and slavery and still limited in their freedom of movement that, by necessity, is unpredictable, cannot be defined: migration suffused with indeterminacy, uncertainty, and fugitivity, or the rhizomatic errantry<sup><a href="#fn4" id="ref4">4</a></sup> Édouard Glissant posits in his seminal text: <i> Poetics of Relation </i>&#40;1990&#41;. Similarly, the fear that inhabits Lauren Oya Olamina, the protagonist in Octavia Butler&#39;s <i> Parable of the Sower </i> &#40;1993&#41;, regarding her capacity to choose the right direction does not prevent the security she finds in her aptitude for flight, to imagine a land&#40;ing&#41;, an environment where she and hers would be free to determine their own futures. 
    <br/><br/>
    In Torkwase&#39;s own formulation: <i> &#8220;For black people, moving through a given environment comes with questions of belonging and a self-determination of visibility and semi-autonomy. This means for the systemically disenfranchised, compositional movement &#40;ways in which the body unifies, balances, and arranges itself to move through space&#41; is a skill used in the service of self-emancipation within hostile geographies.&#8221;<sup><a href="#fn5" id="ref5">5</a></sup> </i> In other words, we inhabit and move through space in dialectical ways, via a series of negotiations.
    <br/><br/>
    Black spatial dialectics often haunt the geometric shapes Torkwase choreographs, their radical histories embodied by fugitives who experimented with freedom or, &#8220;semi-autonomy,&#8221; under slavery. A triangular or trapezoidal form invites us to recollect the nine-feet-long-seven-feet-wide garret where Harriet Jacobs  &#40;under the pseudonym Linda Brent&#41; hid for seven years, between 1835 and 1842, before successfully escaping her master. Another shape, the square, asks us to contemplate  Henry &#8220;Box&#8221; Brown and the wooden crate through which he escaped slavery by mailing himself from Richmond to Philadelphia in 1849. In relation to this gesture of abstraction, a curve suggests the hull of the ship wherein Anthony Burns hid in order to travel from Virginia to Boston, in 1854 &#40;see <a href="https://issuu.com/maxwelldavidsongallery/docs/torkwase_catalogue" target="_blank" className="styled"> <i> Dear Henry </i> </a> exhibition, 2018; <a href="https://www.torkwasedyson.com/bird-and-lava" target="_blank" className="styled"> <i> Bird and Lava </i> </a> series, 2020&#8208;ongoing&#41;. These geometries, imbued with the energies of <a href="https://momus.ca/rearrange-torkwase-dyson-and-black-feminist-breathing/" target="_blank" className="styled"> &#8220;Black spatial genius,&#8221;<sup><a href="#fn6" id="ref6">6</a></sup> </a> result from processes of abstraction. Amalgamated, they transmute into what the artist calls <a href="https://metropolismag.com/viewpoints/torkwase-dyson-noteworthy/" target="_blank" className="styled"> &#8220;hyper shapes.&#8221;<sup><a href="#fn7" id="ref7">7</a></sup> </a> 
    <br/><br/>
    These histories and practices of liberation cited through Torkwase&#39;s &#8220;hyper shapes&#8221; can help us interrogate the spatial dialectics we may have faced in our own lived experiences and how we overcome them through imagination. I have tender childhood memories of transitory domestic spaces that have marked my mother&#39;s and my own early migratory paths in France—in particular a studio flat in a building where the ground floor kitchen functioned as a shared space among families.
    <br/><br/>
    In ways similar to Octavia Butler&#39;s Lauren Olamina, it is perhaps in these narrow but communal venues that I honed my imagination the most, that I became accustomed to altering my perception of my environment and to dreaming other spaces into being. Imagination reigns in the space of memory: I have long imagined several of the geographies that I have now passed through. I have long since jotted down, charted, and invented the geographies where I once yearned to escape to, and could only get to in my sleep. And I have long imagined fleeing the geographies I have since left behind me.
    <br/><br/>
    Torkwase is also carefully concerned with the spatial and affective conditions of forced migration. She reminds us that migrants do not ask for palaces but for refuges ungoverned by the law of deportation and insalubrity. In too-often-constricted spaces at the onset of their migration in hostile new &#8220;host&#8221; territories, they strive to build futures. In similar ways, Lauren Olamina stretches her mind to imagine the new house that awaits her beyond Robledo, beyond the environment where she was born, but not without first crossing a barrage of gratuitous and state-enforced violence. 
    <br/><br/>
    Indeed, there is no shortage of obstacles to our movement and our belonging, especially for the most vulnerable among us. Over the past few months, I have witnessed the multiple struggles of recently arrived people in the Paris region &#40;Collectif des Jeunes du Parc de Belleville, Collectif Combat pour l&#39;Hébergement…&#41;, fighting to remain in oftentimes precarious housing where they are still threatened by expulsion. The perpetual movement that migrants from Sub-Saharan Africa are subjected to is not the emancipatory mobility they dreamed to find in what should have been, and is often falsely promised to be, lands of refuge. It is a precarious errantry: imposed, unlivable. 
    <br/><br/>
    Movement, both forced and chosen, necessitates retreat spaces, where the imaginary can continue to breathe, and this is exactly what Torkwase&#39;s sculptures, namely those presented in a 2022 exhibition titled <a href="https://www.pacegallery.com/exhibitions/torkwase-dyson-liquid-belonging/" target="_blank" className="styled"> <i> A Liquid Belonging </i> </a> and <a href="https://whitney.org/exhibitions/torkwase-dyson" target="_blank" className="styled"> <i> Liquid Shadows, Solid Dreams &#40;A Monastic Playground&#41;, </i> </a> 2024&#8208;2025 allow for. The geographies she summons by way of her geometries are complex micropolitical horizons, lands of <i> honest </i> refuge. In the presence of her work, we are invited to err, drift, but also sit, gather ourselves and learn to visualize &#8220;little by little, dream lesson by dream lesson&#8221; the creation of livable geographies, livable worlds. 
    <br/><br/>
    Relatedly, in a 2005 open letter to the French Minister of the Interior, Glissant and fellow Martinican writer Patrick Chamoiseau speak about how our relational identities &#8220;still struggle to find their place in archaic Republics, and yet the imprecations they incite often express a desire to participate in an alter-Republic.&#8221; In Torkwase&#39;s drawings, paintings, and sculptures &#40;portals&#41;, I recognize my own deep-seated desire to partake in an &#8220;alter-Republic&#8221; in order to &#8220;be able to experience the world in its diversity&#8221;—far removed from the always more &#8220;archaic&#8221; political horizons of our normative nation states. Still, to construct and inhabit an &#8220;alter-Republic,&#8221;<sup><a href="#fn8" id="ref8">8</a></sup> we have to build these geometries of resistance, to move, to improvise, to produce and trace borderless territories and to continue to experiment, somehow, toward freedom. In Torkwase&#39;s compositions, in her political and romantic lines of flight, I hear an echo of <a href="https://www.youtube.com/watch?v=ttZxpB77LWY" target="_blank" className="styled"> Kelela singing </a> &#8220;over the line, but it feels just right, right, right, right…&#8221;
    <br/><br/><br/><br/>
    # Space 1, Giverny, France, July 2024
    <br/><br/>
    On a summer evening in Giverny, while gathered with other thinking and artistic souls at the Terra Foundation for American Art&#39;s &#8220;Water Holds Memory&#8221; residency, I listened passionately to Torkwase orating her experiences of scuba diving in Cape Town, South Africa. As she spoke, I drew on my own memories of aquatic submersion to feel the sensations she was evoking. By art of narration and conversation her words fused with my own imagination and created a portal to a submarine universe where, perhaps, beings like us could find breath again. 
    <br/><br/>
    Lately, I&#39;ve been breathless—more intensely so than usual. Amidst these last few weeks, I&#39;ve held more memories of inhaling and holding my breath than of deeply exhaling. My body and soul were &#40;and still are&#41; brutalized by months of genocides witnessed on screens, as well as the political crisis we&#39;ve been facing in France following the far right&#39;s victory at the European Union elections and the French President&#39;s historically unprecedented decision to dissolve the lower house of the Parliament and hold new elections. What we call the &#8220;corps politique&#8221; &#40;political body&#41; was dissolving and taking us—the already fragmented social body—into the throes of this dissolution. 
    <br/><br/>
    As Torkwase mused on in Giverny, I conjured in my mind-spirit&#39;s eye the fascination of experiencing one&#39;s body in water—light yet dense, striving not to disappear. I had a deep desire for the &#8220;liquid belonging&#8221; she expresses in her works: solidity in a liquid state, a refusal to dissipate that carries with it the memory and grief of the lives of enslaved people and refugees lost to the Atlantic Ocean or the Mediterranean sea. I realized that perhaps I simply needed to go back to the water, to submerge myself and remember: <i> I cannot be dissolved. We remain: <a href="https://www.instagram.com/torkwasedyson/p/DBoWIrCxkeC/?img_index=1" target="_blank" className="styled"> &#8220;undrowned.&#8221; </a> </i> 
    <br/><br/><br/><br/>
    # Space 2, Grand-Bassam, Ivory Coast, August 2024
    <br/><br/>
    I ran away from Abidjan. Seized by an irrepressible desire for the reverberations of the Atlantic waves and for deambulatory errantries. Walking aimlessly is no small task in large African cities where the concept of sidewalks is reduced to a strict functional and economic medium. I found refuge in Grand-Bassam: a coastal city about a 2 hour drive from the metropolis, and, more specifically, in the Quartier-France which was the former colonial capital. <i> &#40;Why do we find so much charm in these colonial architectures?&#41; </i>
    <br/><br/>
    Water, in Torkwase&#39;s vision, is a dense black and dark blue matter that does not fear to face its ghosts, but yet shelters in abyss-histories, geometries of resistance and flight. Lines, curves, triangles, squares, all empty and full, all shapes born anew from formless mass. I walked along the beach of Grand-Bassam, so close to the sea, to the edge of the Atlantic and its erratic waves. I walked along this beach, entranced and yet wary of the ocean. 
    <i> &#40;One cannot control inherited fears.&#41; </i>
    <br/>
    I was distrustful, or perhaps more accurately, grieving the historical debt of all the bodies the waves could, at any moment, wash up ashore. He accompanied me, staying on the beach and watching me immerse myself. He did not know how to swim and, like many, feared this water. Too many stories, in the collective unconscious, of bodies swept away, drowned. <i> &#40;My mother told me to be careful of the currents, they carry away, they carry away, they carry away.&#41; </i>
    <br/><br/>
    I expressed these fears to him while observing the myriad littered plastic &#8220;bodies&#8221; on the sand, the toxic waste spurned, with strenuous effort, by a polluted sea. I expressed these fears to him after tripping over a plastic &#8220;body&#8221; an ocean wave had just spit out. 
    <br/>
    <i> What if, </i>
    <br/>
    <i> with the next wave, I did not trip over a plastic body but over a corpse? </i>
    <br/>
    <i> What if, </i>
    <br/>
    <i> next time, it was a ghost—the phantom-body of an enslaved person or a refugee? </i>
    <br/>
    <i> What if, </i>
    <br/>
    <i> with the next wave, I tripped over a corpse&#39;s remains, already reduced to a mineral state? &#40;Where have all the whales washed up on the beach for the past ten years been buried?&#41; </i> If not a corpse, any piece of wood transports me to the ghost of a raft, its passengers, and their washed up dreams. 
    <br/><br/>
    The scraps of rafts I stumble upon in my mind bear the specter of an architecture of survival manifested in Torkwase&#39;s 2019 exhibition <a href="https://www.arch.columbia.edu/exhibitions/114-1919-black-water" target="_blank" className="styled"> <i> 1919: Black Water. </i> </a> In a series of paintings and sculptures, she assembled a memorial to the dreams of borderlessness, desegregation, and re-creative mobility that animated five teenagers in the days before Chicago&#39;s &#8220;Red Summer&#8221; in 1919 as they built a raft to freely navigate Lake Michigan. This architectural gesture and carpentrystic freedom song turned to tragedy as one of the boys, Eugene Williams, drowned after a white person who, irate at the sight of Black boys in glee on their raft, launched a stone at Williams&#39;s head as if it was a bullseye after the wooden structure drifted onto the so-called &#8220;white&#8221; side of the lakefront. 
    <br/><br/>
    The works presented at this installation <i> &#40;Hot Cold; Just Above and Just Below; Place, Raft, and Drift; Plantationocene; Being-Seeing-Drifting, 2019&#41; </i> display a quasi-aerial viewpoint. They offer perspectives on a landscape of borders and obstacles, but also on strategies of mobility and movement, on the very acts of resistance these teenagers expressed, at the cost of one of their lives. Because Torkwase paints and sculpts altars of remembrance, I wonder: Do the <i> bits of wood embedded in the middle of Torkwase&#39;s paintings manifest that raft? </i> Because water is such a dense black and dark blue pigmented matter in her work I wonder: How do we mourn across water? How does mourning and grief connect Lake Michigan to the Atlantic? Water, in Torkwase&#39;s vision, does not fear to face its ghosts, but yet shelters in abyss-histories, geometries of resistance and flight. Lines, curves, triangles, squares, all empty and full, all shapes born anew from formless mass.
    <br/><br/><br/><br/>
    # Space 3, Undrowning, November 2024
    <br/><br/>
    Returning to Lauren Olamina who, indeed,
    <br/>
    <i> had an intimate knowledge / </i>
    <br/>
    <i> But was still gripped by the fear / </i>
    <br/>
    <i> Of not being able to control her direction </i>
    <br/>
    calls me to revere that, after all, this is what our ancestors across the Black Atlantic have been teaching us: moving through indeterminacy is a methodology of continual adaptation and mutation. Though Lauren fears not being able to control her direction in a post-apocalyptic world full of violence and disfigured by global warming and extractivism &#40;one that is not that far from to the one we are currently living in&#41;, her intimate knowledge guides the miraculous words that open the book: &#8220;All that you touch / You change. / All that you Change / Changes you…&#8221; This prayer of divine interdependence is undoubtedly embodied in the work of Torkwase Dyson who choreographs conspiratory learning spaces for clandestine geographies that encourage those of us still undrowned to resist / breathe / listen / live. 
    <br/><br/>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={BirdnLava} alt="Torkwase Dyson, I Am Everything That Will Save Me #4 (Bird and Lava)" className="textinnerimg sqr amadine" />
    </div>
    <br/>
    <span className="centered"> Torkwase Dyson, <i> I Am Everything That Will Save Me #4 </i> &#40;Bird and Lava&#41;, 2021, acrylic, string, and graphite on wood, 153 cm &#40;diameter&#41;. © the artist. Courtesy Pace Gallery </span>
    <br/><br/>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={Blackwater} alt="Installation view of Torkwase Dyson&#39;s exhibition “1919: Black Water”" className="textinnerimg hor amadine" />
    </div>
    <br/>
    <span className="centered"> Installation view of Torkwase Dyson&#39;s exhibition &#8220;1919: Black Water&#8221; at Arthur Ross Architecture Gallery, New York, 2019. </span>
    <br/><br/>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={Hypershape} alt="Torkwase Dyson, Clandestine Geography (Hypershape)" className="textinnerimg sqr amadine" />
    </div>
    <br/>
    <span className="centered"> Torkwase Dyson, Clandestine Geography <i> &#40;Hypershape&#41;, </i> 2022, wood, graphite, and acrylic, 121.9 x 114.3 x 3.8 cm. </span>
    </p>
    <span className="footnotes amadine">
    <p>
    <ol>
        <li id="fn1"> Title reference: Torkwase Dyson, <i> I Am Everything That Will Save Me #4 &#40;Bird and Lava&#41;, </i> 2021, acrylic, string, and graphite on wood, 153 cm &#40;diameter&#41;. <a href="#ref1">↩</a></li> <br/>
        <li id="fn2"> Octavia Butler, <i> Parable of the Sower, </i> 1993. <a href="#ref2">↩</a></li> <br/>
        <li id="fn3"> &#8220;I&#39;ve set up this mode of drawing as a way to respond to the conditions in which various systemic orders of political abstraction have been used in the service of environmental exploitation… I ask myself, <i> how do black people survive abstraction today as the scope, scale, and density of matter is changing all around us due to climate change? </i> I begin to answer by looking at what I call <i> black compositional thought. </i> Abstract drawing can lend itself to the intellectual and psychological pursuit of pulling <i> black compositional thought </i> close. Really close, inside close. From the black-inside-black position, I stand in front of a surface with my mind in complete awareness of form as power.&#8221; —Torkwase Dyson in &#8220;Black Interiority: Notes on Architecture, Infrastructure, Environmental Justice, and Abstract Drawing,&#8221; <i> Pelican Bomb </i> &#40;2017&#41;. <a href="https://pelicanbomb.com/art-review/2017/black-interiority-notes-on-architecture-infrastructure-environmental-justice-and-abstract-drawing" target="_blank" className="styledli"> https://pelicanbomb.com/art-review/2017/black-interiority-notes-on-architecture-infrastructure-environmental-justice-and-abstract-drawing  </a> 
        <a href="#ref3">↩</a></li> <br/>
        <li id="fn4"> Édouard Glissant describes the concept of errantry as one that is rhizomatic, meaning it has multiple roots, allowing detours and open to a horizon of connectedness and empathy. See: Heidi Bojsen, &#8220;La géographie de l&#39;errance : à la recherche de l&#39;intention poétique de la géographie politique,&#8221; in <i> Autour d&#39;Édouard Glissant : Lectures, épreuves, extensions d&#39;une poétique de la Relation, </i> ed. Samia Hassab-Charfi, Sonia Zlitni-Fitouri, and Loïc Céry &#40;Pessac: Presses Universitaires de Bordeaux: 2008&#40;. <a href="https://books.openedition.org/pub/47025?lang=fr#:~:text=L%27errance%2C%20nous%20dit%20Glissant,l%27Autre%20»%20" target="_blank" className="styledli"> https://books.openedition.org/pub/47025?lang=fr#:~:text=L%27errance%2C%20nous%20dit%20Glissant,l%27Autre%20»%20 </a>
        <a href="#ref4">↩</a></li> <br/>
        <li id="fn5"> Torkwase Dyson, &#8220;Black Interiority: Notes on Architecture, Infrastructure, Environmental Justice, and Abstract Drawing,&#8221; <i> Pelican Bomb </i> &#40;2017&#41;. <a href="#ref5">↩</a></li> <br/>
        <li id="fn6"> Camille Bacon, &#8220;Rearrange: Torkwase Dyson and Black Feminist Breathing,&#8221; <i> Momus </i> &#40;2022&#41;. <a href="https://momus.ca/rearrange-torkwase-dyson-and-black-feminist-breathing/" target="_blank" className="styledli"> https://momus.ca/rearrange-torkwase-dyson-and-black-feminist-breathing/ </a> 
        <a href="#ref6">↩</a></li> <br/>
        <li id="fn7"> Torkwase Dyson, &#8220;Torkwase Dyson Reflects on Hyper Shapes,&#8221; <i> Metropolis Magazine </i> &#40;2021&#41;. <a href="https://metropolismag.com/viewpoints/torkwase-dyson-noteworthy/ " target="_blank" className="styledli"> https://metropolismag.com/viewpoints/torkwase-dyson-noteworthy/ </a> <a href="#ref7">↩</a></li> <br/>
        <li id="fn8"> Édouard Glissant, Patrick Chamoiseau, &#8220;De Loin,&#8221; Open Letter to the Minister of Interior of the French Republic at the occasion of his trip to Martinique, <i> Libération, </i> Decembre 7, 2005.
        <a href="#ref8">↩</a></li> <br/>
    </ol>
    </p>
    </span>
    <br/><br/><br/><br/><br/><br/> */}

    {/* <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={ImaniTitleCard} alt="Imani Title Card" className="titlecard" />
    </div>
    <br/>
    <p className="Imani-Perry-04">
<i> Blues is my life. It&#39;s a true feeling that comes from the heart, not something that just comes out of my mouth. Blues is what I love, and blues is what I always do. </i> <br/>
—Koko Taylor, Queen of the Blues 
<br/><br/>
<i> Those funded experiences, colored in a dark shade of blue… enable us to invade the future with a bit more than luck. </i> <br/>
—Eddie S. Glaude Jr., <i> In a Shade of Blue </i>
<br/><br/>
An astronomical term is one of the tightest rivets in the field of African American Studies: the Nadir. In Rayford W. Logan&#39;s 1954 book, <i> The Negro in American Life and Thought: The Nadir, </i> 1877-1901, Logan used the term to refer to the post-Reconstruction era in which the legal architecture of Jim Crow was stitched together with horrific violence to deny Black people the promises of freedom and full citizenship. For us scholars in the field, &#8220;the Nadir&#8221; is a conceptual given. It rolls off the tongue. There are no debates over its accuracy, only over its length and resiliency. 
<br/><br/>
Michele Mitchell describes the substance of the metaphor as follows in <i> Keywords for African American Studies </i> &#40;2018&#41;: &#8220;Nadir&#8221; can be…an astronomical term that describes either &#8220;a point on the celestial sphere diametrically opposite some other point&#8221;… Yet &#8220;nadir&#8221; is perhaps most frequently used as an antonym for the more general sense of &#8220;zenith,&#8221; or &#8220;high point.&#8221; Put another way, &#8220;nadir&#8221; indicates the lowest point possible for a person or collective…&#8221;<sup><a href="#fn1" id="ref1">1</a></sup> The concept echoes through Black life. A nadir seems always to be looming just possibly around the corner or present even when unseen. It is the threat of backlash that underpins the blues song of American history for Black people, a steady ache in the progress of history with its motifs of neglect and attention that turn brutal.
<br/><br/>
<span className="light-indentation"> Zenith is the opposite of Nadir. </span>
<span className="light-indentation"> Zenith sounds like a Black woman&#39;s name. </span>
<span className="light-indentation"> <i> Zenith </i> is the title of one of Lorna Simpson&#39;s 13-foot-woman-centered figurative paintings. </span>
<br/><br/>
<i> Zenith </i> &#40;2021&#41;, originally presented in her 2021 exhibition <i> Everrrything </i> at Hauser & Wirth Los Angeles, is one of the pieces in what I have come to think of as &#8220;Lorna&#39;s Blues.&#8221; An indigo blue-toned masked Black woman rises in the center. At that height, she overwhelms in the most intoxicating way. She is a spectral bricolage, wearing a peplumed blazer that could be from the 1940s or &#180;80s, or perhaps it is a bustle. Her straightened mid-length hair with a pompadour fashioned in the middle could be worn today or 50 years ago. Sparkle, stars, and blue-tinted lines emanate off of her legless form. But footprints &#40;hers, ours?&#41; lead us up to her magisterial image. 
<br/><br/>
Simpson asks: <i> What if the Zenith is a Black woman? </i> I take this to be more than the quip &#8220;I saw God, she&#39;s Black,&#8221; a delightful jab at patriarchy and white supremacy. This is, to my mind, a deeper provocation because it is a query. <i> What would her/our Zenith be, in contrast to the Nadir? </i>
<br/><br/>
The painting is footed with stacks of sedimentary rock, broadly termed bluestone, which derives its color from minerals in the rock. In the United States it is found in New York, Pennsylvania, and the Shenandoah Valley of Virginia, incidentally &#40;perhaps&#41; meaningful because of the roles these places had in framing and naming the nation: commerce, constitution, and slavocracy. Simpson&#39;s bluestone comes from an upstate New York quarry where historic bluestone from various places is gathered. The material is common in domestic buildings. In meticulously designed homes, the slabs are cut and placed precisely; in Simpson&#39;s work, they are as well but the rough beauty is left intact, reminding us that they come from nature and are part of a long past. 
<br/><br/>
Bluestone is a term that also exists in African American folk ritual and spiritual practices. In Hoodoo it refers to blue copperas, which is a powerful but toxic tool. Put in protective mojo bags mixed with other materials like nail clippings and chicken feet, and wrapped in red felt, it aids practitioners in bending a harsh world in their favor. In other words, blue has been used to manage living in the nadir, and the blues simultaneously put hoodoo to music, with references to mojo bags and being &#8220;fixed&#8221; by spells. 
<br/><br/>
In African American studies, the visuality of the term &#8220;the Nadir&#8221; has been inadequately explored. As we learn from Sarah Lewis&#39;s work in both <i> Vision & Justice </i> &#40;2016&#41; and <i> The Unseen Truth: When Race Changed Sight in America </i> &#40;2024&#41;, the construction of race as well as the argument for racial justice cannot be fully understood nor pursued without engaging the visual terrain. And yet compared to literature and music, it remains relatively undertheorized despite the fact that our most critical thinkers understood its significance and virtually all used sight and scene to explain our condition, from the ocular &#8220;loophole of retreat&#8221; of Harriet Jacobs&#39;s <i> Incidents in the Life of a Slave Girl </i> to the scenic chiasmus of Frederick Douglass&#39;s narrative wherein he battled the slave breaker Edward Covey and was transformed from slave to &#8220;a man.&#8221; Perhaps we don&#39;t talk about what the Nadir has to do with seeing because the conceptual significance of the visual eludes so many of us. 
<br/><br/>
This is really what brings me to the powerfully instructive work of Lorna Simpson. As I embarked on writing my next book <i>Black in Blues: How a Color Tells the Story of My People</i>, I realized how much visual artists had not only inspired but shaped my thinking. One of Simpson&#39;s pieces, <i> Seven Mouths </i> &#40;1993&#41;, provided the cover to my second book <i> More Beautiful and More Terrible: The Embrace and Transcendence of Racial Inequality in the United States </i> &#40;2014&#41; and she has long been known as one of the most important American conceptual artists. She has had a series of &#8220;firsts&#8221; and distinctions in the art world through the repeated seasons of racial backlash &#40;perhaps &#8220;blacklash&#8221; would be a better term for the specific American cultural turns to punish Black people that recur whenever things get a bit better&#41; and has confronted them head on with provocative brilliance. 
<br/><br/>
In 2019, there was a new flurry of attention to her work focusing on her use of the color blue as well as her turn to painting and screenprinting alongside her usual use of photography and collage. Writing for the <a href="https://www.newyorker.com/culture/culture-desk/the-mysterious-darknesses-of-lorna-simpsons-paintings" target="_blank" className="styled"> New Yorker, </a> Doreen St. Félix described Simpson&#39;s paintings for her 2019 exhibition, <i>Darkening</i>, at Hauser & Wirth New York as &#8220;monumental panels that drown the viewer in blues—some shades so potent that they are black, purple. Using graduated saturations of ink-wash over gesso, Simpson builds landscapes and seascapes that recall J. M. W. Turner or Chinese <i> shan shui </i> compositions.&#8221; 
<br/><br/>
I talked to Simpson about her Blues over Zoom and then, in one of the endless frustrations of technology for a Gen Xer, the recording disappeared. Or maybe &#40;more likely&#41; I failed to use the technology appropriately. But it also might have been a bit of kismet. I had to remember rather than simply record and repeat. I remember her detailing the processes of screenprinting and inking, gesso and wood. I remember the way she talked about allowing her imagination to guide her, to continually experiment even from the perch of already recognized greatness. I remembered a story she told me about how she is continuing this work using astronomy textbooks and discovering what Toni Morrison described as the &#8220;Africanist presence&#8221;<sup><a href="#fn2" id="ref2">2</a></sup> within American letters, the way Black people are ever-present in American texts, from the beginning, often distorted but always already witnessing. Lorna&#39;s Blues instruct us to both do and see, to see what we&#39;re doing, to do what we see, in the aspirational sense.
<br/><br/>
Simpson&#39;s foray into the blues has provided me with something much greater than artwork to be read or analyzed. The pieces provide an intellectual instruction. Encouraged by the enthusiasm she has for pushing beyond the boundaries, I approach the work as that which demands an interlocutor, not just a viewer. 
<br/><br/>
In <i> Observer </i> &#40;2021&#41;, another of the large-scale paintings, the figure is wearing a blue robe and a one-eyed veil with stars wrapping around her form like jewels or a fog-like nebula. Striped red paint drips over the panel like blood. Simpson&#39;s Americana, her red, white, and blue&#8208;and Black&#8208;is so reconstructed that it is authorial as opposed to referential. I mean, this isn&#39;t just a commentary on the failures or limitations of the American project. She&#39;s calling it as she sees it. Indeed, the figure wears a veil that covers one eye, but she doesn&#39;t look shrouded, so much as she appears as a wise watcher, testifying. Here, the DuBoisian &#8220;veil&#8221; of race is implied. It is a vexing metaphor, one we sometimes pretend to use handily, but the way it confounds is in fact an attestation to what a veil does and what race does. It depends on both seeing and misunderstanding, to appear and to be disappeared, a border between one world and another that is diaphanous and resilient. DuBois refers to the second sight that experiencing Blackness offers African Americans, but it also marks a &#8220;second site&#8221;: a relation in the Republic of being subjected, objectified, and knowledgeable all at once.  
<br/><br/>
Simpson&#39;s physical as well as intellectual labor is apparent in the painting. We can see that physical effort was required to make this grand form. Remember Harriet Jacobs&#39;s gimlet from her classic slave narrative <i> Incidents in the Life of a Slave Girl? </i> The little metal object she used to bore a hole in the wall of her garrett—her cramped, disabling, vermin-filled hiding place, the subterfuge that allowed her freedom from enslavement? That tool gave her the loophole of retreat, that aperture through which she could see the world on her own terms. The gimlet was not a metaphor, it was a tool. 
<br/><br/>
Jacobs wrote: <br/>
<span className="indentation"> One day I hit my head against something, and found it was a gimlet…. I groped around; and having found the side next the street, where I could frequently see my children, I stuck the gimlet in and waited for evening. I bored three rows of holes, one above another; then I bored out the interstices between. I thus succeeded in making one hole about an inch long and an inch broad. I sat by it till late into the night, to enjoy the little whiff of air that floated in. In the morning I watched for my children. </span>
<br/><br/>
Jacobss observation was not a passive act. That the loophole allowed her to see without being seen was important. Simpson&#39;s <i> Observer </i> also required labor to create and the physicality of the endeavor adds to its meaning. But she is not only seen, she is huge: a defiance to history&#39;s obfuscations. 
<br/><br/>
In a third large figurative piece titled <i> All Night </i> &#40;2021&#41;, there is only one place where the blue is shown: the bluestone at the figure&#39;s feet. The rest appears as shades of Black and gray, but of course the darkest night also suggests blue. Pared down in color, I focus on the constellations. I linger on Andromeda. In Greek mythology, the beautiful Ethiopian daughter of King Cepheus and Queen Cassiopeia was held captive. It was how she saved her people. When Poseidon sent a sea monster to destroy their Kingdom, she sacrificed her life, chained to a rock, but was ultimately rescued by Perseus. It is a romance.
<br/><br/>
<i> Hmm. </i> Andromeda is bound. But Polaris, or what we call the North Star, the &#8220;Pole star,&#8221; is potentially freeing. It is the brightest star in the night sky thus making it useful for navigation. Constellations were especially useful for unlettered people. They were stable in a terrorizing condition, and by that I mean the horror of unfreedom combined with the ever-present threat of unexpected trauma. Later still, in the Nadir, they continued to use the sky to see. Herein we might see the celestially informed freedom dreaming that persisted as a &#8220;zenith-informed&#8221; practice. We can say Blackness in the Americas began not only in abjection but in an imaginative futurism that was sustained through waves of disappointment. &#40;Cue Earth Wind and Fire&#39;s song &#8220;Keep Your Head to the Sky.&#8221;&#41; 
<br/><br/>
Simpson attests to this by making constellations of Black women. They tell stories and history. They also reorder knowledge, attesting to the value of both study and creation. Most of all, to my mind, is that they guide us through the bitter and sweetness of the blues.
    </p>
    <span className="footnotes imani">
    <p>
    <ol>
        <li id="fn1"> Mitchell, Michele. &#8220;Nadir.&#8221; Essay. In <i> Keywords for African American Studies, </i> edited by Erica R. Edwards, Roderick A. Ferguson, and Jeffrey O.G. Ogbar, 115-121. New York, New York: NYU Press, 2018. <a href="#ref1">↩</a></li> <br/>
        <li id="fn2"> Toni Morrison, <i> Playing in the Dark: Whiteness and the Literary Imagination </i> &#40;Vintage Books, 1992&#41;. <a href="#ref2">↩</a></li> <br/>
    </ol>
    </p>
    </span>
    <br/><br/><br/><br/><br/><br/> */}

    {/* <div style={{ display: "flex", flexDirection: "column" }}>
      <SignatureContainer src={AngeliqueTitleCard} alt="Angelique Title Card" className="titlecard" />
    </div>
    <br/>
    <p className="Angelique-Rosales-Salgado-04">
What can we make of sabotage? The kind that is deviant, intuitive, and cunning, uncertain about repair but searching for leverage that declares release, enables it. What seeds transformation other than infectious energy—running, ruining, rioting; consider prophecy intervened upon. In vengeance, in approximation of ruin, in tender disintegration, in crisis, does it find renewal?
<br/><br/>
<span className="indentation justified "> Disaster struggling for attention not a	riot or a ruins but a paradise of ruins<sup><a href="#fn1" id="ref1">1</a></sup> </span>
<br/><br/>
Known as a poet, and by way of poetry&#39;s rigor and rhythm, Harmony Holiday is as prolific a writer as she is an archivist, filmmaker, dancer, interlocutor, and critic. Her practice fixates on themes of music, ancestry, death and rebirth, celebrity, and the visual and literary languages of Black sociality / life. What she calls the &#8220;interdisciplinary t&#40;h&#41;rust in Black cultural production&#8221; sees her practice disseminate between the page, the &#40;back&#41;stage, the archive, the gallery, and now, the party. 
<br/><br/>
Harmony&#39;s first solo exhibition <i> BLACK BACKSTAGE </i> &#40;March 21&#8208;May 25, 2024&#41;, co-organized by Legacy Russell and I, debuted this past spring at The Kitchen in New York City. Comprising a new short film, a series of text and image-based screen prints on fabric, and a sonic composition set within an environment of installations, the exhibition transformed the idea of the backstage into both site and specter. A space where Harmony positions collective improvisation and the life it endures, without codification, as the root of Black music, theater, dance, and performance. She lingers with and within the backstage frequently, not just as a place to go, end up, or return to, but as an ever-evolving, indeterminate presence and orientation. In BLACK BACKSTAGE, she assembles her research, archival practice, image-making, and writing alike into an immersive visual grammar. 
<br/><br/>
The project, in its prescience, is ongoing. It builds upon Harmony&#39;s latest book <i> MAAFA </i> &#40;2022&#41;, an epic poem that follows a Black female &#40;anti&#41;hero&#39;s journey. The term <i> maafa </i> is a Swahili word meaning &#8220;great disaster&#8221; or &#8220;terrible occurrence,&#8221; often used by Black people across a global diaspora in reference to the enduring legacy and epigenetic trauma of the transatlantic slave trade.<sup><a href="#fn2" id="ref2">2</a></sup> The work itself deals with the archetypes and sounds that form in and of the ruins after genocide and displacement, spilling into how Black music is born from these ruins and becomes their archive&#40;s&#41;. Forthcoming in May 2025 via independent publisher Semiotext&#40;e&#41; is Harmony&#39;s &#8220;book of essays and muses&#8221; called <i> Life of the Party </i> —an archive and annotation of Black music-performance culture, and a record, a script, a ledger for the exhibition. 
<br/><br/>
<div style={{ display: "flex", flexDirection: "column" }}>
  <SignatureContainer src={LifeoftheParty} alt="Life of the Party by Harmony Holiday (New York_ Semiotext(e), May 27, 2025)" className="textinnerimg ver angelique" />
</div>
<br/>
Harmony thinks as an artist, but witnesses as a poet. Her poetry, prose, and criticism achieves a clearing that breaks the spell of archetypes, reworking new ones onto considerations attuned to lyrical intensity, tone, and cadence. Her work on the page includes five collections of poetry, an in-progress memoir <i> Love is War for Miles </i> and a forthcoming biography on Abbey Lincoln. These are amplified by her recurring Substack <a href="https://harmonyholiday.substack.com/about" target="_blank" className="styled"> <i> Black Music and Black Muses </i> </a> —a space unrestricted by the demands, wishes, and timelines of the music industry. Daughter to &#8220;cowboy-musician&#8221; Jimmy Holiday, Harmony was born in Waterloo, Iowa and grew up in Los Angeles, California where she is currently based after stints in the Bay Area and New York City. Her father&#39;s birth name was James Brown; as he developed as a soul singer and realized he needed a new name, he picked the surname of a woman whose music he adored. &#8220;By inheritance or luck,&#8221; Harmony writes that she &#8220;live[s] in [Billie Holiday&#39;s] name.&#8221;<sup><a href="#fn3" id="ref3">3</a></sup> 
<br/><br/>
The mythic bears on Harmony&#39;s work just like it does on the city of Los Angeles. She entangles myth, archetype, and biography, finding pleasure in allowing each to lose their distinction in her writing: &#8220;secrets that can only be contained in poems.&#8221;<sup><a href="#fn4" id="ref4">4</a></sup> Their convergence holds all kinds of desires, resistances, and fracturings that can remain fugitive in her practice. Harmony&#39;s essay &#8220;Driving with O.J. Simpson&#8221; evocatively mirrors her family to that of the football superstar&#39;s, revealing his trial&#39;s impact on her and on a mid-&#39;90s era of LA.<sup><a href="#fn5" id="ref5">5</a></sup> The title of Harmony&#39;s third collection of poems <i> Hollywood Forever </i> &#40;2017&#41;—a book wherein the legacies of figures like Miles Davis, Martin Luther King, Prince, Malcom X, Billie Holiday, and Michael Jackson are distilled into poem and image unseparated—actually takes its name after a cemetery in Santa Monica. &#8220;As America becomes more cemetery than republic each day, its satisfying to objectify it the way it has objectified us,&#8221; Harmony says of the book in an interview with <i> BOMB Magazine. What fantasy is more obscene than a static forever in which the current world order plays out in an eternal reel?<sup><a href="#fn6" id="ref6">6</a></sup> </i>
<br/><br/>
<div style={{ display: "flex", flexDirection: "column" }}>
  <SignatureContainer src={BillieHoliday} alt="Billie Holiday during her last recording session, March, 1959, New York, Photo by Milt Hinton" className="textinnerimg ver angelique" />
</div>
<br/>
On a scenic register, Harmony takes up how the vagaries of fame, capital, and industry &#40;in the shadows of Hollywood, as much as anywhere else&#41; &#8220;hunt and haunt&#8221; Black music and performance. <i> Haunts are the universal muses.<sup><a href="#fn7" id="ref7">7</a></sup> </i> Celebrity, then, is the material outcome manufactured by these social phenomena—synchronous, pervasive, and inextricably linked to the complicity and consumptiveness demanded by white spectatorship. Fame and capital covet and sanction ownership, inflicting projected selves and expectations &#40;read: exploitation&#41; upon artistry and creative freedom. &#8220;I like the term muses in the sense that it has a lot of valences to it,&#8221; Harmony recounts to me on the phone. &#8220;There is this cryptic use in it; something about it feels rebellious, to use the term as someone who it has acted upon. Black culture is the muse of the past two centuries.&#8221;<sup><a href="#fn8" id="ref8">8</a></sup>
<br/><br/>
These concerns and intentions evolve in Harmony&#39;s deepened engagement with a more insidious industry archetype—the handler. The word itself sort of obfuscates and evades its own definition, as ubiquitous as it is specific. On paper, the handler is like a round-the-clock &#8220;manager&#8221; for an artist, particularly a performer or musician. TikTok users are probably the most unflinching source of information on the term &#40;Google won&#39;t get you very far&#41;, naming how their primary goal is to know about your ins and outs, your whereabouts, and to wield their power to make decisions that uproot any alignment in your &#8220;path.&#8221; Harmony&#39;s recent Substack essay &#8220;On Handlers &#40;1&#41;&#8221; mythologizes the origin of the handler through Nina Simone&#39;s rendition of the song from the 1935 opera <i> Porgy and Bess, </i> &#8220;I Loves You, Porgy&#8221; &#40;1959&#41;. They are &#8220;a trusted traitor who tempts, taunts, tempers you,&#8221; Harmony writes. In effect, control cosplays as care, timing, and discretion. &#8220;Your image sells myths called &#8242;units,&#39; merchandise, and so you are given sweet luxurious surveillance, the kind that mimics companionship.&#8221;<sup><a href="#fn9" id="ref9">9</a></sup>
<br/><br/>
How visceral and unsettling the writing is here takes it past a speculative realm. <i> A handler wants his hand or fist in the mouth of the muse, cranking and culling.<sup><a href="#fn10" id="ref10">10</a></sup> </i> &#8220;Hungry ghosts&#8221;—Harmony&#39;s other name for them. She continues, proposing that we consider grounding what she is talking about in real experience, in a &#8220;someone&#8221; who is more discernible than they are made out to be. The &#8220;who&#8221; in question: 
<br/><br/>
<span className="indentation"> Handlers besides the divas husbands [Nina Simone&#39;s, Aretha Franklin&#39;s, Whitney Houston&#39;s, Billie Holiday&#39;s]—those deadbeat managers who make you think you need them to make it to gigs, all fake friends and jealous lovers of those dying of fame, anyone who believes a sex party can solve the crisis of sensuality, Clive Davis, Sean Combs [note the prevalent gender dynamics at play], Ye&#39;s dentists, the silent billionaire backers of artists, the shady curators who answer to the backers, all the PR teams of those dying of celebrity, most of the people on any celebrity&#39;s payroll.<sup><a href="#fn11" id="ref11">11</a></sup> </span>
<br/><br/>
As much dissent as it is retribution, this exploration drives home the notion of what <i> Life of the Party, </i> as a phrase and a &#8220;talking book,&#8221; really means. &#8220;It&#39;s the life force that you are literally cannibalizing to run your shit,&#8221; Harmony says, &#8220;and how that can look being backstage.&#8221;<sup><a href="#fn12" id="ref12">12</a></sup> The text will go from performance, and writing related to performance, to expanded imagery, annotations, and writing related to being <i> behind </i> performance. Her essay that meditates on Thelonius Monk and doubled as the score for her newest filmic work by the same name, <i> Abide With Me </i> &#40;2024&#41;—narrated for the screen by her dear friend, poet, and theorist Fred Moten—will be included in the book, along with a long time coming essay on Lonnie Holley. Fantasy, pleasure, and power become a little more cruel in the context of how Harmony troubles this &#40;after&#41; party &#40;the party itself becomes the archetype&#41;, where depravity—disguised in an erotic sense as sensuality, trust, access, freedom—incentivizes itself and becomes pathologically consumptive. 
<br/><br/>
There is a specific kind of interior consciousness to Harmony&#39;s work that makes you think language might be capable of doing just about anything. Leaping beyond writing about ideas, every part of her writing reads as an idea in and of itself. Her versatility as a critic, able to see and convey the same curiosity and vulnerability in herself, as in other artists and collaborators, understands the need not only to engage critically or document, but to protect. It is a visceral sensibility that only comes from &#8220;taking your ass somewhere.&#8221;<sup><a href="#fn13" id="ref13">13</a></sup> From knowing, and not necessarily caring, that the reader might arrive without a prior understanding of the thing you are talking about. But, that they will stay for your voice. It is an unrestrained and devoted attentiveness that finds lineage in the legendary Margo Jefferson, and the late greats Greg Tate and Amiri Baraka. From Baraka, with whom she shared a friendship after first meeting in 2009, Harmony  writes that she learns to &#8220;transition from belief to thought to idea to condition to action to living, breathing, event… comprehend[ing] and occupy[ing] the controversial space wherein the militant and the taboo meet and circle one another in a ritual harvest dance.&#8221;<sup><a href="#fn14" id="ref14">14</a></sup> 
<br/><br/>
The reserves of memory are a contested space, 
<br/><br/>
<span className="indentation"> <i> There you go again even begging your memory to behave like a promise<sup><a href="#fn15" id="ref15">15</a></sup> </i> </span>
<br/><br/>
<span className="light-indentation"> where I find Harmony fluttering, navigating the depths of Black remembrance. Courting loss into presence and disillusions, fantasies, grievances, or affections unshared into insistences. In a physical realm, she looks for and identifies what is loose through listening—soundplay. Some truths can be heard but not seen; truths that don&#39;t heed to our facing them before becoming. <i> These are my obsessions seduced into a second childhood.<sup><a href="#fn16" id="ref16">16</a></sup> </i> She unearths and samples speech &#40;shouts, voices, whispers&#41;, bits of performance recordings, murmurs backstage, interview excerpts, and rehearsal ongoings to create durational sonic compositions. </span>
<br/><br/>
<span className="indentation"> <i> I&#39;m addicted to the archives that hold and withhold them like unasked and unanswerable questions, whims, impossible to assimilate until a part of ourselves breaks open to allow them in as this hope to comprehend what we are witnessing that is gone and reemerging in the same moment all the time.<sup><a href="#fn17" id="ref17">17</a></sup> </i> </span>
<br/><br/>
<i> Paradise of Ruins </i> &#40;2024&#41; is one such hour-and-fourteen-minute-long sound work forming part of her latest series in <i> BLACK BACKSTAGE. </i> Hear Tina Turner banter backstage with one of The Ikettes about the way she has been <i> looking </i> at Ike &#40;&#8220;nobody ever looks at Ike,&#8221; she retorts at Tina&#41;, or Michael Jackson deliberate about fame in a 1987 interview: &#8220;sometimes I want to sneak into places and not have any hoopla,&#8221; or John Coltrane talk about how the saxophone as an instrument &#8220;brings you to your limits,&#8221; or Azealia Banks live on Instagram from a New York City street corner yelling, &#8220;Bitch… Girl, it&#39;s not me, sis! It&#39;s not me!&#8221; when a fan approaches her, or Ye on the interview series <i> Drink Champs </i> exclaim and repeat, &#8220;I&#39;m Michael now! I am the richest [Black man] in history.&#8221; In sequence, forming an unrelenting, inconclusive chorus—&#8220;these snatches of the taboo and tainted margins of Black music&#8221;<sup><a href="#fn18" id="ref18">18</a></sup>—enveloping the gallery. The piece is a sort of prelude to a future album accompaniment Gospel-rendition of <i> MAAFA </i> that Harmony is developing with producer and composer Kelman Duran.
<br/><br/>
&#8220;Im in a position to see where words and music rely on each other, to avenge where music wants to go but can&#39;t,&#8221; Harmony continues.<sup><a href="#fn19" id="ref19">19</a></sup> Her arts collective and publishing imprint, Mythscience, broadens what this pursuit asks of music. Mythscience reissues and reprints work from the archive and presents a performance and conversation series at the club-venue 2220Arts + Archives in Los Angeles, where Harmony curates an archive of griot poetics. Last August, on the occasion of James Baldwin&#39;s centennial, she presented an intimate solo performance of new material by saxophonist and composer Matana Roberts, followed by a closing DJ set by Kumi James &#40;BAE BAE&#41; featuring some of Baldwins record collection. 
<br/><br/>
Baldwin is a recurring figure in Harmony&#39;s research and writing—someone who she calls <i> the life of the party. </i> Her one-man play turned film, <i> God&#39;s Suicide </i> &#40;2020&#41;, &#8220;takes Black male vulnerability as its central subject.&#8221; By way of archival research as personal history, it focuses on Baldwin and her father: &#8220;Two Jimmys I love and who teach me their startling immortality daily deserve the space to discuss their demons as much as their gifts.&#8221; It is constructed around Baldwin&#39;s rarely acknowledged five suicide attempts to examine the interplay between creative and destructive forces in a society structured by white supremacy. &#8220;How does [Baldwin&#39;s] lust for death complicate his effectiveness at life, his legacy?&#8221; she asks in an essay titled &#8220;Preface to James Baldwin&#39;s Unwritten Suicide Note,&#8221; proposing, &#8220;The versions of him who almost went under… are the ones in need of our love and recognition.&#8221;<sup><a href="#fn20" id="ref20">20</a></sup>
<br/><br/>
<span className="centered"> <i> What made you want to die? What let you live? What does survival mean to you?<sup><a href="#fn21" id="ref21">21</a></sup> </i> </span>
<br/>
<div style={{ display: "flex", flexDirection: "column" }}>
  <SignatureContainer src={JamesBaldwin} alt="James Baldwin, Abbey Lincoln, and Max Roach attend the premiere of 'For Love of Ivy' at Loew's Tower East Theater, New York, July 16, 1968. Photo by Ron Galella. Ron Galella Collection via Getty Images" className="textinnerimg ver angelique" />
</div>
<br/>
Harmony and I have remained in continued conversation ever since her solo exhibition in New York City. Our exchange of attitudes across coasts, as friends and collaborators, often riffs on how life structures performance and vice versa. With a group of friends and artists, we&#39;ve recently started a bimonthly series of microreviews of live work on Substack called <a href="https://performancereviews.substack.com/p/performance-review" target="_blank" className="styled"> <i> Performance Review </i> </a> —an archive or inventory in real time &#40;ritualized remembering by storytelling&#41; that will evolve into a project in print.<sup><a href="#fn22" id="ref22">22</a></sup> Voice and gesture feel unabridged no matter how she and I chat. Harmony can be cryptic but all the more divulging when trust insists on it; playfully withholding, instead, if she senses a shift in the room. Her skepticism is also generous. Frequently questioning art&#39;s collusion with propaganda and American politics in the mainstream, or contemplating someone&#39;s character because of their proximity or surrender to the same empire. <i> The widening silence of the genocide denialists already revving their retreat into deeper fragility as if victims of circumstance themselves.<sup><a href="#fn23" id="ref23">23</a></sup> </i> It comes from the integrity and rigor her own work wants of her, and in turn, asks of others. 
<br/><br/>
Her diction is soft, you could say dry, but perceptive, sharp, loud with candor, wit, and laughter. She toys often with astrology, how it&#39;s fun to use before it gets cultish: &#8220;Sometimes the way the cosmic order works, especially during retrograde, you dont have to say much to get all the information you need.&#8221;<sup><a href="#fn24" id="ref24">24</a></sup> Harmony&#39;s conviction &#40;she would call it a Taurean impulse&#41; seems to prolong or subvert whatever retrograde means in this sense, wherein seeking out or understanding what you need isn&#39;t just intuited but contended with, and nurtured in company. The very Black polymaths that she obsesses over and finds herself in company and collaboration with &#40;ancestors and contemporaries, interchangeable&#41;—sharing confessions, troubles, friendship, heartbreak, intimacy with—are as much reflections of the pluralities of her work as they are of herself.
<br/><br/>
I remember Legacy once describing Harmony, in her practice, as an &#8220;agitator&#8221; and I like that word; it exists outside of the didacticism that fails to hold both lived experience and imagination, and the fissures between the two, as forms of knowledge. &#8220;It seems impossible to heal without retribution,&#8221; Harmony says, &#8220; I was starting to feel on a spiritual level that someone has to watch out for the soul of things basically.&#8221;<sup><a href="#fn25" id="ref25">25</a></sup> In other words, who looks after legacy? And why shouldn&#39;t this work be in constant pursuit of the present? In conversation with artist and choreographer Ligia Lewis, scholar Tavia Nyong&#39;o suggests, &#8220;The ruse of representation is thinking that we&#39;ll ever compensate for the lack [historical rationality] finds in us by filling in the gaps and propping dead and decaying institutions up.&#8221;<sup><a href="#fn26" id="ref26">26</a></sup> This lack finds Harmony making new forms of herself, tearing at the structures that try to contain her. The &#8220;risk adversity&#8221; coaxed by academia, for one. The tacit but very real ceiling that the literary and publishing worlds impose on poets, another. 
<br/><br/>
Carrying a spirit of delusion is often what is radical in the face of a quote-unquote art world whose institutionalized norms deny so many daily realities, reinforcing and pouring into the supremacist logics they emerge from to begin with. Belief here is strategic and insurgent, holding just enough of the right kind of deceit and dissent to collectively undo and reimagine the institutional frame entirely. Rather, despite the existing conditions that try to stifle experimental work, a disruptive ethic empowers a more generative type of risk to emerge—one that suspends, tests, or surrenders to the limits of a certain kind of care, together. By which I mean, taking care of one another. Art &#40;in its emergence and becoming&#41;, and live work in particular, creates the presence and slippage necessary to deepen the measure of our lives, our attention, breath, desire, if we are open enough to throw ourselves into it. 
<br/><br/>
Continuously looking for ways to trouble the process of writing to feel like she&#39;s grappling with it in a more physical way, Harmony asks, &#8220;Why arent we all doing more embodied work?&#8221;<sup><a href="#fn27" id="ref27">27</a></sup> For her, calling upon the body means creating a space for ideas to give permission to put things together in ways society is always butting up against, deputizing style and language while doing it. Her one qualm with becoming a writer, she notes, was that it would &#8220;not be strenuous enough.&#8221; [Laughter]. &#8220;I just get to a certain point where things need to move energy—the collapsing of all the identities that genres carry, but above all that, how does it actually feel?&#8221;<sup><a href="#fn28" id="ref28">28</a></sup> 
<br/><br/>
She is now dreaming up a future project that sets out to reimagine <i> Cry, </i> the 1971 ballet in three sections by visionary Alvin Ailey, choreographed for legendary Judith Jamison, and featuring music by Alice Coltrane, Laura Nyro, and Chuck Griffin. Her premise is to stage the body &#40;her body&#41; in a filmic and diaristic process as she learns the work&#39;s choreography, creating a durational recording shaped by the indeterminant scale, sensations, and cycles of training, rehearsing, aging. Harmony&#39;s first entry into artistic creativity was dance: <i> I write first from instinct, but because I grew up dancing ballet and other forms with the intensity of any would be child actor who doesn&#39;t know quite what mire she&#39;s appeased when she goes on stage or across the floor.<sup><a href="#fn29" id="ref29">29</a></sup> </i> Harmony tells me writing is just like air to her. Not unlike this, writing brings her back to a sense of why she wants to experiment. &#8220;As agency — as an act with consequences,&#8221;<sup><a href="#fn30" id="ref30">30</a></sup> in Toni Morrison&#39;s words, considering how and what writing might retrieve, compel, or affect beyond the page. <i> What if we carry everything we&#39;ve escaped with us, as haunt, quiet rage, unresolved tension with God or spirit or some yet-unnamed realm, which has named us its marks?<sup><a href="#fn31" id="ref31">31</a></sup> </i>
    </p>
    <span className="footnotes angelique">
    <p>
    <ol>
        <li id="fn1"> Harmony Holiday, <i> MAAFA </i> (New York: Fence Books, 2022), 47. <a href="#ref1">↩</a></li> <br/>
        <li id="fn2"> Direct quote; Originally published in Harmony Holiday: <i> BLACK BACKSTAGE </i> at The Kitchen at Westbeth &#40;March 21&#8208;May, 25, 2024&#41;, <a href="https://assets.ctfassets.net/a9iaiu8vcml1/6d119snSe9MWfcaY8wRnEg/4c99723d5565bc965af66db409555d47/20240313_HHBLACKBACKSTAGE_ExhibitionPamphlet.pdf" target="_blank" className="styledli"> Exhibition Pamphlet. </a> 
        <a href="#ref2">↩</a></li> <br/>
        <li id="fn3"> Harmony Holiday, “Letters,” <i> Harper&#39;s Magazine. </i> <a href="https://harpers.org/archive/2024/05/letters-may-2024/" target="_blank" className="styledli"> https://harpers.org/archive/2024/05/letters-may-2024/ </a> <a href="#ref3">↩</a></li> <br/>
        <li id="fn4"> Harmony Holiday &#40;@Harmony_Holiday&#41;, Twitter, September 21, 2024. <a href="https://x.com/Harmony_Holiday/status/1837646958212878807?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet" target="_blank" className="styledli"> https://x.com/Harmony_Holiday/status/1837646958212878807?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet </a> <a href="#ref4">↩</a></li> <br/>
        <li id="fn5"> Harmony Holiday, “Driving with O.J. Simpson,” <i> The Paris Review, </i> July 19, 2024, <a href="https://www.theparisreview.org/blog/2024/07/19/driving-with-o-j-simpson/" target="_blank" className="styledli"> https://www.theparisreview.org/blog/2024/07/19/driving-with-o-j-simpson/ </a>. <a href="#ref5">↩</a></li> <br/>
        <li id="fn6"> Direct quote; Harmony Holiday by Farid Matuk, <i> BOMB Magazine, </i> July 26, 2017, <a href="https://bombmagazine.org/articles/2017/07/26/harmony-holiday/" target="_blank" className="styledli"> https://bombmagazine.org/articles/2017/07/26/harmony-holiday/ </a> <a href="#ref6">↩</a></li> <br/>
        <li id="fn7"> Direct quote; Harmony Holiday, &#8220;Spectacular Brooding,&#8220; <i> Black Music and Black Muses, </i> Substack, May 14, 2021, <a href="https://harmonyholiday.substack.com/p/spectacular-brooding" target="_blank" className="styledli"> https://harmonyholiday.substack.com/p/spectacular-brooding </a>. <a href="#ref7">↩</a></li> <br/>
        <li id="fn8"> Harmony Holiday, Angelique Rosales Salgado, personal communication, August 2024. <a href="#ref8">↩</a></li> <br/>
        <li id="fn9"> Direct quote; Harmony Holiday, “On Handlers (1),” <i> Black Music and Black Muses, </i> August 20, 2024. <a href="https://harmonyholiday.substack.com/p/on-handlers-1" target="_blank" className="styledli"> https://harmonyholiday.substack.com/p/on-handlers-1 </a> <a href="#ref9">↩</a></li> <br/>
        <li id="fn10"> Ibid. <a href="#ref10">↩</a></li> <br/>
        <li id="fn11"> Ibid. <a href="#ref11">↩</a></li> <br/>
        <li id="fn12"> Harmony Holiday, Angelique Rosales Salgado, personal communication, August 2024. <a href="#ref12">↩</a></li> <br/>
        <li id="fn13"> Harmony Holiday, Angelique Rosales Salgado, personal communication, August 2024. <a href="#ref13">↩</a></li> <br/>
        <li id="fn14"> Harmony Holiday, &#8220;Amiri Baraka Changed My Life, Celebrating Amiri in Sonics this April,&#8221; <i> Genius, </i> <a href="https://genius.com/Harmony-holiday-amiri-baraka-changed-my-life-celebrating-amiri-in-sonics-this-april-annotated" target="_blank" className="styledli"> https://genius.com/Harmony-holiday-amiri-baraka-changed-my-life-celebrating-amiri-in-sonics-this-april-annotated </a> <a href="#ref14">↩</a></li> <br/>
        <li id="fn15"> Harmony Holiday, <i> MAAFA </i> &#40;New York: Fence Books, 2022&#40;, 83. <a href="#ref15">↩</a></li> <br/>
        <li id="fn16"> Ibid., 17. <a href="#ref6">↩</a></li> <br/>
        <li id="fn17"> Harmony Holiday, &#8220;Please don't cut me off in the middle of this prayer.&#8221; <i> Black Music and Black Muses, </i> Substack, December 5, 2022, <a href="https://harmonyholiday.substack.com/p/please-dont-cut-me-off-in-the-middle?utm_source=publication-search" target="_blank" className="styledli"> https://harmonyholiday.substack.com/p/please-dont-cut-me-off-in-the-middle?utm_source=publication-search </a> <a href="#ref17">↩</a></li> <br/>
        <li id="fn18"> Harmony Holiday: <i> BLACK BACKSTAGE </i> at The Kitchen at Westbeth &#40;March 21&#8208;May, 25, 2024&#41;, <i> Paradise of Ruins </i> &#40;2024&#41; <a href="https://assets.ctfassets.net/a9iaiu8vcml1/6yjKCppum3YZf8BU0rGf08/2c68f4cb0d58062784b61361eb43bd7b/HarmonyHoliday_ParadiseofRuins_LinerNotes.pdf" target="_blank" className="styledli"> Liner Notes, </a> <a href="#ref18">↩</a></li> <br/>
        <li id="fn19"> Harmony Holiday, Angelique Rosales Salgado, personal communication, August 2024. <a href="#ref19">↩</a></li> <br/>
        <li id="fn20"> Harmony Holiday, &#8220;Preface to James Baldwin&#39;s Unwritten Suicide Note,&#8220; <i> Poetry Foundation, </i> August 8, 2019, <a href="https://www.poetryfoundation.org/blog/open-door/80254/preface-to-james-baldwins-unwritten-suicide-note" target="_blank" className="styledli"> https://www.poetryfoundation.org/blog/open-door/80254/preface-to-james-baldwins-unwritten-suicide-note  </a> 
        <a href="#ref20">↩</a></li> <br/>
        <li id="fn21"> Ibid. <a href="#ref21">↩</a></li> <br/>
        <li id="fn22"> &#8220;What It Is,&#8221; 
        <i> Performance Review, </i> Substack, October 1, 2024, <a href="https://performancereviews.substack.com/p/performance-review" target="_blank" className="styledli"> https://performancereviews.substack.com/p/performance-review </a> 
        <a href="#ref22">↩</a></li> <br/>
        <li id="fn23"> Harmony Holiday, &#8220;For Bisan Owda, a Living Avenging Angel in Gaza,&#8221; <i> Black Music and Black Muses, </i> Substack, November 5, 2023, <a href="https://harmonyholiday.substack.com/p/for-bisan-owda-a-living-avenging" target="_blank" className="styledli"> https://harmonyholiday.substack.com/p/for-bisan-owda-a-living-avenging </a>. <a href="#ref23">↩</a></li> <br/>
        <li id="fn24"> Harmony Holiday, Angelique Rosales Salgado, personal communication, August 2024. <a href="#ref24">↩</a></li> <br/>
        <li id="fn25"> Ibid. <a href="#ref25">↩</a></li> <br/>
        <li id="fn26"> Tavia Nyong&#39;o, &#8220;Sharpening My Tools: Ligia Lewis,&#8221; <i> Spike Art Magazine, </i> Spring 2021, <a href="https://spikeartmagazine.com/articles/interview-sharpening-my-tools-ligia-lewis" target="_blank" className="styledli"> https://spikeartmagazine.com/articles/interview-sharpening-my-tools-ligia-lewis </a>. <a href="#ref26">↩</a></li> <br/>
        <li id="fn27"> Harmony Holiday, Angelique Rosales Salgado, personal communication, August 2024. <a href="#ref27">↩</a></li> <br/>
        <li id="fn28"> Ibid. <a href="#ref28">↩</a></li> <br/>
        <li id="fn29"> Harmony Holiday, &#8220;On Keeping a Talking Book,&#8221; Black Music and Black Muses, Substack, June, 6, 2024, <a href="https://harmonyholiday.substack.com/p/on-keeping-a-talking-book" target="_blank" className="styledli"> https://harmonyholiday.substack.com/p/on-keeping-a-talking-book </a>. <a href="#ref29">↩</a></li> <br/>
        <li id="fn30"> Toni Morrison, &#8220;The Nobel Prize in Literature Laureate Lecture&#8221; &#40;Stockholm, Sweden, December 7, 1993&#41; <a href="https://www.nobelprize.org/prizes/literature/1993/morrison/lecture/" target="_blank" className="styledli"> https://www.nobelprize.org/prizes/literature/1993/morrison/lecture/ </a> 
        <a href="#ref30">↩</a></li> <br/>
        <li id="fn31"> Harmony Holiday, &#8220;Nala Sinephro,&#8221; <i> 4Columns, </i> September 6, 2024, <a href="https://4columns.org/holiday-harmony/nala-sinephro" target="_blank" className="styledli"> https://4columns.org/holiday-harmony/nala-sinephro </a>. <a href="#ref31">↩</a></li> <br/>
    </ol>
    </p>
    </span> */}

    </div>
  )
}
