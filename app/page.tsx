import NeuralMeshBg from "@/components/three/NeuralMeshBg"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import GlassCard from "@/components/GlassCard"
import SponsorMarquee from "@/components/SponsorMarquee"
import AnimatedButton from "@/components/AnimatedButton"
import ParticleBackground from "@/components/ParticleBackground"
import LogoDisplay from "@/components/LogoDisplay"
import RevealOnScroll from "@/components/RevealOnScroll"
import {
  Calendar,
  Globe,
  Lightbulb,
  Users,
  Trophy,
  Target,
  UserCheck,
  MapPin,
  Clock,
  Brain,
  Code,
  Rocket
} from "lucide-react"
import {
  EVENT_LOGO,
  ORGANIZER_LOGO,
  COLLABORATION_LOGOS,
  SPONSOR_LOGOS,
  OUTREACH_LOGOS,
  HACKATHON_PARTNER_LOGOS,
} from "@/lib/logos"
import content from "@/data/content/home.json"

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeRvf4ISeN6IBA8GTt_SABqnUEiTxTfFPSM8Dj5qOUxxBbLxw/viewform"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Three.js animated background */}
      <NeuralMeshBg />

      {/* Navbar */}
      <Navbar />

      {/* Main Content — pushed down for fixed navbar */}
      <main id="main-content" className="relative z-10 px-6 pt-28">
        {/* ═══ HERO SECTION ═══ */}
        <section className="flex w-full flex-col items-center py-16 xl:py-32 text-center px-4 sm:px-8 xl:px-24">
          <p className="mb-4 font-code text-xs sm:text-sm xl:text-lg uppercase tracking-[0.25em] xl:tracking-[0.35em] text-[var(--text-muted)]">
            {content.hero.eyebrow}
          </p>

          <h1
            className="font-display mb-4 font-bold text-6xl sm:text-8xl xl:text-9xl 2xl:text-[10rem] tracking-tight leading-none"
          >
            <span className="text-gradient-primary">{content.hero.heading}</span>
          </h1>
          <p className="mb-8 text-xl sm:text-2xl xl:text-4xl xl:leading-relaxed text-[var(--text-secondary)] xl:mt-8">
            {content.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 xl:gap-8 mt-4">
            {content.hero.buttons.map((btn, i) => (
              <AnimatedButton key={i} href={btn.url} variant={btn.variant as any} className="xl:px-12 xl:py-6 xl:text-xl 2xl:px-16 2xl:py-8 2xl:text-2xl">
                {btn.label}
              </AnimatedButton>
            ))}
          </div>
        </section>

        {/* ═══ SECTION A: Hero Identity Banner ═══ */}
        <section className="w-full py-16 xl:py-24">
          <div className="glass-panel glass-shimmer w-full py-12 sm:py-16 !rounded-none border-x-0">
            <div className="relative z-10 flex flex-col items-center gap-10 w-full px-4 sm:px-12 xl:px-24">
              {/* Event Logo */}
              <LogoDisplay
                logo={EVENT_LOGO}
                className="w-[180px] sm:w-[220px] xl:w-[280px]"
              />

              {/* Collaboration text */}
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
                in collaboration with
              </p>

              {/* Collaboration logos row — single row */}
              <div className="flex w-full flex-wrap items-center justify-around gap-10 sm:gap-16 xl:gap-28">
                {COLLABORATION_LOGOS.map((logo) => (
                  <LogoDisplay
                    key={logo.name}
                    logo={logo}
                    className="h-20 w-auto shrink-0 sm:h-24 xl:h-32"
                  />
                ))}
                <LogoDisplay logo={ORGANIZER_LOGO} className="h-20 w-auto shrink-0 sm:h-24 xl:h-32" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION B: Sponsors & Outreach ═══ */}
        <section className="w-full py-10">
          <div className="glass-panel glass-shimmer w-full py-12 sm:py-14 !rounded-none border-x-0">
            <div className="relative z-10 w-full px-4 sm:px-12 xl:px-24">
              {/* Sponsors */}
              <div className="mb-14 text-center">
                <span className="mb-10 block text-sm font-semibold uppercase tracking-[0.3em] text-accent-primary">
                  ✦ Sponsored By
                </span>
                <div className="flex w-full flex-wrap items-center justify-around gap-14 sm:gap-24 xl:gap-36">
                  {SPONSOR_LOGOS.map((logo) => (
                    <LogoDisplay
                      key={logo.name}
                      logo={logo}
                      className={
                        logo.name === "Devsinc"
                          ? "h-28 w-auto sm:h-32 xl:h-44"
                          : "h-20 w-auto sm:h-24 xl:h-32"
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="my-10 border-t border-white/10" />

              {/* Outreach Partners */}
              <div className="mt-14 text-center">
                <span className="mb-10 block text-sm font-semibold uppercase tracking-[0.3em] text-accent-secondary">
                  ✦ Outreach Partners
                </span>
                <div className="flex w-full flex-wrap items-center justify-around gap-8 sm:gap-14 xl:gap-24">
                  {OUTREACH_LOGOS.map((logo) => (
                    <LogoDisplay
                      key={logo.name}
                      logo={logo}
                      className="h-12 w-auto shrink-0 sm:h-14 xl:h-20"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION C: Hackathon Partners Marquee ═══ */}
        <section className="w-full py-10">
          <div className="glass-panel glass-shimmer w-full py-10 sm:py-12 !rounded-none border-x-0">
            <div className="relative z-10 w-full">
              <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">
                ✦ Hackathon Partners
              </p>
              <SponsorMarquee
                images={HACKATHON_PARTNER_LOGOS.map((l) => ({
                  src: l.src,
                  alt: l.alt,
                }))}
                speed="normal"
                className="xl:text-xl"
              />
            </div>
          </div>
        </section>

        {/* ═══ SECTION D: How It Works / Experience Hubs ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24" id="how-it-works">
          <RevealOnScroll>
            <div className="text-center mb-16 xl:mb-24">
              <span className="text-accent-primary font-bold tracking-widest uppercase text-sm xl:text-lg mb-4 block">
                {content.howItWorks.eyebrow}
              </span>
              <h2 className="text-4xl sm:text-6xl xl:text-8xl font-display font-bold">
                {content.howItWorks.heading}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 w-full">
              {content.howItWorks.steps.map((item, idx) => {
                const icons = [
                  <UserCheck className="w-8 h-8 xl:w-12 xl:h-12 text-purple-400" />,
                  <Brain className="w-8 h-8 xl:w-12 xl:h-12 text-blue-400" />,
                  <Code className="w-8 h-8 xl:w-12 xl:h-12 text-emerald-400" />,
                  <Rocket className="w-8 h-8 xl:w-12 xl:h-12 text-pink-400" />
                ];
                return (
                  <RevealOnScroll key={idx} delay={idx * 150}>
                    <GlassCard hover className="h-full flex flex-col items-start p-8 xl:p-12 relative overflow-hidden group">
                      <div className="absolute top-[-20%] right-[-10%] text-9xl font-bold text-white/[0.03] group-hover:text-white/[0.08] transition-colors pointer-events-none">
                        {`0${idx + 1}`}
                      </div>
                      <div className="mb-6 xl:mb-10 bg-white/5 p-4 rounded-2xl border border-white/10">
                        {icons[idx] || icons[0]}
                      </div>
                      <h3 className="text-2xl xl:text-4xl font-bold mb-4">{item.title}</h3>
                      <p className="text-[var(--text-secondary)] xl:text-xl leading-relaxed">{item.description}</p>
                    </GlassCard>
                  </RevealOnScroll>
                );
              })}
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION E: Speakers & Mentors ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24 bg-white/[0.01] border-y border-white/[0.05]" id="speakers">
          <RevealOnScroll>
            <div className="text-center mb-16 xl:mb-24">
              <span className="text-accent-secondary font-bold tracking-widest uppercase text-sm xl:text-lg mb-4 block">
                Learn from the best
              </span>
              <h2 className="text-4xl sm:text-6xl xl:text-8xl font-display font-bold">
                Speakers & Mentors
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 w-full">
              {[1, 2, 3, 4].map((i) => (
                <RevealOnScroll key={i} delay={i * 100}>
                  <div className="group cursor-pointer">
                    <div className="w-full aspect-[4/5] bg-slate-800/50 rounded-3xl border border-white/10 overflow-hidden mb-6 relative">
                      {/* Avatar Placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center text-white/20">
                        <Users className="w-20 h-20" />
                      </div>
                    </div>
                    <h4 className="text-xl xl:text-3xl font-bold group-hover:text-purple-400 transition-colors">Amazing Speaker {i}</h4>
                    <p className="text-sm xl:text-lg text-[var(--text-secondary)] mt-1">Founding Partner, XYZ</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION F: Condensed Schedule ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-32" id="schedule">
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 items-center">
              <div className="flex-1 text-center lg:text-left">
                <span className="text-accent-primary font-bold tracking-widest uppercase text-sm xl:text-lg mb-4 block">
                  {content.schedule.eyebrow}
                </span>
                <h2 className="text-4xl sm:text-6xl xl:text-8xl font-display font-bold mb-8">
                  {content.schedule.heading}
                </h2>
                <p className="text-xl xl:text-3xl text-[var(--text-secondary)] mb-10 leading-relaxed max-w-2xl">
                  {content.schedule.description}
                </p>
                <div className="flex flex-col gap-6 font-mono text-lg xl:text-2xl text-[var(--text-muted)] mb-10">
                  <div className="flex items-center gap-4 justify-center lg:justify-start">
                    <Calendar className="w-6 h-6 xl:w-8 xl:h-8 text-white/50" />
                    <span>April 25-26, 2026</span>
                  </div>
                  <div className="flex items-center gap-4 justify-center lg:justify-start">
                    <MapPin className="w-6 h-6 xl:w-8 xl:h-8 text-white/50" />
                    <span>Global Hubs & Virtual</span>
                  </div>
                </div>
                <AnimatedButton variant="primary" href="/global-ai-hackathon#schedule" className="xl:px-12 xl:py-6 xl:text-xl">
                  View Full Schedule
                </AnimatedButton>
              </div>
              
              <div className="flex-1 w-full max-w-xl lg:max-w-none">
                <GlassCard className="p-8 xl:p-14 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full" />
                  
                  <div className="space-y-8 xl:space-y-12 relative z-10">
                    {content.schedule.events.map((event, idx) => (
                      <div key={idx} className="border-l-2 border-purple-500/30 pl-6 xl:pl-8">
                        <div className={`text-sm xl:text-lg font-mono ${event.color} mb-2`}>{event.time}</div>
                        <h4 className="text-xl xl:text-3xl font-bold">{event.title}</h4>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION G: Judges ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24 bg-white/[0.01] border-y border-white/[0.05]" id="judges">
          <RevealOnScroll>
            <div className="text-center mb-16 xl:mb-24">
              <span className="text-amber-400 font-bold tracking-widest uppercase text-sm xl:text-lg mb-4 block">
                The Evaluators
              </span>
              <h2 className="text-4xl sm:text-6xl xl:text-8xl font-display font-bold">
                Elite Judges
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 xl:gap-8 w-full">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <RevealOnScroll key={i} delay={i * 75}>
                  <div className="group cursor-default text-center">
                    <div className="w-full aspect-square bg-slate-800/80 rounded-full border border-white/5 overflow-hidden mb-6 relative mx-auto max-w-[200px]">
                      {/* Avatar Placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:text-amber-400/50 transition-colors">
                        <Users className="w-12 h-12 xl:w-16 xl:h-16" />
                      </div>
                    </div>
                    <h4 className="font-bold xl:text-xl group-hover:text-amber-400 transition-colors">Top Judge {i}</h4>
                    <p className="text-xs xl:text-sm text-[var(--text-muted)] mt-1">VC Partner</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>
        </section>

        {/* Spacer */}
        <div className="py-8" />
      </main>

      {/* Footer (full variant) */}
      <Footer variant="full" />
    </div>
  )
}
