export type NodeStatus = 'completed' | 'in-progress' | 'locked'
export type NodeType = 'pillar' | 'context' | 'framework' | 'tool' | 'cross-context'

export interface Tool {
  name: string
  sponsored: boolean
  link: string
  description?: string
}

export interface RoadmapNode {
  id: string
  title: string
  subtitle?: string
  x: number
  y: number
  width: number
  height: number
  status: NodeStatus
  nodeType?: NodeType  // NEW: Determines visual styling (optional for backward compatibility)
  category?: string   // NEW: For grouping (e.g., "Acquisition-Paid", "Retention")
  description: string
  whatYouLearn: string[]
  frameworks: Array<{ name: string; link: string }>
  tools?: Tool[]      // NEW: Sponsorship-ready tools
  prerequisites: string[]
}

export interface RoadmapConnection {
  from: string
  to: string
  completed: boolean
  type?: 'prerequisite' | 'optional' | 'cross-context'  // NEW: Visual distinction
}

export type ViewMode = 'collapsed' | 'contexts' | 'full'

export interface RoadmapData {
  slug: string
  title: string
  description: string
  icon: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  totalTopics: number
  nodes: RoadmapNode[]
  connections: RoadmapConnection[]
  layout?: 'vertical' | 'horizontal-pillars'  // Layout mode
  expandable?: boolean  // Whether roadmap supports expand/collapse
  defaultView?: ViewMode  // Default view mode
}
