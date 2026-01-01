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
          <div className="mb-6 inline-block animate-slide-down rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary-light">
            🚀 Now with AI-powered framework analysis
          </div>

          <h1 className="mb-6 text-6xl font-black leading-tight tracking-tight text-gradient md:text-7xl">
            Master Every Marketing Framework!
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-text-secondary">
            Marketing strategy is scattered across 50+ books, 200+ blogs, and countless frameworks.
            <br />
            You don't have time to piece it together. We already did.
            <br />
            See the entire marketing landscape in one visual map. Apply frameworks that works.
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

          {/* Feature Stats */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 font-mono text-5xl font-black text-primary-light">9+</div>
              <div className="text-sm text-text-secondary">Interactive Roadmaps</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-mono text-5xl font-black text-primary-light">90+</div>
              <div className="text-sm text-text-secondary">Strategic Frameworks</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-mono text-5xl font-black text-primary-light">5+hrs</div>
              <div className="text-sm text-text-secondary">Saved Per Decision</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-mono text-5xl font-black text-primary-light">AI</div>
              <div className="text-sm text-text-secondary">Powered Solution</div>
            </div>
          </div>
        </div>
      </section>

      {/* Role-Based Roadmaps */}
      <section id="roadmaps" className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
              Choose Your Domain
            </div>
            <h2 className="mb-4 text-5xl font-black tracking-tight">Choose Your Marketing Domain</h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Nine visual roadmaps covering every strategic domain. 
              <br />
              See what comes first. Understand dependencies. Apply immediately.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <RoadmapCard
              icon="📈"
              title="Growth Marketing"
              description="Build systematic growth engines. Master experimentation frameworks, 
              acquisition models, and retention strategies that scale."
              difficulty="intermediate"
              duration="4-6 months"
              slug="growth-marketing"
            />
            <RoadmapCard
              icon="✍️"
              title="Content Marketing"
              description="Build authority through strategic content, distribution systems, and audience development."
              difficulty="beginner"
              duration="3-5 months"
              slug="content-marketing"
            />
            <RoadmapCard
              icon="🎯"
              title="Product Marketing"
              description="Position products that sell themselves. Master messaging frameworks, 
              go-to-market strategies, and product-led growth."
              difficulty="intermediate"
              duration="4-7 months"
              slug="product-marketing"
            />
            <RoadmapCard
              icon="💰"
              title="Performance Marketing"
              description="Maximize ROAS across paid channels. Master campaign optimization, 
              budget allocation, and performance analytics."
              difficulty="advanced"
              duration="5-8 months"
              slug="performance-marketing"
            />
            <RoadmapCard
              icon="🎨"
              title="Brand Marketing"
              description="Build brands that command premium pricing. Master positioning strategy, 
              brand architecture, and market perception."
              difficulty="intermediate"
              duration="4-6 months"
              slug="brand-marketing"
            />
            <RoadmapCard
              icon="⚙️"
              title="Marketing Operations"
              description="Build marketing infrastructure that scales. Master tech stack design, 
              workflow automation, and operational excellence."
              difficulty="advanced"
              duration="5-7 months"
              slug="marketing-operations"
            />
            <RoadmapCard
              icon="🔥"
              title="Demand Generation"
              description="Build predictable pipeline systems. Master lead generation frameworks, 
              nurture strategies, and conversion optimization."
              difficulty="intermediate"
              duration="4-6 months"
              slug="demand-generation"
            />
            <RoadmapCard
              icon="💎"
              title="Customer Marketing"
              description="Turn customers into growth engines. Master retention frameworks, 
              expansion strategies, and advocacy programs."
              difficulty="beginner"
              duration="3-5 months"
              slug="customer-marketing"
            />
            <RoadmapCard
              icon="👨‍💻"
              title="Developer Marketing"
              description="Market to technical audiences effectively. Master developer-centric content, 
              community building, and product adoption."
              difficulty="intermediate"
              duration="4-6 months"
              slug="developer-marketing"
            />
          </div>
        </div>
      </section>

      {/* Framework Library Preview */}
      <section id="frameworks" className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
              Framework Library
            </div>
            <h2 className="mb-4 text-5xl font-black tracking-tight">Master the Frameworks</h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Deep-dive into 50+ marketing frameworks with practical examples, templates, and AI-powered application.
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
                  <h3 className="text-2xl font-bold">Strategy Frameworks</h3>
                  <p className="font-mono text-sm text-text-tertiary">15 frameworks</p>
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
                  <h3 className="text-2xl font-bold">Customer Psychology</h3>
                  <p className="font-mono text-sm text-text-tertiary">12 frameworks</p>
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
                  <h3 className="text-2xl font-bold">Growth & Acquisition</h3>
                  <p className="font-mono text-sm text-text-tertiary">12 frameworks</p>
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
              View All 50+ Frameworks
            </Link>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section id="community" className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-dark-surface to-dark-elevated p-12 text-center">
            <h2 className="mb-4 text-4xl font-black">Join the Community</h2>
            <p className="mx-auto mb-12 max-w-xl text-lg text-text-secondary">
              Thousands of marketers are learning and growing together. Be part of something bigger.
            </p>

            <div className="grid gap-12 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 font-mono text-5xl font-black text-primary-light">5.2K</div>
                <div className="mb-3 text-base">GitHub Stars</div>
                <div className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-success">
                  <span>↑ 200 this month</span>
                </div>
                <a
                  href="https://github.com"
                  className="inline-block font-semibold text-primary-light transition-colors hover:text-primary"
                >
                  Star us on GitHub →
                </a>
              </div>

              <div className="text-center">
                <div className="mb-2 font-mono text-5xl font-black text-primary-light">12.5K</div>
                <div className="mb-3 text-base">Registered Users</div>
                <div className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-success">
                  <span>↑ 1.2K this month</span>
                </div>
                <Link
                  href="/signup"
                  className="inline-block font-semibold text-primary-light transition-colors hover:text-primary"
                >
                  Sign up free →
                </Link>
              </div>

              <div className="text-center">
                <div className="mb-2 font-mono text-5xl font-black text-primary-light">3.8K</div>
                <div className="mb-3 text-base">Discord Members</div>
                <div className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-success">
                  <span>↑ 350 this month</span>
                </div>
                <a
                  href="https://discord.com"
                  className="inline-block font-semibold text-primary-light transition-colors hover:text-primary"
                >
                  Join Discord →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-16 text-center">
            <div className="absolute -right-1/2 -top-1/2 h-full w-full animate-[rotate_20s_linear_infinite] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
            
            <div className="relative z-10">
              <h2 className="mb-4 text-5xl font-black leading-tight">
                Stop copying tactics.
                <br />
                Start understanding principles.
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
                Learn marketing the right way. From fundamentals to frameworks to AI-powered application.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/signup"
                  className="rounded-lg bg-white px-8 py-4 font-semibold text-primary transition-all hover:-translate-y-1 hover:bg-white/90 hover:shadow-2xl"
                >
                  Get Started Free
                </Link>
                <Link
                  href="#roadmaps"
                  className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Explore Roadmaps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
