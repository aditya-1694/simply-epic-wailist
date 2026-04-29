import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ error: "Database not configured." }, { status: 500 })
    }

    const sql = neon(process.env.DATABASE_URL)
    const { name, email, phone, city, horizon, whatsapp, dob } = await request.json()

    // Basic server-side validation
    if (!name || !email || !phone || !city || !horizon) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
    }

    const result = await sql`
      INSERT INTO waitlist (name, email, phone, city, horizon, whatsapp, dob)
      VALUES (${name}, ${email}, ${phone}, ${city}, ${horizon}, ${!!whatsapp}, ${dob || null})
      RETURNING member_uuid
    `

    const memberUuid = result[0]?.member_uuid
    return NextResponse.json({ success: true, memberUuid }, { status: 201 })
  } catch (err: unknown) {
    // Duplicate email — Postgres error code 23505
    if (
      err &&
      typeof err === "object" &&
      "code" in err &&
      (err as { code: string }).code === "23505"
    ) {
      return NextResponse.json(
        { error: "This email is already on the waitlist." },
        { status: 409 }
      )
    }
    console.error("[waitlist] insert error:", err)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
