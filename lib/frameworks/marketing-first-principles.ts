import { FrameworkData } from '../framework-types'

export const marketingFirstPrinciplesFramework: FrameworkData = {
  slug: 'marketing-first-principles',
  title: 'Marketing First Principles',
  subtitle: 'The foundational truths that underpin all effective marketing',
  category: 'strategy',
  difficulty: 'beginner',
  readingTime: 12,
  
  overview: `Marketing First Principles is the foundation of all marketing strategy. Instead of copying tactics that worked for others, this framework teaches you to reason from fundamental truths about human behavior, value creation, and communication. By understanding these core principles, you can create original marketing strategies that work for your specific context.`,
  
  whenToUse: [
    'Starting a new marketing initiative or campaign',
    'Evaluating why current marketing isn\'t working',
    'Building a marketing strategy from scratch',
    'Training team members on marketing fundamentals',
    'Questioning conventional marketing wisdom',
  ],
  
    learningPath: {
      description: 'Start here to build a solid foundation in marketing thinking and then layer on frameworks and tactics.',
      prerequisites: [],
      pathway: [
        { slug: 'marketing-first-principles', title: 'Marketing First Principles', isCurrentFramework: true },
        { slug: 'jobs-to-be-done', title: 'Jobs-to-be-Done (JTBD)' },
        { slug: 'value-proposition-canvas', title: 'Value Proposition Canvas' }
      ],
      alternatives: [
        { slug: 'customer-journey-mapping', title: 'Customer Journey Mapping' }
      ]
    },

    coreConcepts: [
    {
      title: 'What Are First Principles?',
      content: `First principles thinking is a problem-solving approach that breaks down complex problems into their most basic, foundational truths. Instead of reasoning by analogy ("X worked for Company Y, so it should work for us"), you reason from the ground up.

In marketing, this means understanding the fundamental truths about:
• Why people buy things
• How value is created and perceived
• What motivates human decision-making
• How information spreads
• What builds trust and credibility

When you understand these fundamentals, you can build marketing strategies that work for YOUR unique situation, not just copy what worked for someone else in a different context.`,
  embeddedResources: [
          {
            type: 'video',
            data: {
              title: 'First Principles Thinking — How to Reason From Fundamentals',
              author: 'Farnam Street',
              url: 'https://www.youtube.com/watch?v=yl5lCO1nN0s',
              duration: '12:34',
              whyWatch: 'Short primer on how to apply first principles thinking to problems, with marketing examples.'
            }
          }
        ]
    },
    {
      title: 'The 5 Core Principles of Marketing',
      content: [
        '**1. People Don\'t Buy Products, They Buy Better Versions of Themselves**\n\nAt its core, every purchase is about transformation. People don\'t buy a gym membership — they buy the identity of being a "person who works out." They don\'t buy organic food — they buy the identity of being health-conscious.\n\nThis principle fundamentally changes how you position products. Instead of listing features, you show the transformation: who they are now → who they\'ll become.',
        
        '**2. Value Is Perceived, Not Inherent**\n\nA product has no inherent value. Value only exists in the mind of the buyer, based on their specific context, needs, and perception. A bottle of water costs $1 at a grocery store but $5 at an airport. Same product, different perceived value.\n\nThis principle means your job isn\'t to communicate what your product IS — it\'s to shape how your product is PERCEIVED. Context, framing, and positioning determine value.',
        
        '**3. Attention Is the Currency of Marketing**\n\nBefore you can persuade, educate, or convert someone, you must first earn their attention. In a world of infinite information, attention is the scarcest resource. The fundamental marketing equation is:\n\nAttention × Message × Trust = Results\n\nWithout attention, nothing else matters. But attention without the right message or trust is worthless.',
        
        '**4. Trust Is Built Through Consistency and Proof**\n\nPeople don\'t trust claims — they trust evidence. Marketing isn\'t about convincing people through clever copywriting. It\'s about building a body of evidence that proves your claims are true.\n\nThis evidence comes from:\n• Social proof (testimonials, case studies, reviews)\n• Demonstrated expertise (content, thought leadership)\n• Consistency (showing up repeatedly with the same message)\n• Transparency (being honest about limitations and trade-offs)',
        
        '**5. Marketing Is a System, Not Individual Tactics**\n\nMost people think marketing is about executing tactics: "Let\'s run some ads" or "Let\'s post on social media." But effective marketing is a system where each component reinforces the others.\n\nThe system includes:\n• Positioning (how you\'re different)\n• Messaging (what you say)\n• Channels (where you show up)\n• Content (what you create)\n• Conversion (how you capture value)\n• Retention (how you keep customers)\n\nWhen these work together, you get compounding returns. When they\'re disconnected, you get diminishing returns.'
      ]
    },
    {
      title: 'Common First Principles Mistakes',
      content: `**Mistake #1: Copying Tactics Without Understanding Principles**

Just because Slack grew through word-of-mouth doesn't mean your product will. Slack succeeded because their product had inherent virality (teams invite teammates). The tactic (focus on product) worked because of the principle (network effects).

**Mistake #2: Ignoring Your Specific Context**

First principles are universal, but their application is context-specific. Your market, your product, your resources, your competition — all of these create unique constraints that require unique solutions.

**Mistake #3: Overthinking and Never Executing**

First principles thinking can lead to analysis paralysis. The goal isn't to find the perfect strategy before executing — it's to build a strong foundation so you can iterate intelligently.

**Mistake #4: Forgetting That Principles Compound**

When you apply multiple principles together, they multiply in effectiveness. A great product (Principle 1: transformation) with strong social proof (Principle 4: trust) and consistent messaging (Principle 5: system) will vastly outperform focusing on just one.`
    }
  ],
  
  howToApply: [
    {
      title: 'Step 1: Question Your Assumptions',
      content: `Write down every assumption you have about your marketing:
• "We need to be on social media"
• "We need to run paid ads"
• "We need to have a content strategy"

Then ask: Is this actually true? Or is this just conventional wisdom?`
    },
    {
      title: 'Step 2: Break Down to Fundamentals',
      content: `For each marketing challenge, ask "Why?" until you reach a fundamental truth:

"We need more leads"
→ Why? "To increase revenue"
→ Why? "To grow the business"
→ Why? "To serve more customers who have this problem"
→ Fundamental: We need to reach people who have a specific problem we can solve`
    },
    {
      title: 'Step 3: Build Up From Fundamentals',
      content: `Now that you understand the fundamental truth, build your strategy from there:

If the fundamental truth is "We need to reach people with X problem," then:
• Where do these people hang out?
• What language do they use to describe their problem?
• Who do they trust for solutions?
• What proof would convince them we can help?`
    },
    {
      title: 'Step 4: Test and Iterate',
      content: `First principles give you a solid foundation, but you still need to test in the real world. Use your first principles understanding to form hypotheses, then test them systematically.`
    }
  ],
  
  examples: [
    {
      company: 'Dollar Shave Club',
      situation: 'Entering a market dominated by Gillette with massive advertising budgets',
      application: 'Instead of competing on features (better razor), they applied first principles: People buy better versions of themselves (Principle 1). Their target wasn\'t "men who need razors" — it was "men who are smart consumers and don\'t fall for marketing BS." Their viral video built trust through humor and transparency (Principle 4), not by outspending Gillette.',
      result: 'Sold to Unilever for $1 billion despite minimal marketing budget compared to incumbents'
    },
    {
      company: 'HubSpot',
      situation: 'Selling expensive marketing software in a crowded CRM/marketing automation space',
      application: 'Applied Principle 3 (attention is currency) and Principle 4 (trust through proof). Instead of just running ads, they created the "Inbound Marketing" methodology and gave away massive amounts of educational content. This earned attention, demonstrated expertise, and built trust before asking for a sale.',
      result: 'Grew to $2B+ ARR by becoming the trusted authority in inbound marketing, not just another software vendor'
    },
    {
      company: 'Peloton',
      situation: 'Selling a $2,000 exercise bike in a market with cheaper alternatives',
      application: 'Principle 1 (people buy transformation) and Principle 2 (value is perceived). They didn\'t position themselves as "better exercise equipment" — they positioned as "the fitness community for motivated people." The bike wasn\'t expensive equipment; it was access to an identity and a tribe.',
      result: 'Built a $8B company by selling identity and community, not just hardware'
    }
  ],
  
  templates: [
    {
      name: 'First Principles Analysis Worksheet',
      description: 'A structured template for breaking down your marketing challenges to first principles',
      downloadUrl: '/templates/first-principles-worksheet.pdf'
    },
    {
      name: 'Marketing Assumption Audit',
      description: 'Identify and question every assumption in your current marketing strategy',
      downloadUrl: '/templates/assumption-audit.pdf'
    },
    {
      name: 'Principle-Based Strategy Builder',
      description: 'Build your marketing strategy from fundamental truths using this framework',
      downloadUrl: '/templates/strategy-builder.pdf'
    }
  ],
  relatedFrameworks: [
    { title: 'Jobs-to-be-Done', slug: 'jobs-to-be-done' },
    { title: 'Value Proposition Canvas', slug: 'value-proposition-canvas' },
    { title: 'Customer Journey Mapping', slug: 'customer-journey-mapping' }
  ],
  
  relatedRoadmaps: [
    { title: 'Growth Marketing', slug: 'growth-marketing' },
    { title: 'Content Marketing', slug: 'content-marketing' },
    { title: 'Product Marketing', slug: 'product-marketing' }
  ]
}
