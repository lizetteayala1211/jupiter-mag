"use client"

import React from "react"
import { sql } from "@vercel/postgres"
import { CopyButton } from "./styled"

const getEmails = async () => {
  const emails = await sql`SELECT DISTINCT * FROM Emails;`
  return emails
}

export default function Admin() {
  const [emails, setEmails] = React.useState<any>()
  const [entryGranted, setEntryGranted] = React.useState(false)
  const passwordRef: React.Ref<any> = React.useRef(null)

  const handlePasswordSubmit = (e: any) => {
    e.preventDefault()
    setEntryGranted(
      passwordRef.current && passwordRef.current.value === "ganymede"
    )
  }

  const handleCopyGmail = (e: any) => {
    e.preventDefault()
    const copyableEmails = emails.rows
      .map((email: any) => email.email)
      .join(", ")

    navigator.clipboard.writeText(copyableEmails)
  }

  const handleCopyOutlook = (e: any) => {
    e.preventDefault()
    const copyableEmails = emails.rows
      .map((email: any) => email.email)
      .join("; ")

    navigator.clipboard.writeText(copyableEmails)
  }

  React.useEffect(() => {
    getEmails().then((e) => setEmails(e))
  }, [])

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "2em",
        gap: "2em",
        backgroundColor: "#d6c3d8",
        color: "#4d3450",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handlePasswordSubmit}
        className="darker-grotesque"
      >
        <label>Input password here</label>
        <input
          className="darker-grotesque"
          style={{
            padding: "0.5em",
            fontSize: "24px",
            borderRadius: "8px",
            border: "1px solid #4d3450",
          }}
          ref={passwordRef}
          placeholder="Enter password"
        />
      </form>

      {entryGranted && (
        <div
          className="darker-grotesque"
          style={{ display: "flex", gap: "24px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "20px",
              gap: "0.5em",
            }}
          >
            <div style={{ paddingLeft: "0.5em", fontWeight: 600 }}>
              Total collected emails: {emails.rowCount}
            </div>
            <CopyButton style={{ margin: "0.5em 0" }} onClick={handleCopyGmail}>
              Copy emails (Gmail compatible)
            </CopyButton>
            <CopyButton onClick={handleCopyOutlook}>
              Copy emails (Outlook compatible)
            </CopyButton>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {emails.rows.map((email: any, i: number) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "8px",
                  fontSize: "20px",
                  height: "28px",
                  borderBottom: "1px solid #4d3450",
                }}
              >
                <div style={{ fontWeight: 600 }}>{i}. </div>
                <div>{email.email}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
