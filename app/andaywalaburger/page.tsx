"use client"

import { useState, useEffect } from "react"
import { Lock, Save, Image as ImageIcon, FileJson, Loader2, Upload, CheckCircle2, XCircle } from "lucide-react"

const PAGES = [
  { id: "home", path: "data/content/home.json", title: "Homepage" },
  { id: "partnership", path: "data/content/partnership.json", title: "Partnership" },
  { id: "hackathon", path: "data/content/global-ai-hackathon.json", title: "AI Hackathon" },
  { id: "venture", path: "data/content/venture-track.json", title: "Venture Track" },
]

export default function CMSAdminPage() {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState("editor") // 'editor' | 'media'
  
  // Editor State
  const [activePage, setActivePage] = useState(PAGES[0])
  const [fileSha, setFileSha] = useState("")
  const [jsonContent, setJsonContent] = useState("{}")
  const [isFetching, setIsFetching] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<{type: "success" | "error" | null, msg: string}>({ type: null, msg: "" })

  // Media State
  const [uploadFile, setUploadFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [lastUploadedUrl, setLastUploadedUrl] = useState("")

  useEffect(() => {
    // Check if we have a saved password in session storage
    const saved = sessionStorage.getItem("cms_auth")
    if (saved) {
      setPassword(saved)
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated && activeTab === "editor") {
      fetchPageContent(activePage.path)
    }
  }, [isAuthenticated, activePage, activeTab])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password) {
      sessionStorage.setItem("cms_auth", password)
      setIsAuthenticated(true)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem("cms_auth")
    setPassword("")
    setIsAuthenticated(false)
  }

  const fetchPageContent = async (filePath: string) => {
    setIsFetching(true)
    setSaveStatus({ type: null, msg: "" })
    try {
      const res = await fetch(`/api/cms/read?file=${encodeURIComponent(filePath)}`)
      const data = await res.json()
      if (res.ok) {
        setJsonContent(data.content)
        setFileSha(data.sha) // Need the sha to update via GitHub API
      } else {
        // If file doesn't exist yet, we just start with an empty JSON object
        if (res.status === 404) {
          setJsonContent("{\n  \n}")
          setFileSha("")
        } else {
          throw new Error(data.error)
        }
      }
    } catch (err: any) {
      setSaveStatus({ type: "error", msg: `Failed to load: ${err.message}` })
    } finally {
      setIsFetching(false)
    }
  }

  const handleSave = async () => {
    // Basic JSON validation before sending
    try {
      JSON.parse(jsonContent)
    } catch (e) {
      setSaveStatus({ type: "error", msg: "Invalid JSON format. Please fix syntax errors before saving." })
      return
    }

    setIsSaving(true)
    setSaveStatus({ type: null, msg: "" })
    
    try {
      const res = await fetch(`/api/cms/write`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${password}`
        },
        body: JSON.stringify({
          file: activePage.path,
          content: jsonContent,
          sha: fileSha
        })
      })
      
      const data = await res.json()
      if (res.ok) {
        setSaveStatus({ type: "success", msg: "Saved successfully!" })
        // Re-fetch to get new SHA
        fetchPageContent(activePage.path)
      } else {
        throw new Error(data.error)
      }
    } catch (err: any) {
      setSaveStatus({ type: "error", msg: err.message })
    } finally {
      setIsSaving(false)
    }
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!uploadFile) return

    setIsUploading(true)
    setSaveStatus({ type: null, msg: "" })
    
    const formData = new FormData()
    formData.append("file", uploadFile)

    try {
      const res = await fetch(`/api/cms/upload`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${password}`
        },
        body: formData
      })
      
      const data = await res.json()
      if (res.ok) {
        setSaveStatus({ type: "success", msg: "Uploaded successfully!" })
        setLastUploadedUrl(data.url)
        setUploadFile(null)
      } else {
        throw new Error(data.error)
      }
    } catch (err: any) {
      setSaveStatus({ type: "error", msg: err.message })
    } finally {
      setIsUploading(false)
    }
  }

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--surface-0)] flex items-center justify-center p-4">
        <div className="glass-card max-w-md w-full p-8 rounded-2xl border border-[var(--border-subtle)]">
          <div className="w-12 h-12 bg-accent-primary/20 text-accent-primary rounded-xl flex items-center justify-center mb-6 mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-center text-white mb-2">CMS Authorization</h1>
          <p className="text-center text-[var(--text-muted)] mb-6">Enter your admin password to access the content management system.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[var(--surface-1)] border border-[var(--border-subtle)] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-accent-primary"
                placeholder="Admin Password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent-primary hover:bg-accent-secondary text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  }

  // DASHBOARD
  return (
    <div className="min-h-screen bg-[var(--surface-0)] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[var(--surface-1)] border-r border-[var(--border-subtle)] flex flex-col">
        <div className="p-6 border-b border-[var(--border-subtle)]">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-accent-primary" />
            Admin Panel
          </h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveTab("editor")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === "editor" ? "bg-accent-primary/20 text-accent-primary" : "text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-white"}`}
          >
            <FileJson className="w-5 h-5" />
            JSON Editor
          </button>
          <button
            onClick={() => setActiveTab("media")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === "media" ? "bg-accent-primary/20 text-accent-primary" : "text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-white"}`}
          >
            <ImageIcon className="w-5 h-5" />
            Media Upload
          </button>
        </nav>

        <div className="p-4 border-t border-[var(--border-subtle)]">
          <button
            onClick={handleLogout}
            className="w-full py-2 text-[var(--text-muted)] hover:text-white transition-colors text-sm"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* Save Status Toast */}
        {saveStatus.type && (
          <div className={`mb-6 p-4 rounded-lg flex items-center justify-between ${saveStatus.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-400" : "bg-red-500/10 border border-red-500/20 text-red-400"}`}>
            <div className="flex items-center gap-3">
              {saveStatus.type === "success" ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
              <span>{saveStatus.msg}</span>
            </div>
            <button onClick={() => setSaveStatus({ type: null, msg: "" })}>
              <Lock className="w-4 h-4 opacity-50 hover:opacity-100" />
            </button>
          </div>
        )}

        {activeTab === "editor" && (
          <div className="max-w-5xl mx-auto">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">Content Editor</h1>
                <p className="text-[var(--text-muted)] text-sm">Edit the raw JSON data that powers your pages.</p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <select
                  value={activePage.id}
                  onChange={(e) => setActivePage(PAGES.find(p => p.id === e.target.value) || PAGES[0])}
                  className="bg-[var(--surface-1)] border border-[var(--border-subtle)] text-white px-4 py-2 rounded-lg focus:outline-none flex-1 sm:flex-none"
                >
                  {PAGES.map(p => (
                    <option key={p.id} value={p.id}>{p.title}</option>
                  ))}
                </select>
                <button
                  onClick={handleSave}
                  disabled={isSaving || isFetching}
                  className="bg-accent-primary hover:bg-accent-secondary text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50"
                >
                  {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  Save
                </button>
              </div>
            </header>

            <div className="relative glass-card rounded-xl border border-[var(--border-subtle)] overflow-hidden">
              {isFetching && (
                <div className="absolute inset-0 bg-[var(--surface-0)]/80 backdrop-blur-sm z-10 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-accent-primary animate-spin" />
                </div>
              )}
              <textarea
                value={jsonContent}
                onChange={(e) => setJsonContent(e.target.value)}
                spellCheck={false}
                className="w-full h-[600px] bg-[var(--surface-1)] text-emerald-300 font-mono text-sm p-6 focus:outline-none focus:ring-2 focus:ring-accent-primary/20 resize-none leading-relaxed"
              />
            </div>
          </div>
        )}

        {activeTab === "media" && (
          <div className="max-w-3xl mx-auto">
            <header className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-1">Media Libary</h1>
              <p className="text-[var(--text-muted)] text-sm">Upload images to the public directory. You will receive a URL to paste into the JSON editor.</p>
            </header>

            <div className="glass-card p-8 rounded-xl border border-[var(--border-subtle)]">
              <form onSubmit={handleUpload} className="space-y-6">
                <div className="border-2 border-dashed border-[var(--border-subtle)] rounded-xl p-8 text-center hover:border-accent-primary/50 transition-colors">
                  <Upload className="w-10 h-10 text-[var(--text-muted)] mx-auto mb-4" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                    className="block w-full text-sm text-[var(--text-muted)] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent-primary/20 file:text-accent-primary hover:file:bg-accent-primary/30 mx-auto cursor-pointer"
                  />
                  {uploadFile && <p className="mt-4 text-sm text-emerald-400">Selected: {uploadFile.name}</p>}
                </div>

                <button
                  type="submit"
                  disabled={!uploadFile || isUploading}
                  className="w-full bg-accent-primary hover:bg-accent-secondary text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isUploading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Upload Image"}
                </button>
              </form>

              {lastUploadedUrl && (
                <div className="mt-8 p-6 bg-[var(--surface-1)] rounded-lg border border-emerald-500/20">
                  <h3 className="text-emerald-400 font-semibold mb-2">Upload Successful!</h3>
                  <p className="text-[var(--text-muted)] text-sm mb-4">Copy the path below and paste it wherever you need an image URL in the JSON editor:</p>
                  
                  <div className="flex items-center gap-3">
                    <code className="flex-1 bg-[var(--surface-0)] px-4 py-3 rounded text-sm text-white overflow-x-auto">
                      {lastUploadedUrl}
                    </code>
                    <button 
                      onClick={() => navigator.clipboard.writeText(lastUploadedUrl)}
                      className="bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-white px-4 py-3 rounded text-sm transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                  
                  <div className="mt-6 border border-[var(--border-subtle)] rounded overflow-hidden max-w-xs">
                    <img src={lastUploadedUrl} alt="Uploaded preview" className="w-full h-auto" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
