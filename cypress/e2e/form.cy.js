describe("Form Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the form", () => {
    cy.get("form").should("be.visible");
  });

  it("should display validation errors for empty fields", () => {
    cy.get('button[type="submit"]').click();
    cy.contains("Name is required").should("be.visible");
    cy.contains("Invalid email address").should("be.visible");
    cy.contains("Country code is required").should("be.visible");
    cy.contains("Phone number is required").should("be.visible");
    cy.contains("Day is required").should("be.visible");
    cy.contains("Month is required").should("be.visible");
    cy.contains("Year is required").should("be.visible");
  });

  it("should submit the form with valid data", () => {
    const formData = {
      fullName: "John Doe",
      email: "john@example.com",
      countryCode: "US",
      phone: "1234567890",
      flightDate: {
        day: "01",
        month: "01",
        year: "2025",
      },
    };
    cy.fillForm(formData);
    cy.get('button[type="submit"]').click();
    cy.contains("Form data:").should("be.visible");
  });
});
