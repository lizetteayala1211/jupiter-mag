import { usePathname } from "next/navigation"

export const useCurrentIssue = () => {
  const pathname = usePathname()
  const issue = pathname.split("/")[2]
  // return the issue number, and if it's undefined, then we latest issue
  const latestIssue = 2 // todo: as more issues are added, this should be updated dynamically
  return Number(issue) || latestIssue
}
