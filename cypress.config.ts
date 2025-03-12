import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Set this to the base URL of your Nuxt app
    supportFile: "cypress/support/e2e.ts",
    fixturesFolder: "cypress/fixtures",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
