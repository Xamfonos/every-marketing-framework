'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import BackgroundEffects from '@/components/BackgroundEffects'
import PillarRoadmap from '@/components/PillarRoadmap'
import StrategyConsoleCTA from '@/components/StrategyConsoleCTA'
import Footer from '@/components/Footer'
import { RoadmapData } from '@/lib/types'
import Link from 'next/link'

interface RoadmapPageProps {
  roadmapData: RoadmapData
}

const toSentenceCase = (value: string) => {
  if (!value) return value
  const trimmed = value.trim()
  if (!trimmed) return value
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase()
}

export default function RoadmapPage({ roadmapData }: RoadmapPageProps) {
  const [progress, setProgress] = useState(0)
  const title = `${toSentenceCase(roadmapData.title)} roadmap`

  useEffect(() => {
    const completedCount = roadmapData.nodes.filter((n) => n.status === 'completed').length
    const totalCount = roadmapData.totalTopics || roadmapData.nodes.length
    const rawPercent = (completedCount / totalCount) * 100
    setProgress(rawPercent)
  }, [roadmapData.nodes, roadmapData.totalTopics])

  return (
    <main className="relative min-h-screen bg-dark text-text-primary">
      <BackgroundEffects />
      <Header />

      <section className="relative z-10 px-6 pt-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-3 flex items-center gap-2 text-xs text-text-tertiary">
            <Link href="/" className="hover:text-text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/#roadmaps" className="hover:text-text-primary">
              Roadmaps
            </Link>
            <span>/</span>
            <span className="text-text-primary">{toSentenceCase(roadmapData.title)}</span>
          </div>

          <h1 className="text-[44px] font-bold leading-tight text-text-primary md:text-[52px]">{title}</h1>
          <p className="mt-3 max-w-3xl text-sm text-text-secondary md:text-base">
            {roadmapData.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-text-tertiary">
            <span className="h-7 rounded-full border border-white/10 bg-dark-surface px-3 py-1 font-medium">
              {roadmapData.duration} to complete
            </span>
            <span className="h-7 rounded-full border border-white/10 bg-dark-surface px-3 py-1 font-medium">
              {toSentenceCase(roadmapData.difficulty)}
            </span>
            <span className="h-7 rounded-full border border-white/10 bg-dark-surface px-3 py-1 font-medium">
              {roadmapData.totalTopics} frameworks
            </span>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-6 pt-5">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-2xl border border-white/10 bg-dark-surface/70 p-5">
            <div className="mb-3 flex items-center justify-between text-xs font-medium text-text-tertiary">
              <span>Your progress</span>
              <span className="text-text-primary">{Math.round(progress)}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-dark-elevated">
              <div
                className="h-full rounded-full bg-success transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-3xl border border-white/10 bg-dark-surface/50 p-6 md:p-8">
            <PillarRoadmap roadmapData={roadmapData} />
          </div>
        </div>
      </section>

      <StrategyConsoleCTA />
      <Footer />
    </main>
  )
}
