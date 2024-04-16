"use client"

import { ArticleBase } from "@/components"
import { CaptionContainer, HugeGuy } from "@/utils/layout"

import { issue2Metadata } from ".."
import { ArticleContainer, ArticleImage } from "../../styled"

import alexis1 from "../../../../../../public/photos/Alexis_PGumbs_Image1.png"
import alexis2 from "../../../../../../public/photos/Alexis_PGumbs_Image2.png"
import alexis3 from "../../../../../../public/photos/Alexis_PGumbs_Image3.png"

import title from "../../../../../../public/titles/gumbs.svg"
import cover from "../../../../../../public/titles/Jupiter_title_Gumbs.png"
import { ArticleCover } from "../../ArticleCover"

export default function Page() {
  return (
    <ArticleBase
      next={issue2Metadata[2]}
      previous={issue2Metadata[0]}
      issue={2}
      position="0% 90% 0% 0%"
      svg={
        <ArticleCover
          svg={title}
          png={cover}
          title={issue2Metadata[1].title}
          author={issue2Metadata[1].author}
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
        <b>Introduction:</b>
      </p>

      <p>
        Dominique White&apos;s installations live at the place where a particle
        meets a wave—Or to say it more accurately, where particleness meets
        waveness. Studying the ocean as a scene of disaster where colonialism
        turns dispersed space into enslaved time, her installations use remnants
        of ships, ropes, sails, nets, and other weapons of capture, to infer an
        oceanic context. And though the ship became the cruelly enduring model
        for the nation-state, she does not build her installations to survive.
        The artworks themselves, she explains, are precarious, vulnerable to
        rust and their own weight and fragility. Often, you can see evidence of
        their disintegration day by day. A practice of ruin.{" "}
      </p>

      <p>
        I think of her work as a prayer. <br />
        <i>
          May that which destroys all of us finally destroy itself. May we
          somehow outlive this meaning of life.
        </i>
      </p>

      <p>
        Or an experiment.
        <br />
        Which, like other experiments, builds on earlier work. Uses a set of
        previously used materials to consider the possibility of a different
        result. The danger is that sometimes the whole point of those secondary
        experiments is to validate the results of the first. The other danger is
        that the entire scientific method, colonial not only in application but
        at its very soul, is itself a weapon of capture.
      </p>

      <p>
        And yet. There is an older science. For example, Nanny of the Maroons is
        known in Jamaica as “the great scientist” because of her ancestral
        listening and multi-species attunement. She knew how to sing ancestral
        songs that combined the multiple stolen languages of the free. She knew
        when the hot springs would rise and fall—washing away her pursuers. She
        knew how to feed her community on the move. And I say the science that
        she practiced was older than the colonial method. I say the colonial
        method is only a variable in an experiment proving a larger possibility.
        The colonial method and its centuries constitute a troublesome variable
        masquerading as a constant.{" "}
      </p>

      <p>
        Dominique knows what I mean. Her work puts colonialism in its place as a
        variable and asks whether the same materials in their contingency and
        fragility might reveal themselves otherwise. When she adorns a harpoon
        or a net with the same raffia that adorns ceremonial masques she is both
        revealing a masquerade and drawing on very old technologies of
        transformation. With her acts of placement and suspension she is not
        building a scaffolding for a house. She is turning the tools of the
        colonial encounter upon themselves to find their own breaking points
        under our watch. It is up to us to fashion and remember different tools.{" "}
      </p>

      <p>
        So maybe there is no difference between a decolonial experiment and a
        prayer.
      </p>

      <p>Or the song of a whale?</p>

      <p>
        In some of the titles for her installations, Dominique uses the same
        words or references I used in my own prayer experiment of marine mammal
        apprenticeship in{" "}
        <i>Undrowned: Black Feminist Lessons from Marine Mammals</i>. I wondered
        could I use contingent / fragile / culpable tools, in my case the words
        of the English language, to access, or witness a relationship between my
        ongoing love, my queer Black feminist freedom, and the freedom and
        genius of marine mammals? An older relationship than the kinship wrought
        by the ships that captured people and hunted whales for the same goal:
        to fuel and power the colonial project? And so our prayer converges in
        multi-species wonder. This is where we breathe together, inspire each
        other:
      </p>

      <p>
        We want forms that will unharpoon us. What is the angled opposite of
        impale? Exhale?
      </p>

      <HugeGuy />

      <p>
        <b>Attempts</b>
      </p>
      <br />

      <p>
        <b>1</b>
      </p>
      <br />

      <p>
        <b>may they never catch you</b>
      </p>
      <br />

      <p>
        once upon a time this asphalt was air. before that it was under the sea.
        and so the harpoon could have been aimed at you. it could have been.
        aimed at me. one of us showed up in Hiro Murai&apos;s dream. beat on
        Kendrick&apos;s tongue. never catch me is a taunt we had to learn young.
        praise to the daughters of rust. praise to their over-dyed hair. praise
        to the thickness of skin. thanks for the buildings i&apos;m forgetting.
        thanks for the place i begin. at the large hadron collider they only
        throw neutron harpoons the size of a pen. thank you for stopping time
        for me. again. stop it again.{" "}
      </p>

      <ArticleImage alt="Harpoons dug into the sand at shore" src={alexis1} />
      <CaptionContainer>
        Dominique White, <i>May they never catch you</i>, 2022. Cast iron.
        Photographed by Deniz Guzel. Courtesy of the artist, Bold Tendencies,
        and VEDA Firenze.
      </CaptionContainer>
      <HugeGuy />

      <p>
        <b>2</b>
      </p>
      <br />

      <p>
        <b>can we be known without being hunted</b>
      </p>
      <br />

      <p>
        if particle was a wish for you. if particle was a dream. i would wash
        over you with every wave at once.
      </p>
      <p>
        if escape was your only ceremony, the mast your only tree. i would claw
        the makeshift branches. set you free.
      </p>
      <p>
        if timespace was your fashion, the only thing you wore. i would wait for
        you. wait for you anyway. on the shore.
      </p>

      <ArticleImage src={alexis2} alt="Art installation" />
      <CaptionContainer>
        Dominique White, <i>Can We Be Known Without Being Hunted</i>, 2022.
        Kaolin clay, burnt mahogany, sisal, null sail, raffia, cast iron, forged
        iron, rust, and damaged rope. Installation view of &quot;Cinders of the
        Wreck&quot; at Triangle - Astérides, Marseille, 2022. Photographed by
        Aurélien Mole. Courtesy of the artist, Triangle - Astérides, Marseille,
        and Veda, Florence.
      </CaptionContainer>

      <HugeGuy />

      <p>
        <b>3</b>
      </p>
      <br />

      <p>
        <b>
          a fugitive you cannot find a record for is the most successful
          fugitive of all
        </b>
      </p>
      <br />

      <p>
        the fugue i knew was my repair. a healing. my gift to you. my secret
        future. the possibility that i was never there. and if there were
        millions making the impossible believable, like flesh can be bought,
        like time marches on. there were uncountable us, uncounting on purpose.
        unweaving another song.
      </p>

      <p>
        if there were citadels to insist on the knowable and barter it as god,
        there were bush-held temples, arbors, groves unlearning the word as a
        rod. refusing one life as a knife, relevant only to its ends. we
        nourished our pointless destinies. we hid. we loved our friends.
        confessed to vines. and danced with trees.
      </p>

      <p>i prevail when you don&apos;t need to imagine me.</p>

      <ArticleImage src={alexis3} alt="Art installation" />
      <CaptionContainer>
        Dominique White,{" "}
        <i>
          A fugitive you cannot find a record for is the most successful
          fugitive of all
        </i>
        , 2021. Mahogany and cast iron. Installation view of “Hydra Decapita” at
        VEDA, Florence. Photographed by Flavio Pescatori. Courtesy of the artist
        and VEDA, Florence.
      </CaptionContainer>

      <HugeGuy />

      <p>
        <b>Analysis</b>
      </p>

      <p>
        Who showed up?: Alexis, Dominique, Hiro Murai, Kendrick Lamar, My Cousin
        Gretley, NourbeSe, Eric A. Stanley, Fred Moten, Édouard Glissant,
        Christina Sharpe, Dionne Brand, Torkwase Dyson, Sharon Bridgforth, Omi
        Osun Joni L. Jones, Saidiya Hartman, Hortense Spillers, Tavia
        N&apos;yongo, Nanny of the Maroons
      </p>
      <p>
        Where?: the car park, Hiro&apos;s dream, Kendrick&apos;s tongue, the
        buildings i&apos;m forgetting, the Large Hadron Collider, the ceremony,
        the shore, a very good hiding place
      </p>
      <p>
        How?: story, memory, conjecture, dance, praise, observation, gratitude,
        request, wish, dream, cleansing, escape, clawing, waiting, repetition,
        generosity, uncounting, unweaving, unlearning, refusal, nourishment,
        hiding, loving, confession, dancing, release
      </p>
      <p>
        Why?: because of the youth of the built structure and the age of the
        sea. in case particle is a wish for you, a dream. in case escape is your
        only ceremony and mast is your only tree. in case timespace is your
        fashion. because there were millions making the impossible believable.
        because we have destinies. and friends.
      </p>
      <p>
        What (is the next experiment)?: Breathe the words above. Show me what
        happens.
      </p>
    </ArticleContainer>
  )
}
