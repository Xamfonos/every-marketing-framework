import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark/80 backdrop-blur-xl">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-black">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent font-mono text-sm font-bold">
              NN
            </div>
            <span>No Norm Co.</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/#roadmaps"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Roadmaps
            </Link>
            <Link
              href="/#frameworks"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Frameworks
            </Link>
            <Link
              href="/psychology"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-purple-400"
            >
              🧠 Psychology
            </Link>
            <Link
              href="/best-practices"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Best Practices
            </Link>
            <Link
              href="/#community"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Community
            </Link>
            <Link
              href="/signin"
              className="rounded-lg border border-white/10 bg-dark-elevated px-5 py-2.5 text-sm font-semibold transition-all hover:border-primary hover:shadow-md"
            >
              Sign In
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
