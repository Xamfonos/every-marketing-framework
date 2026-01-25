import type { Metadata } from 'next'
import Link from 'next/link'
import ProductTabs from '@/components/ProductTabs'
import Header from '@/components/Header'

const featureLinks = (links: string[]) => (
  <div className="mt-10">
    <div className="mb-4 text-sm font-semibold uppercase tracking-[0.5px] text-[#9CA3AF]">See also</div>
    <div className="space-y-4">
      {links.map((link) => (
        <div key={link} className="text-base text-[#2563EB] hover:underline">
          {link} &rarr;
        </div>
      ))}
    </div>
  </div>
)

const frameworkDomains = [
  {
    title: 'Strategy',
    slug: 'strategy',
    count: '65 frameworks',
    description: 'First principles, positioning, competitive analysis, business models',
  },
  {
    title: 'Marketing Psychology',
    slug: 'marketing-psychology',
    count: '60 frameworks',
    description: 'Behavioral economics, persuasion, decision-making, consumer psychology',
  },
  {
    title: 'Analytics',
    slug: 'analytics',
    count: '75 frameworks',
    description: 'Measurement, attribution, experimentation, funnel analysis',
  },
  {
    title: 'Copywriting',
    slug: 'copywriting',
    count: '85 frameworks',
    description: 'Copy formulas, headlines, value communication, conversion writing',
  },
  {
    title: 'Content Marketing',
    slug: 'content-marketing',
    count: '75 frameworks',
    description: 'Content strategy, distribution, audience building, SEO',
  },
  {
    title: 'Video Content',
    slug: 'video-content',
    count: '72 frameworks',
    description: 'Video strategy, storytelling, production, platform optimization',
  },
  {
    title: 'Product Marketing',
    slug: 'product-marketing',
    count: '78 frameworks',
    description: 'Product launches, GTM strategy, positioning, sales enablement',
  },
  {
    title: 'Brand Marketing',
    slug: 'brand-marketing',
    count: '76 frameworks',
    description: 'Brand strategy, identity, architecture, equity building',
  },
  {
    title: 'Growth Marketing',
    slug: 'growth-marketing',
    count: '78 frameworks',
    description: 'Growth loops, acquisition, activation, retention, referral',
  },
  {
    title: 'Demand Generation',
    slug: 'demand-generation',
    count: '72 frameworks',
    description: 'Lead generation, nurturing, pipeline, ABM',
  },
  {
    title: 'Performance Marketing',
    slug: 'performance-marketing',
    count: '80 frameworks',
    description: 'Paid search, paid social, display, optimization, bidding',
  },
  {
    title: 'Customer Marketing',
    slug: 'customer-marketing',
    count: '70 frameworks',
    description: 'Lifecycle marketing, retention, expansion, advocacy',
  },
  {
    title: 'Developer Marketing',
    slug: 'developer-marketing',
    count: '74 frameworks',
    description: 'Technical audiences, community, documentation, adoption',
  },
  {
    title: 'Marketing Operations',
    slug: 'marketing-operations',
    count: '74 frameworks',
    description: 'MarTech stack, processes, data governance, automation',
  },
]

export const metadata: Metadata = {
  title: 'Strategy Console | Build Validated Marketing Strategies',
  description:
    'Build validated marketing strategies in hours. AI applies 200+ frameworks to your situation, catching gaps before execution.',
}

