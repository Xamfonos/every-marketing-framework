import RoadmapPage from '@/components/RoadmapPage'
import { demandgenerationRoadmap } from '@/lib/roadmaps/demand-generation'

export default function DemandGenerationRoadmap() {
  return <RoadmapPage roadmapData={demandgenerationRoadmap} />
}
