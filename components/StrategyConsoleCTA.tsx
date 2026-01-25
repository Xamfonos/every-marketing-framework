import Link from 'next/link'

export default function StrategyConsoleCTA() {
  return (
    <section className="relative z-10 px-3 pb-16 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-[1560px]">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-dark-surface/80 via-dark-elevated/70 to-dark-surface/80 p-8 text-center md:p-10">
          <h2 className="mb-3 text-2xl font-semibold text-text-primary md:text-3xl">
            Skip the manual brainwork
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-text-secondary md:text-base">
            Use the Strategy console for faster and more accurate strategy.
          </p>
          <Link
            href="/coming-soon?for=strategy-console"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-dark transition hover:-translate-y-0.5 hover:bg-primary-light"
          >
            Launch strategy console
          </Link>
        </div>
      </div>
    </section>
  )
}
