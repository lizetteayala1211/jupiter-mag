"use client"

import { ArticleBase } from "@/components"

import { issue2Metadata } from ".."
import { ArticleContainer } from "../../styled"

import title from "../../../../../../public/titles/harper.svg"
import cover from "../../../../../../public/titles/Jupiter_title_Harper.png"
import { ArticleCover } from "../../ArticleCover"

export default function Page() {
  return (
    <ArticleBase
      next={issue2Metadata[6]}
      previous={issue2Metadata[4]}
      position="0% 90% 0% 0%"
      issue={2}
      svg={
        <ArticleCover
          svg={title}
          png={cover}
          title={issue2Metadata[6].title}
          author={issue2Metadata[6].author}
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
        An infinite downpour falls before me, <br />
        a shield as I unsheathe my depth <br />
        to become one with it. <br />
        Submerged within, we hold one another.
      </p>

      <p>
        Gliding off edges of slick palm fronds, <br />
        pelting the dark ground below us, <br />
        I am washed ‘til I transform into it, <br />
        moved with the same velocity <br />
        the same force <br />
        the same ability to cover everything. <br />
        To envelop.
      </p>

      <p>
        Saplings draped in siren songs <br />
        usher us to our source. <br />
        This force, this everything <br />
        froths and flusters around us <br />
        into a soft curtain. <br />
        A swell that ends as abruptly <br />
        as it begins.
      </p>

      <p>
        I have come within inches or less <br />
        of drowning before, <br />
        of existing in realms beyond <br />
        this one we know and trust <br />
        despite its (echoing and resonant) <br />
        uncertainty.
      </p>

      <p>
        Every second of my breathing <br />
        works toward floating better. <br />
        Encasing myself in more ease. <br />
        I wish to be of water, <br />
        for it is the meaning of my name.
      </p>

      <p>
        As orbiting bodies reach points of closest encounter. <br />
        As listening transmutes frequencies to languages of love. <br />
        Particles meet waves, forming prayers. <br />
        Breathing underwater, <br />
        may we discover the depths of heaven.
      </p>

      <p>May we hear the sea.</p>
    </ArticleContainer>
  )
}
