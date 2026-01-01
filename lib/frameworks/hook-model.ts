import { FrameworkData } from '../framework-types'

export const hookModelFramework: FrameworkData = {
  slug: 'hook-model',
  title: 'The Hook Model',
  subtitle: 'Build habit-forming products using Nir Eyal\'s proven framework',
  category: 'psychology',
  difficulty: 'intermediate',
  readingTime: 20,
  
  overview: `The Hook Model, created by Nir Eyal, explains how successful products create user habits through a four-step cycle: Trigger, Action, Variable Reward, and Investment. Understanding this model helps you design products that users return to automatically, without requiring constant marketing spend.`,
  
  whenToUse: [
    'Designing a new product or feature',
    'Improving user retention and engagement',
    'Understanding why users don\'t stick with your product',
    'Building products people use daily/weekly',
    'Creating sustainable competitive advantage through habits',
    'Reducing reliance on paid acquisition',
  ],
  
  learningPath: {
    description: 'The Hook Model builds on behavior psychology. Learn BJ Fogg\'s Behavior Model first to understand when behavior happens, then this framework shows how to make it habitual.',
    prerequisites: [
      { slug: 'fogg-behavior-model', title: 'BJ Fogg Behavior Model' },
      { slug: 'jobs-to-be-done', title: 'Jobs-to-be-Done' },
    ],
    pathway: [
      { slug: 'fogg-behavior-model', title: 'BJ Fogg Behavior Model' },
      { slug: 'hook-model', title: 'The Hook Model', isCurrentFramework: true },
      { slug: 'persuasion-principles', title: 'Persuasion Principles' },
    ],
    alternatives: [
      { slug: 'hooked-canvas', title: 'Hooked Canvas' },
      { slug: 'behavior-design', title: 'Behavior Design' },
    ]
  },
  
  coreConcepts: [
    {
      title: 'The Four Stages of the Hook',
      content: `The Hook Model creates habits through a four-stage cycle that users go through repeatedly. Each cycle strengthens the habit.

**Trigger → Action → Reward → Investment**

The brilliance of the Hook Model isn't in the individual stages—it's in understanding how they work together as a system. Each stage sets up the next, creating a continuous loop that gets stronger every time a user goes through it.

**Why this matters:** Products that hook users spend less on marketing because users return automatically. Instead of constantly acquiring new users, you're activating existing ones.`,
      
      embeddedResources: [
        {
          type: 'video',
          data: {
            title: 'How to Build Habit-Forming Products',
            author: 'Nir Eyal',
            url: 'https://www.youtube.com/watch?v=hLXxEo24YFw',
            duration: '28:42',
            whyWatch: 'Nir Eyal explains the complete Hook Model with real examples from Instagram and Twitter. Watch this to see how the four stages work together in actual products.'
          }
        }
      ]
    },
    {
      title: 'Stage 1: Trigger',
      content: [
        `**External Triggers** get users started. These are calls to action in the environment:

• Notification: Red badge on app icon
• Email: "Your friend tagged you"
• Call to action: "Sign up free"
• People: Friend inviting you to app

BUT external triggers alone don't create habits. They're too expensive to maintain forever.`,

        `**Internal Triggers** are where the magic happens. These are emotions or situations that automatically prompt action:

• Boredom → Open Instagram
• Loneliness → Check WhatsApp
• Uncertainty → Google it
• FOMO → Check Twitter

**The goal:** Transition users from external triggers to internal triggers. When a user feels bored and automatically reaches for your app WITHOUT seeing a notification, you've created a habit.

The journey: External trigger (push notification) → Repeated use → Association forms → Internal trigger (emotion)`
      ]
    },
    {
      title: 'Stage 2: Action',
      content: `The action must be as easy as possible. Remember BJ Fogg's equation:

**B = MAT (Behavior = Motivation × Ability × Trigger)**

If the action is hard, users won't do it, even with strong motivation and triggers.

**Examples of easy actions:**
• Instagram: Open app and scroll
• Google: Type query
• Slack: Read and respond to message
• Twitter: Tap like

**Making actions easier:**
• Reduce steps: Twitter's 280 characters vs blog post
• Reduce time: TikTok's 15-second videos
• Reduce thinking: Infinite scroll vs pagination
• Reduce friction: Social login vs creating account

The action should be so easy that the trigger is enough to prompt it, even when motivation is low.`
    },
    {
      title: 'Stage 3: Variable Reward',
      content: [
        `Variable rewards are the secret sauce. They're more powerful than predictable rewards because our brains evolved to seek uncertain outcomes.

Fixed reward: "Like this post, get 1 point" (boring after a few times)
Variable reward: "Post something, maybe get 5 likes, maybe 500" (endlessly engaging)

**The three types of variable rewards:**`,
        
        `**Rewards of the Tribe** (social validation)

• Instagram: Sometimes likes, sometimes comments, sometimes new followers
• LinkedIn: Sometimes views, sometimes connections, sometimes job offers
• Twitter: Sometimes retweets, sometimes replies, sometimes quote tweets

The variability: You never know which type of social validation you'll get.`,
        
        `**Rewards of the Hunt** (resources and information)

• Pinterest: Never know what interesting idea you'll find next
• Reddit: Each scroll shows different valuable content
• News feed: Mix of interesting and mundane

The variability: You might find something amazing or nothing interesting, but you keep looking.`,
        
        `**Rewards of the Self** (mastery and completion)

• Duolingo: Sometimes progress on streak, sometimes new achievement, sometimes level up
• Fitbit: Sometimes hit step goal, sometimes beat personal record, sometimes new badge
• LinkedIn Learning: Sometimes finish module, sometimes unlock certificate

The variability: Different types of progress and achievement.

**What makes rewards variable?**

NOT: Random magnitude (random number of points)
YES: Different types of rewards scratching different psychological itches`
      ],
      
      embeddedResources: [
        {
          type: 'video',
          data: {
            title: 'Instagram, Snapchat, and the Hook Model',
            author: 'Y Combinator',
            url: 'https://www.youtube.com/watch?v=f4HnRWM9o',
            duration: '15:23',
            whyWatch: 'Deep dive into how Instagram and Snapchat specifically use variable rewards. You\'ll see exactly how they implement the three types.'
          }
        }
      ]
    },
    {
      title: 'Stage 4: Investment',
      content: [
        `Investment is the most misunderstood stage. It's NOT about time or sunk cost fallacy.

**Investment = Stored Value**

Users do a small bit of work that improves the product for next time. This work "loads the next trigger"—it gives them a reason to come back.`,
        
        `**Types of Investment:**

**Content & Data:**
• Spotify: Playlists you create
• Notion: Notes and databases you build
• Gmail: Email archive
• Netflix: Viewing history shapes recommendations

**Followers & Reputation:**
• Twitter: Follower count
• LinkedIn: Professional network
• YouTube: Subscriber base
• Reddit: Karma score

**Learned Preferences:**
• Amazon: Purchase history and recommendations
• TikTok: Algorithm learns your interests
• Instagram: Curated feed based on engagement

**Skills & Mental Models:**
• Photoshop: Keyboard shortcuts learned
• Excel: Formula knowledge
• Vim: Editor commands

**Why investment creates hooks:**

Each investment makes the product more valuable. Your Spotify isn't just Spotify—it's YOUR Spotify with YOUR playlists. Switching has a cost.

**Timing matters:**

Investment happens AFTER the reward. Users feel good (from reward), so they're willing to invest. The investment then loads the next trigger.

Example cycle:
1. Notification (trigger)
2. Check Instagram (action)  
3. See likes on your photo (reward)
4. Like/comment on others (investment) ← This creates triggers for them to return and engage with you`
      ]
    },
    {
      title: 'The Ethics of Habit Formation',
      content: `With great power comes great responsibility. The Hook Model can be used to help people OR exploit them.

**The Manipulation Matrix:**

**Facilitator** (ethical)
• You use the product yourself
• It materially improves users' lives
• Example: Fitness apps you personally use

**Peddler** (questionable)
• You don't use it yourself
• BUT it improves users' lives
• Example: Smoking cessation app made by non-smokers

**Entertainer** (questionable)
• You use it yourself
• BUT doesn't improve users' lives
• Example: Addictive games

**Dealer** (unethical)
• You don't use it yourself
• Doesn't improve users' lives
• Example: Exploitative gambling apps

**Ask yourself:**
1. Would I use this product?
2. Does it materially improve users' lives?

If YES to both: Build it. If NO to either: Reconsider.`,
      
      embeddedResources: [
        {
          type: 'article',
          data: {
            title: 'The Morality of Manipulation',
            author: 'Nir Eyal',
            source: 'Nir & Far',
            url: 'https://www.nirandfar.com/manipulation-matrix/',
            readTime: '8 min',
            whyRead: 'Nir addresses the ethical concerns directly with a framework for determining if your product is ethical. Essential reading before applying the Hook Model.'
          }
        }
      ]
    }
  ],
  
  howToApply: [
    {
      title: 'Step 1: Identify the Internal Trigger',
      content: `Start by identifying which emotion or situation your product addresses.

**Ask:**
• What pain point does your product solve?
• What emotion do users feel before using your product?
• What situation prompts them to need your product?

**Examples:**
• Instagram: Boredom, FOMO
• Calm: Stress, anxiety
• Slack: Uncertainty about work status
• Uber: Frustration with transportation

**The 5 Whys technique:**

"Why do people use Uber?"
→ "To get somewhere"
→ "Why do they need to get somewhere?"
→ "They have a meeting/appointment"
→ "Why is that a problem?"
→ "Current transportation is unreliable"
→ "Why does that matter?"
→ "They're anxious about being late" ← Internal trigger

Your product should be the solution when that emotion arises.`
    },
    {
      title: 'Step 2: Design the Simplest Action',
      content: `Map the absolute minimum action needed to get value.

**Current action breakdown:**
1. List every step in your current flow
2. Time each step
3. Identify friction points

**Simplification questions:**
• Can we remove a step?
• Can we reduce required information?
• Can we defer this until later?
• Can we automate this?
• Can we use defaults instead of choices?

**Example: Twitter**
• Could require profile photo (friction)
• Could require full bio (friction)
• Instead: Just username, start tweeting immediately
• Profile completion happens after hook is formed

**Remember:** The first Hook cycle should require minimal effort. You can add complexity later once users are hooked.`
    },
    {
      title: 'Step 3: Create Variable Rewards',
      content: `Design rewards that satisfy the internal trigger but vary in type or magnitude.

**Map your rewards:**

**Tribe (Social):**
• What social validation can users get?
• How can you make it variable?

**Hunt (Resources):**
• What valuable information/content can they find?
• How can you make discovery unpredictable?

**Self (Mastery):**
• How can they feel progress?
• What achievements are possible?

**Making it variable:**

NOT: "Every post gets exactly 10 likes"
YES: "Posts get anywhere from 0-1000 likes based on content quality and audience"

NOT: "Every search returns exactly 3 results"
YES: "Searches return 0-100 results, sometimes you find exactly what you need"

**Balance:**
Too predictable = Boring
Too random = Frustrating
Just right = Engaging uncertainty

The reward should usually satisfy the internal trigger, with occasional exceptional results.`,
      
      embeddedResources: [
        {
          type: 'podcast',
          data: {
            title: 'Building Habit-Forming Products with Nir Eyal',
            podcast: 'The Tim Ferriss Show',
            host: 'Tim Ferriss',
            url: 'https://tim.blog/2017/02/24/nir-eyal/',
            duration: '1:42:15',
            whyListen: 'Long-form conversation about the neuroscience behind variable rewards and why they work. Nir explains how our brains evolved to seek uncertain outcomes.'
          }
        }
      ]
    },
    {
      title: 'Step 4: Build Investment That Loads Next Trigger',
      content: `Design small actions users take that improve the product and create future triggers.

**Investment types to implement:**

**Content/Data Storage:**
• What can users create/save?
• How does this data improve their experience?
• Example: Playlists, notes, saved items

**Social Capital:**
• How can users build reputation/following?
• Why would they want to maintain this?
• Example: Followers, connections, karma

**Learned Preferences:**
• What does the system learn about them?
• How does this improve future recommendations?
• Example: Algorithm training, recommendations

**The trigger-loading test:**

Good investment: User creates playlist → System can notify them of new songs similar to their taste
Bad investment: User fills out profile → No future benefit

**Timing:**
Investment must come AFTER reward, when user feels good and willing to do a small task.

**Amount:**
Should be small enough that friction from reward doesn't outweigh it. Think seconds, not minutes.`
    },
    {
      title: 'Step 5: Test and Iterate the Hook',
      content: `Measure how well your Hook is working and improve it.

**Metrics to track:**

**Frequency:** How often do users go through the Hook?
• Daily? Weekly? Monthly?
• Higher frequency = Stronger habit

**Triggering:** What percentage come from internal vs external triggers?
• Goal: Increase internal trigger percentage over time
• Measure: Direct/bookmark traffic vs notification traffic

**Completion rate:** Do users complete the full cycle?
• Where do they drop off?
• Optimize the weakest stage

**Signs of success:**
✅ Users return without external triggers
✅ Frequency increases over time
✅ Investment increases with each cycle
✅ Users resistant to switching

**Signs of failure:**
🚫 High dependence on external triggers
🚫 Decreasing frequency over time
🚫 Low investment rates
🚫 Easy to switch to competitors

**Iteration priorities:**

If low action rate → Reduce friction
If low reward satisfaction → Improve variable rewards
If low return rate → Better investment/trigger loading
If can't transition to internal triggers → Wrong pain point`
    }
  ],
  
  examples: [
    {
      company: 'Instagram',
      situation: 'Needed users to return daily despite having no new photo to post',
      application: 'Trigger: Red notification badge (external) + FOMO (internal). Action: Open app and scroll (very easy). Variable Reward: Sometimes likes on your photos, sometimes interesting content, sometimes DMs. Investment: Like/comment on others, which triggers them to return and engage with yours.',
      result: '500M+ daily active users with 30+ minute average daily usage. Acquired by Facebook for $1B.'
    },
    {
      company: 'Slack',
      situation: 'Email was the entrenched habit for team communication',
      application: 'Trigger: @mentions (external) → habit of checking when starting work (internal). Action: Read and respond to message (easy). Variable Reward: Sometimes critical info, sometimes funny banter, sometimes just FYI. Investment: Organized channels, custom emoji, integrations that make Slack central to workflow.',
      result: 'Fastest-growing B2B SaaS ever. Sold to Salesforce for $27.7B.'
    },
    {
      company: 'Duolingo',
      situation: 'Learning a language requires months of consistent practice—hard to maintain motivation',
      application: 'Trigger: Daily streak reminder (external) → internal feeling of "I should practice". Action: 5-minute lesson (extremely easy). Variable Reward: Sometimes progress, sometimes achievements, sometimes new milestones. Investment: Streak count increases, making breaking it more painful.',
      result: '500M+ users, 30M+ daily active users. Highest retention rate in language learning space.'
    }
  ],
  
  templates: [
    {
      name: 'Hook Model Canvas',
      description: 'Map out all four phases of the Hook for your product with prompts and examples',
      downloadUrl: '/templates/hook-model-canvas.pdf'
    },
    {
      name: 'Internal Trigger Identification Worksheet',
      description: 'Identify which emotions your product addresses and how to transition from external to internal triggers',
      downloadUrl: '/templates/internal-triggers.pdf'
    },
    {
      name: 'Variable Reward Audit',
      description: 'Analyze your product\'s rewards and ensure they\'re truly variable across all three types',
      downloadUrl: '/templates/variable-rewards-audit.pdf'
    },
    {
      name: 'Investment Mechanic Builder',
      description: 'Design investment mechanics that increase product value and load future triggers',
      downloadUrl: '/templates/investment-builder.pdf'
    }
  ],
  
  relatedFrameworks: [
    { title: 'BJ Fogg Behavior Model', slug: 'fogg-behavior-model' },
    { title: 'Jobs-to-be-Done', slug: 'jobs-to-be-done' },
    { title: 'Customer Journey Mapping', slug: 'customer-journey-mapping' }
  ],
  
  relatedRoadmaps: [
    { title: 'Product Marketing', slug: 'product-marketing' },
    { title: 'Growth Marketing', slug: 'growth-marketing' },
    { title: 'Customer Marketing', slug: 'customer-marketing' }
  ]
}
