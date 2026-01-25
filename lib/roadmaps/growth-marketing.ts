import { RoadmapData } from '../types'

const makeNode = (
  id: string,
  title: string,
  description: string,
  category: string,
  status: 'completed' | 'in-progress' | 'locked' = 'locked',
  prerequisites: string[] = []
) => ({
  id,
  title,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  status,
  nodeType: 'framework' as const,
  category,
  description,
  whatYouLearn: [],
  frameworks: [],
  prerequisites,
})

export const growthMarketingRoadmap: RoadmapData = {
  slug: 'growth-marketing',
  title: 'Growth marketing',
  description:
    'Build systematic, data-driven growth engines through experimentation, optimization, and scalable acquisition and retention strategies.',
  icon: '📈',
  difficulty: 'intermediate',
  duration: '4-6 months',
  totalTopics: 78,
  layout: 'pillar-grid',
  pillarOrder: [
    'Growth strategy & frameworks',
    'Acquisition & channels',
    'Activation & onboarding',
    'Retention & engagement',
    'Referral & virality',
    'Growth experimentation',
  ],
  nodes: [
    // Growth strategy & frameworks (14)
    makeNode(
      'aarrr-pirate-metrics',
      'AARRR pirate metrics (Dave McClure)',
      'Acquisition to revenue metrics that anchor the full growth funnel.',
      'Growth strategy & frameworks',
      'completed'
    ),
    makeNode(
      'growth-model-framework',
      'Growth model framework',
      'Define your growth equation to align strategy, channels, and experiments.',
      'Growth strategy & frameworks',
      'completed'
    ),
    makeNode(
      'north-star-metric-framework',
      'North star metric framework',
      'Identify the single metric that best predicts long-term success.',
      'Growth strategy & frameworks',
      'completed'
    ),
    makeNode(
      'input-vs-output-metrics',
      'Input metrics vs output metrics',
      'Separate leading inputs you control from lagging results you observe.',
      'Growth strategy & frameworks',
      'completed',
      ['North star metric framework']
    ),
    makeNode(
      'growth-loops-framework',
      'Growth loops framework',
      'Design self-reinforcing cycles that compound growth over time.',
      'Growth strategy & frameworks',
      'completed',
      ['Growth model framework']
    ),
    makeNode(
      'viral-loop-framework',
      'Viral loop framework',
      'Users invite users who invite more users for compounding growth.',
      'Growth strategy & frameworks',
      'in-progress',
      ['Growth loops framework']
    ),
    makeNode(
      'content-loop-framework',
      'Content loop framework',
      'Content attracts users who create more content for organic growth.',
      'Growth strategy & frameworks',
      'locked',
      ['Growth loops framework']
    ),
    makeNode(
      'paid-loop-framework',
      'Paid loop framework',
      'Revenue funds acquisition that generates more revenue in a loop.',
      'Growth strategy & frameworks',
      'locked',
      ['Growth loops framework']
    ),
    makeNode(
      'sales-loop-framework',
      'Sales loop framework',
      'Sales generate customers who create referrals and upsells.',
      'Growth strategy & frameworks',
      'locked',
      ['Growth loops framework']
    ),
    makeNode(
      'growth-accounting-framework',
      'Growth accounting framework',
      'New users plus resurrected users minus churned users equals net growth.',
      'Growth strategy & frameworks',
      'locked',
      ['AARRR pirate metrics (Dave McClure)']
    ),
    makeNode(
      'sustainable-growth-rate',
      'Sustainable growth rate',
      'Set growth targets that are realistic given resources and constraints.',
      'Growth strategy & frameworks',
      'locked',
      ['Growth model framework']
    ),
    makeNode(
      't2d3-framework',
      'T2D3 framework (triple, triple, double, double, double)',
      'Benchmark aggressive SaaS growth targets for hypergrowth planning.',
      'Growth strategy & frameworks',
      'locked',
      ['Sustainable growth rate']
    ),
    makeNode(
      'rule-of-40',
      'Rule of 40',
      'Combine growth rate and profit margin to assess SaaS health.',
      'Growth strategy & frameworks',
      'locked',
      ['Sustainable growth rate']
    ),
    makeNode(
      'product-market-fit-measurement',
      'Product-market fit measurement',
      'Validate PMF with retention cohorts, NPS, and Sean Ellis tests.',
      'Growth strategy & frameworks',
      'locked',
      ['North star metric framework']
    ),

    // Acquisition & channels (16)
    makeNode(
      'bullseye-framework',
      'Bullseye framework (Traction)',
      'Identify, test, and focus on the most promising acquisition channel.',
      'Acquisition & channels',
      'locked',
      ['Growth model framework']
    ),
    makeNode(
      'channel-experimentation-framework',
      'Channel experimentation framework',
      'Run disciplined channel tests to scale winners and cut losers.',
      'Acquisition & channels',
      'locked',
      ['Bullseye framework (Traction)']
    ),
    makeNode(
      'resource-allocation-70-20-10',
      '70/20/10 resource allocation',
      'Balance proven channels, promising bets, and long-shot experiments.',
      'Acquisition & channels',
      'locked',
      ['Channel experimentation framework']
    ),
    makeNode(
      'organic-vs-paid-balance',
      'Organic vs paid balance',
      'Decide when to invest in each and how to transition the mix.',
      'Acquisition & channels',
      'locked',
      ['70/20/10 resource allocation']
    ),
    makeNode(
      'channel-product-fit',
      'Channel-product fit',
      'Evaluate how effectively a channel reaches your ideal customers.',
      'Acquisition & channels',
      'locked',
      ['Bullseye framework (Traction)']
    ),
    makeNode(
      'multi-channel-attribution',
      'Multi-channel attribution',
      'Understand channel contribution and interaction to measure value.',
      'Acquisition & channels',
      'locked',
      ['Channel experimentation framework']
    ),
    makeNode(
      'incrementality-testing',
      'Incrementality testing',
      'Measure true causal impact of channels beyond attribution models.',
      'Acquisition & channels',
      'locked',
      ['Multi-channel attribution']
    ),
    makeNode(
      'cac-by-channel',
      'CAC (customer acquisition cost) by channel',
      'Track acquisition cost by channel to benchmark efficiency.',
      'Acquisition & channels',
      'locked',
      ['Channel experimentation framework']
    ),
    makeNode(
      'ltv-cac-by-channel',
      'LTV:CAC by channel',
      'Compare lifetime value to acquisition cost to gauge profitability.',
      'Acquisition & channels',
      'locked',
      ['CAC (customer acquisition cost) by channel']
    ),
    makeNode(
      'payback-period-by-channel',
      'Payback period by channel',
      'Measure how long it takes to recover acquisition costs.',
      'Acquisition & channels',
      'locked',
      ['CAC (customer acquisition cost) by channel']
    ),
    makeNode(
      'audience-targeting-framework',
      'Audience targeting framework',
      'Use demographics, behaviors, and lookalikes for precise targeting.',
      'Acquisition & channels',
      'locked',
      ['Channel experimentation framework']
    ),
    makeNode(
      'retargeting-strategy-framework',
      'Retargeting strategy framework',
      'Re-engage visitors and high-intent users with tailored messaging.',
      'Acquisition & channels',
      'locked',
      ['Audience targeting framework']
    ),
    makeNode(
      'channel-saturation-framework',
      'Channel saturation framework',
      'Identify when channels max out and plan the next lever.',
      'Acquisition & channels',
      'locked',
      ['Channel experimentation framework']
    ),
    makeNode(
      'geographic-expansion-framework',
      'Geographic expansion framework',
      'Select markets, test demand, and scale across regions.',
      'Acquisition & channels',
      'locked',
      ['Channel saturation framework']
    ),
    makeNode(
      'partnership-acquisition-framework',
      'Partnership acquisition framework',
      'Acquire customers through affiliate, referral, and integration partners.',
      'Acquisition & channels',
      'locked',
      ['Channel experimentation framework']
    ),
    makeNode(
      'cro-framework',
      'Conversion rate optimization (CRO) framework',
      'Improve landing pages, forms, and flows to lift conversions.',
      'Acquisition & channels',
      'locked',
      ['Audience targeting framework']
    ),

    // Activation & onboarding (12)
    makeNode(
      'activation-metric-definition',
      'Activation metric definition',
      'Define the "aha moment" and the metric that captures activation.',
      'Activation & onboarding',
      'locked',
      ['North star metric framework']
    ),
    makeNode(
      'time-to-value-framework',
      'Time to value (TTV) framework',
      'Reduce friction to the first meaningful outcome for new users.',
      'Activation & onboarding',
      'locked',
      ['Activation metric definition']
    ),
    makeNode(
      'onboarding-flow-framework',
      'Onboarding flow framework',
      'Design a journey from welcome to first value and habit formation.',
      'Activation & onboarding',
      'locked',
      ['Time to value (TTV) framework']
    ),
    makeNode(
      'progressive-onboarding',
      'Progressive onboarding',
      'Reveal features gradually based on readiness to reduce overwhelm.',
      'Activation & onboarding',
      'locked',
      ['Onboarding flow framework']
    ),
    makeNode(
      'contextual-onboarding',
      'Contextual onboarding',
      'Teach in the moment of need with just-in-time guidance.',
      'Activation & onboarding',
      'locked',
      ['Onboarding flow framework']
    ),
    makeNode(
      'onboarding-checklist-framework',
      'Onboarding checklist framework',
      'Guide users through key activation actions with checklists.',
      'Activation & onboarding',
      'locked',
      ['Onboarding flow framework']
    ),
    makeNode(
      'empty-state-design',
      'Empty state design',
      'Create purposeful first experiences before content exists.',
      'Activation & onboarding',
      'locked',
      ['Onboarding flow framework']
    ),
    makeNode(
      'product-tours-vs-walkthroughs',
      'Product tours vs interactive walkthroughs',
      'Choose passive demos or active learning based on user needs.',
      'Activation & onboarding',
      'locked',
      ['Onboarding flow framework']
    ),
    makeNode(
      'drip-email-onboarding',
      'Drip email onboarding',
      'Support activation with timed, personalized email sequences.',
      'Activation & onboarding',
      'locked',
      ['Onboarding flow framework']
    ),
    makeNode(
      'cohort-activation-analysis',
      'Cohort activation analysis',
      'Compare activation rates across cohorts to find friction points.',
      'Activation & onboarding',
      'locked',
      ['Activation metric definition']
    ),
    makeNode(
      'activation-funnel-optimization',
      'Activation funnel optimization',
      'Identify and fix drop-offs in activation flows systematically.',
      'Activation & onboarding',
      'locked',
      ['Cohort activation analysis']
    ),
    makeNode(
      'quick-win-framework',
      'Quick win framework',
      'Deliver early success to build confidence and momentum.',
      'Activation & onboarding',
      'locked',
      ['Time to value (TTV) framework']
    ),

    // Retention & engagement (14)
    makeNode(
      'retention-curve-analysis',
      'Retention curve analysis',
      'Analyze day 1, 7, 30, and 90 retention patterns.',
      'Retention & engagement',
      'locked',
      ['Activation metric definition']
    ),
    makeNode(
      'cohort-retention-analysis',
      'Cohort retention analysis',
      'Compare retention across user groups over time.',
      'Retention & engagement',
      'locked',
      ['Retention curve analysis']
    ),
    makeNode(
      'l7-l30-engagement-framework',
      'L7/L30 engagement framework',
      'Measure weekly to monthly engagement for depth of usage.',
      'Retention & engagement',
      'locked',
      ['Cohort retention analysis']
    ),
    makeNode(
      'dau-mau-ratio',
      'DAU/MAU ratio',
      'Track daily to monthly usage to understand stickiness.',
      'Retention & engagement',
      'locked',
      ['Cohort retention analysis']
    ),
    makeNode(
      'engagement-loops-framework',
      'Engagement loops framework',
      'Design triggers that bring users back repeatedly.',
      'Retention & engagement',
      'locked',
      ['Retention curve analysis']
    ),
    makeNode(
      'push-notification-strategy',
      'Push notification strategy',
      'Optimize timing, frequency, and personalization for re-engagement.',
      'Retention & engagement',
      'locked',
      ['Engagement loops framework']
    ),
    makeNode(
      'email-reengagement-framework',
      'Email re-engagement framework',
      'Win back dormant users with targeted email sequences.',
      'Retention & engagement',
      'locked',
      ['Engagement loops framework']
    ),
    makeNode(
      'feature-adoption-framework',
      'Feature adoption framework',
      'Guide users from awareness to habit and long-term adoption.',
      'Retention & engagement',
      'locked',
      ['Engagement loops framework']
    ),
    makeNode(
      'power-user-curve',
      'Power user curve',
      'Understand usage frequency distribution and engagement tiers.',
      'Retention & engagement',
      'locked',
      ['Cohort retention analysis']
    ),
    makeNode(
      'churn-prediction-framework',
      'Churn prediction framework',
      'Identify leading indicators of churn risk for intervention.',
      'Retention & engagement',
      'locked',
      ['Cohort retention analysis']
    ),
    makeNode(
      'churn-prevention-framework',
      'Churn prevention framework',
      'Design interventions that reduce churn and rescue accounts.',
      'Retention & engagement',
      'locked',
      ['Churn prediction framework']
    ),
    makeNode(
      'habit-formation-framework',
      'Habit formation framework',
      'Trigger, action, reward, and investment loops that create habits.',
      'Retention & engagement',
      'locked',
      ['Engagement loops framework']
    ),
    makeNode(
      'gamification-framework',
      'Gamification framework',
      'Use points, badges, and challenges to increase engagement.',
      'Retention & engagement',
      'locked',
      ['Habit formation framework']
    ),
    makeNode(
      'community-engagement-framework',
      'Community engagement framework',
      'Build forums, groups, and events that deepen retention.',
      'Retention & engagement',
      'locked',
      ['Habit formation framework']
    ),

    // Referral & virality (10)
    makeNode(
      'viral-coefficient',
      'Viral coefficient (K-factor)',
      'Measure invites and conversion rate to quantify virality.',
      'Referral & virality',
      'locked'
    ),
    makeNode(
      'viral-loop-design',
      'Viral loop design',
      'Create share triggers that bring new users into the product.',
      'Referral & virality',
      'locked',
      ['Viral coefficient (K-factor)']
    ),
    makeNode(
      'referral-program-framework',
      'Referral program framework',
      'Design incentives, mechanics, and promotion to drive referrals.',
      'Referral & virality',
      'locked',
      ['Viral loop design']
    ),
    makeNode(
      'double-sided-incentives',
      'Double-sided incentives',
      'Reward both referrer and referee for mutual value.',
      'Referral & virality',
      'locked',
      ['Referral program framework']
    ),
    makeNode(
      'network-effects-framework',
      'Network effects framework',
      'Understand direct, indirect, and two-sided network effects.',
      'Referral & virality',
      'locked',
      ['Viral loop design']
    ),
    makeNode(
      'social-sharing-mechanics',
      'Social sharing mechanics',
      'Design what, when, and why users share with others.',
      'Referral & virality',
      'locked',
      ['Viral loop design']
    ),
    makeNode(
      'invitation-mechanism-design',
      'Invitation mechanism design',
      'Build email, link, social, and in-app invitation paths.',
      'Referral & virality',
      'locked',
      ['Social sharing mechanics']
    ),
    makeNode(
      'referral-attribution-framework',
      'Referral attribution framework',
      'Track and credit successful referrals accurately.',
      'Referral & virality',
      'locked',
      ['Referral program framework']
    ),
    makeNode(
      'organic-vs-incentivized-sharing',
      'Organic vs incentivized sharing',
      'Balance natural advocacy with reward-driven sharing.',
      'Referral & virality',
      'locked',
      ['Referral program framework']
    ),
    makeNode(
      'viral-content-framework',
      'Viral content framework',
      'Create shareable content optimized for distribution platforms.',
      'Referral & virality',
      'locked',
      ['Social sharing mechanics']
    ),

    // Growth experimentation (12)
    makeNode(
      'growth-experiment-framework',
      'Growth experiment framework',
      'Form hypotheses, design tests, analyze results, and iterate.',
      'Growth experimentation',
      'locked',
      ['Input metrics vs output metrics']
    ),
    makeNode(
      'ice-prioritization',
      'ICE prioritization (impact, confidence, ease)',
      'Score experiments to prioritize growth roadmap decisions.',
      'Growth experimentation',
      'locked',
      ['Growth experiment framework']
    ),
    makeNode(
      'pie-prioritization',
      'PIE prioritization (potential, importance, ease)',
      'Alternative scoring model to rank experimentation ideas.',
      'Growth experimentation',
      'locked',
      ['Growth experiment framework']
    ),
    makeNode(
      'ab-testing-framework',
      'A/B testing framework',
      'Run controlled tests with statistical significance.',
      'Growth experimentation',
      'locked',
      ['Growth experiment framework']
    ),
    makeNode(
      'multivariate-testing',
      'Multivariate testing',
      'Test multiple variables at once for compound insights.',
      'Growth experimentation',
      'locked',
      ['A/B testing framework']
    ),
    makeNode(
      'sequential-testing',
      'Sequential testing',
      'Use continuous monitoring instead of fixed horizons.',
      'Growth experimentation',
      'locked',
      ['A/B testing framework']
    ),
    makeNode(
      'minimum-viable-test',
      'Minimum viable test (MVT)',
      'Validate hypotheses with the smallest possible experiment.',
      'Growth experimentation',
      'locked',
      ['Growth experiment framework']
    ),
    makeNode(
      'growth-sprint-framework',
      'Growth sprint framework',
      'Run weekly experimentation cycles to build momentum.',
      'Growth experimentation',
      'locked',
      ['Growth experiment framework']
    ),
    makeNode(
      'test-velocity-metric',
      'Test velocity metric',
      'Measure how many experiments ship per time period.',
      'Growth experimentation',
      'locked',
      ['Growth sprint framework']
    ),
    makeNode(
      'learning-documentation-framework',
      'Learning documentation framework',
      'Capture hypotheses, results, insights, and next actions.',
      'Growth experimentation',
      'locked',
      ['Growth experiment framework']
    ),
    makeNode(
      'failed-experiment-framework',
      'Failed experiment framework',
      'Document failures to extract insights and avoid repeat mistakes.',
      'Growth experimentation',
      'locked',
      ['Growth experiment framework']
    ),
    makeNode(
      'experiment-stack-ranking',
      'Experiment stack ranking',
      'Continuously reorder the backlog based on latest learnings.',
      'Growth experimentation',
      'locked',
      ['ICE prioritization (impact, confidence, ease)']
    ),
  ],
  connections: [],
}
