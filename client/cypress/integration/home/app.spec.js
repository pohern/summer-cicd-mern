/* eslint-disable no-undef */
/// <reference types="cypress" />


describe("Home page with default data", () => {
    beforeEach(() => {
        cy.exec('cd .. && npm run seed')
        cy.visit('http://localhost:3001');
    });
    it("Displays three restaurants", () => {
        cy.get("#restaurants-display").children().should("have.length", 3);
    });
    it("Updates the input value", () => {
        cy.get('#name').type("Waffle House");
        cy.get('#name').should('have.value', 'Waffle House');
    });
    it("Should submit the form", () => {
        cy.get("#name").type("Waffle House{enter}");
        cy.get("#restaurants-display").children().should("have.length", 4);
    })
});