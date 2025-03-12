<template>
  <div class="form-container">
    <div v-show="!mobile" class="home-menu-container">
      <div class="home-menu">
        <h1 class="menu-h1">Home</h1>
        <div class="arrow">
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L8.45718 8.45718L1.00577 15.9086" stroke="#CED2D7" />
          </svg>
        </div>
        <h1 class="menu-h1">Contact us</h1>
        <div class="arrow">
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L8.45718 8.45718L1.00577 15.9086" stroke="#CED2D7" />
          </svg>
        </div>
        <h1 class="menu-h1">Submit a claim</h1>
        <div class="arrow">
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L8.45718 8.45718L1.00577 15.9086" stroke="#CED2D7" />
          </svg>
        </div>
        <h1 class="menu-h1 no-underline">Damaged baggage</h1>
      </div>
    </div>
    <div class="home-menu-container-mobile">
      <div class="menu-h1-mobile">
        <svg
          width="7"
          height="13"
          viewBox="0 0 7 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.99465 -1.90735e-06C6.24442 -1.90735e-06 6.4942 0.108274 6.66905 0.297758C7.04371 0.703796 7.04371 1.35346 6.66905 1.7595L2.29795 6.46954L6.719 11.2337C7.09367 11.6398 7.09367 12.2894 6.719 12.6955C6.34434 13.1015 5.74487 13.1015 5.3702 12.6955L0.274755 7.20042C0.0999107 7.01093 -9.53674e-07 6.74023 -9.53674e-07 6.46954C-9.53674e-07 6.19885 0.0999107 5.92816 0.274755 5.73868L5.32025 0.297758C5.49509 0.108274 5.74487 -1.90735e-06 5.99465 -1.90735e-06Z"
            fill="#313892"
          />
        </svg>
        <h1>Back to Contact us</h1>
      </div>
    </div>
  </div>
  <div class="menu-line"></div>
  <div class="form-container">
    <div class="sidebar-container-split">
      <div v-if="!mobile" class="sidebar-container">
        <div class="sidebar-header">Contact us</div>
        <div class="menu-line"></div>
        <div class="sidebar-header">
          International offices and representatives
        </div>
        <div class="menu-line"></div>
        <div class="sidebar-header">Items left on board</div>
        <div class="menu-line"></div>
        <div class="sidebar-header">Submit a claim</div>
        <div class="menu-line"></div>
        <div class="sidebar-header">Compliment us</div>
        <div class="menu-line"></div>
        <div class="sidebar-header">Ask a question</div>
        <div class="menu-line"></div>
        <div class="sidebar-header">Request assistance from us</div>
        <div class="menu-line"></div>
        <div class="sidebar-header">Other inquiries</div>
      </div>
    </div>
    <div class="content-container">
      <div class="form-container-inner">
        <div class="form-top">
          <div class="form-header">
            <h1>Request assistance from us</h1>
            <h2>
              Providing assistance to passengers with reduced mobility is part
              of our service at airBaltic.
            </h2>
            <div class="form-bulletpoints">
              <h3>We can help you:</h3>
              <div class="bullet-boxes">
                <ul class="green-bullets">
                  <li>Get to the aircraft</li>
                  <li>Board the aircraft</li>
                  <li>Move around the aircraft cabin if required</li>
                </ul>
                <ul class="green-bullets">
                  <li>Disembark the aircraft</li>
                  <li>Transfer between flights</li>
                </ul>
              </div>
            </div>
            <div class="info-boxes">
              <div class="info-box info-blue">
                <p>
                  Personal mobility equipment and guide dogs are carried free of
                  charge.
                </p>
              </div>
              <div class="info-box info-yellow">
                <p>
                  Please note, we are unable to provide eating assistance and
                  medical services.
                </p>
              </div>
            </div>
            <!-- form start -->
            <!-- component -->
            <form @submit.prevent="handleSubmit" class="form-submit">
              <div class="form-color-continer p-4 px-4 md:p-8 mb-6">
                <div
                  class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3"
                >
                  <div class="text-gray-600">
                    <p class="form-main-font-h font-medium text-lg">
                      Contact details
                    </p>
                    <p class="form-main-font-p">
                      Something also goes here, so it doesn't look that lonely
                      down here
                    </p>
                  </div>

                  <div class="lg:col-span-2">
                    <div
                      class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                    >
                      <div class="form-box-grid md:col-span-5">
                        <label for="full_name">Name, surname</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          class="form-box-lg h-10 border mt-1 px-4 w-full bg-gray-50"
                          v-model="formData.fullName"
                        />
                        <span v-if="errors['fullName']" class="text-red-500">{{
                          errors["fullName"]
                        }}</span>
                      </div>

                      <div class="form-box-grid md:col-span-5">
                        <label for="email">E-mail</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          class="form-box-lg h-10 border mt-1 px-4 w-full bg-gray-50"
                          v-model="formData.email"
                          placeholder=""
                        />
                        <span v-if="errors['email']" class="text-red-500">{{
                          errors["email"]
                        }}</span>
                      </div>

                      <div class="md:col-span-3 phone-box">
                        <div class="flex phone-box-inner">
                          <div class="phone-one">
                            <label for="country_code">Country code</label>
                            <select
                              name="country_code"
                              id="country_code"
                              class="country-code h-10 border mt-1 px-2 pr-8 w-1/4 bg-gray-50"
                              v-model="formData.countryCode"
                            >
                              <option disabled value="">{{ "+371" }}</option>
                              <option value="+371">+371 (Latvia)</option>
                              <option value="+91">+91 (India)</option>
                              <option value="+81">+81 (Japan)</option>
                              <option value="+61">+61 (Australia)</option>
                              <option value="+86">+86 (China)</option>
                              <option value="+1">+1 (USA)</option>
                              <option value="+44">+44 (UK)</option>
                              <option value="+49">+49 (Germany)</option>
                              <option value="+33">+33 (France)</option>
                            </select>
                            <span
                              v-if="errors['countryCode']"
                              class="text-red-500"
                              >{{ errors["countryCode"] }}</span
                            >
                          </div>

                          <div class="form-box-grid ml-2 w-3/4">
                            <label for="phone">Phone Number</label>
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              class="form-phone h-10 border mt-1 px-4 w-full bg-gray-50"
                              v-model="formData.phone"
                              placeholder=""
                            />
                            <span v-if="errors['phone']" class="text-red-500">{{
                              errors["phone"]
                            }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="menu-line"></div>
              <div class="form-color-continer p-4 px-4 md:p-8 mb-6">
                <div
                  class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3"
                >
                  <div class="text-gray-600">
                    <p class="form-main-font-h font-medium text-lg">
                      Select flight
                    </p>
                    <p class="form-main-font-p">
                      Suspendisse elementum turpis ut volutpat ultricies. Mauris
                      eget nisl diam. In vel felis in metus vulputate imperdiet
                      vestibulum at dolor.
                    </p>
                  </div>

                  <div class="lg:col-span-2">
                    <div
                      class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                    >
                      <div class="form-box-grid md:col-span-5">
                        <label for="flight_number">Flight number</label>
                        <input
                          type="text"
                          name="flight_number"
                          id="flight_number"
                          class="form-box-lg h-10 border mt-1 px-4 w-full bg-gray-50"
                          v-model="formData.flightNumber"
                        />
                        <span
                          v-if="errors['flightNumber']"
                          class="text-red-500"
                          >{{ errors["flightNumber"] }}</span
                        >
                      </div>

                      <div class="md:col-span-5">
                        <label for="flight_date">Flight Date</label>
                        <div class="flex">
                          <input
                            type="text"
                            name="day"
                            id="day"
                            class="form-box-s h-10 border mt-1 px-2 w-1/4 bg-gray-50"
                            v-model="formData.flightDate.day"
                            placeholder="DD"
                          />
                          <input
                            type="text"
                            name="month"
                            id="month"
                            class="form-box-s h-10 border mt-1 px-2 w-1/4 bg-gray-50 ml-2"
                            v-model="formData.flightDate.month"
                            placeholder="MM"
                          />
                          <select
                            name="year"
                            id="year"
                            class="form-box-m h-10 border mt-1 px-2 w-1/2 bg-gray-50 ml-2"
                            v-model="formData.flightDate.year"
                          >
                            <option disabled :value="null">{{ "YYYY" }}</option>
                            <option
                              v-for="year in getYears()"
                              :key="year"
                              :value="year"
                            >
                              {{ year }}
                            </option>
                          </select>
                        </div>
                        <p
                          v-if="errors['flightDate.day']"
                          class="text-red-500 text-sm"
                        >
                          {{ errors["flightDate.day"] }}
                        </p>
                        <p
                          v-if="errors['flightDate.month']"
                          class="text-red-500 text-sm"
                        >
                          {{ errors["flightDate.month"] }}
                        </p>
                        <p
                          v-if="errors['flightDate.year']"
                          class="text-red-500 text-sm"
                        >
                          {{ errors["flightDate.year"] }}
                        </p>
                      </div>
                      <div class="md:col-span-5">
                        <button class="cta-main">Add flight</button>
                        <button class="cta-delete">Delete flight</button>
                      </div>

                      <div class="md:col-span-5 text-right"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="menu-line"></div>
              <div class="form-bottom form-color-continer p-4 px-4 md:p-8 mb-6">
                <div
                  class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3"
                >
                  <div class="text-gray-600">
                    <p class="font-medium text-lg"></p>
                    <p class="form-main-font-p">
                      By submitting this form you agree to airBaltic’s Privacy
                      Policy
                    </p>
                  </div>

                  <div class="lg:col-span-2">
                    <div
                      class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                    >
                      <div class="md:col-span-5">
                        <button type="submit" class="cta">Confirm</button>
                      </div>
                      <!-- button -->
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <!-- form end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useFormStore } from "~/store/formStore";
import { z } from "zod";

