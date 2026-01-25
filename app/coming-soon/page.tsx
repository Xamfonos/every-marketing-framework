import ComingSoon from '@/components/ComingSoon'

type ComingSoonPageProps = {
  searchParams?: {
    for?: string | string[]
  }
}

export default function ComingSoonPage({ searchParams }: ComingSoonPageProps) {
  const label = typeof searchParams?.for === 'string' ? searchParams.for : undefined
  return <ComingSoon label={label} />
}
