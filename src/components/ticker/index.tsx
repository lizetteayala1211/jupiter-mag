import { TickerContainer, TickerContent, TickerItem } from "./styled"

export function Ticker() {
  return (
    <TickerContainer>
      <TickerContent>
        <TickerItem>Distance: 596,143,316</TickerItem>
        <TickerItem>AU: 3.984972</TickerItem>
        <TickerItem>RIGHT ASCENSION: 02H 31M 23S</TickerItem>
        <TickerItem>DECLINATION: +13° 24’ 40”</TickerItem>
      </TickerContent>
    </TickerContainer>
  )
}
