import SentimentGauge from "./sentimentGauge";

describe("SentimentGauge component", () => {
  it("should render a gauge chart", () => {
    cy.mount(<SentimentGauge sentenceScore={0.6}/>)
    cy.get('#gauge-chart1').should('be.visible')
  })
})