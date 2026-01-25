'use client'

import { useId, useState } from 'react'

const tabs = [
  {
    title: 'Strategy Console',
    description: 'AI-powered strategy builder that applies 200+ frameworks to your situation.',
  },
  {
    title: 'Framework Library',
    description: 'Access every marketing framework across 14 domains with prerequisites mapped.',
  },
  {
    title: 'Validation Engine',
    description: 'Stress-test your strategy to catch gaps before execution.',
  },
  {
    title: 'Roadmaps',
    description: 'Visual learning paths showing framework dependencies and sequencing.',
  },
]

export default function ProductTabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const baseId = useId()

  return (
    <div>
      <div
        role="tablist"
        aria-label="Product overview"
        className="mx-auto flex max-w-[760px] flex-wrap justify-center gap-1 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-1"
      >
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={tab.title}
              type="button"
              role="tab"
              id={`${baseId}-tab-${index}`}
              aria-controls={`${baseId}-panel-${index}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              className={`rounded-lg px-5 py-3 text-sm font-medium transition-all md:text-base ${
                isActive
                  ? 'bg-white text-[#0A0A0A] shadow-sm'
                  : 'text-[#6B7280] hover:text-[#0A0A0A]'
              }`}
            >
              {tab.title}
            </button>
          )
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel-${activeIndex}`}
        aria-labelledby={`${baseId}-tab-${activeIndex}`}
        className="mt-16 text-center"
      >
        <div
          key={activeIndex}
          className="mx-auto max-w-[900px] animate-fade-in-up"
          style={{ animationDuration: '300ms' }}
        >
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-sm transition-all duration-300">
            <div className="aspect-[16/10] rounded-xl border border-[#E5E7EB] bg-[#F9FAFB]" />
          </div>
          <p className="mx-auto mt-8 max-w-[600px] text-lg leading-7 text-[#6B7280]">
            {tabs[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  )
}
