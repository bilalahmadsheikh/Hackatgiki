---
name: Impressum Page Implementation Prompt
description: Exact legal content and layout for the German Impressum page.
---

# Impressum Page — Full Implementation Prompt

## Page Metadata
```ts
title: "Impressum | Hack-Nation"
description: "Legal imprint information for Hack-Nation UG according to § 5 TMG (German Telemedia Act)."
```

---

## Background
- Fixed full-screen gradient: `bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900`
- No particle effects, no video — clean and calm.

---

## Navigation (Simplified)
- Fixed top bar: `bg-white/5 backdrop-blur-md border-b border-white/20`
- Left: Logo image (`/logo-web.png`, 32px) + "Hack-Nation" text + subtitle `"in collaboration with the"` + `"MIT Sloan AI Club"` gradient badge
- Right: `"Back to Homepage"` button with ArrowLeft icon → navigates to `/`

---

## Main Content (pt-32 pb-20, max-w-4xl, centered)

### Page Header
- **Title**: `"Imprint"` (text-3xl to text-5xl, font-bold, text-white)
- **Subtitle**: `"Information according to § 5 TMG (German Telemedia Act)"`(text-lg, text-blue-100)

---

### Card 1: Responsible for Content
```
glass card: bg-slate-700/40 backdrop-blur-md border border-slate-600/40 shadow-xl, p-8
```

- **Heading**: `"Responsible for Content"` (text-2xl, font-bold, text-white)
- **Company**: `"Hack-Nation UG (limited liability company in formation)"` (text-lg, font-semibold)
- **Address**:
  ```
  Address:
  Tal 44
  80331 München
  Germany
  ```

---

### Card 2: Contact
- **Heading**: `"Contact"`
- **Content**:
  ```
  E-Mail:
  k-wiederhold@web.de  ← clickable mailto: link (text-blue-400 hover:text-blue-300)
  ```

---

### Card 3: Liability Disclaimer
- **Heading**: `"Liability Disclaimer"`
- **Sub-sections** (each with `font-semibold text-white` sub-heading):

**3a: Liability for Content**
`"As service providers, we are liable for own contents of these pages according to Sec. 7, paragraph 1 of the TMG (Telemediengesetz – Tele Media Act by German law). However, pursuant to Sec. 8 to 10 of the TMG, we as service providers are not under obligation to monitor external information provided or stored on our website. Once we have become aware of a specific infringement of law, we will immediately remove the content in question."`

**3b: Liability for Links**
`"Our offer contains links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents. The linked websites had been checked for possible violations of law at the time of the establishment of the link."`

**3c: Copyright**
`"Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only."`

---

### Back Button (centered, below cards)
- `"Back to Homepage"` with ArrowLeft icon
- Style: `bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg`
- Navigates to `/`

---

## Responsive Behavior
- Cards stack vertically on all screen sizes (single column).
- Padding: `px-4 sm:px-6` on mobile.
- Text scales down on mobile: heading text-3xl → text-5xl on desktop.
