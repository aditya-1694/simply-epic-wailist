import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ remaining: 300, taken: 0 }, { status: 200 })
    }

    const sql = neon(process.env.DATABASE_URL)
    const result = await sql`SELECT COUNT(*)::int AS count FROM waitlist`
    const taken = result[0].count as number
    const remaining = Math.max(0, 300 - taken)
    return NextResponse.json({ remaining, taken }, { status: 200 })
  } catch (err) {
    console.error("[waitlist/count] error:", err)
    return NextResponse.json({ remaining: 300, taken: 0 }, { status: 200 })
  }
}
