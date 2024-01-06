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
  try {
    const result = await sql`CREATE TABLE Emails (  Email varchar(255) );`
    return NextResponse.json({ result }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
