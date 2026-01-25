'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { RoadmapData, RoadmapNode } from '@/lib/types'

interface PillarRoadmapProps {
  roadmapData: RoadmapData
}

const fallbackPillar = 'Core roadmap'

const statusStyles: Record<string, { badge: string; row: string }> = {
  completed: {
    badge: 'bg-success/10 text-success border-success/30',
    row: 'border-success/30 bg-success/5',
  },
  'in-progress': {
    badge: 'bg-warning/10 text-warning border-warning/30',
    row: 'border-warning/30 bg-warning/5',
  },
  locked: {
    badge: 'bg-text-tertiary/15 text-text-tertiary border-text-tertiary/30',
    row: 'border-white/10 bg-dark-elevated/50',
  },
}

const sentenceStatus = (status: string) => {
  if (status === 'in-progress') return 'In progress'
  return status.charAt(0).toUpperCase() + status.slice(1)
}

const toSentenceCase = (value: string) => {
  if (!value) return value
  const trimmed = value.trim()
  if (!trimmed) return value
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase()
}

const getPillarOrder = (roadmapData: RoadmapData) => {
  if (roadmapData.pillarOrder && roadmapData.pillarOrder.length > 0) return roadmapData.pillarOrder
  const categories = roadmapData.nodes.map((node) => node.category).filter(Boolean) as string[]
  const unique = Array.from(new Set(categories))
  return unique.length > 0 ? unique : [fallbackPillar]
}

const getDefaultLearnings = (title: string) => [
  `Understand the core concepts of ${title.toLowerCase()}.`,
  `Apply ${title.toLowerCase()} to growth decisions and prioritization.`,
  'Measure the impact with practical metrics and real-world benchmarks.',
]

const isFrameworkNode = (node: RoadmapNode) => node.id !== 'start' && node.nodeType !== 'pillar' && node.nodeType !== 'context'

