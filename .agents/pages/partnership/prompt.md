---
name: Partnership Page Implementation Prompt
description: Exact content, layout, and interaction specs for the Hack-Nation partnership page.
---

# Partnership Page — Full Implementation Prompt

## Page Metadata
```ts
title: "Partner with Hack-Nation | Corporate & VC Partnerships"
description: "Join us in shaping the future of AI innovation through strategic partnerships. Explore corporate sponsorship and VC investment opportunities."
```

---

## Section 1: Hero (min-h-[85vh])

### Layout
- Edge-to-edge layout matching the homepage structure (`w-full px-4 sm:px-8 xl:px-24`).
- Immersive 3D foreground via `NeuralMeshBg`.
- Content card: `max-w-2xl`, glassmorphism, left-aligned, `rounded-[2rem]`.

### Content
- **Eyebrow**: `"Work with us"` (text-slate-400, text-lg)
- **Heading**:
  ```
  Partnership
  Opportunities
  ```
  "Opportunities" in `text-purple-400` with `electric-text-glow`.
- **Info badges**:
  - 🏢 `"Corporate Partners"` (Building2 icon)
  - 💰 `"VCs & Investors"` (TrendingUp icon)
- **Divider**: gradient line
- **Body**: `"Join us in shaping the future of AI innovation through strategic partnerships that drive meaningful impact and sustainable growth across the global tech ecosystem."`
- **CTA**: `"Contact Our Team"` → smooth scrolls to `#contact-form` section. White bg, dark text, rounded-full.

---

## Section 2: For Corporate Partners

### Layout
- Purple divider bar at top.
- Heading: `"For Corporate Partners"` (text-2xl to text-5xl, bold, white)
- Subheading: `"Accelerate your AI transformation and access top talent through strategic partnerships"`
- 2×2 grid of glass cards.

### Cards (4 total)

**Card 1: AI Solutions**
- Icon: Lightbulb (purple-400 on purple-600/30 bg)
- Title: `"AI Solutions"`
- Subtitle: `"Solve Your Toughest Challenges"` (text-purple-400)
- Body: `"Submit your company's most difficult AI challenges and receive a first-class MVP or proof-of-concept from top global talent in just 24-48 hours."`

**Card 2: AI Adoption**
- Icon: TrendingUp
- Title: `"AI Adoption"`
- Subtitle: `"Turn AI Interest Into Implementation"`
- Body: `"Use the hackathon to identify high-value use cases, pressure-test workflows, and see how AI can create practical value inside your organization. The strongest outcomes can become the starting point for broader adoption across teams, products, and internal operations."`

**Card 3: Brand Exposure**
- Icon: Megaphone
- Title: `"Brand Exposure"`
- Subtitle: `"Showcase Your Leadership"`
- Body: `"Advertise your products and services to a large, highly engaged tech audience. Strengthen your company's position as a thought leader in the AI space by having your employees mentor participants."`

**Card 4: Team Development**
- Icon: Users
- Title: `"Team Development"`
- Subtitle: `"Upskill Your Employees"`
- Body: `"Gain access to exclusive AI upskilling programs for your employees, including executive and builder training, offered through our partnerships with world-renowned institutions."`

### Card Design
- `glass-card rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/10`
- Icon container: `p-3 rounded-lg bg-purple-600/30 text-purple-400`
- Title: `text-xl md:text-2xl font-bold text-white`

---

## Section 3: For VCs & Investors

### Layout
- Purple divider bar.
- Heading: `"Why Partner With Us?"` (centered)
- Edge-to-edge grid with gap spacing. glass card (max-w-2xl).

### Content
- Body paragraph 1: `"We give investors a structured way to discover selected AI ventures emerging from the hackathon and evaluate them with more clarity, speed, and context."`
- Body paragraph 2: `"Detailed information on access, process, and participation is available in our sponsor deck."`
- **CTA**: `"View Details"` → `4thhacknation.pdf` (opens new tab). White bg, rounded-full, font-bold.

---

## Section 4: Partnership Inquiry (`id="contact-form"`)

### Layout
- Purple divider bar.
- Heading: `"Partnership Inquiry"`
- Subheading: `"Ready to explore partnership opportunities? Our team will connect you with the right specialist within 24 hours."`
- Glassmorphism container (`rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl`).

### Two-Column Info Panel (inside the card)
**Left column — Corporate Partners:**
- Bullet: `"AI Solution Development"` (ChevronRight icon, purple-400)
- Bullet: `"AI Adoption Programs"`
- Bullet: `"Brand Exposure & Thought Leadership"`
- Bullet: `"Employee Upskilling Programs"`

**Right column — VCs & Investors:**
- Bullet: `"Selected Venture Access"`
- Bullet: `"Streamlined SPV Access"`
- Bullet: `"Direct Access to AI Ventures"`
- Bullet: `"Streamlined Due Diligence Process"`

### CTA Button
- `"Send Partnership Inquiry"` (full text on desktop), `"Send Inquiry"` (mobile)
- onClick: opens `mailto:lbieske@mit.edu` with pre-filled subject and body:
  ```
  Subject: Global AI Hackathon 2026 - Partnership Inquiry
  Body:
  Dear Global AI Hackathon Team,

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
  [Your Contact Information]
  ```
- Below button: `"Opens email with template"` (text-slate-400, text-sm)

---

## Section 5: Footer
- Simplified footer: `"© 2025 Global AI Hackathon. All rights reserved."` + `"Impressum"` link.
- Different from homepage footer (no social links — cleaner B2B feel).

---

## Responsive Behavior
- Corporate cards: 2×2 grid on desktop → single column on mobile.
- VC card: centered, full-width on mobile.
- Contact section: 2-column info → stacked on mobile.
- CTA text changes at `sm` breakpoint.
