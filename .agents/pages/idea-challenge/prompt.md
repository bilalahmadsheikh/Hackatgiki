---
name: Idea Challenge Implementation Prompt
description: Complete form layout, field specs, and AI score display for the Idea Challenge tool.
---

# Idea Challenge — Full Implementation Prompt

## Page Metadata
```ts
title: "Idea Challenge | AI Idea Validation | Hack-Nation"
description: "Validate your business idea with our AI-powered analysis tool. Get instant feedback and scoring on your hackathon project concept."
```

---

## Page Layout
- Immersive 3D volumetric depth via `NeuralMeshBg`.
- Outer container: `min-h-screen py-16 sm:py-24` with full edge-to-edge spanning width via `w-full px-4 sm:px-8 xl:px-24`.

---

## Header Section
- Title: `"Hack-Nation Idea Challenge"` (centered text, up to `xl:text-6xl`).
- Subtitle: `"Test your AI hackathon idea against our validation engine."` (text-slate-400).

---

## Main Card: Entry Form

Card: `bg-slate-800 border-slate-700 rounded-lg shadow`

### Section Heading
`"Enter Idea"` (text-2xl, font-semibold, inside card)

### Form Fields (2-column grid on desktop, stacked on mobile)

All inputs styled: `bg-slate-700 border-slate-600 text-white`

| Field | Type | Label | Placeholder | Required |
|-------|------|-------|-------------|----------|
| Project Select | Dropdown | "Select Existing Project (optional)" | "Choose a project" | No |
| Idea Title | Input | "Idea Title *" | "NZT-48" | Yes |
| Tech Stack | Input | "Technology Stack" | "Which technologies are you using? (React, Python, etc.)" | No |
| Problem | Textarea | "Problem/Challenge *" | "Many people who want to acquire knowledge in the AI field are held back due to their own limitations" | Yes |
| Market Size | Input | "Market Size" | "Unknown" | No |
| Target Audience | Textarea | "Target Audience" | "People interested in enhancing their cognitive abilities" | No |
| Competition | Textarea | "Competition" | "There is a lot of competition - everyone promises something that usually only produces placebo effects" | No |
| Solution | Textarea | "Solution *" | "Selling a medication that grants full access to brain performance. Problem: No effect - only placebo" | Yes |
| USP | Input | "Unique Selling Proposition" | "Not known to me" | No |
| Business Model | Textarea | "Business Model" | "TODO: Describe your business model" | No |
| Timeline | Input | "Timeline" | "Achieve innovation by tomorrow" | No |

### Project Select Behavior
- On mount, attempt to fetch project list from `/projects` endpoint (for future backend integration).
- For now, show an empty dropdown.
- When a project is selected, try to fetch its README.md and auto-populate the Title and Problem fields.

### Action Buttons (bottom-right of card)
- **Reset** (outline variant, `border-slate-600 hover:bg-slate-700`) — clears all fields and score
- **Analyze Idea** (`bg-orange-500 hover:bg-orange-600`) — triggers score display

---

## Score Display Section (shown after "Analyze" clicked)

### Layout
- Appears below the form card with smooth fade-in.
- Heading: `"AI Score"` (text-2xl)
- Card: `bg-slate-800 border-slate-700`, flex row: SVG ring + feedback text.

### Circular Score Gauge
- SVG circle `viewBox="0 0 36 36"`
- Background ring: `text-slate-700`, stroke-width 3
- Score ring: `text-red-500` (for low scores), `text-yellow-500` (medium), `text-green-500` (high)
- `strokeDasharray="${score}, 100"` for fill percentage
- Center text: score number (text-2xl, font-bold)

### Demo Score Data
```ts
score: 10
color: "text-red-500"
feedback: "The business idea is extremely poorly rated due to the unrealistic premise of an ineffective medication that grants AI knowledge. The timeline of 'innovation by tomorrow' is also unrealistic and shows a lack of understanding of drug development and regulation. The absence of a unique selling proposition and a clear business model reinforces the negative rating."
```

### Score Color Ranges
- 0-30: `text-red-500` (Poor)
- 31-60: `text-yellow-500` (Moderate)
- 61-80: `text-blue-500` (Good)
- 81-100: `text-green-500` (Excellent)

---

## State Management
```ts
// All form fields as useState strings
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
const [projects, setProjects] = useState<string[]>([])
const [selectedProject, setSelectedProject] = useState("")
```

### Reset Function
Sets ALL state back to initial values including score and feedback.

### Analyze Function
Sets score to `10` and feedback to the demo text above. In the future, this would call an AI API.

---

## Responsive Behavior
- Form grid: 2-col (md+) → 1-col (mobile).
- Score section: flex-row (md+) → stacked (mobile).
- Card padding: p-6 (mobile) → p-8 (desktop).
