'use client'

import { RoadmapNode, RoadmapConnection } from '@/lib/types'

interface RoadmapVisualizationProps {
  nodes: RoadmapNode[]
  connections: RoadmapConnection[]
  onNodeClick: (nodeId: string) => void
  selectedNodeId: string | null
}

export default function RoadmapVisualization({
  nodes,
  connections,
  onNodeClick,
  selectedNodeId,
}: RoadmapVisualizationProps) {
  const getNodeStyles = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          fill: 'rgba(0, 229, 160, 0.1)',
          stroke: '#00E5A0',
          strokeWidth: 2,
        }
      case 'in-progress':
        return {
          fill: 'rgba(255, 184, 0, 0.1)',
          stroke: '#FFB800',
          strokeWidth: 2,
        }
      default: // locked
        return {
          fill: 'rgba(107, 114, 153, 0.05)',
          stroke: '#6B7299',
          strokeWidth: 1.5,
          strokeDasharray: '4 4',
        }
    }
  }

  const getTextColor = (status: string) => {
    return status === 'locked' ? '#6B7299' : '#FFFFFF'
  }

  const renderConnection = (conn: RoadmapConnection, index: number) => {
    const fromNode = nodes.find((n) => n.id === conn.from)
    const toNode = nodes.find((n) => n.id === conn.to)
    
    if (!fromNode || !toNode) return null

    const startX = fromNode.x + fromNode.width / 2
    const startY = fromNode.y + fromNode.height
    const endX = toNode.x + toNode.width / 2
    const endY = toNode.y

    return (
      <path
        key={`conn-${index}`}
        d={`M ${startX} ${startY} L ${endX} ${endY}`}
        stroke={conn.completed ? '#00E5A0' : 'rgba(255, 255, 255, 0.1)'}
        strokeWidth={conn.completed ? 2.5 : 2}
        fill="none"
      />
    )
  }

  return (
    <svg
      className="min-w-[800px]"
      width="100%"
      height="1400"
      viewBox="0 0 800 1400"
    >
      {/* Render connections first (behind nodes) */}
      {connections.map((conn, idx) => renderConnection(conn, idx))}

      {/* Render nodes */}
      {nodes.map((node) => {
        const styles = getNodeStyles(node.status)
        const textColor = getTextColor(node.status)
        const isSelected = selectedNodeId === node.id

        return (
          <g
            key={node.id}
            className="cursor-pointer transition-all hover:opacity-80"
            onClick={() => onNodeClick(node.id)}
          >
            <rect
              x={node.x}
              y={node.y}
              width={node.width}
              height={node.height}
              rx={12}
              {...styles}
              style={{
                filter: isSelected
                  ? 'drop-shadow(0 0 8px rgba(0, 102, 255, 0.6))'
                  : undefined,
                strokeWidth: isSelected ? 2.5 : styles.strokeWidth,
              }}
            />
            <text
              x={node.x + node.width / 2}
              y={node.y + (node.subtitle ? 30 : node.height / 2)}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={textColor}
              fontFamily="var(--font-archivo)"
              fontWeight="600"
              fontSize="14"
            >
              {node.title}
            </text>
            {node.subtitle && (
              <text
                x={node.x + node.width / 2}
                y={node.y + 55}
                textAnchor="middle"
                fill="rgba(160, 168, 197, 0.8)"
                fontFamily="var(--font-archivo)"
                fontSize="12"
              >
                {node.subtitle}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}
