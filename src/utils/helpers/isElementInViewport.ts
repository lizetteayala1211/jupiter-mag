export function isElementInViewport(el: Element) {
  var rect = el.getBoundingClientRect()

  return (
    rect.top >= -1 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
