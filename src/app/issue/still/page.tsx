"use client"

import { Base } from "@/components"

// styled assets
import {
  Main,
  LogoContainer,
  LogoSection,
  FloatingMenuSection,
  SignatureContainer,
  SignaturesSection,
} from "./styled"

import { JupiterLogo } from "@/components"

import { useBreakpoints } from "@/utils/hooks"
import { useIntersectionObserver } from "@/utils/hooks"
import { FloatingMenu } from "@/components/floating-menu"
import camilleSignature from "../../../../public/signatures/camille_white.png"
import dariaSignature from "../../../../public/signatures/daria_white.png"
import "./styles.css"

// todo: add back grain to home page so that it doesn't overlap the lottie file -> might invovle a refactor with how lottie is loaded in
export default function Page() {
  useIntersectionObserver()
  const { isMobile } = useBreakpoints()
  return (
    <Base homePage>
      <Main color="black">
        <LogoSection>
        <LogoContainer>
          <JupiterLogo color="white"/>
          </LogoContainer>
        </LogoSection>

      </Main>
    </Base>
  )
}

