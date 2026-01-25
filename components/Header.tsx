'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useMemo, useRef, useState } from 'react'

type DropdownName = 'products' | 'solutions' | 'resources'

type DropdownItem = {
  title: string
  description?: string
  href: string
}

type DropdownSection = {
  heading: string
  items: DropdownItem[]
}

const productsItems: DropdownItem[] = [
  {
    title: 'Strategy Console',
    description: 'Build and validate strategy before execution',
    href: '/coming-soon?for=strategy-console',
  },
  {
    title: 'Framework Library',
    description: 'Browse 1,000+ frameworks with dependencies',
    href: '/coming-soon?for=framework-library',
  },
  {
    title: 'Validation Engine',
    description: 'Catch gaps and missing prerequisites',
    href: '/coming-soon?for=validation-engine',
  },
  {
    title: 'AI Agents',
    description: 'Guided strategic thinking by domain',
    href: '/coming-soon?for=ai-agents',
  },
  {
    title: 'Roadmaps',
    description: 'Sequenced learning paths by domain',
    href: '/#roadmaps',
  },
  {
    title: 'Export Integrations',
    description: 'Export strategies into tools and templates',
    href: '/coming-soon?for=export-integrations',
  },
]

const solutionsSections: DropdownSection[] = [
  {
    heading: 'By stage',
    items: [
      { title: 'Early-stage startups', href: '/coming-soon?for=early-stage-startups' },
      { title: 'Growth companies', href: '/coming-soon?for=growth-companies' },
    ],
  },
  {
    heading: 'By type',
    items: [
      { title: 'B2B SaaS', href: '/coming-soon?for=b2b-saas' },
      { title: 'B2C ecommerce', href: '/coming-soon?for=b2c-ecommerce' },
      { title: 'Product launches', href: '/coming-soon?for=product-launches' },
      { title: 'Demand generation', href: '/coming-soon?for=demand-generation' },
      { title: 'Brand awareness', href: '/coming-soon?for=brand-awareness' },
    ],
  },
]

const resourcesItems: DropdownItem[] = [
  { title: 'Framework guides', href: '/coming-soon?for=framework-guides' },
  { title: 'How-to tutorials', href: '/coming-soon?for=how-to-tutorials' },
  { title: 'Best practices', href: '/coming-soon?for=best-practices' },
  { title: 'Case studies', href: '/coming-soon?for=case-studies' },
  { title: 'Blog', href: '/coming-soon?for=blog' },
]

const mobileSections = [
  {
    heading: 'Products',
    items: productsItems.map((item) => ({ title: item.title, href: item.href })),
  },
  {
    heading: 'Solutions',
    items: [
      { title: 'Early-stage startups', href: '/coming-soon?for=early-stage-startups' },
      { title: 'Growth companies', href: '/coming-soon?for=growth-companies' },
      { title: 'B2B SaaS', href: '/coming-soon?for=b2b-saas' },
      { title: 'B2C ecommerce', href: '/coming-soon?for=b2c-ecommerce' },
      { title: 'Product launches', href: '/coming-soon?for=product-launches' },
      { title: 'Demand generation', href: '/coming-soon?for=demand-generation' },
      { title: 'Brand awareness', href: '/coming-soon?for=brand-awareness' },
    ],
  },
  {
    heading: 'Resources',
    items: resourcesItems,
  },
]

