import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server"

// or getServerSideProps
export function getStaticProps() {
  return {
    // returns the default 404 page with a status code of 404 in production
    notFound: process.env.NODE_ENV === "production",
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get("email")

  try {
    if (!email) throw new Error("Email required")
    await sql`DELETE FROM Emails WHERE Email = (${email});`
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  const emails = await sql`SELECT * FROM Emails;`
  return NextResponse.json({ emails }, { status: 200 })
}
