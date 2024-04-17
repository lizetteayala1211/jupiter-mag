"use client"

import { ArticleBase } from "@/components"

import { issue2Metadata } from ".."
import { ArticleContainer, FooterContainer } from "../../styled"
import { BigGuy } from "@/utils/layout"
import title from "../../../../../../public/titles/ayinde.svg"
import cover from "../../../../../../public/titles/Jupiter_title_Ayinde.png"
import { ArticleCover } from "../../ArticleCover"

export default function Page() {
  return (
    <ArticleBase
      next={issue2Metadata[5]}
      previous={issue2Metadata[3]}
      position="0% 90% 0% 0%"
      issue={2}
      svg={
        <ArticleCover
          svg={title}
          png={cover}
          title={issue2Metadata[3].title}
          author={issue2Metadata[3].author}
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
        <i>
          (a story in three acts in three locations at three different points in
          time all of which are given volume by KOKOROKO&apos;s debut album,{" "}
          <b>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=__ebFZ4HxEk&ab_channel=BrownswoodRecordings
"
            >
              <i>Could We Be More</i>
            </a>
          </b>
          )
        </i>
      </p>

      {/* divider */}
      <hr style={{ backgroundColor: "grey" }} />

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <p>
          <i>
            [Quantum Listening is]
            <br />
            listening in every possible way
            <br />
            to everything possible to hear
            <br />
            no matter what you are doing
            <br />
            —Pauline Oliveros<sup>1</sup>
          </i>
        </p>
      </div>

      <p>
        I&apos;m not the kind of person that can tell you the first time I heard
        a song. I wish I was.
      </p>
      <p>
        I wish I could pinpoint moments in time and relive them through their
        associated sonic frequencies. I envy that kind of memory; sensual;
        embodied; tactile. Maybe it&apos;s why I write– to hold a feeling
        aloft/alive, allowing it to become an event that can be returned to and
        lingered in.
      </p>
      <p>
        And so, while I can&apos;t remember the first time I heard KOKOROKO, I
        can write about last night. I can tell you about riding home from
        Peckham to Tulse Hill, their debut album <i>Could We Be More</i> tilting
        the night&apos;s angles into corners and mirrors, pockets of light and
        sound drifting like fishing nets cast at dawn from the helm of small
        boats in the muddy green of the Niger Delta.
      </p>
      <p>
        I can take you on a journey that skips across timelines. A pebble
        kissing the surface of a wide lake. Ripples as storylines. Histories
        intersecting: Eighteen months ago; last night; two days from now. I can
        write about Sweeties, 10 stories in the sky, and the way KOKOROKO bent
        London into a spectrum of subtle light and movement. The way Sheila,
        Onome, Ayo, Cassie, Richie, Tobi, Duane, and Yohan<sup>2</sup> coaxed us
        into reverie and fervor simultaneously. That night I watched a sea of
        braids, afros, shaved heads, and dark skin sway and flex, dip and rise
        against the backdrop of a full moon. It felt like everyone I loved was
        there, even if they weren&apos;t. <i>Could We Be More</i> nudges me to
        remember, to imagine, to love, to turn my thoughts into material and
        scan my body for the places I want to make home from.
      </p>
      <p>And to dance. Always to dance.</p>

      <BigGuy />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a href="https://youtu.be/IVB_HDuwz8Q">Age Of Ascent</a>
        <div>(Last night, February 28, 2024)</div>
      </div>

      <p>
        My friend Jaz and I have just stepped out of FLO Vortex on the last
        Wednesday in February. The smoke from the joint we share still hangs in
        the air between us as I walk toward my bike. Snatches of voice follow me
        as poets and their admirers filter out into the night. I am drifting
        through the evening&apos;s end meeting myself somewhere that deserves to
        be written about, the edge of words sharpening worlds into visions.
      </p>
      <p>
        As I set off into the dark, my bike&apos;s pedals becoming a part of the
        road&apos;s music, &quot;Age Of Ascent&quot; pushes me forward, the wind
        at my back as I wind through the backroads toward East Dulwich. This
        route home is a river I have swum in every weather condition. Tonight
        feels like the beginning of Spring. Not quite warm, but gentle and
        coaxing. The sky arches over me, a cobalt blue. A fox runs alongside me
        briefly before cutting into a garden and disappearing.
      </p>
      <p>
        With each corner I take, the music leans with me. This is space music.
        Black and wide, it wanders a wayward path through beacons from stars 7
        lifetimes away. The conversation between the guitar and the horns feels
        like two lovers dangling their feet from the bank of a river. Their
        reflections discuss what it will take to make a structure out of love.
        More than a home they are trying to imagine/design a solar system of
        care whose planets grow liberation the shape of Banyan trees. Their eyes
        twinkle in the darkness as they sway their limbs in the quiet rhythm of
        intimacy. There&apos;s more than beauty in a reflection. There&apos;s
        the promise of depth, present when someone lets you look at them without
        flinching.
      </p>
      <p>
        Flying down Calton Ave, my thoughts perforate the last of winter&apos;s
        breath, turning it into a flute made of dreams. I shout into the sky and
        hear the horns returning their firm charge: Make something lasting from
        your dreams.
      </p>

      <BigGuy />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a href="https://youtu.be/0XPLlHl8nqc">Ewà Inú</a>
        <div>(In two days, March 1, 2024)</div>
      </div>

      <p>
        I am here <br />
        Here could be anywhere, is <br />
        Everywhere, slips out of sync with itself like a particle antiparticle
        separating at the event horizon of a black hole, wanders* <br />
        In both directions and even as I turn my bike onto Grove Vale, the night
        a soft glaze of streetlights, I am also already two days ahead of myself
        in a warm, brown studio, becoming an improvisation of words and laughter
        with Sheila and Onome.
      </p>
      <p>
        *This is what the music does to me. Spreads me into a spirit of loosely
        dancing electrons, body of water, ripples on the surface of spacetime,
        stream of consciousness. While I still can&apos;t remember the first
        time I heard KOKOROKO, I know the texture of gravity their music
        produces. I have felt their intentions multiplying in my body, turning
        me into an archipelago of fireflies whose blinking bodies chorus with
        invisible cicadas.
      </p>
      <p>Listen at the water&apos;s edge and let the darkness slip into you.</p>
      <p>
        Sheila and Onome are working on the next album. I am listening to them,
        employing Pauline Oliveros&apos;s quantum listening technique as means
        for writing as music-making. I am bearing witness to a friendship that
        glimmers like a smile flashed across a forest clearing. It fizzes and
        shapes the room we are in. As the bandleaders, they arrange most of the
        music even while each member brings songs of their own to be developed
        by the group. Today, they are listening to a song that Onome wrote,
        which has been interpreted by the singer anaiis. Her voice over the
        sparse instrumental arrangement signals a new sound for KOKOROKO. When
        they play it, the room cracks open and my nerves touch the surface of my
        body. We speak about trust and collaboration. Onome plays me the song
        with his original vocals. Sheila plays the version she sang. We listen
        to anaiis again. She has transformed the words into something that
        cannot be described without touch. You&apos;ll have to wait to find out
        what I&apos;m talking about. But as we&apos;ve established, the concept
        of time is as open as you allow it to be. For the next half hour we talk
        about an album as a vessel to create space, share intentions, and find
        ground with people you respect.
      </p>

      <BigGuy />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a href="https://youtu.be/n3xQA5ULmAQ">Soul Searching</a>
        <div>(Eighteen months ago, August 11, 2022)</div>
      </div>

      <p>
        <i>
          A story starts across multiple spacetimes.
          <br />
          There is no beginning; just now.
        </i>
      </p>

      <p>
        Imagine a body moving through a room with the kind of swing that, from
        the outside, would be best described as joy/abandon/life/sunshine.
        Imagine hips winding around the neck of the trumpet, head losing track
        of the beat in the wit of a guitar riff, spine tilting forward like an
        Ernie Barnes painting, unfurling, arms becoming sails lifting him off
        the ground to float in the air above a packed and bubbling room.
        It&apos;s important to remember that while he seems whole, he is
        anything but. No, he is a collection of stories. Some have been passed
        down for millennia, traveling through families, skipping generations,
        showing up uninvited, comforting like old friends. Others have not yet
        been told. They are waiting to shiver in the cold bite of a new day.
        Light tiptoeing across the edge of a horizon: uncertain of how, but
        knowing that it must: Rise. Still other stories are in the process of
        being told right now. They are the reflections in the windows of the
        10th floor bar his body is suspended above, the moon outside full and
        pensive. The story doesn&apos;t start here, of course.
      </p>

      <p>
        A story starts across multiple spacetimes. <br />
        There is no beginning; just now.
      </p>
      <p>
        Earlier that night, KOKOROKO arrived to set up a small stage in the
        curve of a window offering a wide view of London&apos;s skyline. They
        have played before, together, many times, but this time is different.
        They are nervous. They are evolving. Their story is growing new wings.
        This is the album launch for their debut offering,{" "}
        <i>Could We Be More</i>, and as everybody knows, in the words of our
        cosmic mother, Erykah: “I&apos;m an artist, and I&apos;m sensitive about
        my shit.”
      </p>

      <BigGuy />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a href="https://youtu.be/sllPE4Mg4C0">Tojo</a>
        <div>(In two days, March 1, 2024)</div>
      </div>

      <p>
        We are traveling across the boundaries of time like cousins remembering
        old photographs of Grandma&apos;s house. We don&apos;t really know each
        other, but we have known each other forever. Sheila&apos;s cousin is one
        of my oldest friends. Our worlds are as entangled as the complex
        conversations we navigate about race and politics, blackness and
        Palestine, women and the way men are still scared to give up power. As
        the afternoon leaks into the evening we pull in and out of dialogue,
        writing becoming listening becoming questions becoming Onome playing two
        congas muted with a tee-shirt and a hoodie. There are no windows in the
        studio but it feels like there is a gentle cosmic light pouring into the
        room, like we&apos;re sailing out and beyond the reaches of
        London&apos;s busy. From up here, the world beneath us feels possible—as
        if we can address each and every problem by building small temples of
        sound and relation and inviting others in to experience what we&apos;ve
        made together.{" "}
      </p>
      <p>
        More than once silence fills the room as we listen to the spaces between
        our words. Music is made in these pauses. The wry corner of
        Sheila&apos;s smile becomes an arpeggiated chord. Onome&apos;s arms
        stretching up into the air turn a quaver into a semibreve. My pen
        tapping against my rings as I write the silence into a memory provides a
        time signature for the next song.
      </p>

      <BigGuy />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a href="https://youtu.be/KXUv2rYo1eY">Something&apos;s Going On</a>
        <div>(Eighteen months ago, August 11, 2022)</div>
      </div>

      <p>
        Tonight, on the 10th floor of The Standard, in Sweeties, a new story is
        being told. It doesn&apos;t begin with anyone in particular. In the
        thick of a packed room of people—elbows touching waist touching sequin
        dress touching collective elation—a woman stands mesmerized by what she
        is bearing witness to. Vibrating all around her is the rich and complex
        tapestry conjured between KOKOROKO&apos;S eight band members. She sways
        in the middle of a room made of Black memory. She knows these drums from
        her parent&apos;s record collection but she has never seen them played
        live by a man she is ready to fall in love with. She has never watched a
        version of herself play the trumpet with the kind of beautiful,
        half-rhyme-eye-smile of the woman in front of her. She has never heard
        this music before, but her body knows how to communicate with it. She
        sinks into the groove of the evening&apos;s wide curves. Beneath her the
        carpet hums like a conductor. She doesn&apos;t know if anyone else can
        see, but there are small charges of gold light filling the air around
        the band, as if they are conjuring quantum particles from the collective
        reverie of the audience in front of them. Something is happening and all
        she knows is that she wants to be a part of it. Her lungs blossom out of
        her mouth. She has never made a sound this sweet before.
      </p>

      <BigGuy />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a href="https://youtu.be/u2ibhiZRobE">Interlude</a>
        <div style={{ textAlign: "right" }}>
          (Last night, February 28, 2024 <br />
          Eighteen months ago, August 11, 2022
          <br />
          In two days, March 1, 2024)
        </div>
      </div>

      <p>
        Hands off handlebars, I lean back and smile into the arching sky. I know
        that the crest of the wave above me is not going to crash. I know that
        it will form a tunnel for me to run my fingers along. Listen. A hole in
        space and time. Blue. Deep. Churning. The sea has found its way to South
        London. I am swimming.
      </p>

      <FooterContainer>
        <p>
          <sup>1</sup> Oliveros, Pauline. <i>Quantum Listening</i>: 2. London:
          Ignota Books, 2022.
        </p>
        <p>
          <sup>2</sup> KOKOROKO is currently made up of:
          <br />
          Sheila Maurice-Grey - trumpet, vocals
          <br />
          Ayo Salawu - drums
          <br />
          Onome Edgeworth - percussion
          <br />
          Duane Atherley - bass <br />
          Tobi Adenaike-Johnson - guitar
          <br />
          Yohan Kebede - keys and synth <br />
          Anoushka Nanguy - trombone (live shows) <br />
        </p>
      </FooterContainer>
    </ArticleContainer>
  )
}