export default defineComponent({
  name: "Form",
  data() {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: window.innerWidth,
    };
  },
  setup() {
    const mobile = ref(false);
    const mobileNav = ref(false);
    const windowWidth = ref(window.innerWidth);
    const formStore = useFormStore();
    const { formData, updateFormData, resetForm } = formStore;
    const errors = ref<{ [key: string]: string }>({});
    formData.flightDate.year = "";

    const handleSubmit = () => {
      handleSubmitForm();
      if (Object.keys(formErrors.value).length === 0) {
        // Handle form submission
        console.log("Form submitted:", formData);
      } else {
        console.log("Form validation failed:", formErrors.value);
      }
    };

    const getYears = () => {
      const currentYear = new Date().getFullYear();
      const years: number[] = [];
      for (let year = currentYear; year >= 1900; year--) {
        years.push(year);
      }
      return years;
    };

    const name = ref<string>("");
    const email = ref<string>("");
    const formErrors = ref<Record<string, string[]>>({});

    const formSchema = z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Invalid email address"),
    });

    const handleSubmitForm = () => {
      const result = formSchema.safeParse({
        name: name.value,
        email: email.value,
      });
      if (!result.success) {
        formErrors.value = result.error.flatten().fieldErrors;
        return;
      }
      formErrors.value = {};
      updateFormData({ fullName: name.value, email: email.value });
    };

    onMounted(() => {
      window.addEventListener("resize", checkScreen);
      checkScreen();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", checkScreen);
    });

    const checkScreen = () => {
      windowWidth.value = window.innerWidth;
      if (windowWidth.value <= 1399) {
        mobile.value = true;
        return;
      }
      mobile.value = false;
      mobileNav.value = false;
    };

    return {
      formData,
      errors,
      updateFormData,
      resetForm,
      handleSubmit,
      getYears,
      name,
      email,
      formSchema,
      formErrors,
      handleSubmitForm,
      checkScreen,
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
});
</script>

