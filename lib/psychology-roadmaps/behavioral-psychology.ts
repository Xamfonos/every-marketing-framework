import { RoadmapData } from '@/lib/types'

export const behavioralPsychologyRoadmap: RoadmapData = {
  slug: 'behavioral-psychology',
  title: 'Behavioral Psychology',
  description: 'Master the psychology of behavior change and habit formation',
  icon: '🧠',
  difficulty: 'beginner',
  duration: '3-4 months',
  totalTopics: 8,
  
  nodes: [
    {
      id: '1',
      title: 'Behavior Basics',
      subtitle: 'Understand what drives behavior',
      x: 100,
      y: 100,
      width: 200,
      height: 100,
      status: 'completed',
      description: 'Learn the fundamental principles of human behavior and what causes people to act.',
      whatYouLearn: [
        'What triggers human behavior',
        'The relationship between motivation and action',
        'Why people resist change',
        'How context shapes behavior'
      ],
      frameworks: [
        { name: 'BJ Fogg Behavior Model', link: '/frameworks//frameworks/fogg-behavior-model' },
        { name: 'COM-B Model', link: '/frameworks//frameworks/com-b-model' },
        { name: 'Behavior Change Wheel', link: '/frameworks//frameworks/behavior-change-wheel' }
      ],
      prerequisites: []
    },
    {
      id: '2',
      title: 'Motivation & Ability',
      subtitle: 'The MAT framework',
      x: 350,
      y: 100,
      width: 200,
      height: 100,
      status: 'locked',
      description: 'Deep dive into motivation, ability, and triggers - the three elements required for behavior.',
      whatYouLearn: [
        'How to increase motivation effectively',
        'Making behaviors easier to do',
        'The role of triggers in behavior',
        'When to focus on motivation vs ability'
      ],
      frameworks: [
        { name: 'BJ Fogg Behavior Model', link: '/frameworks/fogg-behavior-model' },
        { name: 'Self-Determination Theory', link: '/frameworks/self-determination-theory' }
      ],
      prerequisites: ['1']
    },
    {
      id: '3',
      title: 'Habit Formation',
      subtitle: 'How habits are created',
      x: 100,
      y: 250,
      width: 200,
      height: 100,
      status: 'locked',
      description: 'Understand the psychology and neuroscience of habit formation.',
      whatYouLearn: [
        'The habit loop: cue, routine, reward',
        'How long habits take to form',
        'Why habits are hard to break',
        'Building new habits effectively'
      ],
      frameworks: [
        { name: 'The Hook Model', link: '/frameworks/hook-model' },
        { name: 'Habit Stacking', link: '/frameworks/habit-stacking' },
        { name: 'Tiny Habits', link: '/frameworks/tiny-habits' }
      ],
      prerequisites: ['1', '2']
    },
    {
      id: '4',
      title: 'Triggers & Prompts',
      subtitle: 'What initiates behavior',
      x: 350,
      y: 250,
      width: 200,
      height: 100,
      status: 'locked',
      description: 'Master the art of triggering desired behaviors at the right time.',
      whatYouLearn: [
        'External vs internal triggers',
        'Designing effective prompts',
        'Trigger frequency and timing',
        'Transitioning to internal triggers'
      ],
      frameworks: [
        { name: 'The Hook Model', link: '/frameworks/hook-model' },
        { name: 'Trigger Design', link: '/frameworks/trigger-design' }
      ],
      prerequisites: ['2', '3']
    },
    {
      id: '5',
      title: 'Rewards & Reinforcement',
      subtitle: 'What sustains behavior',
      x: 100,
      y: 400,
      width: 200,
      height: 100,
      status: 'locked',
      description: 'Learn how rewards shape behavior and create lasting change.',
      whatYouLearn: [
        'Fixed vs variable rewards',
        'Intrinsic vs extrinsic motivation',
        'Reward timing and frequency',
        'The three types of rewards'
      ],
      frameworks: [
        { name: 'The Hook Model', link: '/frameworks/hook-model' },
        { name: 'Variable Rewards', link: '/frameworks/variable-rewards' },
        { name: 'Gamification', link: '/frameworks/gamification' }
      ],
      prerequisites: ['3', '4']
    },
    {
      id: '6',
      title: 'Nudge Theory',
      subtitle: 'Choice architecture',
      x: 350,
      y: 400,
      width: 200,
      height: 100,
      status: 'locked',
      description: 'Use subtle changes in environment to influence behavior without restricting choice.',
      whatYouLearn: [
        'What nudges are and how they work',
        'Designing choice architecture',
        'Ethical use of nudges',
        'Default options and their power'
      ],
      frameworks: [
        { name: 'Nudge Theory', link: '/frameworks/nudge-theory' },
        { name: 'Choice Architecture', link: '/frameworks/choice-architecture' },
        { name: 'Default Effects', link: '/frameworks/default-effects' }
      ],
      prerequisites: ['2', '4']
    },
    {
      id: '7',
      title: 'Behavior Design',
      subtitle: 'Systematic change',
      x: 100,
      y: 550,
      width: 200,
      height: 100,
      status: 'locked',
      description: 'Apply behavior psychology systematically to design products and experiences.',
      whatYouLearn: [
        'The behavior design process',
        'Mapping user behaviors',
        'Testing behavior interventions',
        'Scaling behavior change'
      ],
      frameworks: [
        { name: 'Behavior Design Process', link: '/frameworks/behavior-design' },
        { name: 'BJ Fogg Behavior Model', link: '/frameworks/fogg-behavior-model' }
      ],
      prerequisites: ['3', '5', '6']
    },
    {
      id: '8',
      title: 'Habit Products',
      subtitle: 'Building sticky experiences',
      x: 350,
      y: 550,
      width: 200,
      height: 100,
      status: 'locked',
      description: 'Create products and experiences that users return to automatically.',
      whatYouLearn: [
        'The four stages of the Hook',
        'Investment mechanics',
        'Building for retention',
        'Ethics of habit-forming products'
      ],
      frameworks: [
        { name: 'The Hook Model', link: '/frameworks/hook-model' },
        { name: 'Retention Frameworks', link: '/frameworks/retention-frameworks' },
        { name: 'Manipulation Matrix', link: '/frameworks/manipulation-matrix' }
      ],
      prerequisites: ['3', '4', '5', '7']
    }
  ],
  
  connections: [
    { from: '1', to: '2', completed: false },
    { from: '1', to: '3', completed: false },
    { from: '2', to: '3', completed: false },
    { from: '2', to: '4', completed: false },
    { from: '3', to: '4', completed: false },
    { from: '3', to: '5', completed: false },
    { from: '4', to: '5', completed: false },
    { from: '2', to: '6', completed: false },
    { from: '4', to: '6', completed: false },
    { from: '3', to: '7', completed: false },
    { from: '5', to: '7', completed: false },
    { from: '6', to: '7', completed: false },
    { from: '3', to: '8', completed: false },
    { from: '4', to: '8', completed: false },
    { from: '5', to: '8', completed: false },
    { from: '7', to: '8', completed: false }
  ]
}
