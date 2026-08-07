import { NextRequest, NextResponse } from "next/server"

const BACKEND_URL = "https://thebrokrs-backend.vercel.app/api/v1"

// Forward every method to the backend — no CORS issue since this runs server-side
async function handler(req: NextRequest, { params }: { params: { path: string[] } }) {
  const path = params.path.join("/")
  const targetUrl = `${BACKEND_URL}/${path}`

  // Pass through query string if any
  const { searchParams } = new URL(req.url)
  const qs = searchParams.toString()
  const fullUrl = qs ? `${targetUrl}?${qs}` : targetUrl

  // Build headers to forward — drop host/origin to avoid conflicts
  const forwardHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  }

  const authHeader = req.headers.get("authorization")
  if (authHeader) {
    forwardHeaders["Authorization"] = authHeader
  }

  // Read body for mutating methods
  let body: string | undefined
  if (req.method !== "GET" && req.method !== "HEAD") {
    try {
      body = await req.text()
    } catch {
      body = undefined
    }
  }

  try {
    const backendResponse = await fetch(fullUrl, {
      method: req.method,
      headers: forwardHeaders,
      body: body || undefined,
      // Don't follow redirects — pass them back to client
      redirect: "manual",
    })

    const responseData = await backendResponse.text()

    return new NextResponse(responseData, {
      status: backendResponse.status,
      headers: {
        "Content-Type": backendResponse.headers.get("Content-Type") || "application/json",
      },
    })
  } catch (error) {
    console.error(`[Proxy] Failed to reach backend at ${fullUrl}:`, error)
    return NextResponse.json(
      { status: false, message: "Unable to reach the server. Please try again." },
      { status: 502 }
    )
  }
}

export const GET = handler
export const POST = handler
export const PUT = handler
export const PATCH = handler
export const DELETE = handler
export const OPTIONS = handler
