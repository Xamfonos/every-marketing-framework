import { RoadmapData } from '../types'
export const demandgenerationRoadmap: RoadmapData = {
  slug: 'demand-generation', title: 'Demand Generation', description: 'Create systematic lead generation, nurture prospects, and build predictable pipelines.', icon: '🔥', difficulty: 'intermediate', duration: '4-6 months', totalTopics: 10,
  nodes: [
    { id: 'start', title: 'START', x: 300, y: 20, width: 200, height: 60, status: 'completed', description: 'Begin demand gen journey', whatYouLearn: [], frameworks: [], prerequisites: [] },
    { id: 'strategy', title: 'Demand Gen Strategy', subtitle: 'ICP · Targeting · Channels', x: 250, y: 120, width: 300, height: 80, status: 'in-progress', description: 'Build demand generation strategy', whatYouLearn: ['ICP definition', 'Channel selection', 'Campaign planning'], frameworks: [{ name: 'Demand Gen Framework', link: '/frameworks/demand-gen' }], prerequisites: [] },
    { id: 'lead-gen', title: 'Lead Generation', subtitle: 'Capture · Magnets · Forms', x: 250, y: 240, width: 300, height: 80, status: 'locked', description: 'Generate qualified leads systematically', whatYouLearn: ['Lead capture tactics', 'Magnet creation', 'Form optimization'], frameworks: [{ name: 'Lead Gen Playbook', link: '/frameworks/lead-gen' }], prerequisites: ['Demand Gen Strategy'] },
    { id: 'nurture', title: 'Lead Nurture', subtitle: 'Email · Content · Scoring', x: 250, y: 360, width: 300, height: 80, status: 'locked', description: 'Nurture leads to sales-readiness', whatYouLearn: ['Nurture sequences', 'Content mapping', 'Lead scoring'], frameworks: [{ name: 'Nurture Framework', link: '/frameworks/nurture' }], prerequisites: ['Lead Generation'] },
    { id: 'qualification', title: 'Lead Qualification', subtitle: 'MQL · SQL · Handoff', x: 250, y: 480, width: 300, height: 80, status: 'locked', description: 'Qualify and route leads effectively', whatYouLearn: ['Qualification criteria', 'MQL/SQL definition', 'Sales handoff process'], frameworks: [{ name: 'Qualification Guide', link: '/frameworks/qualification' }], prerequisites: ['Lead Nurture'] },
    { id: 'campaigns', title: 'Campaign Management', subtitle: 'Multi-channel · Coordination', x: 250, y: 600, width: 300, height: 80, status: 'locked', description: 'Execute integrated campaigns', whatYouLearn: ['Campaign planning', 'Multi-channel coordination', 'Execution excellence'], frameworks: [{ name: 'Campaign Framework', link: '/frameworks/campaigns' }], prerequisites: ['Lead Qualification'] },
    { id: 'abm', title: 'Account-Based Marketing', subtitle: 'Target Accounts · Personalization', x: 250, y: 720, width: 300, height: 80, status: 'locked', description: 'Execute ABM programs', whatYouLearn: ['Account selection', 'Personalization tactics', 'ABM campaigns'], frameworks: [{ name: 'ABM Playbook', link: '/frameworks/abm' }], prerequisites: ['Campaign Management'] },
    { id: 'measurement', title: 'Performance Measurement', subtitle: 'Pipeline · Attribution · ROI', x: 250, y: 840, width: 300, height: 80, status: 'locked', description: 'Measure demand gen performance', whatYouLearn: ['Pipeline metrics', 'Attribution analysis', 'ROI calculation'], frameworks: [{ name: 'Measurement Guide', link: '/frameworks/measurement' }], prerequisites: ['Account-Based Marketing'] },
    { id: 'optimization', title: 'Program Optimization', subtitle: 'Testing · Scaling · Efficiency', x: 250, y: 960, width: 300, height: 80, status: 'locked', description: 'Optimize demand gen programs', whatYouLearn: ['Testing methodologies', 'Scaling strategies', 'Efficiency improvements'], frameworks: [{ name: 'Optimization Framework', link: '/frameworks/optimization' }], prerequisites: ['Performance Measurement'] },
    { id: 'complete', title: '🎉 MASTERY', x: 300, y: 1080, width: 200, height: 60, status: 'locked', description: 'Completed Demand Generation!', whatYouLearn: [], frameworks: [], prerequisites: ['Program Optimization'] },
  ],
  connections: [
    { from: 'start', to: 'strategy', completed: true },
    { from: 'strategy', to: 'lead-gen', completed: false },
    { from: 'lead-gen', to: 'nurture', completed: false },
    { from: 'nurture', to: 'qualification', completed: false },
    { from: 'qualification', to: 'campaigns', completed: false },
    { from: 'campaigns', to: 'abm', completed: false },
    { from: 'abm', to: 'measurement', completed: false },
    { from: 'measurement', to: 'optimization', completed: false },
    { from: 'optimization', to: 'complete', completed: false },
  ],
}
