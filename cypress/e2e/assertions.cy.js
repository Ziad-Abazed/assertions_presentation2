/// <reference types="cypress"/>

describe("Almosafer Website Test", () => {
  beforeEach(() => {
    cy.visit("https://www.almosafer.com/ar");
    cy.get('.cta__saudi').click()
  });

  it("should set the departure date to today's date + 1", () => {
    const date= new Date();
    const today = date.getDate()
    const departureDay=today+1;
    cy.get('[data-testid="FlightSearchBox__FromDateButton"] .sc-eSePXt').invoke("text").should("eq",`${departureDay} `)
  
  });

  it("should set the return date to today's date + 2", () => { 
    const date= new Date();
    const today = date.getDate()
    const returnDay=today+2;
    cy.get('[data-testid="FlightSearchBox__ToDateButton"] .sc-eSePXt').invoke("text").should("eq",`${returnDay}`) 

  });

  it("should set the flight class to economy by default", () => {
     cy.get('.sc-jWxkHr').invoke('text').should("include", "السياحية");
     cy.get('[data-testid="Header__LanguageSwitch"]').click()
     cy.get('.sc-jWxkHr').invoke('text').should("include", "Economy");

  });
});
