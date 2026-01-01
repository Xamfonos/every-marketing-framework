export interface FrameworkSection {
  title: string
  content: string | string[]
  embeddedResources?: EmbeddedResource[] // Optional resources to embed after this section
}

export interface FrameworkExample {
  company: string
  situation: string
  application: string
  result: string
}

export interface FrameworkTemplate {
  name: string
  description: string
  downloadUrl?: string
}

export interface EmbeddedVideo {
  title: string
  author: string
  url: string // YouTube, Vimeo, etc.
  duration?: string
  whyWatch: string // Why we're recommending this specific video
}

export interface EmbeddedArticle {
  title: string
  author: string
  source: string
  url: string
  readTime?: string
  whyRead: string // Why we're recommending this specific article
}

export interface EmbeddedPodcast {
  title: string
  podcast: string
  host: string
  url: string
  duration?: string
  whyListen: string // Why we're recommending this specific podcast
}

export interface EmbeddedResource {
  type: 'video' | 'article' | 'podcast' | 'book' | 'course'
  data: EmbeddedVideo | EmbeddedArticle | EmbeddedPodcast
}

export interface LearningPathNode {
  slug: string
  title: string
  isCurrentFramework?: boolean
}

export interface LearningPath {
  description: string
  prerequisites: LearningPathNode[] // What to learn before this
  pathway: LearningPathNode[] // This framework + what comes after
  alternatives: LearningPathNode[] // Related but different approaches
}

export interface FrameworkData {
  slug: string
  title: string
  subtitle: string
  category: 'strategy' | 'psychology' | 'growth' | 'content' | 'product' | 'operations'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  readingTime: number // in minutes
  
  // Hero section
  overview: string
  whenToUse: string[]
  
  // Learning path context
  learningPath: LearningPath
  
  // OUR core teaching (this comes FIRST) - resources embedded inline
  coreConcepts: FrameworkSection[] // Our explanation with optional embedded resources
  
  // Practical application (still ours) - resources embedded inline
  howToApply: FrameworkSection[] // Step-by-step with optional embedded resources
  
  // Real-world proof
  examples: FrameworkExample[]
  
  // Templates & Resources (ours)
  templates: FrameworkTemplate[]
  
  // Related content
  relatedFrameworks: Array<{ title: string; slug: string }>
  relatedRoadmaps: Array<{ title: string; slug: string }>
}
