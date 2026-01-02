import { FrameworkData } from '../framework-types'

export const aarrMetricsFramework: FrameworkData = {
  slug: 'aarrr-metrics',
  title: 'AARRR Pirate Metrics',
  subtitle: 'The growth framework for measuring and optimizing your funnel',
  category: 'growth',
  difficulty: 'intermediate',
  readingTime: 18,
  
  overview: `AARRR (Acquisition, Activation, Retention, Referral, Revenue) is a growth framework created by Dave McClure that breaks down the customer lifecycle into five key stages. It provides a systematic way to measure, optimize, and grow your business by focusing on the metrics that matter most at each stage of the customer journey.`,
  
  whenToUse: [
    'Building a growth strategy from scratch',
    'Identifying bottlenecks in your customer funnel',
    'Prioritizing growth experiments and initiatives',
    'Setting up analytics and tracking systems',
    'Communicating growth metrics to stakeholders',
    'Diagnosing why growth has stalled',
  ],
  
  learningPath: {
    description: 'Master the fundamentals of growth marketing by understanding how to measure and optimize each stage of the user journey.',
    prerequisites: [
      { slug: 'marketing-first-principles', title: 'Marketing First Principles' }
    ],
    pathway: [
      { slug: 'aarrr-metrics', title: 'AARRR Pirate Metrics', isCurrentFramework: true },
      { slug: 'north-star-metric', title: 'North Star Metric' },
      { slug: 'growth-loops', title: 'Growth Loops' }
    ],
    alternatives: [
      { slug: 'ice-scoring', title: 'ICE Scoring Framework' }
    ]
  },

  coreConcepts: [
    {
      title: 'The Five Stages of AARRR',
      content: `AARRR breaks the customer journey into five sequential stages. Each stage has specific metrics, goals, and optimization strategies.

The framework forms a funnel: you need users flowing through each stage to reach the next. A leak at any stage limits your overall growth.`
    ,
      embeddedResources: [
        {
          type: 'video',
          data: {
            title: 'AARRR Metrics — A Practical Guide',
            author: 'Growth University',
            url: 'https://www.youtube.com/watch?v=example-aarrr',
            duration: '18:00',
            whyWatch: 'Short walkthrough of the AARRR funnel and sample metrics to track at each stage.'
          }
        }
      ]
    },
    {
      title: 'Stage 1: Acquisition',
      content: `**What It Is:** How people discover and first interact with your product

**Key Question:** Where are our users coming from?

**Key Metrics:**
• Traffic by source (organic, paid, social, referral, direct)
• Cost per acquisition (CPA) by channel
• Impression-to-visit conversion rate
• Channel-specific visitor quality

**Optimization Strategies:**

1. **Channel Diversification:** Don't rely on one traffic source. Test multiple channels systematically.

2. **Source Tracking:** Use UTM parameters and analytics to track every traffic source precisely.

3. **Channel-Specific Optimization:**
   • SEO: Keyword research, technical optimization, content creation
   • Paid: Ad copy testing, audience targeting, bid optimization
   • Social: Platform-specific content, engagement tactics
   • Referral: Partner programs, affiliate systems

4. **Quality Over Quantity:** A channel with 100 highly-qualified visitors beats 1,000 poor-fit visitors.

**Common Mistakes:**
• Chasing vanity metrics (total traffic) instead of qualified traffic
• Not tracking traffic sources accurately
• Spreading budget too thin across too many channels
• Ignoring channel-specific conversion rates`
    },
    {
      title: 'Stage 2: Activation',
      content: `**What It Is:** The first experience that shows the product's value

**Key Question:** What percentage of visitors experience our core value?

**Key Metrics:**
• Activation rate (% of visitors who complete key action)
• Time to activation
• Drop-off points in onboarding
• Activation by source (which channels bring activated users?)

**The "Aha Moment":**

Every product has an "aha moment"—when users first experience value. Examples:
• Facebook: Connect with 7 friends in 10 days
• Slack: Send 2,000 team messages
• Dropbox: Put first file in folder across devices
• Twitter: Follow 30 accounts

**Optimization Strategies:**

1. **Reduce Time to Value:** Get users to the aha moment as fast as possible
   • Simplify signup
   • Remove unnecessary steps
   • Provide clear next actions

2. **Onboarding Optimization:**
   • Welcome emails/messages
   • Interactive tutorials
   • Quick wins early in journey
   • Personalized setup

3. **Measure and Test:**
   • A/B test onboarding flows
   • Remove friction points
   • Test different activation metrics

**Common Mistakes:**
• Making activation too complex
• Asking for too much information upfront
• Not having a clear "activated" definition
• Optimizing for signups instead of activated users`
    },
    {
      title: 'Stage 3: Retention',
      content: `**What It Is:** Getting users to come back and continue using your product

**Key Question:** Are people coming back? How often?

**Key Metrics:**
• Day 1, Day 7, Day 30 retention rates
• Cohort retention curves
• Engagement frequency (DAU/MAU ratio)
• Feature usage over time
• Churn rate

**Why Retention Matters Most:**

Retention is the foundation of growth. If you have a leaky bucket, pouring more water in (acquisition) won't help.

The Retention Curve tells you everything:
• Flattening curve = product-market fit
• Continuous decline = no retention, no business
• Rising curve = viral growth

**Optimization Strategies:**

1. **Build Habits:**
   • Trigger-Action-Reward loops
   • Notifications and reminders (carefully)
   • Streaks and progress tracking
   • Regular value delivery

2. **Improve Product Value:**
   • Add features activated users need
   • Remove friction in core workflows
   • Increase depth of engagement

3. **Re-engagement Campaigns:**
   • Email sequences for dormant users
   • Push notifications for key moments
   • "We miss you" campaigns
   • Highlight new features

4. **Cohort Analysis:**
   • Track retention by signup date
   • Compare different user segments
   • Identify changes that improved retention

**Common Mistakes:**
• Focusing on acquisition before fixing retention
• Not segmenting retention by cohort
• Optimizing for engagement instead of value delivery
• Spamming users with notifications`
    },
    {
      title: 'Stage 4: Referral',
      content: `**What It Is:** Users bringing in new users

**Key Question:** Are our users recommending us?

**Key Metrics:**
• Viral coefficient (K-factor)
• Referral rate (% of users who refer)
• Invites sent per user
• Invite-to-signup conversion rate
• Customer acquisition cost (CAC) via referral

**Viral Coefficient Formula:**

K = (Average invites sent per user) × (Conversion rate of invites)

If K > 1: Viral growth (each user brings >1 new user)
If K < 1: Growth requires other channels

**Types of Virality:**

1. **Word-of-Mouth Virality:**
   • Organic sharing
   • Customer satisfaction driven
   • Examples: Slack, Notion

2. **Incentivized Virality:**
   • Rewards for referrals
   • Two-sided incentives
   • Examples: Dropbox, Airbnb

3. **Built-In Virality:**
   • Product requires multiple users
   • Network effects
   • Examples: Zoom, Calendly

**Optimization Strategies:**

1. **Make Sharing Easy:**
   • One-click sharing
   • Pre-populated messages
   • Multiple sharing channels

2. **Incentivize Referrals:**
   • Give rewards to both referrer and referee
   • Make rewards valuable and immediate
   • Gamify the referral process

3. **Build Virality Into Product:**
   • Multiplayer features
   • Collaborative workflows
   • Branded sharing (e.g., "Sent from iPhone")

4. **Optimize the Referral Loop:**
   • Test invite copy
   • Optimize landing pages for referred users
   • A/B test incentive structures

**Common Mistakes:**
• Assuming your product is naturally viral (it's not)
• Making referrals hard to execute
• Not tracking referral sources
• Rewards that don't motivate`
    },
    {
      title: 'Stage 5: Revenue',
      content: `**What It Is:** Monetizing your user base

**Key Question:** How do we maximize lifetime value?

**Key Metrics:**
• Monthly Recurring Revenue (MRR)
• Average Revenue Per User (ARPU)
• Customer Lifetime Value (LTV)
• LTV:CAC ratio
• Gross margin
• Expansion revenue

**The Unit Economics:**

Your business is healthy when:
• LTV:CAC > 3:1
• CAC payback < 12 months
• Gross margin > 70% (SaaS)

**Optimization Strategies:**

1. **Pricing Optimization:**
   • Test different price points
   • Experiment with packaging
   • Implement value-based pricing
   • Add premium tiers

2. **Expand Revenue:**
   • Upsells (higher tier)
   • Cross-sells (additional products)
   • Usage-based pricing
   • Add-ons and extras

3. **Reduce Churn:**
   • Improve product value
   • Better customer success
   • Catch at-risk customers early
   • Win-back campaigns

4. **Increase Frequency:**
   • Annual pricing (upfront revenue)
   • Consumption-based models
   • Value-added services

**Revenue Model Examples:**

• **SaaS:** Monthly subscription
• **Marketplace:** Transaction fees
• **Freemium:** Free base + paid tiers
• **Usage-Based:** Pay for consumption
• **Hybrid:** Combination models

**Common Mistakes:**
• Pricing too low (can't cover CAC)
• Not expanding revenue from existing customers
• Optimizing for revenue before retention
• Ignoring unit economics`
    },
  ],
  
  howToApply: [
    {
      title: 'Step 1: Set Up Tracking',
      content: `Define and track metrics for each stage:
• Acquisition: Source tracking
• Activation: Event tracking for key actions
• Retention: Cohort analysis
• Referral: Invite and conversion tracking
• Revenue: Revenue by cohort and source`
    },
    {
      title: 'Step 2: Identify Your Bottleneck',
      content: `Calculate conversion rates between stages:
• Visitor → Activated
• Activated → Retained (D30)
• Retained → Referring
• User → Paying

The lowest conversion rate is your biggest opportunity.`
    },
    {
      title: 'Step 3: Run Focused Experiments',
      content: `Don't try to optimize all five stages at once. Focus on the biggest bottleneck:

If Activation is your bottleneck:
→ Test onboarding flows
→ Reduce time to value
→ A/B test activation definitions

If Retention is your bottleneck:
→ Build habit loops
→ Improve core product value
→ Test re-engagement campaigns`
    },
    {
      title: 'Step 4: Measure Impact',
      content: `Track how experiments affect:
• The target metric (e.g., activation rate)
• Downstream metrics (does better activation improve retention?)
• Overall growth rate`
    },
    {
      title: 'Step 5: Iterate',
      content: `Once you've improved one stage, move to the next bottleneck. AARRR is a continuous optimization framework.`
    }
  ],
  
  examples: [
    {
      company: 'Dropbox',
      situation: 'High acquisition costs threatened profitability despite strong product',
      application: 'Focused on Referral stage with incentivized viral loop: "Get 500MB free for every friend who signs up." This turned every user into an acquisition channel. Combined with product-led growth (files shared externally showed Dropbox value), they dramatically reduced CAC.',
      result: 'Grew from 100K to 4M users in 15 months with minimal paid acquisition spend'
    },
    {
      company: 'Pinterest',
      situation: 'Strong initial signups but poor retention',
      application: 'Discovered that users who pinned/repinned items in first session had 3x retention. Optimized entire onboarding to drive this activation behavior. Added email re-engagement for users who didn\'t activate. Focused on Activation and Retention before scaling Acquisition.',
      result: 'Retention curves flattened, enabling sustainable growth to 400M+ users'
    },
    {
      company: 'HubSpot',
      situation: 'High CAC from sales-driven model limited growth rate',
      application: 'Built product-led growth model: free CRM (Acquisition), guided setup wizard (Activation), valuable free features (Retention), natural upgrade path (Revenue). This reduced CAC while increasing LTV through better product engagement.',
      result: 'Grew to $2B+ ARR with improving unit economics and CAC payback'
    }
  ],
  
  templates: [
    {
      name: 'AARRR Metrics Dashboard',
      description: 'Complete spreadsheet for tracking all AARRR metrics with formulas',
      downloadUrl: '/templates/aarrr-dashboard.xlsx'
    },
    {
      name: 'Funnel Analysis Template',
      description: 'Calculate conversion rates between each AARRR stage',
      downloadUrl: '/templates/funnel-analysis.xlsx'
    },
    {
      name: 'Cohort Retention Tracker',
      description: 'Track retention curves by signup cohort',
      downloadUrl: '/templates/cohort-retention.xlsx'
    },
    {
      name: 'Experiment Prioritization Framework',
      description: 'Prioritize growth experiments using ICE scoring',
      downloadUrl: '/templates/experiment-prioritization.pdf'
    }
  ],
  relatedFrameworks: [
    { title: 'Growth Loops', slug: 'growth-loops' },
    { title: 'North Star Metric', slug: 'north-star-metric' },
    { title: 'ICE Scoring', slug: 'ice-scoring' }
  ],
  
  relatedRoadmaps: [
    { title: 'Growth Marketing', slug: 'growth-marketing' },
    { title: 'Product Marketing', slug: 'product-marketing' },
    { title: 'Performance Marketing', slug: 'performance-marketing' }
  ]
}
