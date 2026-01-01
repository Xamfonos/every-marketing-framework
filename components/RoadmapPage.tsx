'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import BackgroundEffects from '@/components/BackgroundEffects'
import RoadmapVisualization from '@/components/RoadmapVisualization'
import { RoadmapData } from '@/lib/types'
import Link from 'next/link'

interface RoadmapPageProps {
  roadmapData: RoadmapData
}

export default function RoadmapPage({ roadmapData }: RoadmapPageProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  const selectedNode = roadmapData.nodes.find((n) => n.id === selectedNodeId)

  useEffect(() => {
    const completedCount = roadmapData.nodes.filter((n) => n.status === 'completed').length
    const progressPercent = (completedCount / roadmapData.nodes.length) * 100
    setProgress(progressPercent)
  }, [roadmapData.nodes])

  const getStatusBadgeStyles = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success/15 text-success border-success/30'
      case 'in-progress':
        return 'bg-warning/15 text-warning border-warning/30'
      default:
        return 'bg-text-tertiary/15 text-text-tertiary border-text-tertiary/30'
    }
  }

  const getDifficultyBadgeStyles = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-success/15 text-success border-success/30'
      case 'intermediate':
        return 'bg-warning/15 text-warning border-warning/30'
      case 'advanced':
        return 'bg-accent/15 text-accent border-accent/30'
      default:
        return 'bg-primary/15 text-primary border-primary/30'
    }
  }

  return (
    <main className="relative min-h-screen">
      <BackgroundEffects />
      <Header />

      {/* Breadcrumb */}
      <div className="relative z-10 border-b border-white/10 bg-dark/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Link href="/" className="hover:text-text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/#roadmaps" className="hover:text-text-primary">
              Roadmaps
            </Link>
            <span>/</span>
            <span className="text-text-primary">{roadmapData.title}</span>
          </div>
        </div>
      </div>

      {/* Roadmap Header */}
      <section className="relative z-10 px-6 py-12 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary-light">
            {roadmapData.icon} Career Path
          </div>

          <h1 className="mb-4 text-5xl font-black tracking-tight">{roadmapData.title} Roadmap</h1>

          <p className="mb-8 text-lg text-text-secondary">{roadmapData.description}</p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span>⏱</span>
              <span className="text-text-secondary">{roadmapData.duration} to complete</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📊</span>
              <span
                className={`rounded-full border px-3 py-1 font-mono text-xs font-semibold uppercase ${getDifficultyBadgeStyles(roadmapData.difficulty)}`}
              >
                {roadmapData.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎯</span>
              <span className="text-text-secondary">{roadmapData.totalTopics} topics to master</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mx-auto max-w-xl rounded-xl border border-white/10 bg-dark-surface p-6">
            <div className="mb-3 flex justify-between text-sm">
              <span className="font-semibold">Your Progress</span>
              <span className="font-mono font-bold text-primary-light">{progress.toFixed(1)}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-dark-elevated">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-success transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 px-6 py-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
            {/* Roadmap Visualization */}
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-dark-surface p-8">
              <RoadmapVisualization
                nodes={roadmapData.nodes}
                connections={roadmapData.connections}
                onNodeClick={setSelectedNodeId}
                selectedNodeId={selectedNodeId}
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Topic Details */}
              <div className="rounded-2xl border border-white/10 bg-dark-surface p-6">
                {!selectedNode ? (
                  // Default State
                  <div>
                    <h3 className="mb-4 text-xl font-bold">Select a Topic</h3>
                    <p className="mb-6 text-sm text-text-secondary">
                      Click on any topic in the roadmap to view details, resources, and frameworks.
                    </p>

                    {/* Legend */}
                    <div className="rounded-xl border border-white/10 bg-dark-elevated p-4">
                      <div className="mb-3 text-sm font-bold text-text-secondary">Legend</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="h-6 w-6 rounded-md border-2 border-success bg-success/10" />
                          <span className="text-sm text-text-secondary">Completed</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-6 w-6 rounded-md border-2 border-warning bg-warning/10" />
                          <span className="text-sm text-text-secondary">In Progress</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-6 w-6 rounded-md border-2 border-dashed border-text-tertiary bg-text-tertiary/5" />
                          <span className="text-sm text-text-secondary">Locked</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Topic Selected
                  <div>
                    <div className="mb-6">
                      <h3 className="mb-2 text-2xl font-bold">{selectedNode.title}</h3>
                      <span
                        className={`inline-block rounded-full border px-3 py-1 font-mono text-xs font-semibold uppercase ${getStatusBadgeStyles(selectedNode.status)}`}
                      >
                        {selectedNode.status.replace('-', ' ')}
                      </span>
                    </div>

                    <p className="mb-6 leading-relaxed text-text-secondary">
                      {selectedNode.description}
                    </p>

                    {selectedNode.whatYouLearn.length > 0 && (
                      <div className="mb-6">
                        <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-text-tertiary">
                          What You&apos;ll Learn
                        </h4>
                        <ul className="space-y-2 text-sm leading-relaxed text-text-secondary">
                          {selectedNode.whatYouLearn.map((item, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedNode.frameworks.length > 0 && (
                      <div className="mb-6">
                        <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-text-tertiary">
                          Related Frameworks
                        </h4>
                        <div className="space-y-2">
                          {selectedNode.frameworks.map((framework, idx) => (
                            <Link
                              key={idx}
                              href={framework.link}
                              className="flex items-center gap-2 rounded-lg border border-white/10 bg-dark-elevated p-3 text-sm transition-all hover:translate-x-1 hover:border-primary hover:shadow-md"
                            >
                              <span>📄</span>
                              <span>{framework.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedNode.prerequisites.length > 0 && (
                      <div className="mb-6">
                        <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-text-tertiary">
                          Prerequisites
                        </h4>
                        <div className="text-sm text-text-secondary">
                          {selectedNode.prerequisites.map((prereq, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="text-success">✓</span>
                              <span>{prereq}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <button className="flex-1 rounded-lg bg-primary px-4 py-3 font-semibold transition-all hover:-translate-y-1 hover:bg-primary-light hover:shadow-glow">
                        Mark as Complete
                      </button>
                      <button className="flex-1 rounded-lg border border-white/10 bg-dark-elevated px-4 py-3 font-semibold transition-all hover:border-primary">
                        Analyze with AI
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
