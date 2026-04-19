import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Impressum | Hack-Nation",
  description: "Legal imprint information for Hack-Nation UG according to § 5 TMG.",
}

export default function ImpressumPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">

      {/* ═══ SIMPLIFIED NAVBAR ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/20">
        <div className="w-full px-4 sm:px-8 xl:px-24 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/logo-web.png" alt="HackatGIKI" width={32} height={32} className="h-8 w-auto" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="text-white font-bold text-lg">HackatGIKI</span>
              <span className="hidden sm:inline text-slate-400 text-xs">in collaboration with</span>
              <span className="hidden sm:inline bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-xs font-semibold">Hack-Nation</span>
            </div>
          </Link>
          <Link 
            href="/" 
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm xl:text-base px-4 py-2 xl:px-6 xl:py-3 rounded-full border border-white/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>
        </div>
      </nav>

      {/* ═══ MAIN CONTENT ═══ */}
      <main id="main-content" className="relative z-10 pt-32 pb-20 w-full px-4 sm:px-6 xl:px-24">
        <div className="max-w-4xl mx-auto">

          {/* Page Header */}
          <div className="mb-14 xl:mb-20">
            <h1 className="text-3xl sm:text-5xl xl:text-7xl font-display font-bold text-white mb-4">
              Imprint
            </h1>
            <p className="text-lg xl:text-2xl text-blue-100/70">
              Legal information for HackatGIKI
            </p>
          </div>

          <div className="space-y-8 xl:space-y-12">

            {/* Card 1: Responsible for Content */}
            <div className="bg-slate-700/40 backdrop-blur-md border border-slate-600/40 shadow-xl rounded-2xl p-8 xl:p-12">
              <h2 className="text-2xl xl:text-4xl font-bold text-white mb-6">
                Responsible for Content
              </h2>
              <p className="text-lg xl:text-2xl font-semibold text-slate-100 mb-2">
                Bilal Ahmad
              </p>
              <p className="text-base xl:text-xl text-slate-300/70 mb-6">
                HackatGIKI — in collaboration with Hack-Nation
              </p>
              <div className="text-slate-300 xl:text-xl leading-relaxed space-y-1">
                <p className="text-sm xl:text-lg uppercase tracking-widest text-slate-400 mb-2">Address:</p>
                <p>Ghulam Ishaq Khan Institute</p>
                <p>Topi, Swabi</p>
                <p>Khyber Pakhtunkhwa, Pakistan</p>
              </div>
            </div>

            {/* Card 2: Contact */}
            <div className="bg-slate-700/40 backdrop-blur-md border border-slate-600/40 shadow-xl rounded-2xl p-8 xl:p-12">
              <h2 className="text-2xl xl:text-4xl font-bold text-white mb-6">
                Contact
              </h2>
              <div className="text-slate-300 xl:text-xl">
                <p className="text-sm xl:text-lg uppercase tracking-widest text-slate-400 mb-2">E-Mail:</p>
                <a 
                  href="mailto:ba8516127@gmail.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4 decoration-blue-400/30 hover:decoration-blue-300 text-lg xl:text-2xl"
                >
                  ba8516127@gmail.com
                </a>
              </div>
            </div>

          </div>

          {/* Back Button */}
          <div className="flex justify-center mt-14 xl:mt-20">
            <Link 
              href="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 xl:px-12 xl:py-5 xl:text-xl rounded-xl font-semibold hover:scale-105 transition-all shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 xl:w-6 xl:h-6" />
              Back to Homepage
            </Link>
          </div>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-slate-500 space-y-4 sm:space-y-0 text-sm xl:text-lg">
          <p>© {new Date().getFullYear()} HackatGIKI. All rights reserved.</p>
          <span className="text-slate-600">Impressum</span>
        </div>
      </footer>
    </div>
  )
}
