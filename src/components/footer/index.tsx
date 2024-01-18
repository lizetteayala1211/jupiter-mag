import Link from "next/link"
import { JupiterLogo } from "../JupiterLogo"
import {
  FooterChildren,
  FooterContainer,
  LogoContainer,
  TextContent,
  TextGroup,
} from "./styled"
import { useBreakpoints } from "@/utils/hooks"
import { EmailInput } from "../email-input"

export function Footer() {
  const { isMobile } = useBreakpoints()
  return (
    <FooterContainer className="darker-grotesque">
      <FooterChildren>
        <LogoContainer>
          <JupiterLogo color="black" />
        </LogoContainer>
        <TextContent>
          <TextGroup>
            <Link href="/">
              <h4>THE MAGAZINE</h4>
            </Link>
            <br />
            <Link href="/about">About</Link>
          </TextGroup>
          <TextGroup>
            <h4>JOIN JUPITER</h4>
            <br />
            <div style={{ maxWidth: "250px" }}>
              <EmailInput />
            </div>
          </TextGroup>
          <TextGroup style={isMobile ? {} : { textAlign: "right" }}>
            <br />
            <Link href="https://artadia.org/jupiter-magazine/">Donate</Link>
            <Link href="/contact">Contact us</Link>
            <br />
            <h5>info@jupiter-mag.com</h5>
          </TextGroup>
        </TextContent>
      </FooterChildren>
    </FooterContainer>
  )
}
