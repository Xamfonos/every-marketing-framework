import ComingSoon from '@/components/ComingSoon'

type RoadmapComingSoonProps = {
  params: {
    slug: string
  }
}

export default function RoadmapComingSoon({ params }: RoadmapComingSoonProps) {
  return <ComingSoon label={`${params.slug}-roadmap`} />
}
