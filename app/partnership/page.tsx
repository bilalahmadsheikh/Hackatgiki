import NeuralMeshBg from "@/components/three/NeuralMeshBg"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import GlassCard from "@/components/GlassCard"
import AnimatedButton from "@/components/AnimatedButton"
import RevealOnScroll from "@/components/RevealOnScroll"
import {
  Building2,
  TrendingUp,
  Megaphone,
  Users,
  ChevronRight,
  Lightbulb,
  Globe,
  Award,
  CheckCircle2
} from "lucide-react"

export const metadata = {
  title: "Partner with Hack-Nation | Corporate & VC Partnerships",
  description: "Join us in shaping the future of AI innovation through strategic partnerships.",
}

const PARTNER_EMAIL = "bushrahz.giki@gmail.com"

export default function PartnershipPage() {
  const mailtoSubject = encodeURIComponent("Global AI Hackathon 2026 - Partnership Inquiry")
  const mailtoBody = encodeURIComponent(`Dear Global AI Hackathon Team,

I am interested in exploring partnership opportunities for the Global AI Hackathon 2026.

Organization Details:
- Company/Organization Name: 
- Industry: 
- Partnership Interest: [Corporate Sponsorship / VC Investment / Other]

Specific Interests:
- 

Please connect me with the appropriate team member to discuss partnership opportunities.

Best regards,
[Your Name]
[Your Title]
[Your Contact Information]`)

  return (
    <div className="relative min-h-screen">
      <NeuralMeshBg />
      <Navbar />

      <main id="main-content" className="relative z-10 pt-28">
        
        {/* ═══ SECTION 1: HERO ═══ */}
        <section className="flex w-full flex-col items-start justify-center min-h-[85vh] py-16 xl:py-32 px-4 sm:px-8 xl:px-24">
          <RevealOnScroll>
            <div className="max-w-4xl glass-card rounded-[2rem] p-8 sm:p-12 xl:p-16 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
              
              <p className="mb-4 font-code text-xs sm:text-sm xl:text-lg uppercase tracking-[0.25em] xl:tracking-[0.35em] text-[var(--text-muted)]">
                Work with us
              </p>
              
              <h1 className="font-display mb-8 font-bold text-5xl sm:text-7xl xl:text-[8rem] tracking-tight leading-none">
                Partnership<br />
                <span className="text-purple-400 electric-text-glow">Opportunities</span>
              </h1>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 xl:text-xl">
                  <Building2 className="w-5 h-5 text-emerald-400" />
                  Corporate Partners
                </span>
                <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 xl:text-xl">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                  VCs & Investors
                </span>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent my-8" />

              <p className="mb-10 text-lg sm:text-xl xl:text-3xl leading-relaxed text-[var(--text-secondary)]">
                Join us in shaping the future of AI innovation through strategic partnerships that drive meaningful impact and sustainable growth across the global tech ecosystem.
              </p>

              <AnimatedButton 
                variant="primary" 
                href="#contact-form"
                className="bg-white text-slate-900 hover:bg-slate-200 xl:px-12 xl:py-6 xl:text-xl rounded-full"
              >
                Contact Our Team
              </AnimatedButton>
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION 2: FOR CORPORATE PARTNERS ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24 bg-white/[0.01] border-t border-white/[0.05]">
          <RevealOnScroll>
            <div className="mb-16 xl:mb-24 relative pl-6 xl:pl-10 border-l-4 border-purple-500">
              <h2 className="text-3xl sm:text-5xl xl:text-7xl font-display font-bold text-white mb-4">
                For Corporate Partners
              </h2>
              <p className="text-xl xl:text-3xl text-[var(--text-secondary)] max-w-3xl">
                Accelerate your AI transformation and access top talent through strategic partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10 w-full max-w-7xl mx-auto">
              {[
                { 
                  icon: <Lightbulb className="w-8 h-8 xl:w-10 xl:h-10" />, 
                  title: "Innovation Access", 
                  subtitle: "Solve Your Toughest Challenges", 
                  desc: "Submit your company's most difficult API integration or AI challenges and receive a first-class MVP or proof-of-concept from top global talent in just 24-48 hours." 
                },
                { 
                  icon: <Megaphone className="w-8 h-8 xl:w-10 xl:h-10" />, 
                  title: "Brand Exposure", 
                  subtitle: "Showcase Your Leadership", 
                  desc: "Advertise your products and services to a large, highly engaged tech audience. Strengthen your company's position as a thought leader in the AI space." 
                },
                { 
                  icon: <Users className="w-8 h-8 xl:w-10 xl:h-10" />, 
                  title: "Talent Pipeline", 
                  subtitle: "Recruit Top Engineers", 
                  desc: "Identify and recruit the most ambitious AI developers globally. Watch them build under pressure and interact with them firsthand as mentors or judges." 
                },
                { 
                  icon: <Globe className="w-8 h-8 xl:w-10 xl:h-10" />, 
                  title: "Community Impact", 
                  subtitle: "Empower Global Innovation", 
                  desc: "Support the democratization of tech access and empower builders from emerging hubs to create world-class AI solutions." 
                }
              ].map((card, idx) => (
                <RevealOnScroll key={idx} delay={idx * 150}>
                  <div className="glass-card rounded-3xl p-8 sm:p-10 xl:p-14 transition-all duration-500 hover:bg-white/10 h-full border border-white/10">
                    <div className="p-4 xl:p-5 rounded-2xl bg-purple-600/20 text-purple-400 w-fit mb-8 border border-purple-500/20">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl xl:text-4xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-purple-400 font-code tracking-widest uppercase text-sm xl:text-lg mb-6">{card.subtitle}</p>
                    <p className="text-[var(--text-secondary)] xl:text-xl leading-relaxed">{card.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION 3: SPONSORSHIP TIERS ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24">
          <RevealOnScroll>
            <div className="mb-16 xl:mb-24 relative pl-6 xl:pl-10 border-l-4 border-amber-500">
              <h2 className="text-3xl sm:text-5xl xl:text-7xl font-display font-bold text-white mb-4">
                Sponsorship Tiers
              </h2>
              <p className="text-xl xl:text-3xl text-[var(--text-secondary)] max-w-3xl">
                Choose the level of engagement and brand alignment that fits your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 w-full max-w-7xl mx-auto">
              
              {/* Silver Tier */}
              <GlassCard className="relative overflow-hidden border-slate-400/30 bg-slate-400/[0.02]">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-400" />
                <div className="p-8 xl:p-12">
                  <h3 className="text-3xl xl:text-5xl font-bold font-display text-slate-300 mb-8">Silver</h3>
                  
                  <div className="mb-8">
                    <h4 className="text-sm xl:text-lg font-bold uppercase tracking-widest text-slate-400 mb-4 bg-slate-400/10 w-fit px-3 py-1 rounded">Branding</h4>
                    <ul className="space-y-4 xl:text-xl text-slate-300">
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-slate-400" /> <span>Logo on website and social media</span></li>
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-slate-400" /> <span>Logo on event banners and standees</span></li>
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-emerald-400" /> <span>Logo on event merch (NEW)</span></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm xl:text-lg font-bold uppercase tracking-widest text-slate-400 mb-4 bg-slate-400/10 w-fit px-3 py-1 rounded">Engagement</h4>
                    <ul className="space-y-4 xl:text-xl text-slate-300">
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-slate-400" /> <span>Social media highlights post</span></li>
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-slate-400" /> <span>Company stall / booth</span></li>
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-slate-400" /> <span>Shoutout during opening ceremony</span></li>
                    </ul>
                  </div>
                </div>
              </GlassCard>

              {/* Gold Tier */}
              <GlassCard className="relative overflow-hidden border-yellow-500/30 bg-yellow-500/[0.03] lg:scale-105 shadow-[0_0_40px_-15px_rgba(234,179,8,0.2)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500" />
                <div className="p-8 xl:p-12">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-3xl xl:text-5xl font-bold font-display text-yellow-400">Gold</h3>
                    <Award className="w-8 h-8 xl:w-12 xl:h-12 text-yellow-500" />
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-sm xl:text-lg font-bold uppercase tracking-widest text-yellow-500 mb-4 bg-yellow-500/10 w-fit px-3 py-1 rounded">Branding</h4>
                    <ul className="space-y-4 xl:text-xl text-yellow-100/80">
                      <li className="flex gap-3 font-semibold text-white"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-yellow-500" /> <span>Includes all Silver benefits</span></li>
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-yellow-500/70" /> <span>Logo on all official Event Merch</span></li>
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-yellow-500/70" /> <span>Short sponsor highlight in recap email/newsletter</span></li>
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-yellow-500/70" /> <span>Logo on awards & shields</span></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm xl:text-lg font-bold uppercase tracking-widest text-yellow-500 mb-4 bg-yellow-500/10 w-fit px-3 py-1 rounded">Engagement</h4>
                    <ul className="space-y-4 xl:text-xl text-yellow-100/80">
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-yellow-500/70" /> <span>Company stall / booth</span></li>
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-yellow-500/70" /> <span>Sponsor highlight in newsletter</span></li>
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-yellow-500/70" /> <span>Post-event email blast</span></li>
                    </ul>
                  </div>
                </div>
              </GlassCard>

              {/* Platinum Tier */}
              <GlassCard className="relative overflow-hidden border-cyan-400/30 bg-cyan-400/[0.02]">
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400" />
                <div className="p-8 xl:p-12">
                  <h3 className="text-3xl xl:text-5xl font-bold font-display text-cyan-300 mb-8">Platinum</h3>
                  
                  <div className="mb-8">
                    <h4 className="text-sm xl:text-lg font-bold uppercase tracking-widest text-cyan-400 mb-4 bg-cyan-400/10 w-fit px-3 py-1 rounded">Branding</h4>
                    <ul className="space-y-4 xl:text-xl text-cyan-100/80">
                      <li className="flex gap-3 font-semibold text-white"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-cyan-400" /> <span>Includes all Gold benefits</span></li>
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-cyan-500/70" /> <span>Logo on awards and shields</span></li>
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-cyan-500/70" /> <span>Promotional video on event screens</span></li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm xl:text-lg font-bold uppercase tracking-widest text-cyan-400 mb-4 bg-cyan-400/10 w-fit px-3 py-1 rounded">Engagement</h4>
                    <ul className="space-y-4 xl:text-xl text-cyan-100/80">
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-cyan-500/70" /> <span>Private interview room</span></li>
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-cyan-500/70" /> <span>Post-event email blast</span></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm xl:text-lg font-bold uppercase tracking-widest text-cyan-400 mb-4 bg-cyan-400/10 w-fit px-3 py-1 rounded">Promotion</h4>
                    <ul className="space-y-4 xl:text-xl text-cyan-100/80">
                      <li className="flex gap-3"><CheckCircle2 className="shrink-0 w-5 h-5 xl:w-6 xl:h-6 text-cyan-500/70" /> <span>Sponsor spotlight blog & LinkedIn article</span></li>
                    </ul>
                  </div>
                </div>
              </GlassCard>

            </div>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION 4: FOR VCs & INVESTORS ═══ */}
        <section className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-24 bg-white/[0.01] border-t border-white/[0.05]">
          <RevealOnScroll>
            <div className="mb-16 xl:mb-24 relative pl-6 xl:pl-10 border-l-4 border-blue-500">
              <h2 className="text-3xl sm:text-5xl xl:text-7xl font-display font-bold text-white mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-purple-400 font-code tracking-widest uppercase text-sm xl:text-xl mb-4">For VCs & Investors</p>
            </div>

            <GlassCard className="max-w-4xl p-8 sm:p-12 xl:p-16 border-blue-500/20 bg-blue-900/10">
              <p className="text-xl xl:text-3xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                We give investors a structured way to discover selected AI ventures emerging from the hackathon and evaluate them with more clarity, speed, and context.
              </p>
              <p className="text-xl xl:text-3xl text-[var(--text-secondary)] mb-12 leading-relaxed">
                Detailed information on access, process, and participation is available in our sponsor deck.
              </p>
              <AnimatedButton 
                variant="primary" 
                external 
                href="/4thhacknation.pdf" 
                className="bg-white text-slate-900 hover:bg-slate-200 xl:px-12 xl:py-6 xl:text-xl rounded-full"
              >
                View Sponsor Deck
              </AnimatedButton>
            </GlassCard>
          </RevealOnScroll>
        </section>

        {/* ═══ SECTION 5: CONTACT INQUIRY ═══ */}
        <section id="contact-form" className="w-full px-4 sm:px-8 xl:px-24 py-16 xl:py-32">
          <RevealOnScroll>
            <div className="mb-16 xl:mb-24 relative pl-6 xl:pl-10 border-l-4 border-emerald-500">
              <h2 className="text-3xl sm:text-5xl xl:text-7xl font-display font-bold text-white mb-4">
                Partnership Inquiry
              </h2>
              <p className="text-xl xl:text-3xl text-[var(--text-secondary)] max-w-3xl">
                Ready to explore partnership opportunities? Our team will connect you with the right specialist within 24 hours.
              </p>
            </div>

            <div className="glass-card rounded-[2rem] p-8 sm:p-12 border border-emerald-500/20 bg-emerald-950/10 max-w-6xl shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-24 mb-16">
                <div>
                  <h3 className="flex items-center gap-3 text-2xl xl:text-4xl font-bold mb-8 text-white"><Building2 className="w-6 h-6 xl:w-8 xl:h-8 text-purple-400" /> Corporate Partners</h3>
                  <ul className="space-y-4 xl:text-2xl text-[var(--text-secondary)]">
                    <li className="flex items-start gap-4 hover:text-white transition-colors duration-300"><ChevronRight className="w-6 h-6 text-purple-400 shrink-0" /> <span>AI Solution Development</span></li>
                    <li className="flex items-start gap-4 hover:text-white transition-colors duration-300"><ChevronRight className="w-6 h-6 text-purple-400 shrink-0" /> <span>AI Adoption Programs</span></li>
                    <li className="flex items-start gap-4 hover:text-white transition-colors duration-300"><ChevronRight className="w-6 h-6 text-purple-400 shrink-0" /> <span>Brand Exposure & Thought Leadership</span></li>
                    <li className="flex items-start gap-4 hover:text-white transition-colors duration-300"><ChevronRight className="w-6 h-6 text-purple-400 shrink-0" /> <span>Employee Upskilling Programs</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="flex items-center gap-3 text-2xl xl:text-4xl font-bold mb-8 text-white"><TrendingUp className="w-6 h-6 xl:w-8 xl:h-8 text-blue-400" /> VCs & Investors</h3>
                  <ul className="space-y-4 xl:text-2xl text-[var(--text-secondary)]">
                    <li className="flex items-start gap-4 hover:text-white transition-colors duration-300"><ChevronRight className="w-6 h-6 text-blue-400 shrink-0" /> <span>Selected Venture Access</span></li>
                    <li className="flex items-start gap-4 hover:text-white transition-colors duration-300"><ChevronRight className="w-6 h-6 text-blue-400 shrink-0" /> <span>Streamlined SPV Access</span></li>
                    <li className="flex items-start gap-4 hover:text-white transition-colors duration-300"><ChevronRight className="w-6 h-6 text-blue-400 shrink-0" /> <span>Direct Access to AI Ventures</span></li>
                    <li className="flex items-start gap-4 hover:text-white transition-colors duration-300"><ChevronRight className="w-6 h-6 text-blue-400 shrink-0" /> <span>Streamlined Due Diligence Process</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start pt-8 border-t border-white/10">
                <AnimatedButton 
                  href={`mailto:${PARTNER_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`}
                  variant="primary"
                  className="xl:text-2xl xl:px-12 xl:py-6 rounded-full"
                >
                  <span className="hidden sm:inline">Send Partnership Inquiry</span>
                  <span className="sm:hidden">Send Inquiry</span>
                </AnimatedButton>
                <p className="mt-4 text-sm xl:text-lg text-slate-500 font-mono">
                  Opens email client with pre-filled template to {PARTNER_EMAIL}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </section>

      </main>

      {/* Modern Minimal B2B Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-slate-500 space-y-4 sm:space-y-0 text-sm xl:text-lg">
          <p>© {new Date().getFullYear()} Global AI Hackathon. All rights reserved.</p>
          <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
        </div>
      </footer>
    </div>
  )
}
