import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { SECURITY, checkRateLimit } from "@/lib/security"

export async function POST(request: Request) {
  // 0. Rate Limiting (10 requests per minute per IP)
  const ip = request.headers.get("x-forwarded-for") || "unknown"
  if (!checkRateLimit(ip, 10, 60 * 1000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  }

  // 1. Authenticate (depends purely on the environment variable)
  const requiredPassword = process.env.CMS_ADMIN_PASSWORD
  const password = request.headers.get("Authorization")?.replace("Bearer ", "")
  
  if (!password || password !== requiredPassword) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { file, content, sha } = body // 'file' is the relative path, 'content' is the JSON/string

    if (!file || !content) {
      return NextResponse.json({ error: "Missing 'file' or 'content' in payload" }, { status: 400 })
    }

    // 2. Traversal / Sandbox Protection
    if (!SECURITY.isValidPath(file, ["data/content"])) {
      return NextResponse.json({ error: "Forbidden file path" }, { status: 403 })
    }

    // 3. Basic XSS / Malicious Injection Protection
    if (typeof content === "string" && SECURITY.hasMaliciousPatterns(content)) {
      return NextResponse.json({ error: "Malicious payload detected" }, { status: 400 })
    }

    // Prepare GitHub API parameters
    const token = process.env.GITHUB_TOKEN
    const owner = process.env.GITHUB_OWNER
    const repo = process.env.GITHUB_REPO
    const branch = process.env.GITHUB_BRANCH || "main"
    let githubSuccess = false

    // 2. If GitHub token is present, commit to repository
    if (token && owner && repo) {
      const url = `https://api.github.com/repos/${owner}/${repo}/contents/${file}`
      const base64Content = Buffer.from(content).toString("base64")
      
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `[CMS] Update ${file}`,
          content: base64Content,
          sha: sha || undefined, // Required if updating an existing file
          branch,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(`GitHub API Error: ${errorData.message}`)
      }
      githubSuccess = true
    }

    // 3. For instant feedback during local development, also write directly to the filesystem
    // (Otherwise, the developer would have to 'git pull' to see changes locally).
    let localSuccess = false
    if (process.env.NODE_ENV === "development") {
      const filePath = path.join(process.cwd(), file)
      // Ensure directory exists
      const dir = path.dirname(filePath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      fs.writeFileSync(filePath, content, "utf-8")
      localSuccess = true
    }

    if (!githubSuccess && !localSuccess) {
      return NextResponse.json({ error: "GitHub credentials missing, and not in local dev mode. Nothing was saved." }, { status: 500 })
    }

    return NextResponse.json({ success: true, githubSuccess, localSuccess })

  } catch (error: any) {
    console.error("CMS Write Error:", error)
    return NextResponse.json({ error: error.message || "Failed to save content" }, { status: 500 })
  }
}