<style>
@import "tailwindcss/tailwind";
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");
:root {
  --Text-Light: #999;
  --Brand-Green-Hover: #acb90c;
  --Brand-Blue: #152649;
  --Brand-Blue-UI: #313892;
  --Alert-Info: #e5f6ff;
  --Alert-Warning: #ffc;
  --Sidebar-Background: #f9f9f9;
  --Text-Description: rgba(21, 38, 73, 0.64);
  --Form-Border: #ced2d7;
  --Brand-White: #fff;
}
.home-menu {
  display: flex;
  gap: 1.5rem;
  padding: 0.9rem 0;
}
.form-container {
  margin: 0 8.75rem;
}
.menu-h1 {
  color: var(--Text-Light, #999);
  font-family: Roboto;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem; /* 115.385% */
  text-decoration: underline;
  text-decoration-color: #cdda32;
  cursor: pointer;
}
.no-underline {
  text-decoration: none;
}
.menu-line {
  width: 100%;
  height: 0.0625rem;
  background: #e2e4e9;
  padding: 0;
  margin: 0;
}
.home-menu-container-mobile {
  color: var(--Brand-Blue-UI, #313892);
  font-family: Roboto;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.875rem; /* 116.667% */
}
.menu-h1-mobile {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.3rem 0;
  justify-content: flex-start;
}
.sidebar-container {
  color: var(--Brand-Blue, #152649);
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem; /* 114.286% */
  width: 20.25rem;
  background-color: #f9f9f9;
  height: auto;
  margin: 0;
}
.sidebar-header {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
}
.sidebar-header:hover {
  color: var(--Brand-Green-Hover, #acb90c);
}
.menu-line {
  width: 100%;
  height: 0.0625rem;
  background: #e2e4e9;
}
.green-bullets {
  list-style-type: none;
  padding-left: 1rem;
}

.green-bullets li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  /* line-height: 1.5; */
}
.sidebar-container-split {
  height: 100vh;
  width: 20.25rem;
  position: absolute;
}

.green-bullets li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.45rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #cdda32;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-container {
  flex-grow: 1;
  padding: 1rem;
  margin-left: 24rem;
  position: relative;
  margin-top: 3rem;
}
.bullet-boxes {
  display: flex;
  gap: 3rem;
}
.info-box {
  width: 22.5rem;
  height: 4.5rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.94rem 1.5rem;
}
.info-blue {
  background: var(--Alert-Info, #e5f6ff);
}
.info-yellow {
  background: var(--Alert-Warning, #ffc);
}
.info-boxes {
  display: flex;
  gap: 1.25rem;
  margin: 2rem 0;
}
.phone-box {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.phone-box-inner {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.phone-one {
  display: flex;
  flex-direction: column;
  width: 6.25rem;
}
.country-code {
  width: 6.25rem;
}
.form-header h1 {
  color: var(--Brand-Blue, #152649);
  font-family: Roboto;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: 2.9375rem; /* 117.5% */
  margin-bottom: 1.75rem;
}
.form-header h2 {
  color: var(--Brand-Blue, #152649);
  font-family: Roboto;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.75rem; /* 140% */
  max-width: 40rem;
  margin-bottom: 1.75rem;
}
.form-header h3 {
  color: var(--Brand-Blue, #152649);
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1875rem;
  margin-bottom: 1rem;
}
.form-color-continer {
  background: var(--Sidebar-Background, #f9f9f9);
  margin-bottom: 0;
}
.form-main-font-h {
  color: var(--Brand-Blue, #152649);
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1875rem; /* 118.75% */
  margin-bottom: 0.5rem;
}
.form-main-font-p {
  color: var(--Text-Description, rgba(21, 38, 73, 0.64));
  font-family: Roboto;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  /* width: 15.9375rem; */
  padding-right: 1rem;
}
.form-bottom {
  margin-bottom: 4rem;
}
label {
  color: var(--Brand-Blue, #152649);
  font-family: Roboto;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
}
.cta-main {
  border-radius: 0.25rem;
  border: 1px solid var(--Brand-Blue-UI, #313892);
  width: 7.5rem;
  height: 2.75rem;
  flex-shrink: 0;
  color: var(--Brand-Blue-UI, #313892);
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.875rem; /* 100% */
  transition: all 0.3s;
  margin-right: 2.6rem;
}
.cta-delete {
  color: var(--Text-Description, rgba(21, 38, 73, 0.64));
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.875rem; /* 100% */
}
.cta-main:hover {
  border-radius: 0.25rem;
  background: var(--Brand-Blue-UI, #313892);
  color: #fff;
}
.cta {
  width: 10rem;
  height: 3.25rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  background: var(--Brand-Blue-UI, #313892);
  color: var(--Brand-White, #fff);
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.875rem; /* 87.5% */
}
.info-box p {
  color: var(--Brand-Blue, #152649);
  text-align: center;
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3125rem; /* 150% */
}
#year {
  color: var(--Form-Placeholder, #b4b9c4);
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 125% */
}

#country_code {
  color: var(--Form-Placeholder, #b4b9c4);
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 125% */
}

@media (max-width: 1399px) {
  .form-container {
    margin: 0 1.25rem;
  }
  .content-container {
    margin: 0 1.25rem;
  }
  .info-boxes {
    flex-direction: column;
  }
  .info-box {
    width: 100%;
    padding: 1rem;
    height: auto;
  }
  .bullet-boxes {
    flex-direction: column;
    gap: 0;
  }
  .sidebar-container {
    display: none;
  }
  .home-menu {
    display: none;
  }
  .home-menu-container-mobile {
    display: block;
  }
}
@media (min-width: 1400px) {
  .home-menu-container-mobile {
    display: none;
  }
  .form-box-lg {
    width: 20.9375rem;
    height: 3rem;
    flex-shrink: 0;
    border: 1px solid var(--Form-Border, #ced2d7);
    background: var(--Brand-White, #fff);
  }
  .form-box-grid {
    display: flex;
    flex-direction: column;
  }
  .form-phone {
    width: 13.75rem;
    height: 3rem;
    flex-shrink: 0;
    border: 1px solid var(--Form-Border, #ced2d7);
    background: var(--Brand-White, #fff);
  }
  .country-code {
    width: 6.25rem;
    height: 3rem;
    flex-shrink: 0;
    border: 1px solid var(--Form-Border, #ced2d7);
    background: var(--Brand-White, #fff);
  }
  .form-box-s {
    width: 4.875rem;
    height: 3rem;
    flex-shrink: 0;
    border: 1px solid var(--Form-Border, #ced2d7);
    background: var(--Brand-White, #fff);
  }
  .form-box-m {
    width: 6.375rem;
    height: 3rem;
    flex-shrink: 0;
    border: 1px solid var(--Form-Border, #ced2d7);
    background: var(--Brand-White, #fff);
  }
}
</style>
