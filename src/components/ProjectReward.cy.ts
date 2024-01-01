import type { ProjectReward as Reward } from '@/models/project'
import ProjectReward from './ProjectReward.vue'

const reward: Reward = {
	id: 1,
	name: 'Pen',
	detail: 'An awesome pen',
	stock: 101,
	pledge: 3,
}

describe('<ProjectReward>', () => {
	beforeEach(() => {
		cy.mount(ProjectReward, { props: { reward } })
	})

	it('shows texts', () => {
		cy.getBySel('name').should('contain.text', reward.name).should('be.visible')
		cy.getBySel('pledge')
			.should('contain.text', 'Pledge $3 or more')
			.should('be.visible')
		cy.getBySel('detail')
			.should('contain.text', reward.detail)
			.should('be.visible')
		cy.getBySel('number')
			.should('contain.text', reward.stock)
			.should('be.visible')
	})
})
