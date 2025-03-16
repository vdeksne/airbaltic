<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <div class="form-main">
      <div class="form-container">
        <div class="form-container-a">
          <h1>Contact details</h1>
          <p>
            Something also goes here, so it doesn't look that lonely down here
          </p>
        </div>
        <div class="form-container-b">
          <UFormField
            class="input-lg-container label"
            label="Name, surname"
            name="nameSurname"
            :autofill="true"
          >
            <UInput
              class="input-lg box-style input-txt"
              v-model="state.nameSurname"
            />
          </UFormField>

          <UFormField label="Email" name="email" class="label" :autofill="true">
            <UInput
              class="input-lg box-style input-txt"
              v-model="state.email"
            />
          </UFormField>

          <div class="flex space-x-4 relative">
            <UFormField
              label="Country Code"
              name="countryCode"
              class="label"
              :autofill="true"
              label-class="custom-label"
            >
              <UInput
                class="input-sm box-style input-txt"
                v-model="state.countryCode"
                placeholder="+371"
              />
            </UFormField>

            <UFormField
              label="Mobile Phone"
              name="mobilePhone"
              class="label"
              :autofill="true"
            >
              <UInput
                class="input-mobile box-style input-txt"
                v-model="state.mobilePhone"
              />
            </UFormField>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="form-container light-top-txt flight-text-p">
        <div class="form-container-a">
          <h1>Select flight</h1>
          <h4 class="flight-text-p">
            Suspendisse elementum turpis ut volutpat ultricies. Mauris eget nisl
            diam. In vel felis in metus vulputate imperdiet vestibulum at dolor.
          </h4>
        </div>
        <div class="form-container-b">
          <UFormField
            label="Flight Number"
            name="flightNumber"
            class="label input-lg-container"
            :autofill="true"
          >
            <UInput
              class="input-lg box-style input-txt"
              v-model="state.flightNumber"
            />
          </UFormField>

          <p class="flight-top-txt">Flight date</p>

          <div class="date">
            <UFormField name="day" class="w-1/4 label" :autofill="true">
              <UInput
                class="input-txt input-xs box-style"
                v-model="state.day"
                placeholder="DD"
              />
            </UFormField>

            <UFormField name="month" class="w-1/4 label" :autofill="true">
              <UInput
                class="input-txt input-xs box-style"
                v-model="state.month"
                placeholder="MM"
              />
            </UFormField>

            <UFormField name="year" class="w-1/2 label" :autofill="true">
              <UInput
                class="input-txt input-year box-style"
                v-model="state.year"
                placeholder="YYYY"
              />
            </UFormField>
          </div>
          <small class="text-gray-500 small-text">For example: 30 8 1972</small>

          <div class="flex space-x-4 button-container">
            <UButton class="button-light" @click="addFlight">{{
              config.texts.secondaryButton
            }}</UButton>
            <UButton class="button-delete" @click="deleteFlight" color="error"
              >Delete Flight</UButton
            >
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="form-container">
        <div class="form-container-a">
          <p>
            By submitting this form you agree to <br />
            airBaltic's
            <a href="#" class="underline"> Privacy Policy</a>
          </p>
        </div>
        <div
          class="form-container-b button-confirm"
          :style="{ background: config.colors.secondary }"
        >
          <UButton type="submit">{{ config.texts.mainButton }}</UButton>
        </div>
      </div>
    </div>
  </UForm>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import { ref, reactive } from "vue";
import { config } from "@/config/config.js";

const schema = z.object({
  email: z.string().email("Invalid email"),
  nameSurname: z.string().nonempty("Name and surname are required"),
  mobilePhone: z.string().optional(),
  countryCode: z.string().optional(),
  flightNumber: z.string().optional(),
  day: z.string().optional(),
  month: z.string().optional(),
  year: z.string().optional(),
});

type Schema = z.output<typeof schema>;
const state = reactive<
  Partial<
    Schema & {
      year:
        | { label: string; value: { label: string; value: string } }
        | undefined;
    }
  >
>({
  email: undefined,
  nameSurname: undefined,
  mobilePhone: undefined,
  countryCode: undefined,
  flightNumber: undefined,
  day: undefined,
  month: undefined,
  year: undefined,
});

const toast = useToast();
function addFlight() {
  console.log("Add Flight button clicked");
}

function deleteFlight() {
  console.log("Delete Flight button clicked");
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "primary",
  });
  console.log(event.data);
}
const items = ref([
  "+371",
  "+44",
  "+49",
  "+33",
  "+39",
  "+34",
  "+31",
  "+32",
  "+46",
  "+47",
  "+45",
  "+358",
  "+48",
  "+43",
  "+41",
  "+351",
  "+30",
  "+353",
  "+420",
  "+36",
]);
const value = ref("+371");
</script>

