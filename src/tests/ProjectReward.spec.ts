import { render, fireEvent } from '@testing-library/vue'
import ProjectReward from '@/components/ProjectReward.vue'
import { ProjectReward as Reward } from '@/models/project'

const reward: Reward = {
  id: 1,
  name: 'Pen',
  detail: 'An awesome pen',
  left: 2,
  pledge: 3,
}

test('increments value on click', async () => {
  const { getByText } = render(ProjectReward, {
    props: {
      reward,
    },
  })

  getByText('Pen')
  getByText('Pledge $3 or more')
  getByText('An awesome pen')
  getByText('2 left')
})
