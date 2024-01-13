import React from "react"

export function useDisableScroll(openModal: boolean) {
  React.useEffect(() => {
    if (openModal) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }, [openModal])
}
