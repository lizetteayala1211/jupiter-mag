import { isElementInViewport } from "."

export function highlightFloatingMenuItems() {
  const observer = new IntersectionObserver(handler)
  // Observe all headings on our webpage
  document.querySelectorAll("pre").forEach((section) => {
    observer.observe(section)
  })
}

const handler = (entries: any) => {
  // Get all the links from the side menu
  const allLinks = document.querySelectorAll("ul li a")

  // Get all the sections we want to track
  const allSections = document.querySelectorAll("pre")

  // Get all entries that have just come into the viewport
  const allEntries = new Set(
    entries
      .filter((entry: any) => entry.isIntersecting == true)
      .map((entry: any) => entry.target)
  )

  let currentSection

  // Look through all sections
  for (let i = 0; i < allSections.length; i++) {
    // Get the current section
    currentSection = allSections[i]
    // If the section is in the viewport or it has just intersected, set it as active
    if (isElementInViewport(currentSection) || allEntries.has(currentSection)) {
      // Set all links as inactive
      allLinks.forEach((link) => link.classList.remove("active"))
      // Set current link to active

      document!
        .querySelector(`a[href="#${currentSection.id}"]`)!
        .classList.add("active")
      // Exit loop after setting first active link
      break
    }
  }
}
