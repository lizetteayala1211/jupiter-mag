"use client"

import React from "react"
import { toTitleCase } from "../../utils/helpers/toTitleCase"
import { Pages } from "@/utils/types"
import { useCurrentPage } from "@/utils/hooks"
import { StyledNavBarItem } from "./styled"

export function NavBar({ dynamic }: { dynamic?: boolean }) {
  return (
    <>
      <NavBarItem dynamic={dynamic || false} page="magazine" />
      <NavBarItem dynamic={dynamic || false} page="about" />
      <NavBarItem
        dynamic={dynamic || false}
        page="donate"
        url="https://artadia.org/jupiter-magazine/"
      />
      <NavBarItem dynamic={dynamic || false} page="contact" />
    </>
  )
}

function NavBarItem({
  page,
  url,
  dynamic,
}: {
  page: Pages
  dynamic: boolean
  url?: string
}) {
  const currentPage = useCurrentPage()

  const handleColor = () => {
    if (dynamic || currentPage.includes("magazine"))
      return "var(--color-off-black)"
    return currentPage == page ? "#6b3b81" : "var(--color-white)"
  }

  const handleUrl = () => {
    if (page === "magazine") return "/"
    return url ? url : `/${page}`
  }

  return (
    <StyledNavBarItem style={{ color: handleColor() }} href={handleUrl()}>
      {toTitleCase(page)}
    </StyledNavBarItem>
  )
}

// function MagazineNavItem({ dynamic }: { dynamic: boolean }) {
//   const [openMenu, setOpenMenu] = React.useState(false)

//   useDisableScroll(openMenu)
//   const currentPage = useCurrentPage()

//   const handleColor = () => {
//     if (dynamic) return "var(--color-off-black)"
//     return currentPage.includes("magazine")
//       ? "var(--color-light-orange)"
//       : "var(--color-white)"
//   }

//   return (
//     <>
//       {openMenu ? <AuthorMenu onClose={() => setOpenMenu(false)} /> : null}
//       <div
//         style={{
//           padding: "0.75em 1em",
//           color: handleColor(),
//         }}
//         onClick={() => setOpenMenu(!openMenu)}
//       >
//         Magazine
//       </div>
//     </>
//   )
// }

// function AuthorMenu({ onClose }: { onClose: () => void }) {
//   return (
//     <MenuContainer>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "flex-end",
//           padding: "1em 1em 0 0",
//         }}
//         onClick={() => onClose}
//       >
//         <XIcon white />
//       </div>
//       <div>
//         <AuthorDirectory />
//       </div>
//       <ReturnHomeButton href="/">return home</ReturnHomeButton>
//     </MenuContainer>
//   )
// }
