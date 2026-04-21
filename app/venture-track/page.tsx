import NeuralMeshBg from "@/components/three/NeuralMeshBg"
import Navbar from "@/components/Navbar"
import RevealOnScroll from "@/components/RevealOnScroll"
import Image from "next/image"
import {
  Rocket,
  Target,
  GraduationCap,
  UserCheck,
  Cpu,
  Presentation,
  PiggyBank,
  CheckCircle2,
  Zap,
  DollarSign
} from "lucide-react"

export const metadata = {
  title: "Venture Track | From Prototype to Startup | Hack-Nation",
  description: "Selected teams join a 3-month incubation program with mentorship and investor access.",
}

const MENTOR_URL = "https://forms.gle/Wrwg23MBDKbVfXrM8"
const COACH_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfULE-H3gZHTDknP3B4gppMzzELINZvOB9dWaSmFGMqprI6Hg/viewform"

export default function VentureTrackPage() {
  return (
    <div className="relative min-h-screen">
      <NeuralMeshBg />
      <Navbar />

      <main id="main-content" className="relative z-10 pt-28">
        
        {/* ═══ SECTION 1: HERO ═══ */}
        <section className="flex w-full flex-col min-h-[85vh] justify-center py-16 xl:py-32 px-4 sm:px-8 xl:px-24">
          <RevealOnScroll>
            <div className="max-w-4xl">
              <p className="mb-4 font-code text-xs sm:text-sm xl:text-lg uppercase tracking-[0.25em] xl:tracking-[0.35em] text-[var(--text-muted)]">
                Beyond the Hackathon
              </p>
              
              <h1 className="font-display mb-8 font-bold text-6xl sm:text-8xl xl:text-9xl 2xl:text-[10rem] tracking-tight leading-none">
                Venture<br />
                <span className="text-purple-400 electric-text-glow">Track</span>
              </h1>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 xl:text-xl font-mono text-emerald-300">
                  <Rocket className="w-5 h-5" />
                  Incubation Program
                </span>
                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 xl:text-xl font-mono text-blue-300">
                  <Target className="w-5 h-5" />
                  Selected Teams Only
                </span>
              </div>

              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 my-8 rounded-full" />

              <p className="text-xl sm:text-2xl xl:text-4xl leading-relaxed text-[var(--text-secondary)]">
                The hackathon is just the start of what we offer. Selected teams from our hackathon events get the exclusive opportunity to join our incubation track and transform their innovative AI ideas into scalable businesses.
              </p>
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION 2: FROM PROTOTYPE TO VENTURE ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24 bg-white/[0.01] border-t border-white/[0.05]">
          <RevealOnScroll>
            <div className="text-center mb-16 xl:mb-24 relative">
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-8 rounded-full hidden sm:block" />
              <h2 className="text-4xl sm:text-6xl xl:text-8xl font-display font-bold text-white mb-6">
                From Prototype to Venture
              </h2>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-md rounded-[2rem] shadow-2xl border border-white/10 p-8 sm:p-12 xl:p-16 w-full mb-16 xl:mb-24 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="text-center max-w-4xl mx-auto relative z-10">
                <h3 className="text-2xl xl:text-4xl text-purple-400 font-bold mb-6 tracking-wide">The Post-Hackathon Journey</h3>
                <p className="text-xl xl:text-3xl text-[var(--text-secondary)] leading-relaxed mb-12">
                  Our program starts where the hackathon ends. We provide the long-term framework, resources, and support system needed to transform your weekend prototype into a thriving, investment-ready business venture.
                </p>
                <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto pt-10 border-t border-white/10">
                  <div>
                    <div className="text-5xl sm:text-7xl xl:text-8xl font-bold text-purple-400 font-display mb-2">3</div>
                    <div className="text-sm xl:text-xl uppercase tracking-[0.2em] text-[var(--text-muted)]">Months Program</div>
                  </div>
                  <div>
                    <div className="text-5xl sm:text-7xl xl:text-8xl font-bold text-purple-400 font-display mb-2">15</div>
                    <div className="text-sm xl:text-xl uppercase tracking-[0.2em] text-[var(--text-muted)]">Selected Teams</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-10 w-full max-w-7xl mx-auto">
              {[
                {
                  icon: <CheckCircle2 className="w-8 h-8 xl:w-12 xl:h-12" />,
                  title: "Selection",
                  body: "Top 15 teams from our hackathon are selected based on technical execution and venture potential"
                },
                {
                  icon: <Zap className="w-8 h-8 xl:w-12 xl:h-12" />,
                  title: "Acceleration",
                  body: "3-month intensive program with mentorship, workshops, and resources to build market-ready products"
                },
                {
                  icon: <DollarSign className="w-8 h-8 xl:w-12 xl:h-12" />,
                  title: "Investment",
                  body: "Direct access to angel investors and VCs at our exclusive Demo and Investor Day events"
                }
              ].map((card, idx) => (
                <RevealOnScroll key={idx} delay={idx * 150}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 xl:p-12 hover:border-purple-400/50 transition-all duration-300 h-full">
                    <div className="text-purple-400 mb-6 bg-purple-500/10 p-4 rounded-2xl w-fit">
                      {card.icon}
                    </div>
                    <h4 className="text-2xl xl:text-4xl font-bold text-white mb-4">{card.title}</h4>
                    <p className="text-[var(--text-secondary)] xl:text-xl leading-relaxed">{card.body}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION 3: WHY CHOOSE VENTURE TRACK? ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24">
          <RevealOnScroll>
            <div className="text-center mb-16 xl:mb-24 relative">
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full hidden sm:block" />
              <h2 className="text-4xl sm:text-6xl xl:text-8xl font-display font-bold text-white mb-6">
                Why Choose Venture Track?
              </h2>
              <p className="text-xl xl:text-3xl text-[var(--text-secondary)] max-w-4xl mx-auto">
                Comprehensive support system designed to maximize your startup&apos;s potential for success.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 xl:gap-10 w-full max-w-7xl mx-auto">
              {[
                {
                  icon: <GraduationCap className="w-6 h-6 xl:w-8 xl:h-8" />,
                  title: "Two MBA coaches per team",
                  body: "Supporting top technical founders on strategy, go-to-market, and company building."
                },
                {
                  icon: <UserCheck className="w-6 h-6 xl:w-8 xl:h-8" />,
                  title: "Dedicated senior mentor",
                  body: "Each team is matched with an experienced operator (founder or Big Tech) for weekly guidance."
                },
                {
                  icon: <Cpu className="w-6 h-6 xl:w-8 xl:h-8" />,
                  title: "Compute & tooling credits",
                  body: "Free API credits and premium tools provided in collaboration with our partners."
                },
                {
                  icon: <Presentation className="w-6 h-6 xl:w-8 xl:h-8" />,
                  title: "Founder-led workshops & online-tool",
                  body: "Hands-on sessions with top-tier founders and on-demand learning platform."
                },
                {
                  icon: <PiggyBank className="w-6 h-6 xl:w-8 xl:h-8" />,
                  title: "Demo & Investor Day",
                  body: "Curated exposure to investors to support pre-seed fundraising."
                }
              ].map((card, idx) => (
                <RevealOnScroll key={idx} delay={idx * 100} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(33.333%-27px)]">
                  <div className="glass-card rounded-[2rem] p-6 sm:p-8 xl:p-10 hover:bg-white/10 transition-all duration-500 h-full flex flex-col items-start border border-white/10">
                    <div className="w-12 h-12 xl:w-16 xl:h-16 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                      {card.icon}
                    </div>
                    <h4 className="text-xl xl:text-2xl font-bold text-white mb-4">{card.title}</h4>
                    <p className="text-[var(--text-secondary)] xl:text-xl leading-relaxed">{card.body}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION 4: EWOR PARTNERSHIP ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24 bg-white/[0.01] border-t border-white/[0.05]">
          <RevealOnScroll>
            <div className="text-center mb-16 xl:mb-24 relative">
              <div className="w-24 h-1 bg-slate-500 mx-auto mb-8 rounded-full hidden sm:block" />
              <h2 className="text-4xl sm:text-6xl xl:text-8xl font-display font-bold text-white mb-6">
                EWOR Partnership
              </h2>
              <p className="text-xl xl:text-3xl text-[var(--text-secondary)] max-w-4xl mx-auto">
                To best support you in advancing your venture, we collaborate with EWOR.
              </p>
            </div>

            <div className="glass-panel w-full py-16 sm:py-24 xl:py-32 !rounded-[3rem] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
              {/* Soft glow behind EWOR logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="bg-white/90 px-8 py-5 xl:px-12 xl:py-8 rounded-2xl shadow-[0_0_50px_-12px_rgba(255,255,255,0.3)] mb-10 relative z-10 transition-transform duration-500 hover:scale-105">
                <Image
                  src="https://cdn.prod.website-files.com/6621450113fa0186b23a5e6f/664e10aecdef7825d045a0dc_EWOR%20Horizontal%20Dark.svg"
                  alt="EWOR Partner Logo"
                  width={480}
                  height={120}
                  className="h-10 sm:h-16 xl:h-24 w-auto"
                  unoptimized
                />
              </div>
              <p className="text-purple-100 xl:text-3xl font-medium tracking-wide text-center px-4 max-w-3xl relative z-10">
                EWOR is a radically selective fellowship backing the world&apos;s top 0.1% of founders.
              </p>
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION 5: JOIN OUR PROGRAM ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-32">
          <RevealOnScroll>
            <div className="text-center mb-16 xl:mb-24 relative">
              <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8 rounded-full hidden sm:block" />
              <h2 className="text-4xl sm:text-6xl xl:text-8xl font-display font-bold text-white mb-6">
                Join Our Program
              </h2>
              <p className="text-xl xl:text-3xl text-[var(--text-secondary)] max-w-4xl mx-auto">
                Support the next generation of AI-first startups.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 w-full max-w-6xl mx-auto">
              
              {/* Mentor Card */}
              <a 
                href={MENTOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-[2rem] p-10 xl:p-16 hover:bg-white/10 transition-all duration-500 group cursor-pointer border border-white/10 flex flex-col items-center text-center h-full"
              >
                <div className="w-16 h-16 xl:w-24 xl:h-24 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600/50 transition-colors border border-white/10">
                  <UserCheck className="w-8 h-8 xl:w-12 xl:h-12 text-purple-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl xl:text-4xl font-bold text-white mb-6">Want to be a mentor?</h3>
                <p className="text-[var(--text-secondary)] xl:text-2xl leading-relaxed mb-10 flex-grow">
                  Support technical teams with your founding and scaling experience. Commit 2–4 hours per week.
                </p>
                <div className="bg-white text-slate-900 font-bold px-8 py-4 xl:px-10 xl:py-5 xl:text-xl rounded-full group-hover:bg-slate-200 transition-colors">
                  Apply as Mentor
                </div>
              </a>

              {/* MBA Coach Card */}
              <a 
                href={COACH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-[2rem] p-10 xl:p-16 hover:bg-white/10 transition-all duration-500 group cursor-pointer border border-white/10 flex flex-col items-center text-center h-full"
              >
                <div className="w-16 h-16 xl:w-24 xl:h-24 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600/50 transition-colors border border-white/10">
                  <GraduationCap className="w-8 h-8 xl:w-12 xl:h-12 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl xl:text-4xl font-bold text-white mb-6">Want to be an MBA coach and find your tech Co-founder?</h3>
                <p className="text-[var(--text-secondary)] xl:text-2xl leading-relaxed mb-10 flex-grow">
                  Join as a business partner and help build fundable ventures. Commit 10–15 hours per week.
                </p>
                <div className="bg-white text-slate-900 font-bold px-8 py-4 xl:px-10 xl:py-5 xl:text-xl rounded-full group-hover:bg-slate-200 transition-colors">
                  Apply as MBA Coach
                </div>
              </a>

            </div>
          </RevealOnScroll>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-xl py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-slate-500 space-y-4 sm:space-y-0 text-sm xl:text-lg">
          <p>© {new Date().getFullYear()} Global AI Hackathon. All rights reserved.</p>
          <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
        </div>
      </footer>
    </div>
  )
}
