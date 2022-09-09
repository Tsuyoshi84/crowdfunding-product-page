import ProjectRewardBoxForm from './ProjectRewardBoxForm.vue'

describe('<ProjectRewardBoxForm />', () => {
  it('should show button', () => {
    cy.mount(ProjectRewardBoxForm)
      .getBySel('submit-button')
      .should('be.visible')
      .should('have.attr', 'type', 'submit')
      .should('have.text', 'Continue')
  })

  it('should show input', () => {
    cy.mount(ProjectRewardBoxForm)
      .get('input')
      .should('be.visible')
      .should('have.attr', 'type', 'number')
  })

  context('when input is empty', () => {
    it('should disable button', () => {
      cy.mount(ProjectRewardBoxForm)
        .getBySel('submit-button')
        .should('be.disabled')
    })
  })

  context('when input is not empty', () => {
    beforeEach(() => {
      cy.mount(ProjectRewardBoxForm, { props: { modelValue: 100 } })
    })

    it('should reflect input value', () => {
      cy.get('input').should('have.value', '100')
    })

    it('should enable button', () => {
      cy.getBySel('submit-button').should('not.be.disabled')
    })
  })
})
