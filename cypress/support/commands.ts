/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command to fill out the form
Cypress.Commands.add("fillForm", (formData) => {
  cy.get("#fullName").type(formData.fullName);
  cy.get("#email").type(formData.email);
  cy.get("#countryCode").type(formData.countryCode);
  cy.get("#phone").type(formData.phone);
  cy.get("#flightDateDay").type(formData.flightDate.day);
  cy.get("#flightDateMonth").type(formData.flightDate.month);
  cy.get("#flightDateYear").type(formData.flightDate.year);
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
      dismiss(
        subject: string,
        options?: Partial<TypeOptions>
      ): Chainable<Element>;
      visit(
        originalFn: CommandOriginalFn<any>,
        url: string,
        options: Partial<VisitOptions>
      ): Chainable<Element>;
      fillForm(formData: {
        fullName: string;
        email: string;
        countryCode: string;
        phone: string;
        flightDate: {
          day: string;
          month: string;
          year: string;
        };
      }): Chainable<void>;
    }
  }
}
