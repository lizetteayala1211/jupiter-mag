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
      <NavBarItem dynamic={dynamic || false} page="issue 1" />
      <NavBarItem dynamic={dynamic || false} page="issue 2" />
      <NavBarItem dynamic={dynamic || false} page="issue 3" />
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
    return currentPage == page ? "#C74CFF" : "var(--color-white)"
  }

  const handleUrl = () => {
    if (page === "magazine") return "/"
    if (page === "issue 1") return "/issue/1"
    if (page === "issue 2") return "/issue/2"
    if (page === "issue 3") return "/issue/3"
    return url ? url : `/${page}`
  }

  return (
    <StyledNavBarItem
      $currentpage={(currentPage == page).toString()}
      style={{ color: handleColor() }}
      href={handleUrl()}
      target={url ? "_blank" : "_self"}
    >
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
