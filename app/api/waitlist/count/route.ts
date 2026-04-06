import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      console.log("[v0] DATABASE_URL not set")
      return NextResponse.json({ remaining: 300, taken: 0 }, { status: 200 })
    }

    const sql = neon(process.env.DATABASE_URL)
    console.log("[v0] Executing query: SELECT COUNT(*)::int AS count FROM waitlist")
    const result = await sql("SELECT COUNT(*)::int AS count FROM waitlist")
    console.log("[v0] Query result:", result)
    const taken = result[0]?.count ?? 0
    const remaining = Math.max(0, 300 - taken)
    return NextResponse.json({ remaining, taken }, { status: 200 })
  } catch (err) {
    console.error("[waitlist/count] error:", err)
    return NextResponse.json({ remaining: 300, taken: 0 }, { status: 200 })
  }
}
