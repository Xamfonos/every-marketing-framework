import FrameworkPage from '@/components/FrameworkPage'
import { jobsToBeDoneFramework } from '@/lib/frameworks/jobs-to-be-done'

export default function JobsToBeDonePage() {
  return <FrameworkPage frameworkData={jobsToBeDoneFramework} />
}
