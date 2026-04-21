type CMSSection = {
  _type: string
  [key: string]: unknown
}

const sectionComponents: Record<string, React.ComponentType<CMSSection>> = {
  // We'll map these to actual components once they are created/refactored
  // heroSection: dynamic(() => import("./HeroSection")),
  // featureCardsSection: dynamic(() => import("./FeatureCardsSection")),
  // scheduleSection: dynamic(() => import("./ScheduleSection")),
  // teamGridSection: dynamic(() => import("./TeamGridSection")),
  // ctaSection: dynamic(() => import("./CtaSection")),
  // contactSection: dynamic(() => import("./ContactSection")),
  // timelineSection: dynamic(() => import("./TimelineSection")),
  // prizesSection: dynamic(() => import("./PrizesSection")),
  // contentSection: dynamic(() => import("./ContentSection")),
  // partnerSection: dynamic(() => import("./PartnerSection")),
}

interface SectionRendererProps {
  sections: CMSSection[]
}

export default function SectionRenderer({ sections }: SectionRendererProps) {
  if (!sections || !Array.isArray(sections)) return null;

  return (
    <>
      {sections.map((section, index) => {
        const Component = sectionComponents[section._type]
        if (!Component) {
          console.warn(`Unknown section type from CMS: ${section._type}`)
          return null
        }
        return <Component key={`${section._type}-${index}`} {...section} />
      })}
    </>
  )
}
