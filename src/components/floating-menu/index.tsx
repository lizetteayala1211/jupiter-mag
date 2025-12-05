import { FloatingMenuContainer } from "./styled"

type FloatingMenuProps = { issue: number }

export function FloatingMenu({ issue }: FloatingMenuProps) {
  return (
    <FloatingMenuContainer>
      {/* <li className="floating-menu-heading">
        Issue {issue}
      </li> */}

      <li>
        <a href="/" className="back-to-archive-link">
          Back to Archive
        </a>
      </li>
    </FloatingMenuContainer>
  );
}

// export function FloatingMenu({ issue }: FloatingMenuProps) {
//   // const pastIssues =
//   return (
//     <FloatingMenuContainer>
//       <li style={{ fontSize: "24px", textTransform: "none" }}>Issue {issue}</li>
//       {/* <li>
//         <a href="#editorsNote">Editor&apos;s note</a>
//       </li> */}
//       {issue != 5}
//         {/* {issue != 5 ? <>
//         <li>
//           <a href="#articles">Articles</a>
//         </li>
//         <li>
//           <a href="#writers">Writers</a>
//         </li>
//       </> : <li>
//           <a href="#contributors"> Contributors </a>
//         </li>} */}
//       {/* <li>
//         <a href="#colophon">Colophon</a>
//       </li> */}
//       {createPastIssues(issue).map(i => (
//         <li key={`/issue/${i}`}>
//           <a href={`/issue/${i}`}>Issue {i}</a>
//         </li>
//       ))
//       }
//     </FloatingMenuContainer>
//   )
// }

// const createPastIssues = (issue: number) => {
//   const pastIssues = []

//   for (let i = 1; i < issue ; i++) {
//     pastIssues.push(i)
//   }

//   return pastIssues.reverse()

// }