import { render } from '@testing-library/vue'
import ProjectAbout from '@/components/ProjectAbout.vue'
import { Project } from '@/models/project'

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

test('increments value on click', async () => {
  const { getByText } = render(ProjectAbout, {
    props: {
      project,
    },
  })

  getByText(project.detail)
})
