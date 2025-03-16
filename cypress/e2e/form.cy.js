describe("Form Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the form", () => {
    cy.get("form").should("be.visible");
  });

  it("should have a submit button", () => {
    cy.get('button[type="submit"]').should("be.visible");
  });
});
