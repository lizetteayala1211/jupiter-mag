import Link from "next/link"
import { JupiterLogo } from "../JupiterLogo"
import {
  FooterChildren,
  FooterContainer,
  LogoContainer,
  TextContent,
  TextGroup,
} from "./styled"
import { useIsMobile } from "@/utils/hooks"
import { EmailInput } from "../email-input"

export function Footer() {
  const isMobile = useIsMobile()
  return (
    <FooterContainer>
      <FooterChildren>
        <LogoContainer>
          <JupiterLogo color="black" />
        </LogoContainer>
        <TextContent>
          <TextGroup>
            <h4>THE MAGAZINE</h4>
            <br />
            <Link href="./about">About</Link>
            <Link href="./program">Program</Link>
          </TextGroup>
          <TextGroup>
            <h4>JOIN JUPITER</h4>
            <br />
            <div style={{ maxWidth: "250px" }}>
              <EmailInput />
            </div>
          </TextGroup>
          <TextGroup style={isMobile ? {} : { textAlign: "right" }}>
            <h4>THE MAGAZINE</h4>
            <br />
            <Link href="https://artadia.org/jupiter-magazine/">Donate</Link>
            <Link href="./contact">Contact us</Link>
            <br />
            <h5>info@jupiter-mag.com</h5>
            <h5>555 555 5555</h5>
          </TextGroup>
        </TextContent>
      </FooterChildren>
    </FooterContainer>
  )
}
