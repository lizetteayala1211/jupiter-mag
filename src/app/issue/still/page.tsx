"use client"

import { Base } from "@/components"

// styled assets
import {
  Main,
  LogoContainer,
  LogoSection,
  ContentSection,
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

// todo: add back grain to home page so that it doesn&#39;t overlap the lottie file -> might invovle a refactor with how lottie is loaded in
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
          <div className="still-issue-wrapper">
              <a href="https://www.jupiter-mag.com/issue/1" className="still-issue"> ISSUE 1 </a>
              <a href="https://www.jupiter-mag.com/issue/2" className="still-issue"> ISSUE 2 </a>
              <a href="https://www.jupiter-mag.com/issue/3" className="still-issue"> ISSUE 3 </a>
          </div>
        </LogoSection>
        
        <ContentSection>
            
        </ContentSection>

      </Main>
    </Base>
  )
}

