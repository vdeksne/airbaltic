import { setActivePinia, createPinia } from "pinia";
import { useFormStore } from "../store/formStore";
import { describe, it, expect, beforeEach } from "vitest";

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
});