<style lang="scss" scoped>
:root {
  --Sidebar-Background: #f9f9f9;
  --Text-Light: #999;
  --Brand-Green-Hover: #acb90c;
  --Brand-Blue: #152649;
  --Brand-Blue-UI: #313892;
  --Alert-Info: #e5f6ff;
  --Alert-Warning: #ffc;
  --Text-Description: rgba(21, 38, 73, 0.64);
  --Form-Border: #ced2d7;
  --Brand-White: #fff;
  --green-color: #cdda32;
  --font: "Roboto", sans-serif;
}
.form-main {
  background: var(--Sidebar-Background, #f9f9f9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1.7rem 3.8rem 2.2rem 1.5rem;
  @include m {
    margin: 0 -1.25rem;
    padding: 1.25rem;
  }
}
.date {
  display: flex;
  margin-bottom: -1rem;
  @include m {
    gap: 1rem;
  }
}
.form-container {
  display: flex;
  @include m {
    flex-direction: column;
    width: 100%;
  }
}
.form-container-a {
  width: 20rem;
  @include m {
    width: 100%;
    margin-bottom: 2rem;
  }
}
.form-container-b {
  width: 25rem;
  @include m {
    width: 100%;
  }
}
.form-container h1 {
  color: var(--Brand-Blue, #152649);
  font-family: var(--font);
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1875rem; /* 118.75% */
  margin-bottom: 0.8rem;
}
.form-container p {
  color: var(--Text-Description, rgba(21, 38, 73, 0.64));
  font-family: var(--font);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  max-width: 15.9375rem;
}
.box-style {
  border: 1px solid var(--Form-Border, #ced2d7);
  background: var(--Brand-White, #fff);
  height: 3rem;
  @include m {
    width: 100%;
  }
}
.input-lg {
  width: 20.9375rem;
  @include m {
    width: 100%;
  }
}
.input-lg :first-child {
  height: 100%;
}

.z-index {
  z-index: 1000;
}

.input-sm :first-child {
  height: 100%;
}

.input-sm {
  width: 6.25rem;
  height: 3rem;
  flex-shrink: 0;
  overflow: auto !important;
  position: relative !important;
  z-index: 9000;
}
.input-mobile {
  width: 13.75rem;
  height: 3rem;
  flex-shrink: 0;
  @include m {
    width: 10rem;
  }
}
.input-mobile :first-child {
  height: 100%;
}
.label {
  color: var(--Brand-Blue, #152649);
  font-family: var(--font);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.875rem;
  padding: 0 0 1rem;
}
.input-txt {
  color: var(--Brand-Blue, #152649);
  font-family: var(--font);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  margin-top: 0.5rem;
  @include m {
    width: 100%;
  }
}

.input-txt :first-child {
  padding-left: 1rem;
  height: 100%;
}
.input-xs {
  width: 4.875rem;
  height: 3rem;
  flex-shrink: 0;
}
.input-xs :first-child {
  height: 100%;
}
.input-year {
  width: 6.375rem;
  height: 3rem;
  flex-shrink: 0;
}
.input-year :first-child {
  height: 100%;
}
.small-text {
  color: var(--Text-Description, rgba(21, 38, 73, 0.64));
  font-family: var(--font);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.875rem; /* 116.667% */
  width: 8.625rem;
  overflow: visible;
  padding-top: -1rem;
}
// .flight-top-txt {
//   color: var(--Brand-Blue, #152649) !important;
//   font-family: var(--font);
//   font-size: 0.75rem;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 0.875rem; /* 116.667% */
// }
.light-top-txt p {
  color: var(--Brand-Blue, #152649);
  font-family: var(--font);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.875rem; /* 116.667% */
}
input {
  color: var(--Brand-Blue, #152649);
  font-family: var(--font);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 125% */
}
.flight-text-p h4 {
  color: var(--Text-Description, rgba(21, 38, 73, 0.64));
  font-family: var(--font);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  max-width: 15.3125rem;
}
.button-light {
  width: 7.5rem;
  height: 2.75rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: 1px solid var(--Brand-Blue-UI, #313892);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--Brand-Blue-UI, #313892);
  font-family: var(--font);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.875rem; /* 100% */
}
.button-delete {
  color: var(--Text-Description, rgba(21, 38, 73, 0.64));
  font-family: var(--font);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.875rem; /* 100% */
}
.button-container {
  margin-top: 1.8rem;
  margin: 1.8rem 0 1.3rem;
}
.button-confirm {
  width: 10rem;
  height: 3.25rem;
  flex-shrink: 0;
  color: var(--Brand-White, #fff);
  font-family: var(--font);
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.875rem; /* 87.5% */
  border-radius: 0.25rem;
  background: var(--Brand-Blue-UI, #313892);
  display: flex;
  justify-content: center;
  align-items: center;
  @include m {
    margin-top: 1.7rem;
  }
}
.line {
  width: 46.25rem;
  height: 0.0625rem;
  background: #e2e4e9;
  margin: 1rem 0 2rem;
  @include m {
    width: 100%;
  }
}
</style>
