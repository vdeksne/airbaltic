import { setActivePinia, createPinia, defineStore } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";

export const useFormStore = defineStore("form", {
  state: () => ({
    formData: {
      fullName: "",
      email: "",
      countryCode: "",
      mobilePhone: "",
      flightNumber: "",
      flightDate: {
        day: "",
        month: "",
        year: "",
      },
      flights: [],
    },
    errors: {},
  }),
  actions: {
    updateFormData(key, value) {
      this.formData[key] = value;
    },
    resetForm() {
      this.formData = {
        fullName: "",
        email: "",
        countryCode: "",
        mobilePhone: "",
        flightNumber: "",
        flightDate: {
          day: "",
          month: "",
          year: "",
        },
        flights: [],
      };
      this.errors = {};
    },
    validateForm() {
      this.errors = {};
      if (!this.formData.fullName) {
        this.errors.fullName = "Name and surname are required";
      }
      if (!this.formData.email.includes("@")) {
        this.errors.email = "Invalid email";
      }
      return Object.keys(this.errors).length === 0;
    },
    async submitForm() {
      if (this.validateForm()) {
        // Simulate form submission
        return true;
      }
      return false;
    },
    addFlight() {
      this.formData.flights.push({});
    },
    deleteFlight(index) {
      this.formData.flights.splice(index, 1);
    },
    updateFlightDate(key, value) {
      this.formData.flightDate[key] = value;
    },
  },
});

describe("Form Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("initializes with default values", () => {
    const store = useFormStore();
    expect(store.formData.fullName).toBe("");
    expect(store.formData.email).toBe("");
  });

  it("updates form data", () => {
    const store = useFormStore();
    store.updateFormData("fullName", "John Doe");
    expect(store.formData.fullName).toBe("John Doe");
  });

  it("resets form data", () => {
    const store = useFormStore();
    store.updateFormData("fullName", "John Doe");
    store.resetForm();
    expect(store.formData.fullName).toBe("");
  });

  it("validates form data", () => {
    const store = useFormStore();
    store.updateFormData("fullName", "John Doe");
    store.updateFormData("email", "john@example.com");
    store.updateFormData("countryCode", "US");
    store.updateFormData("phone", "1234567890");
    store.updateFlightDate("day", "01");
    store.updateFlightDate("month", "01");
    store.updateFlightDate("year", "2025");
    expect(store.validateForm()).toBe(true);
    expect(store.errors).toEqual({});
  });

  it("updates flight date", () => {
    const store = useFormStore();
    store.updateFlightDate("day", "01");
    expect(store.formData.flightDate.day).toBe("01");
    store.updateFlightDate("month", "01");
    expect(store.formData.flightDate.month).toBe("01");
    store.updateFlightDate("year", "2025");
    expect(store.formData.flightDate.year).toBe("2025");
  });

  it("handles form submission", async () => {
    const store = useFormStore();
    store.updateFormData("fullName", "John Doe");
    store.updateFormData("email", "john@example.com");
    store.updateFormData("countryCode", "+371");
    store.updateFormData("mobilePhone", "123456789");
    store.updateFormData("flightNumber", "AB123");
    store.updateFlightDate("day", "01");
    store.updateFlightDate("month", "01");
    store.updateFlightDate("year", "2025");

    const result = await store.submitForm();
    expect(result).toBe(true);
    expect(store.errors).toEqual({});
  });

  it("handles validation errors", () => {
    const store = useFormStore();
    store.updateFormData("fullName", "");
    store.updateFormData("email", "invalid-email");
    store.updateFormData("countryCode", "+371");
    store.updateFormData("mobilePhone", "123456789");
    store.updateFormData("flightNumber", "AB123");
    store.updateFlightDate("day", "01");
    store.updateFlightDate("month", "01");
    store.updateFlightDate("year", "2025");

    const result = store.validateForm();
    expect(result).toBe(false);
    expect(store.errors).toEqual({
      email: "Invalid email",
      fullName: "Name and surname are required",
    });
  });

  it("handles add flight button click", () => {
    const store = useFormStore();
    store.addFlight();
    expect(store.formData.flights.length).toBe(1);
  });

  it("handles delete flight button click", () => {
    const store = useFormStore();
    store.addFlight();
    store.deleteFlight(0);
    expect(store.formData.flights.length).toBe(0);
  });
});
