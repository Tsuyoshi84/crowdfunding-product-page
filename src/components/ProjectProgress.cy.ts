import { Project } from '@/models/project'
import ProjectProgress from './ProjectProgress.vue'

const project: Project = {
  id: 1,
  name: 'An awesome project',
  description: 'This is an awesome project',
  detail: 'This is an awesome project',
  bookmarked: false,
  targetAmount: 10000,
  currentAmount: 2000,
  numOfBuckers: 2,
  daysLeft: 10,
  rewards: [
    {
      id: 1,
      name: 'Pen',
      detail: 'An awesome pen',
      stock: 2,
      pledge: 3,
    },
  ],
}

describe('<ProjectProgress />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(ProjectProgress, { props: { project } })
  })
})
