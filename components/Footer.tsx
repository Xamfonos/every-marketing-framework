import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Resources */}
          <div>
            <h4 className="mb-4 text-base font-bold">Resources</h4>
            <div className="flex flex-col gap-3">
              <Link href="/#roadmaps" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                All Roadmaps
              </Link>
              <Link
                href="/coming-soon?for=framework-library"
                className="text-sm text-text-secondary transition-colors hover:text-primary-light"
              >
                All Frameworks
              </Link>
              <Link
                href="/coming-soon?for=best-practices"
                className="text-sm text-text-secondary transition-colors hover:text-primary-light"
              >
                Best Practices
              </Link>
              <Link href="/coming-soon?for=project-ideas" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                Project Ideas
              </Link>
              <Link href="/coming-soon?for=guides" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                Guides & Articles
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-base font-bold">Product</h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/coming-soon?for=strategy-console"
                className="text-sm text-text-secondary transition-colors hover:text-primary-light"
              >
                Strategy console
              </Link>
              <Link href="/coming-soon?for=premium" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                Premium Features
              </Link>
              <Link href="/coming-soon?for=enterprise" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                Enterprise
              </Link>
              <Link href="/coming-soon?for=services" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                Implementation Services
              </Link>
              <Link href="/coming-soon?for=pricing" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                Pricing
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-base font-bold">Company</h4>
            <div className="flex flex-col gap-3">
              <Link href="/coming-soon?for=about" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                About Us
              </Link>
              <Link href="/coming-soon?for=story" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                Our Story
              </Link>
              <Link href="/coming-soon?for=community-guidelines" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                Community Guidelines
              </Link>
              <Link href="/coming-soon?for=contribute" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                Contribute
              </Link>
              <Link href="/coming-soon?for=contact" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-base font-bold">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                GitHub
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                Discord
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                LinkedIn
              </a>
              <Link href="/coming-soon?for=newsletter" className="text-sm text-text-secondary transition-colors hover:text-primary-light">
                Newsletter
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-text-tertiary md:flex-row">
          <div>© 2025 No Norm Co. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/coming-soon?for=terms" className="transition-colors hover:text-text-secondary">
              Terms
            </Link>
            <Link href="/coming-soon?for=privacy" className="transition-colors hover:text-text-secondary">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
