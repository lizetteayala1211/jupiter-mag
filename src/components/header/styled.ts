import { screenLgMin } from "@/utils/constants"
import styled from "styled-components"

export const SolidBackground = styled.div`
  z-index: var(--z-index-four);
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==);
  background-color: var(--color-black);
`
// todo : paddings across the whole thing are a bit random - need to be cleaned up
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 8px 0 24px;
  width: 100%;
  z-index: var(--z-index-six);
`

export const DesktopNavBarContainer = styled.div`
  display: flex;
  gap: 3em;
  border-radius: 8px;
  justify-content: center;
  margin-top: 2em;
  padding: 0 1em;
  font-weight: 700;
  z-index: var(--z-index-seven);
`

export const MobileNavItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 30px;
  text-transform: uppercase;
  z-index: var(--z-index-six);
  font-family: "Alverata Light";
  width: 100%;
`

export const MenuModalContainer = styled.div`
  z-index: var(--z-index-six);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

export const MenuModalBackground = styled.div<{ $issue: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: var(--z-index-five);
  width: 100%;
  height: 100%;
  /* background: linear-gradient(
    0deg,
    ${(props) => (props.$issue === 1 ? "#dcb0e0" : "var(--color-blue)")} 1%,
    ${(props) =>
        props.$issue === 1
          ? "rgba(157, 208, 252, 0.02) 99%"
          : "var(--color-black) 99%"}
      1%
  ); */
  background-color: black;
`

export const ExitMenuModalButton = styled.a`
  border-radius: 0.9375rem;
  padding: 0 1em;
  z-index: 1000;
`

export const LogoContainer = styled.a`
  @media (min-width: ${screenLgMin}) {
    width: 15%;
    margin: 1em;
  }

  padding-top: 0.5em;
  width: 30%;
`

export const NotifyMeTextDesktop = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  padding: 3em;
  font-weight: 800;
`

export const MenuButton = styled.a`
  margin: 0.5em;
  background-color: transparent;
  color: white;
  font-weight: 500;
  position: sticky;
`

export const MenuContainer = styled.div`
  position: absolute;
  z-index: var(--z-index-eight);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;

  background: linear-gradient(
    180deg,
    rgba(63, 29, 61, 0.9) 30%,
    rgba(117, 42, 65, 0.729) 100%
  );
`

export const ReturnHomeButton = styled.a`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 64px;
  padding-top: 2em;
  color: var(--color-transparent-white);
  font-family: "Alverata Light";

  &:hover {
    color: var(--color-white);
  }
`

export const StyledNavBarItem = styled.a<{ $currentpage: string }>`
  padding: 0.75em 1em;
  ${(props) =>
    props.$currentpage === "true" && `text-shadow: 0px 0px 10px #D69EF0;`}

  &:active {
    text-shadow: 0px 0px 19.1px #96649b;

    border-radius: 24px;
    box-shadow: 0px 0px 5.3px 0px var(--color-article-purple);
  }

  &:focus {
    text-shadow: 0px 0px 19.1px #96649b;

    border-radius: 24px;
    box-shadow: 0px 0px 5.3px 0px var(--color-article-purple);
  }
`