export default function Home() {
  return (
    <main id="main" className="min-h-screen bg-white text-[#0A0A0A]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0A0A0A] shadow"
      >
        Skip to main content
      </a>
      <Header />
        {/* Hero Section */}
        <section className="px-6 pb-24 pt-20 md:pb-40 md:pt-28">
          <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="mb-4 text-sm font-medium uppercase tracking-[0.5px] text-[#6B7280] animate-fade-in-up">
                First strategy infrastructure for marketing
              </div>
              <h1
                className="mb-6 text-[40px] font-semibold leading-[48px] tracking-[-1px] text-[#0A0A0A] md:text-[56px] md:leading-[64px] animate-fade-in-up"
                style={{ animationDelay: '100ms' }}
              >
                Build and validate your marketing strategy before spending a dollar
              </h1>
              <p
                className="mb-10 max-w-[600px] text-lg leading-7 text-[#6B7280] animate-fade-in-up"
                style={{ animationDelay: '200ms' }}
              >
                Describe your campaign or problem. Strategy Console applies hundreds of marketing frameworks tailored to your company stage and business model, catching gaps before you execute.
              </p>
              <div
                className="flex flex-col gap-4 sm:flex-row animate-fade-in-up"
                style={{ animationDelay: '300ms' }}
              >
                <Link
                  href="/coming-soon?for=strategy-console"
                  className="rounded-lg bg-[#2563EB] px-8 py-4 text-base font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-md"
                >
                  Launch strategy console &rarr;
                </Link>
                <Link
                  href="#how-it-works"
                  className="rounded-lg border border-[#D1D5DB] px-8 py-4 text-base font-medium text-[#0A0A0A] transition-all hover:bg-[#FAFAFA]"
                >
                  See how it works
                </Link>
              </div>
            </div>

            <div
              className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              <div className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-md">
                <div className="mb-4 text-sm font-semibold text-[#2563EB]">Strategy Console Preview</div>
                <div className="grid gap-4">
                  <div className="rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#6B7280]">
                    Company stage: Growth
                  </div>
                  <div className="rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#6B7280]">
                    Campaign type: Product launch
                  </div>
                  <div className="rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#6B7280]">
                    Frameworks applied: 214
                  </div>
                  <div className="rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3 text-sm text-[#6B7280]">
                    Validation score: 92%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Overview */}
        <section className="bg-[#FAFAFA] px-6 py-24 md:py-40">
          <div className="mx-auto max-w-[1280px] text-center">
            <div className="text-sm font-medium uppercase tracking-[0.5px] text-[#6B7280]">Complete strategy validation system</div>
            <h2 className="mt-4 text-[36px] font-semibold leading-[44px] tracking-[-0.5px] text-[#0A0A0A] md:text-[48px] md:leading-[56px]">
              A fully integrated suite of strategic frameworks and AI agents
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-lg leading-7 text-[#6B7280]">
              Strategy Console checks positioning, confirms prerequisites, and catches what you&apos;re missing before execution.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-[1280px]">
            <ProductTabs />
          </div>
        </section>

        {/* Feature Section 1 */}
        <section className="px-6 py-24 md:py-40">
          <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm">
              <div className="aspect-[4/3] rounded-xl border border-[#E5E7EB] bg-white" />
            </div>
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.5px] text-[#6B7280]">Strategy Console</div>
              <h2 className="mt-4 text-[36px] font-semibold leading-[44px] tracking-[-0.5px] text-[#0A0A0A] md:text-[48px] md:leading-[56px]">
                From situation to execution-ready strategy
              </h2>
              <p className="mt-6 text-lg leading-7 text-[#6B7280]">
                Tell us your company stage, business model, and campaign type. Strategy Console selects and applies the frameworks that matter for your context, building comprehensive strategies ready to deploy.
              </p>
              <Link
                href="/coming-soon?for=strategy-console"
                className="mt-10 inline-flex items-center text-base font-medium text-[#2563EB] hover:underline"
              >
                Start with Strategy Console &rarr;
              </Link>
              {featureLinks([
                'Framework Library for browsing 1,000+ frameworks',
                'Validation Engine for stress-testing strategies',
                'AI Agents for guided strategic thinking',
              ])}
            </div>
          </div>
        </section>

        {/* Feature Section 2 */}
        <section className="bg-[#FAFAFA] px-6 py-24 md:py-40">
          <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-[1fr_1fr]">
            <div className="order-2 lg:order-1">
              <div className="text-sm font-medium uppercase tracking-[0.5px] text-[#6B7280]">Framework Library</div>
              <h2 className="mt-4 text-[36px] font-semibold leading-[44px] tracking-[-0.5px] text-[#0A0A0A] md:text-[48px] md:leading-[56px]">
                1,000+ marketing frameworks organized for execution
              </h2>
              <p className="mt-6 text-lg leading-7 text-[#6B7280]">
                Every proven marketing framework from Jobs-to-be-Done to Blue Ocean Strategy, organized by domain, prerequisite, and company stage. Know which frameworks apply, when to use them, and what must exist first.
              </p>
              <Link
                href="/coming-soon?for=framework-library"
                className="mt-10 inline-flex items-center text-base font-medium text-[#2563EB] hover:underline"
              >
                Explore frameworks &rarr;
              </Link>
              {featureLinks([
                'Roadmaps for visual learning paths',
                'Prerequisites for understanding dependencies',
                'Company Stage Filters for relevant frameworks',
              ])}
            </div>
            <div className="order-1 lg:order-2 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm">
              <div className="aspect-[4/3] rounded-xl border border-[#E5E7EB] bg-white" />
            </div>
          </div>
        </section>

        {/* Feature Section 3 */}
        <section className="px-6 py-24 md:py-40">
          <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6 shadow-sm">
              <div className="aspect-[4/3] rounded-xl border border-[#E5E7EB] bg-white" />
            </div>
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.5px] text-[#6B7280]">Validation Engine</div>
              <h2 className="mt-4 text-[36px] font-semibold leading-[44px] tracking-[-0.5px] text-[#0A0A0A] md:text-[48px] md:leading-[56px]">
                Catch strategic gaps before you execute
              </h2>
              <p className="mt-6 text-lg leading-7 text-[#6B7280]">
                AI agents stress-test your work through hundreds of frameworks, checking positioning strength, prerequisite completion, and strategic consistency.
              </p>
              <Link
                href="/validation"
                className="mt-10 inline-flex items-center text-base font-medium text-[#2563EB] hover:underline"
              >
                See validation in action &rarr;
              </Link>
              {featureLinks([
                "Gap Analysis for identifying what's missing",
                'Prerequisite Checking for dependency validation',
                'Quality Scoring for strategic depth assessment',
              ])}
            </div>
          </div>
        </section>

        {/* Global Scale Section */}
        <section className="bg-[#FAFAFA] px-6 py-24 md:py-40">
          <div className="mx-auto max-w-[1280px] text-center">
            <div className="text-sm font-medium uppercase tracking-[0.5px] text-[#6B7280]">Built for comprehensive strategy</div>
            <h2 className="mt-4 text-[36px] font-semibold leading-[44px] tracking-[-0.5px] text-[#0A0A0A] md:text-[48px] md:leading-[56px]">
              The knowledge infrastructure marketing never had
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-lg leading-7 text-[#6B7280]">
              Strategy Console makes strategic review as systematic as code review. Our framework library and AI agents ensure every strategy is built on solid foundations.
            </p>
          </div>
          <div className="mx-auto mt-20 grid max-w-[1280px] gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '1,000+', label: 'Marketing frameworks across 14 domains' },
              { value: '14', label: 'Specialized AI agents trained on domain expertise' },
              { value: '6', label: 'Mandatory strategic stages preventing execution without validation' },
              { value: '200+', label: 'Frameworks applied per strategy on average' },
            ].map((stat) => (
              <div key={stat.value}>
                <div className="text-[72px] font-semibold leading-[80px] tracking-[-2px] text-[#0A0A0A]">
                  {stat.value}
                </div>
                <p className="mt-4 text-lg leading-7 text-[#6B7280]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Stage Section */}
        <section className="px-6 py-24 md:py-40">
          <div className="mx-auto max-w-[1280px] text-center">
            <h2 className="text-[36px] font-semibold leading-[44px] tracking-[-0.5px] text-[#0A0A0A] md:text-[48px] md:leading-[56px]">
              Built for marketing leaders at every stage
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-lg leading-7 text-[#6B7280]">
              From early-stage startups to growth companies, Strategy Console adapts frameworks and depth to match your company&apos;s maturity.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-[1280px] gap-8 lg:grid-cols-3">
            {[
              {
                title: 'Early-Stage Startups',
                body: 'Validate product-market fit and positioning before scaling. Strategy Console selects lean frameworks appropriate for early-stage validation, avoiding enterprise complexity you don\'t need.',
                frameworks: 'Frameworks applied: 15-20',
                time: 'Time to strategy: 1-2 hours',
                cta: 'Learn more \u2192',
              },
              {
                title: 'Growth-Stage Companies',
                body: 'Build sophisticated strategies as you scale. Strategy Console applies advanced frameworks for segmentation, competitive positioning, and multi-channel campaigns.',
                frameworks: 'Frameworks applied: 30-40',
                time: 'Time to strategy: 3-4 hours',
                cta: 'Learn more \u2192',
              },
              {
                title: 'B2B SaaS',
                body: 'Launch products, run demand gen, and build pipeline with confidence. Strategy Console adapts to B2B buying cycles, long sales processes, and enterprise requirements.',
                frameworks: 'Frameworks applied: 25-35',
                time: 'Time to strategy: 4-6 hours',
                cta: 'Learn more \u2192',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex h-full flex-col rounded-xl border border-[#E5E7EB] bg-white p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-2xl font-semibold text-[#0A0A0A]">{card.title}</h3>
                <p className="mt-4 text-base leading-6 text-[#6B7280]">{card.body}</p>
                <div className="mt-6 text-sm text-[#9CA3AF]">{card.frameworks}</div>
                <div className="mt-2 text-sm text-[#9CA3AF]">{card.time}</div>
                <div className="mt-6 text-base font-medium text-[#2563EB]">{card.cta}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Campaign Type Section */}
        <section className="bg-[#FAFAFA] px-6 py-24 md:py-40">
          <div className="mx-auto max-w-[1280px] text-center">
            <h2 className="text-[36px] font-semibold leading-[44px] tracking-[-0.5px] text-[#0A0A0A] md:text-[48px] md:leading-[56px]">
              Adapt to any marketing challenge
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-lg leading-7 text-[#6B7280]">
              Strategy Console tailors framework selection and depth based on what you&apos;re building, from product launches to demand generation to brand awareness.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-[1280px] gap-8 lg:grid-cols-3">
            {[
              {
                title: 'Product Launch',
                icon: 'Rocket',
                body: 'Get to market with confirmed positioning, target market clarity, and a go-to-market strategy. Strategy Console ensures you\'ve tested product-market fit before spending on launch campaigns.',
                frameworks: [
                  'Jobs-to-be-Done',
                  'Value Proposition Canvas',
                  'Go-to-Market Strategy',
                  'Launch Timeline',
                  'Early Adopter Targeting',
                ],
                cta: 'Start with Product Launch \u2192',
              },
              {
                title: 'Demand Generation',
                icon: 'Funnel',
                body: 'Build pipeline with campaigns designed around customer buying behavior. Strategy Console confirms your ICP, conversion path, channel strategy, and lead scoring approach.',
                frameworks: [
                  'ICP Definition',
                  'Lead Generation Funnel',
                  'MQL/SQL Criteria',
                  'Channel Strategy',
                  'Lead Scoring',
                ],
                cta: 'Start with Demand Gen \u2192',
              },
              {
                title: 'Brand Awareness',
                icon: 'Megaphone',
                body: 'Build brand equity with campaigns grounded in positioning strategy. Strategy Console ensures your brand message is differentiated and your reach strategy is validated.',
                frameworks: [
                  'Brand Positioning',
                  'Messaging Hierarchy',
                  'Brand Campaign Framework',
                  'Reach Strategy',
                  'Brand Lift Measurement',
                ],
                cta: 'Start with Brand Awareness \u2192',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex h-full flex-col rounded-xl border border-[#E5E7EB] bg-white p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#DBEAFE] px-1 text-center text-[10px] font-semibold uppercase leading-[1.1] tracking-[0.5px] text-[#2563EB]">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#0A0A0A]">{card.title}</h3>
                <p className="mt-4 text-base leading-6 text-[#6B7280]">{card.body}</p>
                <div className="mt-6 text-sm font-semibold uppercase tracking-[0.5px] text-[#9CA3AF]">
                  Key frameworks applied
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[#6B7280]">
                  {card.frameworks.map((framework) => (
                    <li key={framework}>{framework}</li>
                  ))}
                </ul>
                <div className="mt-8 text-base font-medium text-[#2563EB]">{card.cta}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Practitioner Section */}
        <section className="px-6 py-24 md:py-40">
          <div className="mx-auto max-w-[1280px] text-center">
            <div className="text-sm font-medium uppercase tracking-[0.5px] text-[#6B7280]">Built for marketing practitioners</div>
            <h2 className="mt-4 text-[36px] font-semibold leading-[44px] tracking-[-0.5px] text-[#0A0A0A] md:text-[48px] md:leading-[56px]">
              Strategic thinking without the weeks of research
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-lg leading-7 text-[#6B7280]">
              Strategy Console handles the complexity of framework selection, prerequisite mapping, and validation logic, so you focus on building great strategies, not researching which frameworks exist.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-[1280px] gap-8 lg:grid-cols-3">
            {[
              {
                title: 'Intelligent filtering',
                body: 'AI analyzes your situation and selects the 200+ frameworks that apply, filtering by company stage, business model, and campaign type.',
              },
              {
                title: 'Expert guidance',
                body: '14 specialized AI agents guide you through required frameworks with smart questions and immediate feedback.',
              },
              {
                title: 'Validated output',
                body: 'Export complete strategy documents with positioning confirmed, prerequisites checked, and gaps identified.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#E5E7EB] bg-white p-10 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-2xl font-semibold text-[#0A0A0A]">{card.title}</h3>
                <p className="mt-4 text-base leading-6 text-[#6B7280]">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="bg-[#FAFAFA] px-6 py-24 md:py-40">
          <div className="mx-auto max-w-[1280px] text-center">
            <h2 className="text-[36px] font-semibold leading-[44px] tracking-[-0.5px] text-[#0A0A0A] md:text-[48px] md:leading-[56px]">
              From situation to execution-ready strategy in 3 steps
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-[1280px] gap-8 lg:grid-cols-3">
            {[
              {
                step: 'Step 1',
                title: 'Describe your situation',
                body: 'Input your company stage, business model, campaign type, and goals.',
                detail:
                  'What happens: AI analyzes your context and selects the frameworks that apply, filtering from 1,000+ down to the 200+ relevant to your situation.',
              },
              {
                step: 'Step 2',
                title: 'Answer guided questions',
                body: '14 specialized AI agents guide you through required frameworks, asking questions and reviewing your inputs.',
                detail: 'What you get: Deep strategic thinking without the weeks of framework research.',
              },
              {
                step: 'Step 3',
                title: 'Receive validated strategy',
                body: 'Strategy Console builds your comprehensive strategy document, tested through hundreds of frameworks, showing what\'s solid and what needs refinement.',
                detail: 'What you save: Weeks of research and the risk of executing on an unvalidated strategy.',
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-xl border border-[#E5E7EB] bg-white p-10 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.5px] text-[#9CA3AF]">{step.step}</div>
                <h3 className="mt-3 text-2xl font-semibold text-[#0A0A0A]">{step.title}</h3>
                <p className="mt-4 text-base leading-6 text-[#6B7280]">{step.body}</p>
                <p className="mt-6 text-sm leading-6 text-[#6B7280]">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What You Get */}
        <section className="px-6 py-24 md:py-40">
          <div className="mx-auto max-w-[1280px] text-center">
            <h2 className="text-[36px] font-semibold leading-[44px] tracking-[-0.5px] text-[#0A0A0A] md:text-[48px] md:leading-[56px]">
              Everything you need before execution
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-lg leading-7 text-[#6B7280]">
              Strategy Console delivers complete, execution-ready strategies, not generic templates that still require translation.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-[1280px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Positioning validated',
                body: 'Competitive analysis and differentiation frameworks ensure your positioning is defensible and clear.',
              },
              {
                title: 'Target market confirmed',
                body: 'ICP and segmentation models confirm you\'re targeting the right customers.',
              },
              {
                title: 'Channel strategy verified',
                body: 'Customer behavior and budget frameworks ensure channel selection matches reality.',
              },
              {
                title: 'Prerequisites checked',
                body: 'Dependency mapping ensures nothing critical gets missed before execution.',
              },
              {
                title: 'Success metrics defined',
                body: 'Measurement frameworks establish clear KPIs and a tracking approach.',
              },
              {
                title: 'Export-ready configs',
                body: 'Generate tool configurations for Mailchimp, HubSpot, Google Ads, and more.',
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-[#E5E7EB] bg-white p-8 text-left shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#0A0A0A]">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6B7280]">{benefit.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Framework Domains */}
        <section id="roadmaps" className="bg-[#FAFAFA] px-6 py-24 md:py-40">
          <div className="mx-auto max-w-[1280px] text-center">
            <h2 className="text-[36px] font-semibold leading-[44px] tracking-[-0.5px] text-[#0A0A0A] md:text-[48px] md:leading-[56px]">
              Comprehensive coverage across marketing disciplines
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-lg leading-7 text-[#6B7280]">
              14 specialized domains covering every aspect of marketing strategy, from foundational positioning to advanced growth tactics.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-[1280px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {frameworkDomains.map((domain) => (
              <Link
                key={domain.title}
                href={`/roadmaps/${domain.slug}`}
                aria-label="Open roadmap"
                className="group rounded-xl border border-[#E5E7EB] bg-white p-8 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D1D5DB] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-2"
              >
                <h3 className="text-xl font-semibold text-[#0A0A0A]">{domain.title}</h3>
                <div className="mt-2 text-sm font-semibold text-[#2563EB]">{domain.count}</div>
                <p className="mt-4 text-sm leading-6 text-[#6B7280]">{domain.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="px-6 py-24 md:py-40">
          <div className="mx-auto max-w-[1280px] text-center">
            <h2 className="text-[36px] font-semibold leading-[44px] tracking-[-0.5px] text-[#0A0A0A] md:text-[48px] md:leading-[56px]">
              Trusted by marketing leaders who validate before they execute
            </h2>
            <p className="mt-6 text-base text-[#6B7280]">[Add testimonials when available]</p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-[#FAFAFA] px-6 py-24 md:py-32">
          <div className="mx-auto max-w-[960px] text-center">
            <h2 className="text-[36px] font-semibold leading-[44px] tracking-[-0.5px] text-[#0A0A0A] md:text-[48px] md:leading-[56px]">
              Ready to build fool-proof strategies?
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-lg leading-7 text-[#6B7280]">
              Create an account instantly and build your first strategy in 3 hours, or see how it works.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/coming-soon?for=strategy-console"
                className="rounded-lg bg-[#2563EB] px-8 py-4 text-base font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-md"
              >
                Launch strategy console &rarr;
              </Link>
              <Link
                href="#how-it-works"
                className="rounded-lg border border-[#D1D5DB] px-8 py-4 text-base font-medium text-[#0A0A0A] transition-all hover:bg-[#FAFAFA]"
              >
                See how it works
              </Link>
            </div>
          </div>
        </section>

        {/* Supplementary Info Boxes */}
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-2">
            {[
              {
                title: 'Transparent Pricing',
                body: 'Transparent per-strategy pricing with no hidden fees.',
                link: 'Pricing details \u2192',
              },
              {
                title: 'Quick Start',
                body: 'Get up and running with Strategy Console. No technical setup required.',
                link: 'Quick start guide \u2192',
              },
            ].map((box) => (
              <div key={box.title} className="rounded-2xl border border-[#E5E7EB] bg-white p-10 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#0A0A0A]">{box.title}</h3>
                <p className="mt-4 text-base text-[#6B7280]">{box.body}</p>
                <div className="mt-6 text-base font-medium text-[#2563EB]">{box.link}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#FAFAFA] px-6 py-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
              <div>
                <h4 className="text-sm font-semibold text-[#0A0A0A]">Products</h4>
                <div className="mt-4 space-y-3 text-sm text-[#6B7280]">
                  <div>Strategy Console</div>
                  <div>Framework Library</div>
                  <div>Validation Engine</div>
                  <div>AI Agents</div>
                  <div>Roadmaps</div>
                  <div>Export Integrations</div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#0A0A0A]">Solutions</h4>
                <div className="mt-4 space-y-3 text-sm text-[#6B7280]">
                  <div className="text-xs font-semibold uppercase tracking-[0.5px] text-[#9CA3AF]">By Stage</div>
                  <div>Early-Stage Startups</div>
                  <div>Growth Companies</div>
                  <div className="pt-2 text-xs font-semibold uppercase tracking-[0.5px] text-[#9CA3AF]">By Type</div>
                  <div>B2B SaaS</div>
                  <div>B2C Ecommerce</div>
                  <div>Product Launches</div>
                  <div>Demand Generation</div>
                  <div>Brand Awareness</div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#0A0A0A]">Resources</h4>
                <div className="mt-4 space-y-3 text-sm text-[#6B7280]">
                  <div>Framework guides</div>
                  <div>How-to tutorials</div>
                  <div>Best practices</div>
                  <div>Case studies</div>
                  <div>Blog</div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#0A0A0A]">Company</h4>
                <div className="mt-4 space-y-3 text-sm text-[#6B7280]">
                  <div>About</div>
                  <div>Pricing</div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#0A0A0A]">Support</h4>
                <div className="mt-4 space-y-3 text-sm text-[#6B7280]">
                  <div>Help center</div>
                  <div>Community</div>
                  <div>Login</div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[#E5E7EB] pt-8 text-sm text-[#9CA3AF] md:flex-row">
              <div>© 2026 No Norm Co. LLC. All rights reserved.</div>
              <div className="flex flex-wrap gap-6">
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Cookie Settings</div>
              </div>
            </div>
          </div>
        </footer>
    </main>
  )
}
