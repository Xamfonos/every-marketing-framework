import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundEffects from '@/components/BackgroundEffects'
import RoadmapCard from '@/components/RoadmapCard'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundEffects />
      
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-24 text-center">
        <div className="container mx-auto max-w-5xl">
          <h1 className="mb-6 text-6xl font-black leading-tight tracking-tight text-gradient md:text-7xl">
            Master every marketing framework you&apos;ll ever need
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-text-secondary">
            You&apos;re already running campaigns. You already know the basics. But every new project feels like starting from scratch. Which framework should you use? What are you missing? Is there a better approach?
            <br />
            See every framework. Understand dependencies. Stop second-guessing.
          </p>

          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#roadmaps"
              className="rounded-lg bg-primary px-8 py-4 font-semibold transition-all hover:-translate-y-1 hover:bg-primary-light hover:shadow-glow"
            >
              Explore Roadmaps
            </Link>
            <Link
              href="#frameworks"
              className="rounded-lg border border-white/10 bg-dark-elevated px-8 py-4 font-semibold transition-all hover:border-primary hover:shadow-md"
            >
              View Frameworks
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 font-mono text-5xl font-black text-primary-light">100+</div>
              <div className="text-sm text-text-secondary">Frameworks → Organized by dependencies</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-mono text-5xl font-black text-primary-light">13</div>
              <div className="text-sm text-text-secondary">Domains → Jump to your motion</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-mono text-5xl font-black text-primary-light">Zero</div>
              <div className="text-sm text-text-secondary">Guesswork → Prerequisites shown upfront</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-mono text-5xl font-black text-primary-light">AI</div>
              <div className="text-sm text-text-secondary">Solutions → Custom strategies builtfrom your problem</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative z-10 px-6 py-24 text-center">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="mb-4 text-5xl font-black tracking-tight">Marketing doesn&apos;t get the result it deserves. Here&apos;s why.</h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Campaigns fail because we execute without enforced dependencies, opinionated defaults, and structural integrity.
              <br />
              Senior marketers know this instinctively. They&apos;ve built their own internal systems.
              <br />
              We&apos;re making that system public.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="mb-4 text-3xl font-bold">How it works</h3>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Stop googling frameworks every campaign
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-dark-surface p-8 transition-all hover:border-primary/50 hover:shadow-glow">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-3xl">
                  🎯
                </div>
                <div className="font-mono text-4xl font-black text-primary/20">01</div>
              </div>
              <h3 className="mb-3 text-2xl font-bold">Jump to your motion</h3>
              <p className="text-text-secondary">
                Pick your domain based on what you&apos;re running. Growth campaigns? Product launches? Content programs? Paid optimization?
                <br />
                See every framework that applies. What comes first is shown. What requires what is visible.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-dark-surface p-8 transition-all hover:border-primary/50 hover:shadow-glow">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-3xl">
                  🔍
                </div>
                <div className="font-mono text-4xl font-black text-primary/20">02</div>
              </div>
              <h3 className="mb-3 text-2xl font-bold">Check Prerequisites</h3>
              <p className="text-text-secondary">
                Each framework shows what must exist before it works. The foundation required. The inputs needed. The outputs guaranteed.
                <br />
                Real examples from companies that applied it successfully.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-dark-surface p-8 transition-all hover:border-primary/50 hover:shadow-glow">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-3xl">
                  🤖
                </div>
                <div className="font-mono text-4xl font-black text-primary/20">03</div>
              </div>
              <h3 className="mb-3 text-2xl font-bold">Get custom solutions (AI-powered)</h3>
              <p className="text-text-secondary">
                Don&apos;t have time to navigate frameworks manually? Describe your business problem. Our AI analyzes your context, selects the relevant frameworks, checks prerequisites, and outputs a complete strategic solution built specifically for your situation.
              </p>
            </div>
          </div>

          {/* AI Section */}
          <div className="mt-16 rounded-2xl border border-white/10 bg-dark-elevated p-8">
            <div className="mb-8">
              <h3 className="mb-4 text-3xl font-bold">Let AI build your strategy</h3>
              <p className="mx-auto max-w-2xl text-lg text-text-secondary">
                Running a product launch next month? Trying to improve conversion rates? Need to build a demand gen engine?
                <br />
                Describe your problem. Get a custom strategy.
              </p>
            </div>

            <div className="mb-8 text-center">
              <p className="text-text-secondary mb-4">
                Our AI is trained on all 98 frameworks, their dependencies, and real-world applications. It identifies which frameworks apply to your specific context, flags missing prerequisites, and outputs an executable strategy.
              </p>
              
              {/* Example Inputs Box */}
              <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-6 mb-6">
                <p className="text-text-secondary mb-4 font-semibold text-primary-light">Example inputs:</p>
                <div className="text-text-secondary space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>&quot;We&apos;re launching a B2B SaaS product in Q2. Target is mid-market finance teams. No brand recognition yet.&quot;</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>&quot;Our paid CAC is 3x higher than organic. Need to understand attribution and optimize channel mix.&quot;</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>&quot;Churn spiked 15% last quarter. Need a retention framework that works for PLG products.&quot;</span>
                  </div>
                </div>
              </div>
              
              {/* You Get Box */}
              <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-6 mb-6">
                <p className="text-text-secondary mb-4 font-semibold text-primary-light">You get:</p>
                <div className="text-text-secondary space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Which frameworks apply (and why)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>What prerequisites you need</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Step-by-step execution plan</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Relevant examples from similar companies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Metrics to track</span>
                  </div>
                </div>
              </div>
              
              <p className="text-text-secondary">
                Navigate manually when you have time. Use AI when you don&apos;t.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="#ai-analysis"
                className="inline-block rounded-lg bg-primary px-8 py-4 font-semibold transition-all hover:-translate-y-1 hover:bg-primary-light hover:shadow-glow mr-4"
              >
                Try AI Analysis
              </Link>
              <Link
                href="#example-output"
                className="inline-block rounded-lg border border-white/10 bg-dark-surface px-8 py-4 font-semibold transition-all hover:border-primary hover:shadow-md"
              >
                See Example Output
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Domain */}
      <section id="roadmaps" className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-black tracking-tight">Choose your domain</h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              13 domains covering every marketing discipline. Pick where you&apos;re working. See the frameworks that apply. Check dependencies. Execute.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <RoadmapCard
              icon="📈"
              title="Growth marketing"
              description="Build systematic growth engines. Master experimentation frameworks, acquisition models, and retention strategies that scale. Common use cases: Running growth experiments, building acquisition channels, optimizing conversion funnels, designing viral loops"
              difficulty="intermediate"
              duration="4-6 months"
              slug="growth-marketing"
            />
            <RoadmapCard
              icon="✍️"
              title="Content marketing"
              description="Build authority through strategic content, distribution systems, and audience development. Common use cases: Planning content strategy, building distribution channels, developing thought leadership, growing organic audiences"
              difficulty="beginner"
              duration="3-5 months"
              slug="content-marketing"
            />
            <RoadmapCard
              icon="🎯"
              title="Product marketing"
              description="Position products that sell themselves. Master messaging frameworks, go-to-market strategies, and product-led growth. Common use cases: Product launches, messaging development, competitive positioning, GTM strategy"
              difficulty="intermediate"
              duration="4-7 months"
              slug="product-marketing"
            />
            <RoadmapCard
              icon="💰"
              title="Performance marketing"
              description="Maximize ROAS across paid channels. Master campaign optimization, budget allocation, and performance analytics. Common use cases: Managing paid campaigns, optimizing ad spend, channel attribution, budget planning"
              difficulty="advanced"
              duration="5-8 months"
              slug="performance-marketing"
            />
            <RoadmapCard
              icon="🎨"
              title="Brand marketing"
              description="Build brands that command premium pricing. Master positioning strategy, brand architecture, and market perception. Common use cases: Brand strategy development, positioning workshops, rebrands, market differentiation"
              difficulty="intermediate"
              duration="4-6 months"
              slug="brand-marketing"
            />
            <RoadmapCard
              icon="📊"
              title="Marketing analytics"
              description="Measure what actually drives growth. Master attribution, experimentation, and the metrics that matter for every domain. Common use cases: Setting up measurement, analyzing campaign performance, running experiments, proving ROI"
              difficulty="intermediate"
              duration="4-5 months"
              slug="marketing-analytics"
            />
            <RoadmapCard
              icon="🔥"
              title="Demand generation"
              description="Build predictable pipeline systems. Master lead generation frameworks, nurture strategies, and conversion optimization. Common use cases: Building pipeline, nurture program design, lead scoring, conversion optimization"
              difficulty="intermediate"
              duration="4-6 months"
              slug="demand-generation"
            />
            <RoadmapCard
              icon="💎"
              title="Customer marketing"
              description="Turn customers into growth engines. Master retention frameworks, expansion strategies, and advocacy programs. Common use cases: Reducing churn, expanding accounts, building advocacy programs, customer lifecycle management"
              difficulty="beginner"
              duration="3-5 months"
              slug="customer-marketing"
            />
            <RoadmapCard
              icon="👨‍💻"
              title="Developer marketing"
              description="Market to technical audiences effectively. Master developer-centric content, community building, and product adoption. Common use cases: Developer content strategy, API documentation marketing, community building, technical adoption"
              difficulty="intermediate"
              duration="4-6 months"
              slug="developer-marketing"
            />
            <RoadmapCard
              icon="🧠"
              title="Marketing psychology"
              description="Understand how humans think, decide, and act. Master the psychological principles behind every framework and campaign. Common use cases: Understanding customer behavior, applying persuasion principles, designing for behavior change, messaging psychology"
              difficulty="intermediate"
              duration="4-6 months"
              slug="marketing-psychology"
            />
            <RoadmapCard
              icon="✏️"
              title="Copywriting"
              description="Translate psychology and strategy into words that convert. Master copy frameworks, headline formulas, and conversion-focused writing. Common use cases: Writing landing pages, email sequences, ad copy, value propositions, CTAs"
              difficulty="beginner"
              duration="3-5 months"
              slug="copywriting"
            />
            <RoadmapCard
              icon="🎯"
              title="Strategy frameworks"
              description="Build foundational understanding. Master first principles, positioning, competitive analysis, and strategic planning. Common use cases: Strategic planning, positioning workshops, competitive analysis, market sizing, business model design"
              difficulty="advanced"
              duration="5-7 months"
              slug="strategy-frameworks"
            />
            <RoadmapCard
              icon="⚙️"
              title="Marketing operations"
              description="Build marketing infrastructure that scales. Master tech stack design, workflow automation, and operational excellence. Common use cases: Marketing stack selection, workflow design, process optimization, team structure, automation"
              difficulty="advanced"
              duration="5-7 months"
              slug="marketing-operations"
            />
          </div>
        </div>
      </section>

      {/* Framework Library */}
      <section id="frameworks" className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-black tracking-tight">Framework library</h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Every framework you&apos;ll actually use
              <br />
              100+ frameworks. Each one includes what problem it solves, what must exist before it works, what inputs it requires, what outputs it guarantees, and real examples from successful companies.
            </p>
          </div>

          <div className="space-y-8">
            {/* Strategy Frameworks */}
            <div className="rounded-2xl border border-white/10 bg-dark-surface p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-3xl">
                  🧠
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Strategy frameworks</h3>
                  <p className="font-mono text-sm text-text-tertiary">20+ frameworks</p>
                </div>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: 'Marketing First Principles', tag: 'Foundation' },
                  { name: 'Jobs-to-be-Done', tag: 'Customer Research' },
                  { name: 'Value Proposition Canvas', tag: 'Positioning' },
                  { name: 'Blue Ocean Strategy', tag: 'Differentiation' },
                  { name: 'TAM/SAM/SOM Analysis', tag: 'Market Sizing' },
                  { name: "Porter's Five Forces", tag: 'Competitive Analysis' },
                ].map((framework) => (
                  <Link
                    key={framework.name}
                    href={`/frameworks/${framework.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group rounded-xl border border-white/10 bg-dark-elevated p-4 transition-all hover:translate-x-1 hover:border-primary hover:shadow-md"
                  >
                    <div className="font-semibold group-hover:text-primary-light">
                      {framework.name}
                    </div>
                    <div className="font-mono text-xs text-text-tertiary">{framework.tag}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Customer Psychology */}
            <div className="rounded-2xl border border-white/10 bg-dark-surface p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-3xl">
                  🧬
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Customer psychology</h3>
                  <p className="font-mono text-sm text-text-tertiary">20+ frameworks</p>
                </div>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: 'Hook Model', tag: 'Habit Formation' },
                  { name: 'BJ Fogg Behavior Model', tag: 'Behavior Change' },
                  { name: 'Customer Journey Mapping', tag: 'Experience Design' },
                  { name: 'Persuasion Principles', tag: 'Influence' },
                  { name: 'Decision-Making Psychology', tag: 'Cognitive Biases' },
                  { name: 'Emotional Triggers', tag: 'Messaging' },
                ].map((framework) => (
                  <Link
                    key={framework.name}
                    href={`/frameworks/${framework.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group rounded-xl border border-white/10 bg-dark-elevated p-4 transition-all hover:translate-x-1 hover:border-primary hover:shadow-md"
                  >
                    <div className="font-semibold group-hover:text-primary-light">
                      {framework.name}
                    </div>
                    <div className="font-mono text-xs text-text-tertiary">{framework.tag}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Growth & Acquisition */}
            <div className="rounded-2xl border border-white/10 bg-dark-surface p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-3xl">
                  🚀
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Growth & acquisition</h3>
                  <p className="font-mono text-sm text-text-tertiary">20+ frameworks</p>
                </div>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: 'AARRR Pirate Metrics', tag: 'Growth Metrics' },
                  { name: 'Growth Loops', tag: 'Sustainable Growth' },
                  { name: 'North Star Metric', tag: 'Focus' },
                  { name: 'ICE Scoring', tag: 'Prioritization' },
                  { name: 'Viral Coefficient', tag: 'Viral Growth' },
                  { name: 'Channel Strategy', tag: 'Distribution' },
                ].map((framework) => (
                  <Link
                    key={framework.name}
                    href={`/frameworks/${framework.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group rounded-xl border border-white/10 bg-dark-elevated p-4 transition-all hover:translate-x-1 hover:border-primary hover:shadow-md"
                  >
                    <div className="font-semibold group-hover:text-primary-light">
                      {framework.name}
                    </div>
                    <div className="font-mono text-xs text-text-tertiary">{framework.tag}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/frameworks"
              className="inline-block rounded-lg bg-primary px-8 py-4 font-semibold transition-all hover:-translate-y-1 hover:bg-primary-light hover:shadow-glow"
            >
              View All 100+ Frameworks
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-dark-surface to-dark-elevated p-12 text-center">
            <h2 className="mb-4 text-4xl font-black">Thousands of practitioners have stopped guessing</h2>
            <p className="mx-auto mb-12 max-w-xl text-lg text-text-secondary">
              300+ marketers using these frameworks in active campaigns
              <br />
              500+ practitioners who&apos;ve stopped reinventing strategy every quarter
              <br />
              800+ members discussing real implementation challenges
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com"
                className="inline-block rounded-lg border border-white/10 bg-dark-surface px-8 py-4 font-semibold transition-all hover:border-primary hover:shadow-md"
              >
                Star us on GitHub →
              </a>
              <Link
                href="/signup"
                className="inline-block rounded-lg bg-primary px-8 py-4 font-semibold transition-all hover:-translate-y-1 hover:bg-primary-light hover:shadow-glow"
              >
                Sign up free →
              </Link>
              <a
                href="https://discord.com"
                className="inline-block rounded-lg border border-white/10 bg-dark-surface px-8 py-4 font-semibold transition-all hover:border-primary hover:shadow-md"
              >
                Join Discord →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-16 text-center">
            <div className="absolute -right-1/2 -top-1/2 h-full w-full animate-[rotate_20s_linear_infinite] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
            
            <div className="relative z-10">
              <h2 className="mb-4 text-5xl font-black leading-tight">
                Stop reinventing marketing every campaign
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
                You already know how to execute. You just need to know which framework applies and what comes first.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/signup"
                  className="rounded-lg bg-white px-8 py-4 font-semibold text-primary transition-all hover:-translate-y-1 hover:bg-white/90 hover:shadow-2xl"
                >
                  Get Started Free
                </Link>
              </div>
              <p className="mt-4 text-sm opacity-75">
                Explore frameworks and roadmaps free. Upgrade for complete domain access and AI-powered strategy generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
