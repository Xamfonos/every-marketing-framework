import { RoadmapData } from '../types'
export const brandMarketingRoadmap: RoadmapData = {
  slug: 'brand-marketing', title: 'Brand Marketing', description: 'Build memorable brands, develop positioning strategies, and create lasting market perception.', icon: '🎨', difficulty: 'intermediate', duration: '4-6 months', totalTopics: 9,
  nodes: [
    { id: 'start', title: 'START', x: 300, y: 20, width: 200, height: 60, status: 'completed', description: 'Begin brand marketing', whatYouLearn: [], frameworks: [], prerequisites: [] },
    { id: 'strategy', title: 'Brand Strategy', subtitle: 'Purpose · Values · Vision', x: 250, y: 120, width: 300, height: 80, status: 'in-progress', description: 'Define brand foundation', whatYouLearn: ['Brand purpose', 'Core values', 'Vision/mission', 'Brand architecture'], frameworks: [{ name: 'Brand Strategy Canvas', link: '/frameworks/brand-strategy' }], prerequisites: [] },
    { id: 'identity', title: 'Brand Identity', subtitle: 'Logo · Voice · Visual', x: 250, y: 240, width: 300, height: 80, status: 'locked', description: 'Create brand identity system', whatYouLearn: ['Visual identity', 'Brand voice', 'Design systems', 'Guidelines'], frameworks: [{ name: 'Identity Framework', link: '/frameworks/identity' }], prerequisites: ['Brand Strategy'] },
    { id: 'positioning', title: 'Brand Positioning', subtitle: 'Differentiation · Perception', x: 250, y: 360, width: 300, height: 80, status: 'locked', description: 'Position brand in market', whatYouLearn: ['Positioning strategy', 'Competitive differentiation', 'Perception management'], frameworks: [{ name: 'Positioning Map', link: '/frameworks/positioning' }], prerequisites: ['Brand Identity'] },
    { id: 'storytelling', title: 'Brand Storytelling', subtitle: 'Narrative · Emotion', x: 250, y: 480, width: 300, height: 80, status: 'locked', description: 'Craft compelling brand stories', whatYouLearn: ['Narrative development', 'Emotional connection', 'Story frameworks'], frameworks: [{ name: 'Storytelling Framework', link: '/frameworks/storytelling' }], prerequisites: ['Brand Positioning'] },
    { id: 'experience', title: 'Brand Experience', subtitle: 'Touchpoints · Consistency', x: 250, y: 600, width: 300, height: 80, status: 'locked', description: 'Design brand experiences', whatYouLearn: ['Experience mapping', 'Touchpoint design', 'Consistency management'], frameworks: [{ name: 'Experience Canvas', link: '/frameworks/experience' }], prerequisites: ['Brand Storytelling'] },
    { id: 'building', title: 'Brand Building', subtitle: 'Awareness · Recognition', x: 250, y: 720, width: 300, height: 80, status: 'locked', description: 'Build brand awareness and recognition', whatYouLearn: ['Awareness strategies', 'Recognition tactics', 'Brand campaigns'], frameworks: [{ name: 'Building Playbook', link: '/frameworks/building' }], prerequisites: ['Brand Experience'] },
    { id: 'management', title: 'Brand Management', subtitle: 'Governance · Evolution', x: 250, y: 840, width: 300, height: 80, status: 'locked', description: 'Manage and evolve brand over time', whatYouLearn: ['Brand governance', 'Evolution strategies', 'Crisis management'], frameworks: [{ name: 'Management Guide', link: '/frameworks/management' }], prerequisites: ['Brand Building'] },
    { id: 'complete', title: '🎉 MASTERY', x: 300, y: 960, width: 200, height: 60, status: 'locked', description: 'Completed Brand Marketing!', whatYouLearn: [], frameworks: [], prerequisites: ['Brand Management'] },
  ],
  connections: [
    { from: 'start', to: 'strategy', completed: true },
    { from: 'strategy', to: 'identity', completed: false },
    { from: 'identity', to: 'positioning', completed: false },
    { from: 'positioning', to: 'storytelling', completed: false },
    { from: 'storytelling', to: 'experience', completed: false },
    { from: 'experience', to: 'building', completed: false },
    { from: 'building', to: 'management', completed: false },
    { from: 'management', to: 'complete', completed: false },
  ],
}
