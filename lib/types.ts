export type NodeStatus = 'completed' | 'in-progress' | 'locked'

export interface RoadmapNode {
  id: string
  title: string
  subtitle?: string
  x: number
  y: number
  width: number
  height: number
  status: NodeStatus
  description: string
  whatYouLearn: string[]
  frameworks: Array<{ name: string; link: string }>
  prerequisites: string[]
}

export interface RoadmapConnection {
  from: string
  to: string
  completed: boolean
}

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
}
