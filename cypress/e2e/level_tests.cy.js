describe('Level.me QA Test Suite', () => {

  // TEST 1 - Page loads successfully
  it('Homepage loads and is visible', () => {
    cy.visit('https://www.level.me')
    cy.get('body').should('be.visible')
  })

  // TEST 2 - Mission statement is present
  it('Mission statement contains key message', () => {
    cy.visit('https://www.level.me')
    cy.contains('learning technology').should('exist')
  })

  // TEST 3 - Page title is correct
  it('Page has correct title', () => {
    cy.visit('https://www.level.me')
    cy.title().should('include', 'Level')
  })

  // TEST 4 - Key sections exist on the page
  it('Homepage contains For Students section', () => {
    cy.visit('https://www.level.me')
    cy.contains('For Students').should('be.visible')
  })

  // TEST 5 - Navigation link exists
  it('Job listings link is present', () => {
    cy.visit('https://www.level.me')
    cy.contains('Job Listings').should('exist')
  })

})