import { FrameworkData } from '../framework-types'

export const valuePropositionCanvasFramework: FrameworkData = {
  slug: 'value-proposition-canvas',
  title: 'Value Proposition Canvas',
  subtitle: 'Design products and messaging that customers actually want',
  category: 'strategy',
  difficulty: 'beginner',
  readingTime: 15,
  
  overview: `The Value Proposition Canvas helps you design products and craft messaging that truly resonates with customers. It maps what customers actually want (jobs, pains, gains) against what you offer (products, pain relievers, gain creators). When these align perfectly, you have product-market fit and messaging that converts.`,
  
  whenToUse: [
    'Designing a new product or feature',
    'Refining your marketing message',
    'Understanding why customers aren\'t buying',
    'Identifying which features to build next',
    'Creating customer-centric positioning',
    'Testing product-market fit',
  ],
  
  learningPath: {
    description: 'The Value Proposition Canvas is a foundational strategy framework. Start here to understand customer needs, then layer on psychology and growth tactics.',
    prerequisites: [
      { slug: 'marketing-first-principles', title: 'Marketing First Principles' },
    ],
    pathway: [
      { slug: 'value-proposition-canvas', title: 'Value Proposition Canvas', isCurrentFramework: true },
      { slug: 'jobs-to-be-done', title: 'Jobs-to-be-Done' },
      { slug: 'customer-journey-mapping', title: 'Customer Journey Mapping' },
    ],
    alternatives: [
      { slug: 'blue-ocean-strategy', title: 'Blue Ocean Strategy' },
      { slug: 'positioning-canvas', title: 'Positioning Canvas' },
    ]
  },
  
  coreConcepts: [
    {
      title: 'The Two Sides of the Canvas',
      content: `The Value Proposition Canvas has two sides that must fit together like puzzle pieces:

**Customer Profile (Right Side):** What your customer experiences
**Value Map (Left Side):** What your product offers

Most companies start with the Value Map ("Here's what we built!") and try to find customers who want it. That's backwards.

**The right approach:** Start with the Customer Profile. Deeply understand what customers need. THEN design your Value Map to match.

Think of it like this: The Customer Profile is the lock. The Value Map is the key. You can't design the key before examining the lock.`
    },
    {
      title: 'Customer Profile: Understanding the Lock',
      content: [
        `**Customer Jobs**

These are the tasks customers are trying to complete. But NOT just functional tasks—also emotional and social jobs.

Functional job: "I need to create a presentation"
Emotional job: "I need to feel confident presenting to my boss"  
Social job: "I need to look professional to my colleagues"

All three matter. Addressing only the functional job ("here's presentation software") misses 2/3 of the motivation.`,

        `**Pains**

These are anything that annoys customers before, during, or after getting the job done.

• **Obstacles:** "Current tools are too complex"
• **Risks:** "I might lose my work if it crashes"
• **Bad outcomes:** "My presentations look amateurish"
• **Feelings:** "I feel stressed every time I need to present"

The bigger the pain, the more they'll pay to solve it. Aspirin (pain relief) always beats vitamins (nice-to-haves).`,

        `**Gains**

These are outcomes and benefits customers want. What would make them happy?

• **Required:** Must-haves for a solution to be viable
• **Expected:** Standard features they assume you'll have
• **Desired:** Nice-to-haves that would delight them
• **Unexpected:** Surprises they didn't know they wanted

The hierarchy matters. Deliver required and expected first. Desired and unexpected differentiate you.`
      ]
    },
    {
      title: 'Value Map: Designing the Key',
      content: [
        `**Products & Services**

What you're offering. Be specific about all the things you provide:

• Core product/service
• Features and functionality  
• Digital vs physical components
• Support and services
• Related offerings

List everything. Then we'll figure out which ones actually matter to customers.`,

        `**Pain Relievers**

How your products eliminate or reduce specific pains from the Customer Profile.

**The key:** Each pain reliever should map directly to a specific pain you identified.

Example mapping:
Customer Pain: "I'm stressed about presenting"
→ Pain Reliever: "Professionally designed templates eliminate design anxiety"

Bad pain relievers solve pains customers don't have. Good ones solve pains you validated they actually experience.`,

        `**Gain Creators**

How your products create outcomes and benefits customers want.

**The key:** Each gain creator should map directly to a specific gain you identified.

Example mapping:
Customer Gain: "I want to look professional"  
→ Gain Creator: "Templates designed by Forbes 500 presentation designers"

Notice how both the pain reliever AND gain creator can address the same underlying job (looking professional), but from different angles.`
      ]
    },
    {
      title: 'The Fit: When Lock and Key Match',
      content: `You achieve "fit" when your Value Map addresses the most important jobs, pains, and gains in your Customer Profile.

**Three levels of fit:**

**Problem-Solution Fit**
You've validated that the pains and gains you're solving actually exist and matter to customers. You're not assuming—you've tested.

**Product-Market Fit**  
Customers are buying and using your product. The evidence: retention, word-of-mouth, willingness to pay.

**Business Model Fit**
You can profitably and scalably deliver your value proposition. The economics work.

Most startups fail between Problem-Solution Fit and Product-Market Fit. They build solutions to problems that aren't painful enough to pay for.

**The test:** If you removed your product tomorrow, would customers scramble to find an alternative? Or just shrug and move on?`
    }
  ],
  
  howToApply: [
    {
      title: 'Step 1: Choose ONE Customer Segment',
      content: `Don't try to map all customers at once. Pick one specific segment to start.

**Bad segment definition:** "Small business owners"
**Good segment definition:** "Solo marketing consultants earning $100K-$300K who struggle with client reporting"

The more specific, the better. You'll create different canvases for different segments.

**How to choose:** Start with your best customers—the ones who get the most value and pay the most willingly.`
    },
    {
      title: 'Step 2: Map Their Customer Profile',
      content: `Interview 5-10 customers in this segment. Ask:

**For Jobs:**
• "What are you trying to accomplish?"
• "What would success look like?"
• "How do you currently get this done?"

**For Pains:**
• "What frustrates you about current solutions?"
• "What's risky or could go wrong?"
• "What obstacles prevent you from getting the job done?"
• "How do you feel when doing this task?"

**For Gains:**
• "What would make this easier?"
• "What would save you time/money?"
• "How would an ideal solution work?"
• "What would impress you?"

**Critical:** Listen for their exact words. "Time-consuming" and "tedious" are different pains requiring different solutions.

Rank everything by importance. Focus on the top 3 jobs, top 5 pains, top 5 gains.`
    },
    {
      title: 'Step 3: Design Your Value Map',
      content: `Now that you understand the lock, design the key.

**For each top pain, create a pain reliever:**
Map how your product specifically addresses it. If you can't address a top-3 pain, that's a gap in your product.

**For each top gain, create a gain creator:**  
Map how your product specifically delivers it. If you can't deliver a top-3 gain, that's a gap in your value proposition.

**Products & Services:**
List all features and offerings. Then DELETE everything that doesn't directly address a top job, pain, or gain.

Most products are bloated with features that don't matter. The canvas forces you to be honest about what actually creates value.`
    },
    {
      title: 'Step 4: Test the Fit',
      content: `Create a simple prototype or pitch and test with new customers (not the ones you interviewed).

**Show them your Value Map** and ask:
• "Does this address a problem you have?"
• "Would you pay for this?"
• "How much would you pay?"
• "What's missing?"

**Watch for:**
✅ Immediate understanding ("Oh, I need this!")
✅ Specific use cases ("I'd use this for...")  
✅ Pricing discussion (if they're talking price, there's interest)

🚫 Polite indifference ("That's interesting...")
🚫 Confusion ("I don't really understand what this does")
🚫 Feature requests unrelated to your value prop

If you get the red flags, go back to Step 2. Your Customer Profile was wrong.`
    },
    {
      title: 'Step 5: Iterate Based on Evidence',
      content: `The canvas isn't static. Update it as you learn:

**Green light signals** (double down):
• High close rates on sales calls
• Low churn after onboarding  
• Unprompted referrals
• Willingness to pay premium pricing

**Yellow light signals** (investigate):
• Long sales cycles
• High churn in first 90 days
• Price resistance
• Feature requests drift from your value prop

**Red light signals** (pivot):
• Can't get second meeting with prospects
• Users sign up but don't activate
• No one willing to pay asking price
• No word-of-mouth growth

The Value Proposition Canvas is a hypothesis. The market tells you if you're right.`
    }
  ],
  
  examples: [
    {
      company: 'Slack',
      situation: 'Email was the entrenched solution for team communication, but alternatives struggled to get adoption',
      application: 'Customer Profile: Teams frustrated by email (pain: losing context in threads, cc hell, searching old messages). Job: Keep team aligned on projects. Gain: Fast, organized communication. Value Map: Channel-based organization (pain reliever: no more email threads), searchable history (pain reliever: find anything instantly), integrations (gain creator: everything in one place). Positioned as "email killer for teams."',
      result: 'Fastest-growing B2B SaaS ever. $27.7B acquisition by Salesforce. The tight fit between pains (email problems) and pain relievers (channel org, search) drove viral adoption.'
    },
    {
      company: 'Superhuman',
      situation: 'Email clients existed, but power users (VCs, executives) weren\'t satisfied',
      application: 'Customer Profile: Executives drowning in email (pain: inbox anxiety, slow processing). Job: Achieve inbox zero daily. Gain: Feel in control, process email 2x faster. Value Map: Keyboard shortcuts (gain creator: speed), scheduled send (pain reliever: no weekend email), beautiful design (gain creator: premium feel). Priced at $30/month when competitors were free.',
      result: '$260M+ raised, millions in ARR. Premium pricing worked because they addressed gains (status, speed) not just functional jobs. Customers who valued those gains paid happily.'
    },
    {
      company: 'Notion',
      situation: 'Productivity tools were fragmented—notes in Evernote, tasks in Asana, docs in Google Docs, wiki in Confluence',
      application: 'Customer Profile: Knowledge workers juggling tools (pain: context switching, data silos). Job: Organize all work knowledge. Gain: One tool for everything, flexible organization. Value Map: All-in-one workspace (pain reliever: no tool switching), flexible databases (gain creator: organize your way), real-time collaboration (gain creator: team alignment).',
      result: '$10B valuation, 30M+ users. The "all-in-one" positioning directly addressed the #1 pain (too many tools) that existing solutions ignored.'
    }
  ],
  
  templates: [
    {
      name: 'Value Proposition Canvas Template',
      description: 'The complete canvas with prompts and examples for each section',
      downloadUrl: '/templates/value-prop-canvas.pdf'
    },
    {
      name: 'Customer Interview Script',
      description: 'Questions to ask when researching customer jobs, pains, and gains',
      downloadUrl: '/templates/customer-interview-vp.pdf'
    },
    {
      name: 'Fit Testing Checklist',
      description: 'How to validate that your value map actually fits your customer profile',
      downloadUrl: '/templates/fit-testing.pdf'
    },
    {
      name: 'Multi-Segment Comparison',
      description: 'Compare value propositions across different customer segments',
      downloadUrl: '/templates/segment-comparison.pdf'
    }
  ],
  
  relatedFrameworks: [
    { title: 'Jobs-to-be-Done', slug: 'jobs-to-be-done' },
    { title: 'Customer Journey Mapping', slug: 'customer-journey-mapping' },
    { title: 'Marketing First Principles', slug: 'marketing-first-principles' }
  ],
  
  relatedRoadmaps: [
    { title: 'Product Marketing', slug: 'product-marketing' },
    { title: 'Growth Marketing', slug: 'growth-marketing' },
    { title: 'Customer Marketing', slug: 'customer-marketing' }
  ]
}
