'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundEffects from '@/components/BackgroundEffects'
import Link from 'next/link'

type Difficulty = 'beginner' | 'intermediate' | 'advanced'

interface PsychologyRoadmap {
  title: string
  icon: string
  description: string
  difficulty: Difficulty
  duration: string
  topics: number
  slug: string
  frameworks: string[]
}

interface FeaturedFramework {
  title: string
  slug: string
  description: string
  difficulty: Difficulty
  readingTime: string
}

const psychologyRoadmaps: PsychologyRoadmap[] = [
  {
    title: 'Behavioral Psychology',
    icon: '🧠',
    description: 'Understand how people form habits and change behavior. Master the psychology behind habit formation, triggers, and behavioral design.',
    difficulty: 'beginner',
    duration: '3-4 months',
    topics: 8,
    slug: 'behavioral-psychology',
    frameworks: ['BJ Fogg Behavior Model', 'Hook Model', 'Habit Stacking', 'Nudge Theory']
  },
  {
    title: 'Persuasion & Influence',
    icon: '🎭',
    description: 'Learn proven persuasion principles and influence tactics. From Cialdini\'s 6 principles to modern psychological triggers.',
    difficulty: 'intermediate',
    duration: '4-5 months',
    topics: 10,
    slug: 'persuasion-influence',
    frameworks: ['Cialdini\'s 6 Principles', 'Reciprocity', 'Social Proof', 'Authority & Scarcity']
  },
  {
    title: 'Decision-Making Psychology',
    icon: '⚖️',
    description: 'Explore how people make choices. Understand cognitive biases, heuristics, and the two systems of thinking.',
    difficulty: 'intermediate',
    duration: '4-6 months',
    topics: 12,
    slug: 'decision-psychology',
    frameworks: ['System 1/System 2', 'Cognitive Biases', 'Heuristics', 'Choice Architecture']
  },
  {
    title: 'Consumer Psychology',
    icon: '🛍️',
    description: 'Master the psychology of buying behavior. From loss aversion to status signaling and identity formation.',
    difficulty: 'advanced',
    duration: '5-7 months',
    topics: 11,
    slug: 'consumer-psychology',
    frameworks: ['Loss Aversion', 'Endowment Effect', 'Status Signaling', 'Identity Theory']
  }
]

const featuredFrameworks: FeaturedFramework[] = [
  {
    title: 'The Hook Model',
    slug: 'hook-model',
    description: 'Build habit-forming products using Nir Eyal\'s proven four-stage framework',
    difficulty: 'intermediate',
    readingTime: '20 min'
  },
  {
    title: 'BJ Fogg Behavior Model',
    slug: 'fogg-behavior-model',
    description: 'Understand when behavior happens with the MAT framework',
    difficulty: 'beginner',
    readingTime: '15 min'
  },
  {
    title: 'Cialdini\'s 6 Principles',
    slug: 'persuasion-principles',
    description: 'Master the six universal principles of persuasion and influence',
    difficulty: 'intermediate',
    readingTime: '18 min'
  },
  {
    title: 'Cognitive Biases',
    slug: 'cognitive-biases',
    description: 'Leverage mental shortcuts to influence decision-making',
    difficulty: 'intermediate',
    readingTime: '22 min'
  }
]

const difficultyColors = {
  'beginner': 'bg-success/15 text-success border-success/30',
  'intermediate': 'bg-warning/15 text-warning border-warning/30',
  'advanced': 'bg-accent/15 text-accent border-accent/30',
}

