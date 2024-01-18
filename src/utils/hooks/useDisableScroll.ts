import React from "react"

export function useDisableScroll(openModal: boolean) {
  React.useEffect(() => {
    window.scrollTo(0, 0)

    if (openModal) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }

    return () => {
      document.body.style.overflowY = "scroll"
    }
  }, [openModal])
}
