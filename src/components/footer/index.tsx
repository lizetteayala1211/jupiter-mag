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
        <a href="/">
          <LogoContainer>
            <JupiterLogo color="black" />
          </LogoContainer>
        </a>
        <TextContent>
          <TextGroup>
            <a href="/">
              <h4>THE MAGAZINE</h4>
            </a>
            <br />
            <a href="/about">About</a>
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
            <a href="https://artadia.org/jupiter-magazine/" target="_blank">
              Donate
            </a>
            <a href="/contact">Contact us</a>
            <br />
            <h5>info@jupiter-mag.com</h5>
          </TextGroup>
        </TextContent>
      </FooterChildren>
    </FooterContainer>
  )
}
