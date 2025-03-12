import { defineStore } from "pinia";
import { z } from "zod";

const formSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  countryCode: z.string().min(1, "Country code is required"),
  phone: z.string().min(1, "Phone number is required"),
  flightNumber: z.string().optional(),
  flightDate: z.object({
    day: z.string().min(1, "Day is required"),
    month: z.string().min(1, "Month is required"),
    year: z.string().min(1, "Year is required"),
  }),
});

export const useFormStore = defineStore("form", {
  state: () => ({
    formData: {
      fullName: "",
      email: "",
      countryCode: "",
      phone: "",
      flightNumber: "",
      flightDate: {
        day: "",
        month: "",
        year: "",
      },
    },
    errors: {},
  }),
  actions: {
    validateForm() {
      try {
        formSchema.parse(this.formData);
        this.errors = {};
        return true;
      } catch (e) {
        if (e instanceof z.ZodError) {
          this.errors = e.errors.reduce((acc, error) => {
            acc[error.path.join(".")] = error.message;
            return acc;
          }, {});
        }
        return false;
      }
    },
    updateFormData(field, value) {
      this.formData[field] = value;
    },
    updateFlightDate(field, value) {
      this.formData.flightDate[field] = value;
    },
    resetForm() {
      this.formData = {
        fullName: "",
        email: "",
        countryCode: "",
        phone: "",
        flightNumber: "",
        flightDate: {
          day: "",
          month: "",
          year: "",
        },
      };
      this.errors = {};
    },
  },
});
