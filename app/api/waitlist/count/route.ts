import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const result = await sql`SELECT COUNT(*)::int AS count FROM waitlist`
    const taken = result[0].count as number
    const remaining = Math.max(0, 300 - taken)
    return NextResponse.json({ remaining, taken }, { status: 200 })
  } catch (err) {
    console.error("[waitlist/count] error:", err)
    return NextResponse.json({ remaining: 300, taken: 0 }, { status: 200 })
  }
}
