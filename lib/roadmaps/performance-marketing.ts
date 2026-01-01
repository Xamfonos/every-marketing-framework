import { RoadmapData } from '../types'

export const performanceMarketingRoadmap: RoadmapData = {
  slug: 'performance-marketing',
  title: 'Performance Marketing',
  description: 'Optimize campaigns, manage budgets effectively, and maximize ROAS across paid channels.',
  icon: '💰',
  difficulty: 'advanced',
  duration: '5-8 months',
  totalTopics: 10,
  nodes: [
    { id: 'start', title: 'START', x: 300, y: 20, width: 200, height: 60, status: 'completed', description: 'Begin performance marketing journey', whatYouLearn: [], frameworks: [], prerequisites: [] },
    { id: 'foundations', title: 'Performance Marketing Basics', subtitle: 'Metrics · Attribution · ROI', x: 250, y: 120, width: 300, height: 80, status: 'completed', description: 'Core metrics, attribution, and ROI fundamentals', whatYouLearn: ['CAC and LTV calculations', 'ROAS optimization', 'Attribution modeling', 'Performance metrics'], frameworks: [{ name: 'Performance Metrics Framework', link: '/frameworks/performance-metrics' }], prerequisites: [] },
    { id: 'ppc', title: 'PPC Management', subtitle: 'Search · Shopping · Display', x: 250, y: 240, width: 300, height: 80, status: 'in-progress', description: 'Master paid search across Google, Bing, and other platforms', whatYouLearn: ['Campaign structure', 'Keyword bidding', 'Ad copy optimization', 'Quality score improvement'], frameworks: [{ name: 'PPC Campaign Framework', link: '/frameworks/ppc' }], prerequisites: ['Performance Marketing Basics'] },
    { id: 'social-ads', title: 'Social Media Advertising', subtitle: 'Meta · LinkedIn · TikTok', x: 250, y: 360, width: 300, height: 80, status: 'locked', description: 'Scale through social advertising platforms', whatYouLearn: ['Platform-specific best practices', 'Audience targeting', 'Creative testing', 'Platform algorithms'], frameworks: [{ name: 'Social Ads Playbook', link: '/frameworks/social-ads' }], prerequisites: ['PPC Management'] },
    { id: 'creative', title: 'Ad Creative Testing', subtitle: 'Copy · Design · Video', x: 250, y: 480, width: 300, height: 80, status: 'locked', description: 'Systematic creative testing and optimization', whatYouLearn: ['Creative testing frameworks', 'Copywriting for ads', 'Visual design principles', 'Video ad best practices'], frameworks: [{ name: 'Creative Testing Framework', link: '/frameworks/creative-testing' }], prerequisites: ['Social Media Advertising'] },
    { id: 'analytics', title: 'Campaign Analytics', subtitle: 'Tracking · Analysis · Reporting', x: 250, y: 600, width: 300, height: 80, status: 'locked', description: 'Advanced analytics and performance tracking', whatYouLearn: ['Pixel implementation', 'Conversion tracking', 'Data analysis', 'Performance dashboards'], frameworks: [{ name: 'Analytics Framework', link: '/frameworks/analytics' }], prerequisites: ['Ad Creative Testing'] },
    { id: 'optimization', title: 'Campaign Optimization', subtitle: 'Testing · Scaling · Efficiency', x: 250, y: 720, width: 300, height: 80, status: 'locked', description: 'Continuous optimization and scaling strategies', whatYouLearn: ['A/B testing methodology', 'Budget optimization', 'Scaling profitable campaigns', 'Efficiency improvements'], frameworks: [{ name: 'Optimization Playbook', link: '/frameworks/optimization' }], prerequisites: ['Campaign Analytics'] },
    { id: 'automation', title: 'Marketing Automation', subtitle: 'Bidding · Rules · Scripts', x: 250, y: 840, width: 300, height: 80, status: 'locked', description: 'Automate campaign management for scale', whatYouLearn: ['Automated bidding strategies', 'Rule-based automation', 'Scripts and tools', 'AI-powered optimization'], frameworks: [{ name: 'Automation Framework', link: '/frameworks/automation' }], prerequisites: ['Campaign Optimization'] },
    { id: 'advanced', title: 'Advanced Tactics', subtitle: 'Remarketing · Lookalike · Multi-touch', x: 250, y: 960, width: 300, height: 80, status: 'locked', description: 'Advanced performance marketing strategies', whatYouLearn: ['Remarketing strategies', 'Lookalike audiences', 'Multi-touch attribution', 'Cross-channel optimization'], frameworks: [{ name: 'Advanced Tactics Guide', link: '/frameworks/advanced-tactics' }], prerequisites: ['Marketing Automation'] },
    { id: 'complete', title: '🎉 MASTERY', x: 300, y: 1080, width: 200, height: 60, status: 'locked', description: 'Completed Performance Marketing!', whatYouLearn: [], frameworks: [], prerequisites: ['Advanced Tactics'] },
  ],
  connections: [
    { from: 'start', to: 'foundations', completed: true },
    { from: 'foundations', to: 'ppc', completed: true },
    { from: 'ppc', to: 'social-ads', completed: false },
    { from: 'social-ads', to: 'creative', completed: false },
    { from: 'creative', to: 'analytics', completed: false },
    { from: 'analytics', to: 'optimization', completed: false },
    { from: 'optimization', to: 'automation', completed: false },
    { from: 'automation', to: 'advanced', completed: false },
    { from: 'advanced', to: 'complete', completed: false },
  ],
}
