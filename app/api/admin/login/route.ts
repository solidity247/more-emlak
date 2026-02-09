import { NextResponse } from "next/server"
import { validateCredentials, getAuthToken, getAuthCookieName } from "@/lib/admin-auth"

export async function POST(request: Request) {
  const body = await request.json()
  const { username, password } = body

  if (!validateCredentials(username, password)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set(getAuthCookieName(), getAuthToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
  })

  return response
}
