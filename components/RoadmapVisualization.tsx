'use client'

import { useState, useMemo } from 'react'
import { RoadmapNode, RoadmapConnection, ViewMode } from '@/lib/types'

interface RoadmapVisualizationProps {
  nodes: RoadmapNode[]
  connections: RoadmapConnection[]
  onNodeClick: (nodeId: string) => void
  selectedNodeId: string | null
  layout?: 'vertical' | 'horizontal-pillars'
  expandable?: boolean
  defaultView?: ViewMode
}

export default function RoadmapVisualization({
  nodes,
  connections,
  onNodeClick,
  selectedNodeId,
  layout = 'vertical',
  expandable = false,
  defaultView = 'full',
}: RoadmapVisualizationProps) {
  const [expandedPillars, setExpandedPillars] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>(defaultView)

  // Filter nodes based on view mode and expanded pillars
  const visibleNodes = useMemo(() => {
    if (!expandable) return nodes

    // Collapsed: Only show START and PILLAR nodes
    if (viewMode === 'collapsed') {
      return nodes.filter((n) => n.nodeType === 'pillar' || n.id === 'start')
    }

    // Contexts: Show START, PILLARs, CONTEXTs, and expanded frameworks
    if (viewMode === 'contexts') {
      return nodes.filter((n) => {
        if (n.nodeType === 'pillar' || n.id === 'start') return true
        if (n.nodeType === 'context') return true
        // Show frameworks/tools only if their pillar category is expanded
        if (n.category && expandedPillars.includes(n.category)) return true
        return false
      })
    }

    // Full: Show all nodes
    return nodes
  }, [nodes, expandable, viewMode, expandedPillars])

  // Filter connections to only show those between visible nodes
  const visibleConnections = useMemo(() => {
    const visibleNodeIds = new Set(visibleNodes.map((n) => n.id))
    return connections.filter(
      (c) => visibleNodeIds.has(c.from) && visibleNodeIds.has(c.to)
    )
  }, [connections, visibleNodes])

  // Toggle pillar expansion (only in contexts mode)
  const togglePillar = (category: string) => {
    if (viewMode !== 'contexts') return
    setExpandedPillars((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
  }

  // Handle node click
  const handleNodeClick = (node: RoadmapNode) => {
    if (node.status === 'locked') return

    // If it's a pillar in contexts mode, toggle expansion
    if (expandable && viewMode === 'contexts' && node.nodeType === 'pillar' && node.category) {
      togglePillar(node.category)
    } else {
      // Otherwise, select the node
      onNodeClick(node.id)
    }
  }

  // Calculate viewBox based on layout
  const getViewBox = () => {
    if (layout === 'horizontal-pillars') {
      return '0 0 1400 3000' // Wider and taller for horizontal spread
    }
    return '0 0 800 1400' // Original vertical layout
  }

  // Get node styling based on type
  const getNodeStyles = (node: RoadmapNode) => {
    const baseStyles = {
      strokeWidth: selectedNodeId === node.id ? 3 : 2,
      strokeDasharray: 'none' as string | undefined,
    }

    // Style by node type
    switch (node.nodeType) {
      case 'pillar':
        return {
          ...baseStyles,
          fill: '#FFE66D',
          stroke: '#FFD700',
          textColor: '#0a0a0a',
        }
      case 'context':
        return {
          ...baseStyles,
          fill: '#F4E4C1',
          stroke: '#D4A574',
          textColor: '#0a0a0a',
        }
      case 'framework':
        return {
          ...baseStyles,
          fill: '#FFE66D',
          stroke: '#FFD700',
          textColor: '#0a0a0a',
        }
      case 'tool':
        const isSponsoredTool = node.tools?.some((t) => t.sponsored)
        return {
          ...baseStyles,
          fill: '#FAF3E0',
          stroke: isSponsoredTool ? '#FFD700' : '#cccccc',
          strokeDasharray: isSponsoredTool ? 'none' : '4,2',
          textColor: isSponsoredTool ? '#0a0a0a' : '#555555',
        }
      case 'cross-context':
        return {
          ...baseStyles,
          fill: 'rgba(0, 217, 255, 0.05)',
          stroke: '#00D9FF',
          textColor: '#ffffff',
        }
      default:
        // Fallback to status-based coloring (for backward compatibility)
        return getStatusStyles(node.status)
    }
  }

  // Legacy status-based styling (for old roadmaps)
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          fill: 'rgba(34, 197, 94, 0.1)',
          stroke: '#22C55E',
          strokeWidth: 2,
          textColor: '#fff',
        }
      case 'in-progress':
        return {
          fill: 'rgba(251, 191, 36, 0.1)',
          stroke: '#FBBF24',
          strokeWidth: 2,
          textColor: '#fff',
        }
      default:
        return {
          fill: 'rgba(255, 255, 255, 0.03)',
          stroke: 'rgba(255, 255, 255, 0.2)',
          strokeWidth: 1,
          strokeDasharray: '5,5',
          textColor: 'rgba(255, 255, 255, 0.4)',
        }
    }
  }

  // Get connection styling based on type
  const getConnectionStyles = (connection: RoadmapConnection) => {
    if (connection.type === 'cross-context') {
      return {
        stroke: '#00D9FF',
        strokeWidth: 2,
        strokeDasharray: '8,4',
        opacity: 0.6,
      }
    }

    if (connection.type === 'optional') {
      return {
        stroke: connection.completed ? '#22C55E' : 'rgba(255, 255, 255, 0.2)',
        strokeWidth: 1,
        strokeDasharray: '4,4',
        opacity: 0.5,
      }
    }

    // Default prerequisite connection
    return {
      stroke: connection.completed ? '#22C55E' : 'rgba(255, 255, 255, 0.2)',
      strokeWidth: 2,
      strokeDasharray: 'none',
      opacity: connection.completed ? 1 : 0.3,
    }
  }

  // Draw connection path
  const getConnectionPath = (from: RoadmapNode, to: RoadmapNode) => {
    const startX = from.x + from.width / 2
    const startY = from.y + from.height
    const endX = to.x + to.width / 2
    const endY = to.y

    // For horizontal layouts, use curved paths
    if (layout === 'horizontal-pillars' && Math.abs(startX - endX) > 100) {
      const controlPointOffset = Math.abs(startY - endY) / 2
      return `M ${startX} ${startY} C ${startX} ${startY + controlPointOffset}, ${endX} ${endY - controlPointOffset}, ${endX} ${endY}`
    }

    // Simple straight line for vertical or nearby nodes
    return `M ${startX} ${startY} L ${endX} ${endY}`
  }

  // Calculate stats for pillars in collapsed/contexts view
  const getPillarStats = (pillarNode: RoadmapNode) => {
    if (!pillarNode.category) return null
    const childNodes = nodes.filter((n) => n.category === pillarNode.category && n.id !== pillarNode.id)
    const totalCount = childNodes.length
    const completedCount = childNodes.filter((n) => n.status === 'completed').length
    return { total: totalCount, completed: completedCount }
  }

  return (
    <div>
      {/* View Mode Toggle - Only show if expandable */}
      {expandable && (
        <div className="mb-6 flex justify-center gap-3">
          <button
            onClick={() => setViewMode('collapsed')}
            className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-all ${
              viewMode === 'collapsed'
                ? 'border-primary bg-primary text-dark'
                : 'border-white/10 bg-dark-elevated text-text-secondary hover:border-primary'
            }`}
          >
            Beginner (5 Pillars)
          </button>
          <button
            onClick={() => setViewMode('contexts')}
            className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-all ${
              viewMode === 'contexts'
                ? 'border-primary bg-primary text-dark'
                : 'border-white/10 bg-dark-elevated text-text-secondary hover:border-primary'
            }`}
          >
            Intermediate (~20 Topics)
          </button>
          <button
            onClick={() => setViewMode('full')}
            className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-all ${
              viewMode === 'full'
                ? 'border-primary bg-primary text-dark'
                : 'border-white/10 bg-dark-elevated text-text-secondary hover:border-primary'
            }`}
          >
            Expert (All {nodes.length} Topics)
          </button>
        </div>
      )}

      {/* SVG Canvas */}
      <svg
        viewBox={getViewBox()}
        className="h-full w-full"
        style={{ minHeight: layout === 'horizontal-pillars' ? '3000px' : '1400px' }}
      >
        {/* Define filters */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Render connections */}
        {visibleConnections.map((conn, idx) => {
          const fromNode = visibleNodes.find((n) => n.id === conn.from)
          const toNode = visibleNodes.find((n) => n.id === conn.to)
          if (!fromNode || !toNode) return null

          const styles = getConnectionStyles(conn)

          return (
            <path
              key={idx}
              d={getConnectionPath(fromNode, toNode)}
              fill="none"
              stroke={styles.stroke}
              strokeWidth={styles.strokeWidth}
              strokeDasharray={styles.strokeDasharray}
              opacity={styles.opacity}
              className="transition-all duration-300"
            />
          )
        })}

        {/* Render nodes */}
        {visibleNodes.map((node) => {
          const styles = getNodeStyles(node)
          const isSelected = selectedNodeId === node.id
          const isLocked = node.status === 'locked'
          const isSponsoredTool = node.nodeType === 'tool' && node.tools?.some((t) => t.sponsored)
          const isPillarInContextsMode = expandable && viewMode === 'contexts' && node.nodeType === 'pillar' && node.category
          const isExpanded = node.category ? expandedPillars.includes(node.category) : false
          const pillarStats = (viewMode === 'collapsed' || viewMode === 'contexts') && node.nodeType === 'pillar' ? getPillarStats(node) : null

          return (
            <g
              key={node.id}
              onClick={() => !isLocked && handleNodeClick(node)}
              className={`transition-all duration-300 ${
                isLocked ? 'cursor-not-allowed' : 'cursor-pointer hover:opacity-80'
              }`}
              filter={isSelected ? 'url(#shadow)' : undefined}
            >
              {/* Node background */}
              <rect
                x={node.x}
                y={node.y}
                width={node.width}
                height={node.height}
                rx={node.nodeType === 'pillar' ? 8 : 6}
                fill={styles.fill}
                stroke={styles.stroke}
                strokeWidth={styles.strokeWidth}
                strokeDasharray={styles.strokeDasharray}
                className="transition-all duration-300"
              />

              {/* Expand indicator for pillars in contexts mode */}
              {isPillarInContextsMode && (
                <text
                  x={node.x + 12}
                  y={node.y + node.height / 2}
                  fontSize="16"
                  fontFamily="Archivo, sans-serif"
                  fill={styles.textColor}
                  dominantBaseline="middle"
                >
                  {isExpanded ? '▼' : '▶'}
                </text>
              )}

              {/* Sponsored badge for tools */}
              {isSponsoredTool && (
                <text
                  x={node.x + node.width - 8}
                  y={node.y + 18}
                  fontSize="14"
                  fontFamily="Archivo, sans-serif"
                  fill="#FFD700"
                  textAnchor="end"
                >
                  ⭐
                </text>
              )}

              {/* Node title */}
              <text
                x={node.x + node.width / 2}
                y={node.y + (node.subtitle || pillarStats ? node.height / 2 - 8 : node.height / 2)}
                fontSize={node.nodeType === 'pillar' ? 18 : node.nodeType === 'tool' ? 11 : 14}
                fontWeight={node.nodeType === 'pillar' ? 700 : 600}
                fontFamily="Archivo, sans-serif"
                fill={styles.textColor}
                textAnchor="middle"
                dominantBaseline="middle"
                className="pointer-events-none select-none"
              >
                {node.title}
              </text>

              {/* Node subtitle */}
              {node.subtitle && (
                <text
                  x={node.x + node.width / 2}
                  y={node.y + node.height / 2 + 12}
                  fontSize="10"
                  fontFamily="Archivo, sans-serif"
                  fill={styles.textColor}
                  opacity={0.7}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="pointer-events-none select-none"
                >
                  {node.subtitle}
                </text>
              )}

              {/* Pillar stats preview */}
              {pillarStats && (
                <text
                  x={node.x + node.width / 2}
                  y={node.y + node.height / 2 + 12}
                  fontSize="10"
                  fontFamily="Archivo, sans-serif"
                  fill={styles.textColor}
                  opacity={0.6}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="pointer-events-none select-none"
                >
                  {pillarStats.completed}/{pillarStats.total} completed
                </text>
              )}

              {/* Lock icon for locked nodes */}
              {isLocked && (
                <text
                  x={node.x + node.width / 2}
                  y={node.y + node.height + 20}
                  fontSize="16"
                  textAnchor="middle"
                >
                  🔒
                </text>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
