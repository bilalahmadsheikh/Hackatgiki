import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Panel | HackatGIKI",
  description: "Content Management System",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[var(--surface-0)] font-sans antialiased text-[var(--text-primary)]">
      {children}
    </div>
  )
}
