describe('User Input Form', () => {
  it('successfully submits form and displays sentiment score', () => {
    cy.visit('http://localhost:3000'); 

    cy.get('#input-field')
      .type('I am happy!') // replace with your own test sentence
      .should('have.value', 'I am happy!');

    cy.get('button[type="submit"]').click();

    cy.get('#gauge-chart1').should('exist');
  });

  it('displays error message when server returns error', () => {
    cy.visit('http://localhost:3000'); // replace with the URL of your app

    cy.intercept('GET', 'http://127.0.0.1:5000/get_sentiment/*', {
      statusCode: 500,
      body: 'Internal Server Error',
    });

    cy.get('#input-field')
      .type('This is a test sentence') // replace with your own test sentence
      .should('have.value', 'This is a test sentence');

    cy.get('button[type="submit"]').click();

    cy.get('.error-message').should('be.visible');
    cy.get('.error-message').should('contain', 'Sorry something went wrong, please try again');
  });
});
