import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Page Not Found | HackatGIKI",
  description: "The page you're looking for doesn't exist.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 text-center">
        <h1 className="text-[10rem] sm:text-[14rem] xl:text-[20rem] font-display font-bold leading-none tracking-tighter text-purple-400 electric-text-glow select-none">
          404
        </h1>

        <p className="text-xl sm:text-2xl xl:text-3xl text-slate-400 mb-3 -mt-4 sm:-mt-6">
          Oops! Page not found
        </p>
        <p className="text-sm sm:text-base xl:text-lg text-slate-600 mb-12 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 xl:px-12 xl:py-5 xl:text-xl rounded-full font-semibold hover:scale-105 transition-all shadow-lg shadow-purple-500/20"
        >
          <ArrowLeft className="w-5 h-5 xl:w-6 xl:h-6" />
          Return to Home
        </Link>
      </div>
    </div>
  )
}
