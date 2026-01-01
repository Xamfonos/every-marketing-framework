import { RoadmapData } from '../types'
import { growthMarketingRoadmap } from './growth-marketing'
import { contentMarketingRoadmap } from './content-marketing'
import { productMarketingRoadmap } from './product-marketing'
import { performanceMarketingRoadmap } from './performance-marketing'
import { brandMarketingRoadmap } from './brand-marketing'
import { marketingoperationsRoadmap } from './marketing-operations'
import { demandgenerationRoadmap } from './demand-generation'
import { customermarketingRoadmap } from './customer-marketing'
import { developerMarketingRoadmap } from './developer-marketing'

export const roadmaps: Record<string, RoadmapData> = {
  'growth-marketing': growthMarketingRoadmap,
  'content-marketing': contentMarketingRoadmap,
  'product-marketing': productMarketingRoadmap,
  'performance-marketing': performanceMarketingRoadmap,
  'brand-marketing': brandMarketingRoadmap,
  'marketing-operations': marketingoperationsRoadmap,
  'demand-generation': demandgenerationRoadmap,
  'customer-marketing': customermarketingRoadmap,
  'developer-marketing': developerMarketingRoadmap,
}

export function getRoadmap(slug: string): RoadmapData | undefined {
  return roadmaps[slug]
}

export function getAllRoadmapSlugs(): string[] {
  return Object.keys(roadmaps)
}
