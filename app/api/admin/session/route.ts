import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getAuthToken, getAuthCookieName } from "@/lib/admin-auth"

export async function GET() {
  const cookieStore = await cookies()
  const session = cookieStore.get(getAuthCookieName())

  if (session?.value === getAuthToken()) {
    return NextResponse.json({ authenticated: true })
  }

  return NextResponse.json({ authenticated: false }, { status: 401 })
}
