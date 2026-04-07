import { Suspense } from "react"
import { sql } from "@vercel/postgres"
import { SuccessPageClient } from "./client"

async function getMemberName(uuid: string) {
  try {
    const result = await sql`
      SELECT name FROM waitlist WHERE member_uuid = ${uuid} LIMIT 1
    `
    return result.rows[0]?.name || null
  } catch {
    return null
  }
}

export default async function JoinSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>
}) {
  const params = await searchParams
  const memberUuid = params.id || ""
  const memberName = await getMemberName(memberUuid)

  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-white">Loading...</div>}>
      <SuccessPageClient memberName={memberName} />
    </Suspense>
  )
}