const topLinks = [
  { title: 'Community', href: '/coming-soon?for=community' },
  { title: 'Contact', href: '/coming-soon?for=contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<DropdownName | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const idBase = useId()

  const dropdownIds = useMemo(
    () => ({
      products: `${idBase}-products`,
      solutions: `${idBase}-solutions`,
      resources: `${idBase}-resources`,
    }),
    [idBase]
  )

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }

    const onClick = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onClick)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onClick)
    }
  }, [])

  useEffect(() => {
    if (!mobileOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const panel = document.getElementById(`${idBase}-mobile-panel`)
      if (!panel) return

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen, idBase])

  useEffect(() => {
    if (!openMenu || !dropdownRef.current) return

    const dropdown = dropdownRef.current
    const focusable = dropdown.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )

    if (!focusable.length) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    dropdown.addEventListener('keydown', handleKeyDown)
    return () => dropdown.removeEventListener('keydown', handleKeyDown)
  }, [openMenu])

  const normalizedHref = (href: string) => href.split('#')[0].split('?')[0]
  const isActive = (href: string) => {
    const normalized = normalizedHref(href)
    return pathname === normalized || pathname.startsWith(`${normalized}/`)
  }

  const triggerProps = (menu: DropdownName) => ({
    'aria-expanded': openMenu === menu,
    'aria-controls': dropdownIds[menu],
    'aria-haspopup': 'true' as const,
    onClick: () => setOpenMenu((current) => (current === menu ? null : menu)),
    onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        setOpenMenu((current) => (current === menu ? null : menu))
      }
    },
  })

  const openWithHover = (menu: DropdownName) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(menu)
  }

  const closeWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180)
  }

  const dropdownContainerClasses =
    'absolute left-0 top-full mt-3 w-[760px] rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.18)] animate-fade-in-up'

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-[#0A0A0A]">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white text-sm font-bold text-[#2563EB]">
              NN
            </span>
            No Norm Co.
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => openWithHover('products')}
              onMouseLeave={closeWithDelay}
            >
              <button
                type="button"
                className="flex items-center gap-2 text-sm font-medium text-[#0A0A0A]"
                {...triggerProps('products')}
              >
                Products
                <svg className="h-3 w-3 text-[#9CA3AF]" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                  <path d="M3 4.5l3 3 3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openMenu === 'products' && (
                <div
                  ref={dropdownRef}
                  id={dropdownIds.products}
                  role="menu"
                  aria-label="Products"
                  className={dropdownContainerClasses}
                  onMouseEnter={() => openWithHover('products')}
                  onMouseLeave={closeWithDelay}
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    {productsItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group rounded-xl border border-transparent p-3 transition-all hover:border-[#E5E7EB] hover:bg-[#FAFAFA]"
                        aria-current={isActive(item.href) ? 'page' : undefined}
                      >
                        <div className="text-sm font-semibold text-[#0A0A0A]">{item.title}</div>
                        {item.description && (
                          <div className="mt-1 text-xs text-[#6B7280]">{item.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => openWithHover('solutions')}
              onMouseLeave={closeWithDelay}
            >
              <button
                type="button"
                className="flex items-center gap-2 text-sm font-medium text-[#0A0A0A]"
                {...triggerProps('solutions')}
              >
                Solutions
                <svg className="h-3 w-3 text-[#9CA3AF]" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                  <path d="M3 4.5l3 3 3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openMenu === 'solutions' && (
                <div
                  ref={dropdownRef}
                  id={dropdownIds.solutions}
                  role="menu"
                  aria-label="Solutions"
                  className={dropdownContainerClasses}
                  onMouseEnter={() => openWithHover('solutions')}
                  onMouseLeave={closeWithDelay}
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    {solutionsSections.map((section) => (
                      <div key={section.heading}>
                        <div className="text-xs font-semibold uppercase tracking-[0.5px] text-[#9CA3AF]">
                          {section.heading}
                        </div>
                        <div className="mt-4 space-y-3">
                          {section.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="block text-sm text-[#0A0A0A] hover:text-[#2563EB]"
                              aria-current={isActive(item.href) ? 'page' : undefined}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => openWithHover('resources')}
              onMouseLeave={closeWithDelay}
            >
              <button
                type="button"
                className="flex items-center gap-2 text-sm font-medium text-[#0A0A0A]"
                {...triggerProps('resources')}
              >
                Resources
                <svg className="h-3 w-3 text-[#9CA3AF]" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                  <path d="M3 4.5l3 3 3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openMenu === 'resources' && (
                <div
                  ref={dropdownRef}
                  id={dropdownIds.resources}
                  role="menu"
                  aria-label="Resources"
                  className={dropdownContainerClasses}
                  onMouseEnter={() => openWithHover('resources')}
                  onMouseLeave={closeWithDelay}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    {resourcesItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="rounded-xl border border-transparent p-3 text-sm font-medium text-[#0A0A0A] transition-all hover:border-[#E5E7EB] hover:bg-[#FAFAFA]"
                        aria-current={isActive(item.href) ? 'page' : undefined}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          {topLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-sm font-medium text-[#0A0A0A] transition-colors hover:text-[#2563EB]"
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.title}
            </Link>
          ))}
          <Link
            href="/coming-soon?for=get-started"
            className="rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-md"
          >
            Get started
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-[#E5E7EB] bg-white p-2 text-[#0A0A0A] lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div
            id={`${idBase}-mobile-panel`}
            className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-6"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="text-base font-semibold text-[#0A0A0A]" onClick={() => setMobileOpen(false)}>
                No Norm Co.
              </Link>
              <button
                type="button"
                className="rounded-md border border-[#E5E7EB] p-2"
                aria-label="Close navigation"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-8 space-y-8">
              {mobileSections.map((section) => (
                <div key={section.heading}>
                  <div className="text-xs font-semibold uppercase tracking-[0.5px] text-[#9CA3AF]">
                    {section.heading}
                  </div>
                  <div className="mt-4 space-y-3">
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block min-h-[44px] text-base font-medium text-[#0A0A0A]"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border-t border-[#E5E7EB] pt-6">
                {topLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block min-h-[44px] text-base font-medium text-[#0A0A0A]"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-10">
              <Link
                href="/coming-soon?for=get-started"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-lg bg-[#2563EB] px-5 py-3 text-center text-base font-medium text-white shadow-sm"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
