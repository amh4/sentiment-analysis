describe('User Input Form', () => {
  it('successfully submits form and displays sentiment score', () => {
    cy.visit('http://localhost:3000'); 

    cy.get('#input-field')
      .type('I am happy!') // replace with your own test sentence
      .should('have.value', 'I am happy!');

    cy.get('button[type="submit"]').click();

    cy.get('#gauge-chart1').should('exist');
  });
});