// Simple admin auth for demonstration purposes
// In production, this should use proper bcrypt hashing and database-backed credentials

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "password",
}

export function validateCredentials(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password
}

const AUTH_COOKIE_NAME = "admin_session"
const AUTH_TOKEN = "more-emlak-admin-authenticated-session-2024"

export function getAuthToken(): string {
  return AUTH_TOKEN
}

export function getAuthCookieName(): string {
  return AUTH_COOKIE_NAME
}
