'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundEffects from '@/components/BackgroundEffects'
import { FrameworkData, EmbeddedVideo, EmbeddedArticle, EmbeddedPodcast, EmbeddedResource } from '@/lib/framework-types'
import Link from 'next/link'

interface FrameworkPageProps {
  frameworkData: FrameworkData
}

const difficultyBadge = {
  beginner: 'bg-success/15 text-success border-success/30',
  intermediate: 'bg-warning/15 text-warning border-warning/30',
  advanced: 'bg-accent/15 text-accent border-accent/30',
}

function VideoEmbed({ video }: { video: EmbeddedVideo }) {
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&\n?#]+)/)
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url
  }

  return (
    <div className="my-8 rounded-2xl border border-primary/20 bg-dark-surface p-6">
      <div className="mb-4 aspect-video overflow-hidden rounded-xl">
        <iframe
          src={getYouTubeEmbedUrl(video.url)}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
      <div className="mb-2 flex items-center gap-3">
        <h4 className="text-lg font-bold">{video.title}</h4>
        {video.duration && (
          <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
            {video.duration}
          </span>
        )}
      </div>
      <p className="mb-3 text-sm text-text-secondary">by {video.author}</p>
      <div className="rounded-lg bg-primary/10 p-4">
        <p className="text-sm text-text-secondary">
          <strong className="font-semibold text-primary">Why watch:</strong> {video.whyWatch}
        </p>
      </div>
    </div>
  )
}

function ArticleEmbed({ article }: { article: EmbeddedArticle }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="my-8 block rounded-2xl border border-accent/20 bg-dark-surface p-6 transition-all hover:border-accent hover:shadow-md"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="mb-1 text-lg font-bold">{article.title}</h4>
          <p className="text-sm text-text-secondary">
            by {article.author} • {article.source}
          </p>
        </div>
        {article.readTime && (
          <span className="flex-shrink-0 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
            {article.readTime}
          </span>
        )}
      </div>
      <div className="mb-4 rounded-lg bg-accent/10 p-4">
        <p className="text-sm text-text-secondary">
          <strong className="font-semibold text-accent">Why read:</strong> {article.whyRead}
        </p>
      </div>
      <div className="flex items-center gap-2 text-sm font-semibold text-accent">
        <span>Read Article</span>
        <span>→</span>
      </div>
    </a>
  )
}

function PodcastEmbed({ podcast }: { podcast: EmbeddedPodcast }) {
  return (
    <a
      href={podcast.url}
      target="_blank"
      rel="noopener noreferrer"
      className="my-8 block rounded-2xl border border-success/20 bg-dark-surface p-6 transition-all hover:border-success hover:shadow-md"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="mb-1 text-lg font-bold">{podcast.title}</h4>
          <p className="text-sm text-text-secondary">
            {podcast.podcast} • {podcast.host}
          </p>
        </div>
        {podcast.duration && (
          <span className="flex-shrink-0 rounded-full bg-success/20 px-3 py-1 text-xs font-semibold text-success">
            {podcast.duration}
          </span>
        )}
      </div>
      <div className="mb-4 rounded-lg bg-success/10 p-4">
        <p className="text-sm text-text-secondary">
          <strong className="font-semibold text-success">Why listen:</strong> {podcast.whyListen}
        </p>
      </div>
      <div className="flex items-center gap-2 text-sm font-semibold text-success">
        <span>Listen Now</span>
        <span>→</span>
      </div>
    </a>
  )
}

function EmbeddedResourceDisplay({ resource }: { resource: EmbeddedResource }) {
  if (resource.type === 'video') {
    return <VideoEmbed video={resource.data as EmbeddedVideo} />
  }
  if (resource.type === 'article') {
    return <ArticleEmbed article={resource.data as EmbeddedArticle} />
  }
  if (resource.type === 'podcast') {
    return <PodcastEmbed podcast={resource.data as EmbeddedPodcast} />
  }
  return null
}

