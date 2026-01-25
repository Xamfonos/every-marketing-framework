import Link from 'next/link'
import Header from '@/components/Header'

type ComingSoonProps = {
  label?: string
}

const formatLabel = (label?: string) => {
  if (!label) return ''
  return label
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

export default function ComingSoon({ label }: ComingSoonProps) {
  const displayLabel = formatLabel(label)

  return (
    <main className="min-h-screen bg-white text-[#0A0A0A]">
      <Header />
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[720px] text-center">
          <h1 className="text-[40px] font-semibold leading-[48px] tracking-[-1px] md:text-[56px] md:leading-[64px]">
            Coming soon
          </h1>
          <p className="mt-4 text-base text-[#6B7280]">We're building this next.</p>
          {displayLabel && <p className="mt-2 text-sm text-[#9CA3AF]">Up next: {displayLabel}.</p>}
        </div>

        <div className="mx-auto mt-12 max-w-[720px] rounded-2xl border border-[#E5E7EB] bg-white p-8 text-left shadow-sm">
          <h2 className="text-lg font-semibold text-[#0A0A0A]">What it will include</h2>
          <ul className="mt-4 space-y-3 text-sm text-[#6B7280]">
            <li>Curated workflows and templates.</li>
            <li>AI guidance tailored to your market context.</li>
            <li>Clear milestones with measurable outputs.</li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/coming-soon?for=strategy-console"
              className="rounded-lg bg-[#2563EB] px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-md"
            >
              Go to Strategy Console
            </Link>
            <Link
              href="/"
              className="rounded-lg border border-[#D1D5DB] px-6 py-3 text-center text-sm font-medium text-[#0A0A0A] transition-all hover:bg-[#FAFAFA]"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
