import NeuralMeshBg from "@/components/three/NeuralMeshBg"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import GlassCard from "@/components/GlassCard"
import SponsorMarquee from "@/components/SponsorMarquee"
import AnimatedButton from "@/components/AnimatedButton"
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
  Rocket,
  Award,
  Zap,
  Download
} from "lucide-react"

import { HACKATHON_PARTNER_LOGOS } from "@/lib/logos"

export const metadata = {
  title: "Global AI Hackathon | Apr 25-26, 2026 | Hack-Nation",
  description: "Join the 5th Global AI Hackathon. 24-hour sprint, $30k+ in prizes, expert mentorship.",
}

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeRvf4ISeN6IBA8GTt_SABqnUEiTxTfFPSM8Dj5qOUxxBbLxw/viewform"
const PARTICIPANT_GUIDE_URL = "https://drive.google.com/file/d/1TClty6BIMVgT7Ze7hc_DhIYoOXOxWDRf/view"

export default function GlobalAiHackathon() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "5th Global AI Hackathon",
    "description": "The world's premier AI innovation challenge.",
    "startDate": "2026-04-25T11:15:00-04:00",
    "endDate": "2026-04-26T16:00:00-04:00",
    "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "organizer": {
      "@type": "Organization",
      "name": "Hack-Nation",
      "url": "https://hack-nation.ai"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://docs.google.com/forms/d/e/1FAIpQLSeRvf4ISeN6IBA8GTt_SABqnUEiTxTfFPSM8Dj5qOUxxBbLxw/viewform"
    },
    "location": [
      {
        "@type": "Place",
        "name": "Global Hubs",
        "address": "Multiple Locations Worldwide"
      },
      {
        "@type": "VirtualLocation",
        "url": "https://hack-nation.ai/global-ai-hackathon"
      }
    ]
  };

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NeuralMeshBg />
      <Navbar />

      <main id="main-content" className="relative z-10 pt-28">
        
        {/* ═══ SECTION 1: HERO ═══ */}
        <section className="flex w-full flex-col items-center justify-center min-h-[85vh] py-16 xl:py-32 text-center px-4 sm:px-8 xl:px-24">
          <RevealOnScroll>
            <p className="mb-4 font-code text-xs sm:text-sm xl:text-lg uppercase tracking-[0.25em] xl:tracking-[0.35em] text-[var(--text-muted)]">
              Join the
            </p>
            <h1 className="font-display mb-6 font-bold text-6xl sm:text-8xl xl:text-9xl 2xl:text-[10rem] tracking-tight leading-none text-purple-400 electric-text-glow">
              Global AI<br />Hackathon
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-4 xl:gap-8 mb-8 font-mono text-sm xl:text-2xl text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 xl:w-8 xl:h-8 text-purple-400" />
                <span>Apr 25-26, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 xl:w-8 xl:h-8 text-purple-400" />
                <span>Global Hubs & Remote</span>
              </div>
            </div>

            <p className="mb-12 max-w-4xl mx-auto text-xl xl:text-3xl xl:leading-relaxed text-[var(--text-secondary)]">
              The world's premier AI innovation challenge where brilliant minds converge to build groundbreaking solutions that shape the future of artificial intelligence.
            </p>
            
            <AnimatedButton variant="primary" href={REGISTRATION_URL} className="xl:px-12 xl:py-6 xl:text-xl rounded-full">
              Sign Up for 5th Hackathon
            </AnimatedButton>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION 2: HOW IT WORKS ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24 border-t border-white/[0.05] bg-slate-900/40">
          <RevealOnScroll>
            <div className="text-center mb-16 xl:mb-24">
              <h2 className="text-4xl sm:text-6xl xl:text-8xl font-display font-bold">
                How It Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10 w-full">
              {[
                { step: "01", title: "Apply", desc: "Submit your application individually or with a team of up to 4 builders.", icon: <UserCheck className="w-8 h-8 xl:w-12 xl:h-12 text-purple-400" /> },
                { step: "02", title: "Ideate", desc: "Choose a challenge track or bring your own AI moonshot idea to life.", icon: <Brain className="w-8 h-8 xl:w-12 xl:h-12 text-blue-400" /> },
                { step: "03", title: "Hack", desc: "24 hours of intense building, supported by world-class mentors.", icon: <Code className="w-8 h-8 xl:w-12 xl:h-12 text-emerald-400" /> },
                { step: "04", title: "Pitch", desc: "Present your functioning prototype to our panel of elite judges.", icon: <Rocket className="w-8 h-8 xl:w-12 xl:h-12 text-pink-400" /> }
              ].map((item, idx) => (
                <RevealOnScroll key={idx} delay={idx * 150}>
                  <GlassCard hover className="h-full flex flex-col items-start p-8 xl:p-12 relative overflow-hidden group">
                    <div className="absolute top-[-20%] right-[-10%] text-9xl font-bold text-white/[0.03] group-hover:text-white/[0.08] transition-colors pointer-events-none">
                      {item.step}
                    </div>
                    <div className="mb-6 xl:mb-10 bg-white/5 p-4 rounded-2xl border border-white/10">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl xl:text-4xl font-bold mb-4">{item.title}</h3>
                    <p className="text-[var(--text-secondary)] xl:text-xl leading-relaxed">{item.desc}</p>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION 3: SCHEDULE ═══ */}
        <section id="schedule" className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24">
          <RevealOnScroll>
            <div className="flex flex-col border-t-2 border-purple-500/50 pt-16 xl:pt-24 items-center text-center w-full mb-16 xl:mb-24">
              <h2 className="text-4xl sm:text-6xl xl:text-8xl font-display font-bold mb-6">Schedule</h2>
              <p className="text-xl xl:text-3xl text-[var(--text-secondary)]">
                24-hour weekend hackathon schedule (PKT). Local hubs mirror the same flow.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16">
              {/* Saturday Column */}
              <GlassCard className="p-0 overflow-hidden">
                <div className="p-6 xl:p-8 border-b border-white/10 bg-white/[0.02]">
                  <h3 className="text-2xl xl:text-4xl font-bold">Saturday, Apr 25</h3>
                  <p className="text-purple-400 font-mono mt-2 xl:text-xl">Pakistan Time (PKT)</p>
                </div>
                <div className="flex flex-col">
                  {[
                    { e: "Hackathon Kick-Off", t: "8:15 \u2013 8:45 PM", c: "neutral" },
                    { e: "Speaker Session", t: "8:45 PM \u2013 9:15 PM", c: "neutral" },
                    { e: "15-Minute Break", t: "9:15 \u2013 9:30 PM", c: "muted" },
                    { e: "Reveal of Challenges", t: "9:30 \u2013 10:00 PM", c: "neutral" },
                    { e: "Hacking Begins", t: "10:00 PM", c: "green" },
                  ].map((row, i) => (
                    <div key={i} className={`flex justify-between items-center p-6 xl:p-8 border-b border-white/5 ${row.c === 'green' ? 'bg-emerald-500/[0.04]' : ''} ${row.c === 'muted' ? 'text-[var(--text-muted)]' : ''}`}>
                      <span className={`text-lg xl:text-2xl ${row.c === 'green' ? 'text-emerald-300 font-bold' : 'font-medium'}`}>{row.e}</span>
                      <span className={`font-mono xl:text-xl ${row.c === 'green' ? 'text-emerald-300 font-bold' : ''}`}>{row.t}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Sunday Column */}
              <GlassCard className="p-0 overflow-hidden flex flex-col">
                <div className="p-6 xl:p-8 border-b border-white/10 bg-white/[0.02]">
                  <h3 className="text-2xl xl:text-4xl font-bold">Sun, Apr 26 / Mon, Apr 27</h3>
                  <p className="text-purple-400 font-mono mt-2 xl:text-xl">Pakistan Time (PKT)</p>
                </div>
                <div className="flex flex-col flex-grow">
                  {[
                    { e: "Submission Deadline", t: "Sun 6:00 PM", c: "red" },
                    { e: "Jury to Select Top 16", t: "Sun by 11:00 PM", c: "neutral" },
                    { e: "Finalist Pitches (2 Mins)", t: "Sun 11:15 \u2013 Mon 12:30 AM", c: "neutral" },
                    { e: "Awards Ceremony", t: "Mon 12:45 AM", c: "amber" },
                  ].map((row, i) => (
                    <div key={i} className={`flex justify-between items-center p-6 xl:p-8 border-b border-white/5 ${row.c === 'red' ? 'bg-red-500/[0.04]' : row.c === 'amber' ? 'bg-amber-500/[0.04]' : ''}`}>
                      <span className={`text-lg xl:text-2xl ${row.c === 'red' ? 'text-red-300 font-bold' : row.c === 'amber' ? 'text-amber-300 font-bold' : 'font-medium'}`}>{row.e}</span>
                      <span className={`font-mono xl:text-xl ${row.c === 'red' ? 'text-red-300 font-bold' : row.c === 'amber' ? 'text-amber-300 font-bold' : ''}`}>{row.t}</span>
                    </div>
                  ))}
                  
                  {/* Notice Box */}
                  <div className="mt-8 p-6 mx-6 mb-6 border border-amber-400/20 bg-amber-500/[0.05] rounded-xl">
                    <div className="text-amber-200 uppercase tracking-widest font-bold text-sm xl:text-lg mb-2">FINAL PITCHES NOTICE</div>
                    <p className="text-amber-100/70 xl:text-xl">If your team reaches the final pitches, attendance is required to remain eligible for finalist and special prizes.</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION 4: WHY JOIN ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24 bg-white/[0.01] border-y border-white/[0.05]">
          <RevealOnScroll>
            <div className="text-center mb-16 xl:mb-24">
              <h2 className="text-4xl sm:text-6xl xl:text-8xl font-display font-bold mb-6">
                Why Join Our Hackathon?
              </h2>
              <p className="text-xl xl:text-3xl text-[var(--text-secondary)] max-w-4xl mx-auto">
                Experience the ultimate AI development challenge with unparalleled opportunities for learning, networking, and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full">
              {[
                { title: "Global Reach", text: "Compete with developers from around the world and showcase your AI innovations on a global stage.", icon: <Globe className="w-6 h-6 xl:w-10 xl:h-10" /> },
                { title: "Amazing Prizes", text: "Win substantial cash prizes and exclusive mentorship opportunities.", icon: <Trophy className="w-6 h-6 xl:w-10 xl:h-10" /> },
                { title: "Expert Mentorship", text: "Get guidance from industry leaders, MIT faculty, and AI experts throughout your development journey.", icon: <Users className="w-6 h-6 xl:w-10 xl:h-10" /> },
                { title: "24-Hour Sprint", text: "A focused 24-hour hackathon with a clear schedule across all hubs.", icon: <Calendar className="w-6 h-6 xl:w-10 xl:h-10" /> },
                { title: "Real-World Impact", text: "Build solutions that address actual challenges and have the potential to make a meaningful difference.", icon: <Target className="w-6 h-6 xl:w-10 xl:h-10" /> },
                { title: "Innovation Focus", text: "Explore cutting-edge AI technologies and push the boundaries of what's possible with artificial intelligence.", icon: <Lightbulb className="w-6 h-6 xl:w-10 xl:h-10" /> }
              ].map((card, i) => (
                <RevealOnScroll key={i} delay={i * 100}>
                  <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 xl:p-12 hover:bg-white/10 transition-colors h-full flex flex-col">
                    <div className="bg-purple-500/10 w-fit p-4 rounded-xl border border-purple-500/20 mb-6 text-purple-400">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl xl:text-3xl font-bold mb-4">{card.title}</h3>
                    <p className="text-[var(--text-secondary)] xl:text-xl leading-relaxed">{card.text}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION 5: TIMELINE ═══ */}
        <section id="timeline" className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24">
          <RevealOnScroll>
            <div className="text-center mb-16 xl:mb-24">
              <h2 className="text-4xl sm:text-6xl xl:text-8xl font-display font-bold mb-6">
                Application Timeline
              </h2>
              <p className="text-xl xl:text-3xl text-[var(--text-secondary)] max-w-4xl mx-auto">
                Apply in the round that fits your timing and prepare your team for the event.
              </p>
            </div>

            <GlassCard className="max-w-6xl mx-auto p-8 xl:p-16">
              <div className="grid grid-cols-2 gap-8 mb-12 border-b border-white/10 pb-12">
                <div className="text-center">
                  <div className="text-sm xl:text-xl text-[var(--text-muted)] font-mono mb-2 uppercase tracking-widest">Team Size</div>
                  <div className="text-2xl xl:text-4xl font-bold text-emerald-400">1-4 builders</div>
                </div>
                <div className="text-center">
                  <div className="text-sm xl:text-xl text-[var(--text-muted)] font-mono mb-2 uppercase tracking-widest">Rolling Review</div>
                  <div className="text-2xl xl:text-4xl font-bold text-amber-400">Decision after each round</div>
                </div>
              </div>

              <div className="mb-6 flex items-center justify-between text-white/50 px-6 xl:px-12">
                <div className="flex items-center gap-2 xl:text-xl font-bold text-white">
                  <Calendar className="w-5 h-5 xl:w-8 xl:h-8" />
                  <span>Application Rounds</span>
                </div>
                <span className="text-sm xl:text-lg font-mono text-right">All rounds close at 8:59 AM PKT (next day)</span>
              </div>

              <div className="space-y-4 font-mono text-lg xl:text-2xl">
                {[
                  { r: "Round 1", d: "Feb 20" },
                  { r: "Round 2", d: "Mar 6" },
                  { r: "Round 3", d: "Mar 18" },
                  { r: "Round 4", d: "Mar 28" },
                  { r: "Round 5", d: "Apr 11" },
                  { r: "Round 6", d: "Apr 17", badge: "Hub waitlist only" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center bg-white/5 border border-white/10 p-4 xl:p-8 rounded-xl">
                    <span className="font-bold">{row.r}</span>
                    <div className="flex items-center gap-4">
                      {row.badge && (
                        <span className="text-xs xl:text-sm bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full font-sans uppercase tracking-widest">
                          {row.badge}
                        </span>
                      )}
                      <span>{row.d}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center pt-12 border-t border-white/10">
                <AnimatedButton href={REGISTRATION_URL} variant="primary" className="xl:text-xl xl:px-12 xl:py-6 rounded-full font-mono uppercase tracking-widest mb-4">
                  Sign Up for 5th Hackathon
                </AnimatedButton>
                <p className="text-sm xl:text-lg text-[var(--text-muted)]">Rolling review. Accepted teams are notified after each round.</p>
              </div>
            </GlassCard>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION 6: AWARDS ═══ */}
        <section id="prizes" className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24 bg-white/[0.01] border-y border-white/[0.05]">
          <RevealOnScroll>
            <div className="text-center mb-16 xl:mb-24">
              <h2 className="text-4xl sm:text-6xl xl:text-8xl font-display font-bold">
                Competition Awards & Recognition
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16 w-full max-w-6xl mx-auto mb-16 xl:mb-24">
              <RevealOnScroll delay={100}>
                <div className="p-8 xl:p-16 border rounded-3xl bg-emerald-500/[0.02] border-emerald-500/20 shadow-[0_0_50px_-12px_rgba(16,185,129,0.1)] text-center h-full">
                  <div className="w-16 h-16 xl:w-24 xl:h-24 mx-auto bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mb-6 text-emerald-400">
                    <Trophy className="w-8 h-8 xl:w-12 xl:h-12" />
                  </div>
                  <div className="text-emerald-400 font-bold tracking-[0.2em] xl:tracking-[0.4em] uppercase text-sm xl:text-xl mb-4">PRIZES</div>
                  <div className="text-6xl sm:text-8xl xl:text-[8rem] font-bold text-white mb-6 font-display tracking-tighter leading-none">$30k+</div>
                  <p className="text-[var(--text-secondary)] xl:text-2xl">in API credits and cash prizes</p>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={200}>
                <div className="p-8 xl:p-16 border rounded-3xl bg-amber-500/[0.02] border-amber-500/20 shadow-[0_0_50px_-12px_rgba(245,158,11,0.1)] text-center h-full">
                  <div className="w-16 h-16 xl:w-24 xl:h-24 mx-auto bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center mb-6 text-amber-400">
                    <Award className="w-8 h-8 xl:w-12 xl:h-12" />
                  </div>
                  <div className="text-amber-400 font-bold tracking-[0.2em] xl:tracking-[0.4em] uppercase text-sm xl:text-xl mb-4">DURING HACK</div>
                  <div className="text-6xl sm:text-8xl xl:text-[8rem] font-bold text-white mb-6 font-display tracking-tighter leading-none">$150k+</div>
                  <p className="text-[var(--text-secondary)] xl:text-2xl">API credits available during the hackathon</p>
                </div>
              </RevealOnScroll>
            </div>

            <div className="border-t border-white/10 pt-16 xl:pt-24 max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-purple-400 tracking-[0.4em] font-bold uppercase xl:text-2xl mb-2">OFFICIAL PARTNERS</h3>
                <p className="italic text-white/50 xl:text-xl">Sponsored by</p>
              </div>
              <SponsorMarquee 
                images={HACKATHON_PARTNER_LOGOS.map((l) => ({
                  src: l.src,
                  alt: l.alt,
                }))}
                speed="normal"
                className="xl:text-xl"
              />
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION 7 & 8: CTA & GUIDE ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 max-w-7xl mx-auto">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/20 rounded-3xl p-8 xl:p-16 flex flex-col items-start justify-center h-full">
                <Zap className="w-8 h-8 xl:w-12 xl:h-12 text-yellow-400 mb-6" />
                <h2 className="text-3xl xl:text-6xl font-bold mb-6 font-display">Ready to Join the Challenge?</h2>
                <p className="text-[var(--text-secondary)] xl:text-2xl leading-relaxed mb-10">
                  Don't miss this opportunity to showcase your AI skills, learn from experts, and compete for amazing prizes. Registration is now open!
                </p>
                <AnimatedButton href={REGISTRATION_URL} variant="primary" className="xl:py-6 xl:px-10 xl:text-xl rounded-full">
                  Sign Up for 5th Hackathon
                </AnimatedButton>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 xl:p-16 flex flex-col items-start justify-center h-full">
                <h2 className="text-3xl xl:text-6xl font-bold mb-6 font-display">More Information on Our Event</h2>
                <p className="text-[var(--text-secondary)] xl:text-2xl leading-relaxed mb-10">
                  Download our comprehensive participant guide for detailed information about the hackathon schedule, judging criteria, and technical resources.
                </p>
                <a 
                  href={PARTICIPANT_GUIDE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center gap-3 py-4 px-8 xl:py-6 xl:px-10 rounded-xl transition-all font-semibold xl:text-xl"
                >
                  <Download className="w-5 h-5 xl:w-8 xl:h-8" />
                  Open Participant Guide
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </section>

      </main>

      <Footer />
    </div>
  )
}
