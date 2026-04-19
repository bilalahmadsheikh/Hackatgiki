import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { SECURITY } from "@/lib/security"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const fileParams = searchParams.get("file") // e.g., "data/content/home.json"
  
  if (!fileParams) {
    return NextResponse.json({ error: "Missing 'file' parameter" }, { status: 400 })
  }

  // 1. Traverse / Sandbox Protection
  if (!SECURITY.isValidPath(fileParams, ["data/content"])) {
    console.warn(`[CMS Read] Blocked invalid path traversal attempt: ${fileParams}`)
    return NextResponse.json({ error: "Forbidden file path" }, { status: 403 })
  }

  // In development, we can just read from the local filesystem for instantaneous feedback
  if (process.env.NODE_ENV === "development") {
    try {
      const filePath = path.join(process.cwd(), fileParams)
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8")
        return NextResponse.json({ content: fileContent, sha: "local" })
      }
      return NextResponse.json({ error: "Local file not found", content: "{}" }, { status: 404 })
    } catch (e) {
      console.error(e)
      return NextResponse.json({ error: "Failed to read local file" }, { status: 500 })
    }
  }

  // In production, fetch from GitHub REST API
  const token = process.env.GITHUB_TOKEN
  const owner = process.env.GITHUB_OWNER
  const repo = process.env.GITHUB_REPO
  const branch = process.env.GITHUB_BRANCH || "main"

  if (!token || !owner || !repo) {
    // Graceful fallback for production if secrets are missing but they want to preview
    console.warn("CMS Read: GitHub credentials missing. Returning empty content gracefully.")
    return NextResponse.json({ content: "{\n  \n}", sha: "" })
  }

  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${fileParams}?ref=${branch}`
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 0 }, // Disable cache to always get latest CMS state
    })

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ error: "File not found in GitHub", content: "{}" }, { status: 404 })
      }
      throw new Error(`GitHub API returned ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    // GitHub contents API returns base64 encoded content
    const content = Buffer.from(data.content, "base64").toString("utf-8")
    
    return NextResponse.json({ content, sha: data.sha })
  } catch (error: any) {
    console.error("CMS Read Error:", error)
    return NextResponse.json({ error: error.message || "Failed to fetch from GitHub" }, { status: 500 })
  }
}