const StatusIcon = ({ status }: { status: RoadmapNode['status'] }) => {
  if (status === 'completed') {
    return (
      <svg viewBox="0 0 16 16" className="h-4 w-4 text-success" aria-hidden="true">
        <path
          d="M6.4 11.2L3.2 8l1.1-1.1 2.1 2.1 5-5L12.5 5l-6.1 6.2z"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (status === 'in-progress') {
    return (
      <svg viewBox="0 0 16 16" className="h-4 w-4 text-warning" aria-hidden="true">
        <circle cx="8" cy="8" r="3" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 text-text-tertiary" aria-hidden="true">
      <path
        d="M4 7V5a4 4 0 118 0v2h1a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1h1zm2 0h4V5a2 2 0 10-4 0v2z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function PillarRoadmap({ roadmapData }: PillarRoadmapProps) {
  const [expandedFrameworkId, setExpandedFrameworkId] = useState<string | null>(null)
  const [collapsedPillars, setCollapsedPillars] = useState<string[]>([])

  const nodesByTitle = useMemo(() => {
    const map = new Map<string, RoadmapNode>()
    roadmapData.nodes.filter(isFrameworkNode).forEach((node) => {
      map.set(node.title, node)
    })
    return map
  }, [roadmapData.nodes])

  const pillarOrder = useMemo(() => getPillarOrder(roadmapData), [roadmapData])

  const pillars = useMemo(() => {
    return pillarOrder.map((pillar) => ({
      title: pillar,
      nodes: roadmapData.nodes.filter((node) => {
        if (!isFrameworkNode(node)) return false
        const category = node.category ?? fallbackPillar
        return category === pillar
      }),
    }))
  }, [pillarOrder, roadmapData.nodes])

  const togglePillar = (pillarTitle: string) => {
    setCollapsedPillars((prev) =>
      prev.includes(pillarTitle) ? prev.filter((pill) => pill !== pillarTitle) : [...prev, pillarTitle]
    )
  }

  const openFramework = (node: RoadmapNode) => {
    if (node.status === 'locked') return
    setExpandedFrameworkId((prev) => (prev === node.id ? null : node.id))
  }

  const openByTitle = (title: string) => {
    const target = nodesByTitle.get(title)
    if (!target || target.status === 'locked') return
    setExpandedFrameworkId(target.id)
    const category = target.category ?? fallbackPillar
    if (collapsedPillars.includes(category)) {
      setCollapsedPillars((prev) => prev.filter((pill) => pill !== category))
    }
  }

  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {pillars.map((pillar) => {
        const isCollapsed = collapsedPillars.includes(pillar.title)
        const pillarTitle = toSentenceCase(pillar.title)
        return (
          <div key={pillar.title} className="rounded-2xl border border-white/10 bg-dark-surface/60 p-5">
            <button
              type="button"
              onClick={() => togglePillar(pillar.title)}
              className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-dark-elevated/70 px-4 py-3 text-left text-sm font-semibold text-text-primary transition hover:border-primary/40"
            >
              <span className="flex items-center gap-3">
                <span className="text-base" aria-hidden="true">{isCollapsed ? '+' : '-'}</span>
                <span>{pillarTitle}</span>
              </span>
              <span className="text-xs font-medium text-text-tertiary">{pillar.nodes.length} frameworks</span>
            </button>

            {!isCollapsed && (
              <div className="mt-4 space-y-3">
                {pillar.nodes.map((node) => {
                  const isExpanded = expandedFrameworkId === node.id
                  const statusStyle = statusStyles[node.status]
                  const statusLabel = sentenceStatus(node.status)
                  const relatedFrameworks = pillar.nodes
                    .filter((item) => item.id !== node.id)
                    .slice(0, 4)
                  const learnings = node.whatYouLearn.length > 0 ? node.whatYouLearn : getDefaultLearnings(node.title)

                  return (
                    <div key={node.id}>
                      <button
                        type="button"
                        onClick={() => openFramework(node)}
                        className={`flex h-[52px] w-full items-center justify-between gap-3 rounded-xl border px-4 text-left text-sm font-medium transition-all ${
                          node.status === 'locked'
                            ? 'cursor-not-allowed opacity-60'
                            : 'hover:-translate-y-0.5 hover:border-white/20 hover:shadow-md'
                        } ${isExpanded ? 'border-primary/50 bg-primary/5' : statusStyle.row}`}
                      >
                        <span className="flex items-center gap-3">
                          <StatusIcon status={node.status} />
                          <span>{toSentenceCase(node.title)}</span>
                        </span>
                        <span className="flex items-center gap-2 text-xs font-medium text-text-tertiary">
                          {node.status === 'completed' && (
                            <span className="rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[11px] font-medium text-success">
                              Completed
                            </span>
                          )}
                          <span className="text-sm" aria-hidden="true">{isExpanded ? '-' : '>'}</span>
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-200 ease-out ${
                          isExpanded ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div
                          className={`mt-3 rounded-2xl border border-white/10 bg-dark-elevated/80 p-5 transition-opacity duration-150 ${
                            isExpanded ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <div className="flex flex-wrap items-center gap-3">
                            <h4 className="text-base font-semibold text-text-primary">{toSentenceCase(node.title)}</h4>
                            <span
                              className={`rounded-full border px-3 py-1 text-xs font-medium ${statusStyle.badge}`}
                            >
                              {statusLabel}
                            </span>
                          </div>

                          <p className="mt-3 text-sm text-text-secondary">{node.description}</p>

                          <div className="mt-6 grid gap-6 md:grid-cols-[1.6fr_0.9fr]">
                            <div className="space-y-5">
                              <div>
                                <div className="mb-2 text-sm font-semibold text-text-primary">What you'll learn</div>
                                <ul className="space-y-2 text-sm text-text-secondary">
                                  {learnings.map((item, idx) => (
                                    <li key={idx} className="flex gap-2">
                                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {node.prerequisites.length > 0 && (
                                <div>
                                  <div className="mb-2 text-sm font-semibold text-text-primary">Dependencies</div>
                                  <div className="flex flex-wrap gap-2">
                                    {node.prerequisites.map((dependency) => (
                                      <button
                                        key={dependency}
                                        type="button"
                                        onClick={() => openByTitle(dependency)}
                                        className="h-8 rounded-full border border-white/10 bg-dark-surface px-3 text-xs font-medium text-text-secondary transition hover:border-primary/60 hover:text-text-primary"
                                      >
                                        {toSentenceCase(dependency)}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {relatedFrameworks.length > 0 && (
                                <div>
                                  <div className="mb-2 text-sm font-semibold text-text-primary">Related frameworks</div>
                                  <div className="space-y-2">
                                    {relatedFrameworks.map((framework) => (
                                      <button
                                        key={framework.id}
                                        type="button"
                                        onClick={() => openFramework(framework)}
                                        className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-dark-surface px-3 py-2 text-sm text-text-secondary transition hover:border-primary/50 hover:text-text-primary"
                                      >
                                        <span>{toSentenceCase(framework.title)}</span>
                                        <span className="text-xs text-text-tertiary">Open</span>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>

                            <div className="flex flex-col gap-3">
                              <Link
                                href="/coming-soon?for=strategy-console"
                                className="rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-dark transition hover:bg-primary-light"
                              >
                                Go to strategy console
                              </Link>
                              <button
                                type="button"
                                className="rounded-lg border border-white/10 bg-dark-surface px-4 py-3 text-sm font-semibold text-text-primary transition hover:border-primary/50"
                              >
                                Mark as complete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
