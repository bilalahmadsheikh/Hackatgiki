import NeuralMeshBg from "@/components/three/NeuralMeshBg"
import Navbar from "@/components/Navbar"
import AnimatedButton from "@/components/AnimatedButton"
import RevealOnScroll from "@/components/RevealOnScroll"
import { Rocket, Users, Trophy, Brain, Briefcase, GraduationCap, Globe, Lightbulb, Calendar, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Learn More | HackatGIKI × Hack-Nation",
  description: "Discover what HackatGIKI is, how the Global AI Hackathon works, and the opportunities waiting for you.",
}

export default function LearnMorePage() {
  return (
    <div className="relative min-h-screen">
      <NeuralMeshBg />
      <Navbar />

      <main id="main-content" className="relative z-10 pt-28">

        {/* ═══ HERO ═══ */}
        <section className="flex w-full flex-col items-center justify-center min-h-[60vh] py-16 xl:py-32 text-center px-4 sm:px-8 xl:px-24">
          <RevealOnScroll>
            <p className="mb-4 font-code text-xs sm:text-sm xl:text-lg uppercase tracking-[0.25em] xl:tracking-[0.35em] text-[var(--text-muted)]">
              Everything you need to know
            </p>
            <h1 className="font-display mb-6 font-bold text-6xl sm:text-8xl xl:text-9xl 2xl:text-[10rem] tracking-tight leading-none">
              About <span className="text-purple-400 electric-text-glow">HackatGIKI</span>
            </h1>
            <p className="text-xl sm:text-2xl xl:text-3xl text-[var(--text-secondary)] max-w-4xl mx-auto">
              HackatGIKI is the GIKI chapter of the Global AI Hackathon, organized in collaboration with Hack-Nation and the MIT Sloan AI Club. We connect Pakistan&apos;s top tech talent with the world&apos;s most ambitious AI builders.
            </p>
          </RevealOnScroll>
        </section>

        {/* ═══ WHAT IS HACKATGIKI ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24 bg-white/[0.01] border-t border-white/[0.05]">
          <RevealOnScroll>
            <div className="max-w-6xl mx-auto">
              <div className="mb-16 xl:mb-24 relative pl-6 xl:pl-10 border-l-4 border-purple-500">
                <h2 className="text-3xl sm:text-5xl xl:text-7xl font-display font-bold text-white mb-4">
                  What We Do
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
                {[
                  {
                    icon: <Rocket className="w-8 h-8 xl:w-10 xl:h-10" />,
                    title: "Global AI Hackathon",
                    desc: "A 24-hour intensive hackathon where teams of up to 4 build AI-powered solutions, compete for $30k+ in prizes, and pitch to a world-class finalist review panel.",
                    href: "/global-ai-hackathon",
                    color: "purple"
                  },
                  {
                    icon: <Briefcase className="w-8 h-8 xl:w-10 xl:h-10" />,
                    title: "Venture Track",
                    desc: "Top 15 teams from the hackathon enter a 3-month incubation program with mentorship, MBA coaching, and investor access to turn prototypes into startups.",
                    href: "/venture-track",
                    color: "blue"
                  },
                  {
                    icon: <Lightbulb className="w-8 h-8 xl:w-10 xl:h-10" />,
                    title: "Idea Challenge",
                    desc: "Test and validate your AI business idea with our scoring tool before committing to a full build. Get instant feedback on viability and market fit.",
                    href: "/idea-challenge",
                    color: "amber"
                  },
                  {
                    icon: <Users className="w-8 h-8 xl:w-10 xl:h-10" />,
                    title: "Partnership",
                    desc: "We work with corporate sponsors, VCs, and investors to create impactful AI innovation opportunities and connect them with top talent.",
                    href: "/partnership",
                    color: "emerald"
                  },
                  {
                    icon: <Globe className="w-8 h-8 xl:w-10 xl:h-10" />,
                    title: "Global Hubs",
                    desc: "The hackathon runs across multiple physical hubs worldwide plus remote participation, ensuring anyone anywhere can compete.",
                    href: "/global-ai-hackathon#schedule",
                    color: "cyan"
                  },
                  {
                    icon: <GraduationCap className="w-8 h-8 xl:w-10 xl:h-10" />,
                    title: "MIT Collaboration",
                    desc: "We operate in collaboration with the MIT Sloan AI Club, connecting Pakistan's builders with MIT's global innovation network.",
                    href: "/",
                    color: "pink"
                  },
                ].map((card, idx) => {
                  const colorMap: Record<string, string> = {
                    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
                    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
                    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
                    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
                    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
                  }
                  return (
                    <RevealOnScroll key={idx} delay={idx * 100}>
                      <a href={card.href} className="glass-card rounded-[2rem] p-8 xl:p-12 border border-white/10 hover:bg-white/10 transition-all h-full flex flex-col group">
                        <div className={`w-fit p-4 rounded-2xl border mb-6 ${colorMap[card.color]}`}>
                          {card.icon}
                        </div>
                        <h3 className="text-2xl xl:text-3xl font-bold text-white mb-4">{card.title}</h3>
                        <p className="text-[var(--text-secondary)] xl:text-xl leading-relaxed flex-grow mb-6">{card.desc}</p>
                        <div className="flex items-center gap-2 text-purple-400 font-semibold xl:text-lg group-hover:gap-4 transition-all">
                          Explore <ArrowRight className="w-4 h-4" />
                        </div>
                      </a>
                    </RevealOnScroll>
                  )
                })}
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ KEY STATS ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24">
          <RevealOnScroll>
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-5xl xl:text-7xl font-display font-bold text-white mb-6">
                By the Numbers
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10 max-w-6xl mx-auto">
              {[
                { num: "5th", label: "Edition", icon: <Calendar className="w-6 h-6" /> },
                { num: "$30k+", label: "In Prizes", icon: <Trophy className="w-6 h-6" /> },
                { num: "24hr", label: "Hackathon", icon: <Brain className="w-6 h-6" /> },
                { num: "Global", label: "Participation", icon: <Globe className="w-6 h-6" /> },
              ].map((stat, idx) => (
                <RevealOnScroll key={idx} delay={idx * 100}>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 xl:p-12 text-center">
                    <div className="text-purple-400 mx-auto w-fit mb-4">{stat.icon}</div>
                    <div className="text-4xl sm:text-5xl xl:text-7xl font-bold text-white font-display mb-2">{stat.num}</div>
                    <div className="text-sm xl:text-lg uppercase tracking-[0.2em] text-[var(--text-muted)]">{stat.label}</div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24 bg-white/[0.01] border-t border-white/[0.05] text-center">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-5xl xl:text-7xl font-display font-bold text-white mb-6">
              Ready to Join?
            </h2>
            <p className="text-xl xl:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
              Whether you want to compete, mentor, sponsor, or invest — there&apos;s a place for you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 xl:gap-8">
              <AnimatedButton href="https://docs.google.com/forms/d/e/1FAIpQLSeRvf4ISeN6IBA8GTt_SABqnUEiTxTfFPSM8Dj5qOUxxBbLxw/viewform" variant="primary" className="xl:px-12 xl:py-6 xl:text-xl rounded-full">
                Apply for Hackathon
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="outline" className="xl:px-12 xl:py-6 xl:text-xl rounded-full">
                Contact Us
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
