import { render, fireEvent } from '@testing-library/vue'
import ProjectSummary from '@/components/ProjectSummary.vue'
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
      left: 2,
      pledge: 3,
    },
  ],
}

test('increments value on click', async () => {
  const { getByText, emitted } = render(ProjectSummary, {
    props: {
      project,
    },
  })

  getByText('An awesome project')
  getByText('This is an awesome project')
  getByText('Bookmarked: false')

  const button = getByText('Back this project')

  await fireEvent.click(button)
  await fireEvent.click(button)

  expect(emitted()['toggleBookmark']).toHaveLength(2)
})
