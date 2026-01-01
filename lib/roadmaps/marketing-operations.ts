import { RoadmapData } from '../types'
export const marketingoperationsRoadmap: RoadmapData = {
  slug: 'marketing-operations', title: 'Marketing Operations', description: 'Implement tech stacks, automate workflows, and build scalable marketing infrastructure.', icon: '⚙️', difficulty: 'advanced', duration: '5-7 months', totalTopics: 10,
  nodes: [
    { id: 'start', title: 'START', x: 300, y: 20, width: 200, height: 60, status: 'completed', description: 'Begin MarOps journey', whatYouLearn: [], frameworks: [], prerequisites: [] },
    { id: 'foundations', title: 'MarOps Foundations', subtitle: 'Process · Data · Systems', x: 250, y: 120, width: 300, height: 80, status: 'in-progress', description: 'Core MarOps principles', whatYouLearn: ['Process design', 'Data management', 'Systems thinking'], frameworks: [{ name: 'MarOps Framework', link: '/frameworks/marops' }], prerequisites: [] },
    { id: 'tech-stack', title: 'Marketing Tech Stack', subtitle: 'CRM · Automation · Analytics', x: 250, y: 240, width: 300, height: 80, status: 'locked', description: 'Build marketing technology infrastructure', whatYouLearn: ['Tech selection', 'Stack integration', 'Vendor management'], frameworks: [{ name: 'Tech Stack Guide', link: '/frameworks/tech-stack' }], prerequisites: ['MarOps Foundations'] },
    { id: 'automation', title: 'Marketing Automation', subtitle: 'Workflows · Triggers · Nurture', x: 250, y: 360, width: 300, height: 80, status: 'locked', description: 'Implement marketing automation', whatYouLearn: ['Workflow design', 'Automation strategy', 'Lead nurture'], frameworks: [{ name: 'Automation Playbook', link: '/frameworks/automation' }], prerequisites: ['Marketing Tech Stack'] },
    { id: 'data', title: 'Data Management', subtitle: 'Quality · Integration · Governance', x: 250, y: 480, width: 300, height: 80, status: 'locked', description: 'Master data operations', whatYouLearn: ['Data quality', 'Integration patterns', 'Governance frameworks'], frameworks: [{ name: 'Data Management Guide', link: '/frameworks/data-mgmt' }], prerequisites: ['Marketing Automation'] },
    { id: 'analytics', title: 'Marketing Analytics', subtitle: 'Metrics · Dashboards · Attribution', x: 250, y: 600, width: 300, height: 80, status: 'locked', description: 'Build analytics infrastructure', whatYouLearn: ['Analytics setup', 'Dashboard design', 'Attribution modeling'], frameworks: [{ name: 'Analytics Framework', link: '/frameworks/analytics' }], prerequisites: ['Data Management'] },
    { id: 'reporting', title: 'Reporting & Insights', subtitle: 'Reporting · Visualization · Communication', x: 250, y: 720, width: 300, height: 80, status: 'locked', description: 'Create reporting systems', whatYouLearn: ['Report design', 'Data visualization', 'Stakeholder communication'], frameworks: [{ name: 'Reporting Guide', link: '/frameworks/reporting' }], prerequisites: ['Marketing Analytics'] },
    { id: 'optimization', title: 'Process Optimization', subtitle: 'Efficiency · Scale · Quality', x: 250, y: 840, width: 300, height: 80, status: 'locked', description: 'Optimize marketing processes', whatYouLearn: ['Process improvement', 'Efficiency gains', 'Quality assurance'], frameworks: [{ name: 'Optimization Framework', link: '/frameworks/optimization' }], prerequisites: ['Reporting & Insights'] },
    { id: 'governance', title: 'Marketing Governance', subtitle: 'Compliance · Security · Policy', x: 250, y: 960, width: 300, height: 80, status: 'locked', description: 'Establish governance frameworks', whatYouLearn: ['Compliance management', 'Data security', 'Policy development'], frameworks: [{ name: 'Governance Guide', link: '/frameworks/governance' }], prerequisites: ['Process Optimization'] },
    { id: 'complete', title: '🎉 MASTERY', x: 300, y: 1080, width: 200, height: 60, status: 'locked', description: 'Completed Marketing Operations!', whatYouLearn: [], frameworks: [], prerequisites: ['Marketing Governance'] },
  ],
  connections: [
    { from: 'start', to: 'foundations', completed: true },
    { from: 'foundations', to: 'tech-stack', completed: false },
    { from: 'tech-stack', to: 'automation', completed: false },
    { from: 'automation', to: 'data', completed: false },
    { from: 'data', to: 'analytics', completed: false },
    { from: 'analytics', to: 'reporting', completed: false },
    { from: 'reporting', to: 'optimization', completed: false },
    { from: 'optimization', to: 'governance', completed: false },
    { from: 'governance', to: 'complete', completed: false },
  ],
}
