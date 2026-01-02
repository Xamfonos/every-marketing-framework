import { FrameworkData } from '../framework-types'

export const jobsToBeDoneFramework: FrameworkData = {
  slug: 'jobs-to-be-done',
  title: 'Jobs-to-be-Done (JTBD)',
  subtitle: 'Understand what customers are truly hiring your product to do',
  category: 'psychology',
  difficulty: 'intermediate',
  readingTime: 15,
  
  overview: `Jobs-to-be-Done is a framework for understanding customer motivation. It shifts focus from WHO the customer is (demographics) to WHAT they're trying to accomplish. People don't buy products—they "hire" products to get a job done. Understanding this job unlocks better positioning, product development, and marketing strategies.`,
  
  whenToUse: [
    'Developing new product features or products',
    'Creating customer personas that drive real insight',
    'Identifying unmet market needs',
    'Improving product positioning and messaging',
    'Understanding why customers switch from competitors',
    'Segmenting customers based on motivation vs demographics',
  ],
  
  learningPath: {
    description: 'Master Jobs-to-be-Done by understanding customer motivations and progress before diving into tactical applications.',
    prerequisites: [
      { slug: 'marketing-first-principles', title: 'Marketing First Principles' }
    ],
    pathway: [
      { slug: 'jobs-to-be-done', title: 'Jobs-to-be-Done (JTBD)', isCurrentFramework: true },
      { slug: 'value-proposition-canvas', title: 'Value Proposition Canvas' },
      { slug: 'hook-model', title: 'The Hook Model' }
    ],
    alternatives: [
      { slug: 'customer-journey-mapping', title: 'Customer Journey Mapping' }
    ]
  },

  coreConcepts: [
    {
      title: 'The Core Concept',
      content: `People don't want a quarter-inch drill. They want a quarter-inch hole. Actually, they don't even want the hole—they want to hang a picture to make their home feel complete.

This is the essence of Jobs-to-be-Done: peeling back the layers to understand the underlying motivation.

**The JTBD Statement Formula:**

"When [situation], I want to [motivation], so I can [expected outcome]."

Example: "When I'm hosting dinner guests, I want to impress them with my cooking, so I can be seen as sophisticated and cultured."

This statement reveals:
• **Situation:** Hosting dinner guests (the context)
• **Motivation:** Impress guests (the emotional driver)
• **Outcome:** Be seen as sophisticated (the identity shift)

Notice how this is completely different from "I want cooking tools." The job isn't about cooking—it's about social status and identity.`,
  embeddedResources: [
        {
          type: 'video',
          data: {
            title: 'Jobs to Be Done — Explained',
            author: 'Intercom',
            url: 'https://www.youtube.com/watch?v=example-jtbd',
            duration: '14:20',
            whyWatch: 'Clear explanation of JTBD interviews and how to extract real jobs from customer stories.'
          }
        }
      ]
    },
    {
      title: 'The Three Types of Jobs',
      content: [
        '**Functional Jobs: What needs to get done**\n\nThis is the practical, tangible outcome. Examples:\n• Get from point A to point B (transportation)\n• Send a document to a colleague (communication)\n• Learn a new skill (education)\n\nFunctional jobs are important but rarely the complete picture.',
        
        '**Emotional Jobs: How they want to feel**\n\nThis is about feeling a certain way. Examples:\n• Feel secure (insurance, savings)\n• Feel accomplished (productivity tools, education)\n• Feel connected (social media, messaging)\n• Feel in control (organization tools, planning apps)\n\nEmotional jobs often drive decisions more than functional jobs.',
        
        '**Social Jobs: How they want to be perceived**\n\nThis is about identity and perception. Examples:\n• Be seen as competent (professional tools, certifications)\n• Be seen as caring (gifts, charitable giving)\n• Be seen as successful (luxury goods, status symbols)\n• Be seen as smart (books, courses, sophisticated products)\n\nSocial jobs explain why people pay premium prices for brands—they\'re not just buying function, they\'re buying perception.'
      ]
    },
    {
      title: 'The JTBD Research Method',
      content: `**Conduct JTBD Interviews**

Don't ask "What features do you want?" Instead, use the "switch interview" method:

Ask customers who recently switched TO your product:
• What prompted you to look for a solution?
• What was the first thing you tried?
• What made you keep looking?
• When did you realize you needed to switch?
• What almost stopped you from switching?
• What made you choose this solution over others?

**Identify the Job Story**

From these interviews, extract the job story:
• **Situation:** What was happening when they realized they needed help?
• **Motivation:** What were they actually trying to achieve?
• **Outcome:** What does success look like?

**Map the Job Journey**

Document every stage of trying to get the job done:
1. First Thought ("I need to solve this")
2. Passive Looking (awareness of solutions)
3. Active Looking (evaluating options)
4. Deciding (making a choice)
5. Consuming (using the solution)
6. Satisfaction (evaluating results)

At each stage, identify:
• What are the "pushes" (what's wrong with current solution)?
• What are the "pulls" (what's attractive about new solution)?
• What are the anxieties (what could go wrong)?
• What are the habits (what makes them stick with status quo)?

**Find Patterns**

Look for common jobs across different customers. The most valuable insights come from jobs that many customers share but may describe differently.`
    }
  ],
  
  howToApply: [
    {
      title: 'Step 1: Better Positioning',
      content: `Instead of: "Project management software with Gantt charts"
JTBD: "When your team is missing deadlines, finally get everyone aligned so you look like the competent leader you are"

This speaks to the real job: looking competent as a leader (social job) and getting control (emotional job), not just managing tasks (functional job).`
    },
    {
      title: 'Step 2: Better Messaging',
      content: `Bad messaging focuses on features: "Our app has 50+ integrations!"
JTBD messaging focuses on the job: "Stop switching between 10 different tools. Everything you need, in one place."

The job is to reduce cognitive load and save time, not to have integrations.`
    },
    {
      title: 'Step 3: Better Customer Segmentation',
      content: `Traditional: Segment by industry, company size, demographics
JTBD: Segment by job circumstance

Example segments for a productivity tool:
• "Overwhelmed manager trying to regain control"
• "Ambitious professional trying to advance career"
• "Team lead trying to prove competence to executives"

Same product, different jobs, different messaging.`
    },
    {
      title: 'Step 4: Better Product Development',
      content: `Instead of adding features competitors have, build for the job.

Example: Intercom didn't build "better live chat"—they built for the job of "making customers feel supported without hiring 50 support agents."`
    },
    {
      title: 'Step 5: Find Your Real Competition',
      content: `JTBD reveals your real competitors: anything else they hire to do the same job.

Starbucks competes with:
• Dunkin' (coffee)
• Spotify (ambiance while working)
• WeWork (third place to work)
• Energy drinks (staying alert)

All are hired for different aspects of the same job clusters.`
    }
  ],
  
  examples: [
    {
      company: 'Snickers',
      situation: 'Competing in the saturated candy bar market against dozens of alternatives',
      application: 'Snickers identified the job: "When I\'m hungry between meals, I want something to tide me over, so I can keep going without a meal." They repositioned from "candy bar" to "hunger satisfaction" with "You\'re not you when you\'re hungry." This positioned them against granola bars and meal replacements, not just other candy.',
      result: 'Became the #1 candy bar globally by solving a different job than other candy bars'
    },
    {
      company: 'Slack',
      situation: 'Email was the entrenched solution for team communication',
      application: 'The job wasn\'t "send messages to teammates"—it was "When I need to collaborate on something, I want to keep all context in one place, so my team can move fast without confusion." Slack organized around conversations and threads, not chronological inboxes.',
      result: 'Displaced email for team communication by solving the real job: maintaining context and moving fast, not just sending messages'
    },
    {
      company: 'Airbnb',
      situation: 'Hotels dominated short-term accommodation',
      application: 'Identified the job: "When I travel, I want to experience the city like a local, so I feel authentic and cultured" (not just "find a place to sleep"). Their messaging, product, and experience all focused on local experience, not amenities.',
      result: 'Built a $100B+ company by solving a different job than hotels (authentic local experience vs reliable accommodation)'
    },
    {
      company: 'Notion',
      situation: 'Competing with established note-taking apps and project management tools',
      application: 'Realized the job was: "When I\'m managing knowledge for my work, I want everything in one flexible system, so I can think clearly without tool overwhelm." Not "take notes" or "manage projects"—the job was reducing cognitive load from tool sprawl.',
      result: 'Became the fastest-growing productivity tool by consolidating multiple jobs into one flexible workspace'
    }
  ],
  
  templates: [
    {
      name: 'JTBD Interview Script',
      description: 'Step-by-step guide for conducting effective Jobs-to-be-Done customer interviews',
      downloadUrl: '/templates/jtbd-interview-script.pdf'
    },
    {
      name: 'Job Story Canvas',
      description: 'Visual framework for documenting situation, motivation, and expected outcome',
      downloadUrl: '/templates/job-story-canvas.pdf'
    },
    {
      name: 'Forces of Progress Diagram',
      description: 'Map the pushes, pulls, anxieties, and habits affecting customer decisions',
      downloadUrl: '/templates/forces-diagram.pdf'
    },
    {
      name: 'JTBD Segmentation Template',
      description: 'Segment customers by job circumstances instead of demographics',
      downloadUrl: '/templates/jtbd-segmentation.pdf'
    }
  ],
  relatedFrameworks: [
    { title: 'Marketing First Principles', slug: 'marketing-first-principles' },
    { title: 'Value Proposition Canvas', slug: 'value-proposition-canvas' },
    { title: 'Customer Journey Mapping', slug: 'customer-journey-mapping' }
  ],
  
  relatedRoadmaps: [
    { title: 'Product Marketing', slug: 'product-marketing' },
    { title: 'Growth Marketing', slug: 'growth-marketing' },
    { title: 'Customer Marketing', slug: 'customer-marketing' }
  ]
}
