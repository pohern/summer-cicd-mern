/* eslint-disable no-undef */
/// <reference types="cypress" />


describe("Home page with default data", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001');
    });
    it("Displays three restaurants", () => {
        cy.get("#restaurants-display").children().should("have.length", 3);
    });
});