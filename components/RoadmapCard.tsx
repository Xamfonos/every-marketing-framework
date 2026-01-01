import Link from 'next/link'

type Difficulty = 'beginner' | 'intermediate' | 'advanced'

interface RoadmapCardProps {
  icon: string
  title: string
  description: string
  difficulty: Difficulty
  duration: string
  slug: string
}

const difficultyStyles = {
  beginner: 'bg-success/15 text-success border-success/30',
  intermediate: 'bg-warning/15 text-warning border-warning/30',
  advanced: 'bg-accent/15 text-accent border-accent/30',
}

export default function RoadmapCard({
  icon,
  title,
  description,
  difficulty,
  duration,
  slug,
}: RoadmapCardProps) {
  return (
    <Link
      href={`/roadmaps/${slug}`}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-dark-surface p-6 transition-all hover:-translate-y-2 hover:border-primary hover:shadow-2xl"
    >
      {/* Top gradient bar */}
      <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100" />

      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-2xl">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl font-bold">{title}</h3>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-text-tertiary">
        <span
          className={`rounded-full border px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide ${difficultyStyles[difficulty]}`}
        >
          {difficulty}
        </span>
        <span className="flex items-center gap-1">
          ⏱ {duration}
        </span>
      </div>
    </Link>
  )
}
