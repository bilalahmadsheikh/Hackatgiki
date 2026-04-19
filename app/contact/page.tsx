import NeuralMeshBg from "@/components/three/NeuralMeshBg"
import Navbar from "@/components/Navbar"
import AnimatedButton from "@/components/AnimatedButton"
import RevealOnScroll from "@/components/RevealOnScroll"
import { Mail, Phone, ArrowRight, MapPin, Award } from "lucide-react"

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

export const metadata = {
  title: "Contact Us | HackatGIKI",
  description: "Get in touch with the HackatGIKI team. Reach out for partnership inquiries, hackathon questions, or general information.",
}

const TEAM = [
  {
    name: "Bilal Ahmad",
    role: "Core Team",
    email: "ba8516127@gmail.com",
    phone: "+92 336 440 2877",
    accent: "purple",
  },
  {
    name: "Bushrah Zulfiqar",
    role: "MIT Ambassador & Hub Lead @GIKI",
    email: "bushrahz.giki@gmail.com",
    phone: "+92 328 720 9389",
    accent: "blue",
  },
]

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <NeuralMeshBg />
      <Navbar />

      <main id="main-content" className="relative z-10 pt-28">

        {/* ═══ HERO ═══ */}
        <section className="flex w-full flex-col items-center justify-center min-h-[60vh] py-16 xl:py-32 text-center px-4 sm:px-8 xl:px-24">
          <RevealOnScroll>
            <p className="mb-4 font-code text-xs sm:text-sm xl:text-lg uppercase tracking-[0.25em] xl:tracking-[0.35em] text-[var(--text-muted)]">
              Get in Touch
            </p>
            <h1 className="font-display mb-6 font-bold text-6xl sm:text-8xl xl:text-9xl 2xl:text-[10rem] tracking-tight leading-none">
              Contact <span className="text-purple-400 electric-text-glow">Us</span>
            </h1>
            <p className="text-xl sm:text-2xl xl:text-3xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8">
              Have questions about the hackathon, partnerships, or anything else? Our team is here to help.
            </p>
          </RevealOnScroll>
        </section>

        {/* ═══ TEAM CARDS ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 w-full max-w-6xl mx-auto">

              {TEAM.map((member, idx) => (
                <RevealOnScroll key={idx} delay={idx * 200}>
                  <div className={`relative glass-card rounded-[2rem] p-8 sm:p-10 xl:p-14 border border-white/10 overflow-hidden h-full`}>
                    {/* Accent bar */}
                    <div className={`absolute top-0 left-0 w-full h-1 ${member.accent === "purple" ? "bg-purple-500" : "bg-blue-500"}`} />

                    {/* Name & Role */}
                    <div className="mb-8">
                      <h2 className="text-3xl xl:text-5xl font-bold text-white mb-3 font-display">{member.name}</h2>
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm xl:text-base font-mono ${
                        member.accent === "purple" 
                          ? "bg-purple-500/10 text-purple-300 border border-purple-500/20" 
                          : "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                      }`}>
                        <Award className="w-4 h-4" />
                        {member.role}
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                      <a 
                        href={`mailto:${member.email}`} 
                        className="flex items-center gap-4 group hover:bg-white/5 p-4 -mx-4 rounded-xl transition-all"
                      >
                        <div className={`w-12 h-12 xl:w-14 xl:h-14 rounded-xl flex items-center justify-center shrink-0 ${
                          member.accent === "purple" ? "bg-purple-500/20 text-purple-400" : "bg-blue-500/20 text-blue-400"
                        }`}>
                          <Mail className="w-5 h-5 xl:w-6 xl:h-6" />
                        </div>
                        <div>
                          <div className="text-xs xl:text-sm uppercase tracking-widest text-slate-500 mb-1">Email</div>
                          <div className="text-white xl:text-xl group-hover:text-purple-300 transition-colors">{member.email}</div>
                        </div>
                      </a>

                      <a 
                        href={`tel:${member.phone.replace(/\s/g, "")}`} 
                        className="flex items-center gap-4 group hover:bg-white/5 p-4 -mx-4 rounded-xl transition-all"
                      >
                        <div className={`w-12 h-12 xl:w-14 xl:h-14 rounded-xl flex items-center justify-center shrink-0 ${
                          member.accent === "purple" ? "bg-purple-500/20 text-purple-400" : "bg-blue-500/20 text-blue-400"
                        }`}>
                          <Phone className="w-5 h-5 xl:w-6 xl:h-6" />
                        </div>
                        <div>
                          <div className="text-xs xl:text-sm uppercase tracking-widest text-slate-500 mb-1">Phone</div>
                          <div className="text-white xl:text-xl group-hover:text-purple-300 transition-colors">{member.phone}</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}

            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ INSTAGRAM & LOCATION ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24 bg-white/[0.01] border-t border-white/[0.05]">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 w-full max-w-6xl mx-auto">

              {/* Instagram CTA */}
              <a 
                href="https://www.instagram.com/hacknation.atgiki/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card rounded-[2rem] p-8 sm:p-10 xl:p-14 border border-pink-500/20 bg-pink-500/[0.03] hover:bg-pink-500/[0.08] transition-all group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-8 h-8 xl:w-10 xl:h-10 text-white" />
                </div>
                <h3 className="text-2xl xl:text-4xl font-bold text-white mb-2">Follow Us on Instagram</h3>
                <p className="text-pink-300/80 xl:text-xl font-mono mb-6">@hacknation.atgiki</p>
                <div className="flex items-center gap-2 text-pink-400 xl:text-lg font-semibold group-hover:gap-4 transition-all">
                  Visit Page <ArrowRight className="w-5 h-5" />
                </div>
              </a>

              {/* Location */}
              <div className="glass-card rounded-[2rem] p-8 sm:p-10 xl:p-14 border border-emerald-500/20 bg-emerald-500/[0.02] flex flex-col items-center text-center">
                <div className="w-16 h-16 xl:w-20 xl:h-20 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 xl:w-10 xl:h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl xl:text-4xl font-bold text-white mb-2">Our Location</h3>
                <p className="text-[var(--text-secondary)] xl:text-xl leading-relaxed">
                  Ghulam Ishaq Khan Institute<br />
                  Topi, Swabi<br />
                  Khyber Pakhtunkhwa, Pakistan
                </p>
              </div>

            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ QUICK CTA ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-5xl xl:text-7xl font-display font-bold text-white mb-6">
              Ready to Build Something?
            </h2>
            <p className="text-xl xl:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
              Apply now for the next Global AI Hackathon or explore partnership opportunities.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 xl:gap-8">
              <AnimatedButton href="https://docs.google.com/forms/d/e/1FAIpQLSeRvf4ISeN6IBA8GTt_SABqnUEiTxTfFPSM8Dj5qOUxxBbLxw/viewform" variant="primary" className="xl:px-12 xl:py-6 xl:text-xl rounded-full">
                Apply Now
              </AnimatedButton>
              <AnimatedButton href="/partnership" variant="outline" className="xl:px-12 xl:py-6 xl:text-xl rounded-full">
                Partner With Us
              </AnimatedButton>
            </div>
          </RevealOnScroll>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-xl py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-slate-500 space-y-4 sm:space-y-0 text-sm xl:text-lg">
          <p>© {new Date().getFullYear()} HackatGIKI. All rights reserved.</p>
          <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
        </div>
      </footer>
    </div>
  )
}
