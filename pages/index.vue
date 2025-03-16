<template>
  <NuxtLayout>
    <NuxtPage />
    <div class="relative">
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
                <path
                  d="M1 1L8.45718 8.45718L1.00577 15.9086"
                  stroke="#CED2D7"
                />
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
                <path
                  d="M1 1L8.45718 8.45718L1.00577 15.9086"
                  stroke="#CED2D7"
                />
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
                <path
                  d="M1 1L8.45718 8.45718L1.00577 15.9086"
                  stroke="#CED2D7"
                />
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
      <div class="menu-line menu-line-back"></div>
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
            <div class="sidebar-header">{{ config.texts.title }}</div>
            <div class="menu-line"></div>
            <div class="sidebar-header">Other inquiries</div>
          </div>
        </div>
        <div class="content-container">
          <div class="form-container-inner">
            <div class="form-top">
              <div class="form-header">
                <h1 :style="{ color: config.colors.primary }">
                  {{ config.texts.title }}
                </h1>
                <h2>
                  {{ config.texts.mainParagraph }}
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
                      Personal mobility equipment and guide dogs are carried
                      free of charge.
                    </p>
                  </div>
                  <div class="info-box info-yellow">
                    <p>
                      Please note, we are unable to provide eating assistance
                      and medical services.
                    </p>
                  </div>
                </div>
                <!-- form start -->
                <!-- component -->
                <NuxtForm class="form-frame"></NuxtForm>

                <!-- form end -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useFormStore } from "../store/formStore";
import { z } from "zod";
import NuxtForm from "../components/NuxtForm.vue";
import { config } from "../config/config.js";

const mobile = ref(false);
const mobileNav = ref(false);
const windowWidth = ref(0);
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
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", checkScreen);
    checkScreen();
  }
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", checkScreen);
  }
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

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value;
};
</script>

<style lang="scss" scoped>
.relative {
  position: relative;
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
  color: $color-text-light;
  font-family: $font;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.9375rem; /* 115.385% */
  text-decoration: underline;
  text-decoration-color: $color-green;
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
  color: $color-brand-blue-ui;
  font-family: $font;
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
  color: $color-brand-blue;
  font-family: $font;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem; /* 114.286% */
  width: 20.25rem;
  background-color: $color-white-bg;
  height: auto;
  margin: 0;
}

.sidebar-header {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
}
.sidebar-header:hover {
  color: $color-brand-green-hover;
  border-left: 0.125rem solid #cdda32;
}
.menu-line {
  width: 100%;
  height: 0.0625rem;
  background: #e2e4e9;
}
.green-bullets {
  list-style-type: none;
  padding-left: 1rem;
  color: #152649;
  font-family: $font;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem; /* 200% */
  @include m {
    font-size: 0.875rem;
  }
}
.green-bullets li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
}
.sidebar-container-split {
  // height: 100vh;
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
  background-color: $color-green;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @include m {
    top: 0.7rem;
  }
}
.content-container {
  flex-grow: 1;
  padding: 1rem;
  margin-left: 24rem;
  position: relative;
  margin-top: 3rem;
  @include m {
    margin: 0;
    padding: 0;
  }
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
  background: $color-alert-info;
}
.info-yellow {
  background: $color-alert-warning;
}
.info-boxes {
  display: flex;
  gap: 1.25rem;
  margin: 2rem 0;
  @include m {
    flex-direction: column;
    margin-left: -2rem;
    margin-right: -2rem;
    gap: 0;
  }
}
.phone-box {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  @include m {
    padding: 1rem 1.5rem;
  }
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
  color: $color-brand-blue;
  font-family: $font;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: 2.9375rem; /* 117.5% */
  margin-bottom: 1.75rem;
  @include m {
    font-size: 2rem;
  }
}
.form-header h2 {
  color: $color-brand-blue;
  font-family: $font;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.75rem; /* 140% */
  max-width: 40rem;
  margin-bottom: 1.75rem;
  @include m {
    font-size: 1.125rem;
  }
}
.form-header h3 {
  color: $color-brand-blue;
  font-family: $font;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1875rem;
  margin-bottom: 1rem;
}
.form-color-continer {
  background: $color-sidebar-background;
  margin-bottom: 0;
}
.form-main-font-h {
  color: $color-brand-blue;
  font-family: $font;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1875rem; /* 118.75% */
  margin-bottom: 0.5rem;
}
.form-main-font-p {
  color: $color-text-description;
  font-family: $font;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 166.667% */
  padding-right: 1rem;
}
.form-bottom {
  margin-bottom: 4rem;
}
label {
  color: $color-brand-blue;
  font-family: $font;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
}
.cta-main {
  border-radius: 0.25rem;
  border: 1px solid $color-brand-blue-ui;
  width: 7.5rem;
  height: 2.75rem;
  flex-shrink: 0;
  color: $color-brand-blue-ui;
  font-family: $font;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.875rem; /* 100% */
  transition: all 0.3s;
  margin-right: 2.6rem;
}
.cta-delete {
  color: $color-text-description;
  font-family: $font;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.875rem; /* 100% */
}
.cta-main:hover {
  border-radius: 0.25rem;
  background: $color-brand-blue-ui;
  color: $color-brand-white;
}
.cta {
  width: 10rem;
  height: 3.25rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  background: $color-brand-blue-ui;
  color: $color-brand-white;
  font-family: $font;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.875rem; /* 87.5% */
}
.info-box p {
  color: $color-brand-blue;
  text-align: center;
  font-family: $font;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3125rem; /* 150% */
}
#year {
  color: $color-form-border;
  font-family: $font;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 125% */
}

#country_code {
  color: $color-form-border;
  font-family: $font;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 125% */
}
.menu-line-back {
  @include m {
    display: none;
  }
}
.form-frame {
  max-width: 46.25rem;
  // height: 46.375rem;
  @include m {
    max-width: 100%;
    height: auto;
    // margin: 0 -1.25rem;
  }
}
@media (max-width: 1399px) {
  .form-container {
    margin: 0 1.25rem;
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
    border: 1px solid $color-form-border;
    background: $color-brand-white;
  }
  .form-box-grid {
    display: flex;
    flex-direction: column;
  }
  .form-phone {
    width: 13.75rem;
    height: 3rem;
    flex-shrink: 0;
    border: 1px solid $color-form-border;
    background: $color-brand-white;
  }
  .country-code {
    width: 6.25rem;
    height: 3rem;
    flex-shrink: 0;
    border: 1px solid $color-form-border;
    background: $color-brand-white;
  }
  .form-box-s {
    width: 4.875rem;
    height: 3rem;
    flex-shrink: 0;
    border: 1px solid $color-form-border;
    background: $color-brand-white;
  }
  .form-box-m {
    width: 6.375rem;
    height: 3rem;
    flex-shrink: 0;
    border: 1px solid $color-form-border;
    background: $color-brand-white;
  }
}
</style>