export default function PsychologyHub() {
  return (
    <main className="relative min-h-screen">
      <BackgroundEffects />
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="font-semibold text-purple-400">🧠 Marketing Psychology</span>
          </div>
          
          <h1 className="mb-6 text-7xl font-black leading-tight tracking-tight">
            Master the Psychology<br />of Marketing
          </h1>
          
          <p className="mb-12 max-w-3xl text-2xl text-text-secondary">
            Understanding human psychology is the foundation of effective marketing. 
            Learn how people think, decide, and behave—then apply that knowledge to create 
            marketing that resonates at a deep psychological level.
          </p>

          <div className="mb-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-dark-surface p-6">
              <div className="mb-3 text-4xl">🎯</div>
              <div className="mb-2 text-3xl font-bold">4</div>
              <div className="text-text-secondary">Psychology Roadmaps</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-surface p-6">
              <div className="mb-3 text-4xl">📚</div>
              <div className="mb-2 text-3xl font-bold">15+</div>
              <div className="text-text-secondary">Psychology Frameworks</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-dark-surface p-6">
              <div className="mb-3 text-4xl">⏱️</div>
              <div className="mb-2 text-3xl font-bold">16-22</div>
              <div className="text-text-secondary">Months Total Learning</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#roadmaps"
              className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 font-semibold transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              Explore Psychology Roadmaps
            </a>
            <a
              href="#frameworks"
              className="rounded-lg border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Browse Frameworks
            </a>
          </div>
        </div>
      </section>

      {/* Why Psychology Matters */}
      <section className="relative z-10 px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-5xl font-black">Why Psychology Matters in Marketing</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8">
              <h3 className="mb-4 text-2xl font-bold">Most Marketers Copy Tactics</h3>
              <p className="text-text-secondary">
                They see a successful campaign and try to replicate it. &quot;Instagram works for them, 
                so let&apos;s do Instagram.&quot; But they don&apos;t understand WHY it worked—the psychological 
                principles that made it effective. So their copy fails.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8">
              <h3 className="mb-4 text-2xl font-bold">Psychology Gives You First Principles</h3>
              <p className="text-text-secondary">
                When you understand the underlying psychology—how habits form, why people buy, 
                what triggers action—you can create original strategies that work for YOUR specific 
                context. You&apos;re not copying. You&apos;re building from fundamentals.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8">
              <h3 className="mb-4 text-2xl font-bold">It&apos;s About Understanding People</h3>
              <p className="text-text-secondary">
                Marketing isn&apos;t about tricks or manipulation. It&apos;s about understanding what people 
                need, how they think, and how to communicate value in a way that resonates with 
                how their minds actually work. Psychology teaches you to see through their eyes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8">
              <h3 className="mb-4 text-2xl font-bold">The Best Marketers Know Psychology</h3>
              <p className="text-text-secondary">
                Every legendary marketer—from Claude Hopkins to Eugene Schwartz to modern growth 
                leaders—deeply understood human psychology. They didn&apos;t just know tactics. They knew 
                why humans behave the way they do, and they designed systems around that knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Psychology Roadmaps */}
      <section id="roadmaps" className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-5xl font-black">Psychology Learning Paths</h2>
            <p className="mx-auto max-w-3xl text-xl text-text-secondary">
              Four comprehensive roadmaps covering the complete psychology of marketing. 
              Start with behavior fundamentals, then layer on persuasion, decision-making, and consumer psychology.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {psychologyRoadmaps.map((roadmap, idx) => (
              <Link
                key={idx}
                href={`/psychology/roadmaps/${roadmap.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-dark-surface p-8 transition-all hover:border-purple-500 hover:shadow-2xl"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 text-6xl">{roadmap.icon}</div>

                  {/* Title */}
                  <h3 className="mb-4 text-3xl font-black">{roadmap.title}</h3>

                  {/* Description */}
                  <p className="mb-6 text-text-secondary">{roadmap.description}</p>

                  {/* Meta Info */}
                  <div className="mb-6 flex flex-wrap gap-3">
                    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${difficultyColors[roadmap.difficulty]}`}>
                      {roadmap.difficulty}
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold">
                      {roadmap.duration}
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold">
                      {roadmap.topics} Topics
                    </span>
                  </div>

                  {/* Key Frameworks */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-text-tertiary">
                      Key Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {roadmap.frameworks.map((framework, fIdx) => (
                        <span
                          key={fIdx}
                          className="rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-400"
                        >
                          {framework}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 font-semibold text-purple-400">
                    <span>Start Learning</span>
                    <span className="transition-transform group-hover:translate-x-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Frameworks */}
      <section id="frameworks" className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-5xl font-black">Featured Psychology Frameworks</h2>
            <p className="mx-auto max-w-3xl text-xl text-text-secondary">
              Deep dives into the most important psychology frameworks for marketers. 
              Each framework includes our teaching, real examples, and curated resources.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredFrameworks.map((framework, idx) => (
              <Link
                key={idx}
                href={`/frameworks/${framework.slug}`}
                className="group rounded-2xl border border-white/10 bg-dark-surface p-8 transition-all hover:border-purple-500 hover:shadow-lg"
              >
                <h3 className="mb-3 text-2xl font-bold group-hover:text-purple-400">
                  {framework.title}
                </h3>
                <p className="mb-4 text-text-secondary">{framework.description}</p>
                <div className="flex items-center gap-3 text-sm text-text-tertiary">
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${difficultyColors[framework.difficulty]}`}>
                    {framework.difficulty}
                  </span>
                  <span>{framework.readingTime}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/frameworks#psychology"
              className="inline-block rounded-lg border border-purple-500/30 bg-purple-500/10 px-8 py-4 font-semibold text-purple-400 transition-all hover:bg-purple-500/20"
            >
              View All Psychology Frameworks →
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-12">
            <h2 className="mb-8 text-4xl font-black">Your Psychology Learning Journey</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-2xl font-bold text-purple-400">
                  1
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">Start with Behavioral Psychology</h3>
                  <p className="text-text-secondary">
                    Learn the fundamentals of how behavior happens and how habits form. 
                    Master the BJ Fogg Behavior Model and Hook Model.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-2xl font-bold text-purple-400">
                  2
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">Layer on Persuasion & Influence</h3>
                  <p className="text-text-secondary">
                    Understand the six universal principles of persuasion and how to ethically 
                    influence behavior through reciprocity, social proof, and authority.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-2xl font-bold text-purple-400">
                  3
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">Master Decision-Making Psychology</h3>
                  <p className="text-text-secondary">
                    Explore how people actually make choices. Learn about cognitive biases, 
                    heuristics, and the two systems of thinking.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-2xl font-bold text-purple-400">
                  4
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">Deep Dive into Consumer Psychology</h3>
                  <p className="text-text-secondary">
                    Advanced frameworks on buying behavior, loss aversion, status signaling, 
                    and how identity shapes purchase decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 p-12 text-center">
            <div className="absolute -right-1/2 -top-1/2 h-full w-full animate-[rotate_20s_linear_infinite] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
            
            <div className="relative z-10">
              <h2 className="mb-4 text-4xl font-black">Ready to Master Marketing Psychology?</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
                Start with our Behavioral Psychology roadmap and build a deep understanding of 
                how humans think, decide, and behave.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/psychology/roadmaps/behavioral-psychology"
                  className="rounded-lg bg-white px-8 py-4 font-semibold text-purple-600 transition-all hover:-translate-y-1 hover:shadow-2xl"
                >
                  Start Learning Psychology
                </Link>
                <Link
                  href="/frameworks#psychology"
                  className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Browse All Frameworks
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
