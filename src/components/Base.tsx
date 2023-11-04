import React, { ReactNode } from "react"
import { NavBar } from "./NavBar"

type Props = { children: ReactNode }
export function Base({ children }: Props) {
  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  )
}
