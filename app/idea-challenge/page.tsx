"use client"

import { useState } from "react"
import NeuralMeshBg from "@/components/three/NeuralMeshBg"
import Link from "next/link"
import { ArrowLeft, RotateCcw, Zap } from "lucide-react"

const DEMO_SCORE = 10
const DEMO_FEEDBACK = "The business idea is extremely poorly rated due to the unrealistic premise of an ineffective medication that grants AI knowledge. The timeline of 'innovation by tomorrow' is also unrealistic and shows a lack of understanding of drug development and regulation. The absence of a unique selling proposition and a clear business model reinforces the negative rating."

function getScoreColor(s: number) {
  if (s <= 30) return "text-red-500"
  if (s <= 60) return "text-yellow-500"
  if (s <= 80) return "text-blue-500"
  return "text-green-500"
}

function getScoreStroke(s: number) {
  if (s <= 30) return "#ef4444"
  if (s <= 60) return "#eab308"
  if (s <= 80) return "#3b82f6"
  return "#22c55e"
}

function getScoreLabel(s: number) {
  if (s <= 30) return "Poor"
  if (s <= 60) return "Moderate"
  if (s <= 80) return "Good"
  return "Excellent"
}

export default function IdeaChallengePage() {
  const [ideaTitle, setIdeaTitle] = useState("")
  const [techStack, setTechStack] = useState("")
  const [problem, setProblem] = useState("")
  const [marketSize, setMarketSize] = useState("")
  const [targetAudience, setTargetAudience] = useState("")
  const [competition, setCompetition] = useState("")
  const [solution, setSolution] = useState("")
  const [usp, setUsp] = useState("")
  const [businessModel, setBusinessModel] = useState("")
  const [timeline, setTimeline] = useState("")
  const [score, setScore] = useState<number | null>(null)
  const [feedback, setFeedback] = useState("")
  const [selectedProject, setSelectedProject] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const resetAll = () => {
    setIdeaTitle("")
    setTechStack("")
    setProblem("")
    setMarketSize("")
    setTargetAudience("")
    setCompetition("")
    setSolution("")
    setUsp("")
    setBusinessModel("")
    setTimeline("")
    setScore(null)
    setFeedback("")
    setSelectedProject("")
  }

  const analyzeIdea = () => {
    setIsAnalyzing(true)
    // Simulate analysis delay
    setTimeout(() => {
      setScore(DEMO_SCORE)
      setFeedback(DEMO_FEEDBACK)
      setIsAnalyzing(false)
    }, 1500)
  }

  const inputBase = "w-full bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 rounded-xl px-4 py-3 xl:py-4 xl:text-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
  const labelBase = "block text-sm xl:text-base font-semibold text-slate-300 mb-2"

  return (
    <div className="relative min-h-screen">
      <NeuralMeshBg />

      {/* Mini nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="w-full px-4 sm:px-8 xl:px-24 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors text-sm xl:text-base">
            <ArrowLeft className="w-4 h-4" />
            Back to HackatGIKI
          </Link>
          <span className="text-slate-500 text-xs xl:text-sm font-mono uppercase tracking-widest">Idea Validator</span>
        </div>
      </nav>

      <main id="main-content" className="relative z-10 w-full px-4 sm:px-8 xl:px-24 pt-28 pb-16 xl:pb-24">

        {/* Header */}
        <div className="text-center mb-12 xl:mb-20">
          <h1 className="text-4xl sm:text-5xl xl:text-7xl font-display font-bold text-white mb-4">
            Hack-Nation <span className="text-purple-400 electric-text-glow">Idea Challenge</span>
          </h1>
          <p className="text-lg xl:text-2xl text-slate-400 max-w-2xl mx-auto">
            Test your AI hackathon idea against our validation engine.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl p-6 sm:p-8 xl:p-12 w-full max-w-6xl mx-auto mb-12">

          <h2 className="text-2xl xl:text-4xl font-bold text-white mb-8 flex items-center gap-3">
            <Zap className="w-6 h-6 xl:w-8 xl:h-8 text-orange-400" />
            Enter Idea
          </h2>

          {/* Project Select */}
          <div className="mb-8">
            <label htmlFor="project-select" className={labelBase}>
              Select Existing Project (optional)
            </label>
            <select
              id="project-select"
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className={inputBase + " appearance-none cursor-pointer"}
            >
              <option value="">Choose a project</option>
            </select>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
            {/* Idea Title */}
            <div>
              <label htmlFor="idea-title" className={labelBase}>Idea Title <span className="text-red-400">*</span></label>
              <input
                id="idea-title"
                type="text"
                value={ideaTitle}
                onChange={(e) => setIdeaTitle(e.target.value)}
                placeholder="NZT-48"
                className={inputBase}
              />
            </div>

            {/* Tech Stack */}
            <div>
              <label htmlFor="tech-stack" className={labelBase}>Technology Stack</label>
              <input
                id="tech-stack"
                type="text"
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
                placeholder="Which technologies are you using? (React, Python, etc.)"
                className={inputBase}
              />
            </div>

            {/* Problem */}
            <div className="md:col-span-2">
              <label htmlFor="problem" className={labelBase}>Problem/Challenge <span className="text-red-400">*</span></label>
              <textarea
                id="problem"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Many people who want to acquire knowledge in the AI field are held back due to their own limitations"
                rows={3}
                className={inputBase + " resize-none"}
              />
            </div>

            {/* Market Size */}
            <div>
              <label htmlFor="market-size" className={labelBase}>Market Size</label>
              <input
                id="market-size"
                type="text"
                value={marketSize}
                onChange={(e) => setMarketSize(e.target.value)}
                placeholder="Unknown"
                className={inputBase}
              />
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="timeline" className={labelBase}>Timeline</label>
              <input
                id="timeline"
                type="text"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                placeholder="Achieve innovation by tomorrow"
                className={inputBase}
              />
            </div>

            {/* Target Audience */}
            <div>
              <label htmlFor="target-audience" className={labelBase}>Target Audience</label>
              <textarea
                id="target-audience"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                placeholder="People interested in enhancing their cognitive abilities"
                rows={3}
                className={inputBase + " resize-none"}
              />
            </div>

            {/* Competition */}
            <div>
              <label htmlFor="competition" className={labelBase}>Competition</label>
              <textarea
                id="competition"
                value={competition}
                onChange={(e) => setCompetition(e.target.value)}
                placeholder="There is a lot of competition - everyone promises something that usually only produces placebo effects"
                rows={3}
                className={inputBase + " resize-none"}
              />
            </div>

            {/* Solution */}
            <div className="md:col-span-2">
              <label htmlFor="solution" className={labelBase}>Solution <span className="text-red-400">*</span></label>
              <textarea
                id="solution"
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                placeholder="Selling a medication that grants full access to brain performance. Problem: No effect - only placebo"
                rows={3}
                className={inputBase + " resize-none"}
              />
            </div>

            {/* USP */}
            <div>
              <label htmlFor="usp" className={labelBase}>Unique Selling Proposition</label>
              <input
                id="usp"
                type="text"
                value={usp}
                onChange={(e) => setUsp(e.target.value)}
                placeholder="Not known to me"
                className={inputBase}
              />
            </div>

            {/* Business Model */}
            <div>
              <label htmlFor="business-model" className={labelBase}>Business Model</label>
              <textarea
                id="business-model"
                value={businessModel}
                onChange={(e) => setBusinessModel(e.target.value)}
                placeholder="TODO: Describe your business model"
                rows={3}
                className={inputBase + " resize-none"}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 mt-10 pt-8 border-t border-slate-700">
            <button
              onClick={resetAll}
              className="flex items-center gap-2 border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white px-6 py-3 xl:px-8 xl:py-4 xl:text-lg rounded-xl font-semibold transition-all"
            >
              <RotateCcw className="w-4 h-4 xl:w-5 xl:h-5" />
              Reset
            </button>
            <button
              onClick={analyzeIdea}
              disabled={isAnalyzing}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 xl:px-10 xl:py-4 xl:text-lg rounded-xl font-bold transition-all shadow-lg shadow-orange-500/20"
            >
              <Zap className="w-4 h-4 xl:w-5 xl:h-5" />
              {isAnalyzing ? "Analyzing..." : "Analyze Idea"}
            </button>
          </div>
        </div>

        {/* Score Display */}
        {score !== null && (
          <div className="w-full max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl xl:text-4xl font-bold text-white mb-6 flex items-center gap-3">
              AI Score
            </h2>
            <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl p-6 sm:p-8 xl:p-12">
              <div className="flex flex-col md:flex-row gap-8 xl:gap-16 items-center">

                {/* SVG Circular Gauge */}
                <div className="shrink-0 flex flex-col items-center">
                  <svg viewBox="0 0 36 36" className="w-40 h-40 xl:w-56 xl:h-56">
                    {/* Background ring */}
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-slate-700"
                    />
                    {/* Score ring */}
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={getScoreStroke(score)}
                      strokeWidth="3"
                      strokeDasharray={`${score}, 100`}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                      style={{ filter: `drop-shadow(0 0 6px ${getScoreStroke(score)}40)` }}
                    />
                    {/* Center text */}
                    <text x="18" y="20.35" className="fill-white" textAnchor="middle" fontSize="8" fontWeight="bold">
                      {score}
                    </text>
                  </svg>
                  <div className="mt-4 flex items-center gap-2">
                    <span className={`text-sm xl:text-lg font-bold uppercase tracking-widest ${getScoreColor(score)}`}>
                      {getScoreLabel(score)}
                    </span>
                    <span className="text-slate-500 text-sm">/ 100</span>
                  </div>
                </div>

                {/* Feedback Text */}
                <div className="flex-grow">
                  <h3 className="text-xl xl:text-2xl font-bold text-white mb-4">Analysis Feedback</h3>
                  <p className="text-slate-300 xl:text-xl leading-relaxed">
                    {feedback}
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-700">
                    {[
                      { label: "Viability", val: "Low" },
                      { label: "Innovation", val: "Low" },
                      { label: "Market Fit", val: "Poor" },
                      { label: "Feasibility", val: "Poor" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-red-400 font-bold xl:text-lg">{stat.val}</div>
                        <div className="text-slate-500 text-xs xl:text-sm uppercase tracking-widest mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-slate-600 text-sm xl:text-base">
          <p>© {new Date().getFullYear()} HackatGIKI × Hack-Nation. Idea Challenge Tool.</p>
        </div>
      </footer>
    </div>
  )
}
