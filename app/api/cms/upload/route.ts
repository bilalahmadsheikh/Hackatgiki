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
    const formData = await request.formData()
    const file = formData.get("file") as File | null

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ error: "No valid file uploaded" }, { status: 400 })
    }

    // 2. Strict File Type Validation
    if (!SECURITY.ALLOWED_IMAGE_TYPES.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type. Only images are allowed." }, { status: 400 })
    }

    // 3. Strict Size Validation
    if (file.size > SECURITY.MAX_FILE_BYTES) {
      return NextResponse.json({ error: `File too large. Max size is ${SECURITY.MAX_FILE_BYTES / (1024 * 1024)}MB` }, { status: 400 })
    }

    // Convert file to buffer and base64
    const buffer = Buffer.from(await file.arrayBuffer())
    const base64Content = buffer.toString("base64")
    
    // Generate unique filename to avoid collisions
    const timestamp = Date.now()
    const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_")
    const relativePath = `public/uploads/${timestamp}-${safeName}`
    const publicUrl = `/uploads/${timestamp}-${safeName}` // This is what the frontend will use as src=""

    // Prepare GitHub API parameters
    const token = process.env.GITHUB_TOKEN
    const owner = process.env.GITHUB_OWNER
    const repo = process.env.GITHUB_REPO
    const branch = process.env.GITHUB_BRANCH || "main"
    let githubSuccess = false

    // 2. If GitHub token is present, commit to repository
    if (token && owner && repo) {
      const url = `https://api.github.com/repos/${owner}/${repo}/contents/${relativePath}`
      
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `[CMS] Upload Image ${safeName}`,
          content: base64Content,
          branch,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(`GitHub API Error: ${errorData.message}`)
      }
      githubSuccess = true
    }

    // 3. For instant feedback in local development, write directly to filesystem
    let localSuccess = false
    if (process.env.NODE_ENV === "development") {
      const filePath = path.join(process.cwd(), relativePath)
      const dir = path.dirname(filePath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      fs.writeFileSync(filePath, buffer)
      localSuccess = true
    }

    if (!githubSuccess && !localSuccess) {
      return NextResponse.json({ error: "GitHub credentials missing, and not in local dev mode. Nothing was saved." }, { status: 500 })
    }

    return NextResponse.json({ 
      success: true, 
      url: publicUrl, // Return the URL so the CMS can display it immediately
      githubSuccess, 
      localSuccess 
    })

  } catch (error: any) {
    console.error("CMS Upload Error:", error)
    return NextResponse.json({ error: error.message || "Failed to upload image" }, { status: 500 })
  }
}
