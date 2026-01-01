import { RoadmapData } from '../types'
export const customermarketingRoadmap: RoadmapData = {
  slug: 'customer-marketing', title: 'Customer Marketing', description: 'Drive retention, expansion, and advocacy through customer-centric marketing programs.', icon: '💎', difficulty: 'beginner', duration: '3-5 months', totalTopics: 9,
  nodes: [
    { id: 'start', title: 'START', x: 300, y: 20, width: 200, height: 60, status: 'completed', description: 'Begin customer marketing', whatYouLearn: [], frameworks: [], prerequisites: [] },
    { id: 'strategy', title: 'Customer Marketing Strategy', subtitle: 'Lifecycle · Value · Goals', x: 250, y: 120, width: 300, height: 80, status: 'in-progress', description: 'Build customer-centric strategy', whatYouLearn: ['Lifecycle stages', 'Customer value', 'Strategic goals'], frameworks: [{ name: 'Customer Strategy Canvas', link: '/frameworks/customer-strategy' }], prerequisites: [] },
    { id: 'onboarding', title: 'Customer Onboarding', subtitle: 'Activation · Success · Support', x: 250, y: 240, width: 300, height: 80, status: 'locked', description: 'Optimize customer onboarding', whatYouLearn: ['Onboarding design', 'Activation tactics', 'Success metrics'], frameworks: [{ name: 'Onboarding Framework', link: '/frameworks/onboarding' }], prerequisites: ['Customer Marketing Strategy'] },
    { id: 'engagement', title: 'Customer Engagement', subtitle: 'Touchpoints · Programs · Community', x: 250, y: 360, width: 300, height: 80, status: 'locked', description: 'Drive ongoing engagement', whatYouLearn: ['Engagement programs', 'Communication strategy', 'Community building'], frameworks: [{ name: 'Engagement Playbook', link: '/frameworks/engagement' }], prerequisites: ['Customer Onboarding'] },
    { id: 'retention', title: 'Retention Programs', subtitle: 'Churn · Loyalty · Value', x: 250, y: 480, width: 300, height: 80, status: 'locked', description: 'Reduce churn and increase retention', whatYouLearn: ['Churn reduction', 'Loyalty programs', 'Value reinforcement'], frameworks: [{ name: 'Retention Framework', link: '/frameworks/retention' }], prerequisites: ['Customer Engagement'] },
    { id: 'expansion', title: 'Customer Expansion', subtitle: 'Upsell · Cross-sell · Growth', x: 250, y: 600, width: 300, height: 80, status: 'locked', description: 'Drive revenue expansion', whatYouLearn: ['Upsell strategies', 'Cross-sell tactics', 'Expansion metrics'], frameworks: [{ name: 'Expansion Guide', link: '/frameworks/expansion' }], prerequisites: ['Retention Programs'] },
    { id: 'advocacy', title: 'Customer Advocacy', subtitle: 'Referrals · Reviews · Stories', x: 250, y: 720, width: 300, height: 80, status: 'locked', description: 'Build customer advocacy programs', whatYouLearn: ['Referral programs', 'Review generation', 'Success stories'], frameworks: [{ name: 'Advocacy Playbook', link: '/frameworks/advocacy' }], prerequisites: ['Customer Expansion'] },
    { id: 'insights', title: 'Customer Insights', subtitle: 'Feedback · Research · Analysis', x: 250, y: 840, width: 300, height: 80, status: 'locked', description: 'Gather and act on customer insights', whatYouLearn: ['Feedback collection', 'Research methods', 'Insight synthesis'], frameworks: [{ name: 'Insights Framework', link: '/frameworks/insights' }], prerequisites: ['Customer Advocacy'] },
    { id: 'complete', title: '🎉 MASTERY', x: 300, y: 960, width: 200, height: 60, status: 'locked', description: 'Completed Customer Marketing!', whatYouLearn: [], frameworks: [], prerequisites: ['Customer Insights'] },
  ],
  connections: [
    { from: 'start', to: 'strategy', completed: true },
    { from: 'strategy', to: 'onboarding', completed: false },
    { from: 'onboarding', to: 'engagement', completed: false },
    { from: 'engagement', to: 'retention', completed: false },
    { from: 'retention', to: 'expansion', completed: false },
    { from: 'expansion', to: 'advocacy', completed: false },
    { from: 'advocacy', to: 'insights', completed: false },
    { from: 'insights', to: 'complete', completed: false },
  ],
}
