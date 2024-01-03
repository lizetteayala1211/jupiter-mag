import { JupiterLogo } from "../JupiterLogo"
import { FooterChildren, FooterContainer, LogoContainer } from "./styled"

export function Footer() {
  return (
    <FooterContainer>
      <FooterChildren>
        <LogoContainer>
          <JupiterLogo color="black" />
        </LogoContainer>
        <p>other text stuff</p>
      </FooterChildren>
    </FooterContainer>
  )
}
