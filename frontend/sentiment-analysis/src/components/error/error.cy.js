import Error from "./error";

describe("Error component", () => {
  it("should render an error message", () => {
    const message = "Sorry something went wrong, please try again";
    cy.mount(<Error errorMessage={message}/>);
    cy.get('.error-message').should('have.text', message)
  })
})