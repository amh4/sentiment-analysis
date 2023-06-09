import UserInput from "./userInput";

describe("UserInput component", () => {
  it("should render a form to input text", () => {
    cy.mount(<UserInput/>);
    cy.get('.user-input-form').should('be.visible')
  });

  it("should render a SentimentGauge component", () => {
    cy.mount(<UserInput/>);
    cy.get('#gauge-chart1').should('be.visible')
  })

  it("should take in user input and render relevant components", () => {
    cy.mount(<UserInput/>);
    cy.get('#input-field').click();
    cy.get('#input-field').type('I am happy');
    cy.get('button').click();
    cy.get('form').submit();
  })
})