export default function FrameworkPage({ frameworkData }: FrameworkPageProps) {
  return (
    <main className="relative min-h-screen">
      <BackgroundEffects />
      <Header />

      {/* Breadcrumb */}
      <div className="relative z-10 border-b border-white/10 bg-dark/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Link href="/" className="hover:text-text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/#frameworks" className="hover:text-text-primary">
              Frameworks
            </Link>
            <span>/</span>
            <span className="text-text-primary">{frameworkData.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          {/* Category Badge */}
          <div className="mb-6 flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold capitalize">
              {frameworkData.category}
            </span>
            <span
              className={`rounded-full border px-4 py-2 font-mono text-xs font-semibold uppercase ${difficultyBadge[frameworkData.difficulty]}`}
            >
              {frameworkData.difficulty}
            </span>
            <span className="text-sm text-text-tertiary">
              {frameworkData.readingTime} min read
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-6xl font-black leading-tight tracking-tight">
            {frameworkData.title}
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-2xl text-text-secondary">{frameworkData.subtitle}</p>

          {/* Overview */}
          <div className="mb-12 rounded-2xl border border-white/10 bg-dark-surface p-8">
            <p className="text-lg leading-relaxed text-text-secondary">
              {frameworkData.overview}
            </p>
          </div>

          {/* When to Use */}
          <div className="mb-16 rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 to-accent/10 p-8">
            <h2 className="mb-6 text-2xl font-bold">When to Use This Framework</h2>
            <ul className="space-y-3">
              {frameworkData.whenToUse.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-text-secondary">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Path */}
          <div className="mb-16 rounded-2xl border border-accent/20 bg-dark-surface p-8">
            <h2 className="mb-3 text-2xl font-bold">Your Learning Path</h2>
            <p className="mb-8 text-text-secondary">{frameworkData.learningPath?.description || 'Build a solid foundation before moving to advanced concepts.'}</p>

            {/* Prerequisites */}
            {frameworkData.learningPath.prerequisites.length > 0 && (
              <div className="mb-8">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-tertiary">
                  <span>📚</span>
                  <span>Learn These First</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {frameworkData.learningPath.prerequisites.map((node, idx) => (
                    <Link
                      key={idx}
                      href={`/frameworks/${node.slug}`}
                      className="rounded-lg border border-white/20 bg-dark px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-1 hover:border-primary hover:shadow-md"
                    >
                      {node.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Current Pathway */}
            <div className="mb-8">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-tertiary">
                <span>🎯</span>
                <span>Recommended Learning Order</span>
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                {frameworkData.learningPath.pathway.map((node, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {node.isCurrentFramework ? (
                      <div className="rounded-lg border-2 border-primary bg-primary/20 px-4 py-2 text-sm font-bold text-primary">
                        {node.title} ← You are here
                      </div>
                    ) : (
                      <Link
                        href={`/frameworks/${node.slug}`}
                        className="rounded-lg border border-white/20 bg-dark px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md"
                      >
                        {node.title}
                      </Link>
                    )}
                    {idx < frameworkData.learningPath.pathway.length - 1 && (
                      <span className="text-text-tertiary">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Alternatives */}
            {frameworkData.learningPath.alternatives.length > 0 && (
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-tertiary">
                  <span>🔀</span>
                  <span>Alternative Approaches</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {frameworkData.learningPath.alternatives.map((node, idx) => (
                    <Link
                      key={idx}
                      href={`/frameworks/${node.slug}`}
                      className="rounded-lg border border-white/20 bg-dark px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-1 hover:border-success hover:shadow-md"
                    >
                      {node.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CORE CONCEPTS - Your Teaching with Embedded Resources */}
      <section className="relative z-10 px-6 py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16">
            {frameworkData.coreConcepts.map((section, idx) => (
              <div key={idx}>
                <h2 className="mb-6 text-4xl font-black">{section.title}</h2>
                
                {/* Section Content */}
                {Array.isArray(section.content) ? (
                  <div className="space-y-6">
                    {section.content.map((paragraph, pIdx) => (
                      <div
                        key={pIdx}
                        className="prose prose-invert max-w-none text-lg leading-relaxed text-text-secondary"
                        dangerouslySetInnerHTML={{
                          __html: paragraph
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary font-bold">$1</strong>')
                            .replace(/\n\n/g, '</p><p class="mt-4">')
                            .replace(/^• (.+)$/gm, '<li class="ml-6">$1</li>')
                            .replace(/(<li.*<\/li>)/s, '<ul class="list-disc space-y-2 my-4">$1</ul>')
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <div
                    className="prose prose-invert max-w-none text-lg leading-relaxed text-text-secondary"
                    dangerouslySetInnerHTML={{
                      __html: section.content
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary font-bold">$1</strong>')
                        .replace(/\n\n/g, '</p><p class="mt-4">')
                        .replace(/^• (.+)$/gm, '<li class="ml-6">$1</li>')
                        .replace(/(<li.*<\/li>)/s, '<ul class="list-disc space-y-2 my-4">$1</ul>')
                    }}
                  />
                )}

                {/* Embedded Resources for this section */}
                {section.embeddedResources && section.embeddedResources.length > 0 && (
                  <div className="mt-8">
                    {section.embeddedResources.map((resource, rIdx) => (
                      <EmbeddedResourceDisplay key={rIdx} resource={resource} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO APPLY - Your Step-by-Step with Embedded Resources */}
      <section className="relative z-10 px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-12 text-5xl font-black">How to Apply This Framework</h2>
          <div className="space-y-12">
            {frameworkData.howToApply.map((section, idx) => (
              <div key={idx}>
                <div className="rounded-2xl border border-white/10 bg-dark-surface p-8">
                  <h3 className="mb-6 text-3xl font-black text-primary-light">{section.title}</h3>
                  
                  {/* Section Content */}
                  {Array.isArray(section.content) ? (
                    <div className="space-y-6">
                      {section.content.map((paragraph, pIdx) => (
                        <div
                          key={pIdx}
                          className="prose prose-invert max-w-none leading-relaxed text-text-secondary"
                          dangerouslySetInnerHTML={{
                            __html: paragraph
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary font-bold">$1</strong>')
                              .replace(/\n\n/g, '</p><p class="mt-4">')
                              .replace(/^• (.+)$/gm, '<li class="ml-6">$1</li>')
                              .replace(/(<li.*<\/li>)/s, '<ul class="list-disc space-y-2 my-4">$1</ul>')
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div
                      className="prose prose-invert max-w-none leading-relaxed text-text-secondary"
                      dangerouslySetInnerHTML={{
                        __html: section.content
                          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary font-bold">$1</strong>')
                          .replace(/\n\n/g, '</p><p class="mt-4">')
                          .replace(/^• (.+)$/gm, '<li class="ml-6">$1</li>')
                          .replace(/(<li.*<\/li>)/s, '<ul class="list-disc space-y-2 my-4">$1</ul>')
                      }}
                    />
                  )}
                </div>

                {/* Embedded Resources for this section */}
                {section.embeddedResources && section.embeddedResources.length > 0 && (
                  <div className="mt-8">
                    {section.embeddedResources.map((resource, rIdx) => (
                      <EmbeddedResourceDisplay key={rIdx} resource={resource} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLES - Real-World Proof */}
      {frameworkData.examples.length > 0 && (
        <section className="relative z-10 px-6 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-12 text-5xl font-black">Real-World Examples</h2>
            <div className="space-y-8">
              {frameworkData.examples.map((example, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-dark-surface p-8"
                >
                  <h3 className="mb-4 text-2xl font-bold text-primary-light">
                    {example.company}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-text-tertiary">
                        Situation
                      </h4>
                      <p className="text-text-secondary">{example.situation}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-text-tertiary">
                        Application
                      </h4>
                      <p className="text-text-secondary">{example.application}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-text-tertiary">
                        Result
                      </h4>
                      <p className="font-semibold text-success">{example.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TEMPLATES - Your Resources */}
      {frameworkData.templates.length > 0 && (
        <section className="relative z-10 px-6 py-16">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-12 text-5xl font-black">Templates & Worksheets</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {frameworkData.templates.map((template, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-dark-surface p-6"
                >
                  <h3 className="mb-2 text-xl font-bold">{template.name}</h3>
                  <p className="mb-4 text-sm text-text-secondary">{template.description}</p>
                  <a
                    href={template.downloadUrl}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-semibold transition-all hover:-translate-y-1 hover:bg-primary-light hover:shadow-glow"
                  >
                    <span>Download Template</span>
                    <span>↓</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Content */}
      <section className="relative z-10 px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {frameworkData.relatedFrameworks.length > 0 && (
              <div>
                <h2 className="mb-6 text-2xl font-bold">Related Frameworks</h2>
                <div className="space-y-3">
                  {frameworkData.relatedFrameworks.map((framework, idx) => (
                    <Link
                      key={idx}
                      href={`/frameworks/${framework.slug}`}
                      className="block rounded-xl border border-white/10 bg-dark-surface p-4 transition-all hover:translate-x-2 hover:border-primary"
                    >
                      <span className="font-semibold">{framework.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {frameworkData.relatedRoadmaps.length > 0 && (
              <div>
                <h2 className="mb-6 text-2xl font-bold">Related Roadmaps</h2>
                <div className="space-y-3">
                  {frameworkData.relatedRoadmaps.map((roadmap, idx) => (
                    <Link
                      key={idx}
                      href={`/roadmaps/${roadmap.slug}`}
                      className="block rounded-xl border border-white/10 bg-dark-surface p-4 transition-all hover:translate-x-2 hover:border-primary"
                    >
                      <span className="font-semibold">{roadmap.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-12 text-center">
            <div className="absolute -right-1/2 -top-1/2 h-full w-full animate-[rotate_20s_linear_infinite] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
            
            <div className="relative z-10">
              <h2 className="mb-4 text-4xl font-black">Ready to Apply This Framework?</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
                Master this framework and 50+ others with our interactive roadmaps and AI-powered analysis.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/#roadmaps"
                  className="rounded-lg bg-white px-8 py-4 font-semibold text-primary transition-all hover:-translate-y-1 hover:shadow-2xl"
                >
                  Explore Roadmaps
                </Link>
                <Link
                  href="/framework-ai"
                  className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Analyze with AI
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
