<template>
  <footer class="footer-main relative z-10 dark:bg-dark pb-10">
    <div class="container">
      <div class="text-container flex flex-wrap">
        <div class="w-full text-column">
          <div class="w-full text-column">
            <div class="footer-icon-box">
              <h4 class="footer-title uppercase text-lg font-semibold">
                Helpful links
              </h4>
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3906 4.20703V6.32617H0.644531V4.20703H10.3906ZM6.66016 0.222656V10.5742H4.38477V0.222656H6.66016Z"
                  fill="#333333"
                />
              </svg>
            </div>

            <div class="line-mobile"></div>
            <ul v-show="!mobile" class="space-y-2">
              <li>
                <a
                  href="javascript:void(0)"
                  class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Book a flight
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Check-in online
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  User Flow
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  All about baggage
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Destinations
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full text-column">
          <div class="w-full text-column">
            <div class="footer-icon-box">
              <h4 class="footer-title uppercase text-lg font-semibold">
                About airbaltic
              </h4>
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3906 4.20703V6.32617H0.644531V4.20703H10.3906ZM6.66016 0.222656V10.5742H4.38477V0.222656H6.66016Z"
                  fill="#333333"
                />
              </svg>
            </div>

            <div class="line-mobile"></div>
            <ul v-show="!mobile" class="space-y-2">
              <li>
                <a
                  href="javascript:void(0)"
                  class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  airBaltic souveniers
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full text-column">
          <div class="w-full text-column">
            <div class="footer-icon-box">
              <h4 class="footer-title uppercase text-lg font-semibold">
                airbaltic partners
              </h4>
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3906 4.20703V6.32617H0.644531V4.20703H10.3906ZM6.66016 0.222656V10.5742H4.38477V0.222656H6.66016Z"
                  fill="#333333"
                />
              </svg>
            </div>

            <div class="line-mobile"></div>
            <ul v-show="!mobile" class="space-y-2">
              <li>
                <a
                  href="javascript:void(0)"
                  class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Pilots Academy
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  airBaltic Training
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  PINS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full text-column">
          <div class="w-full text-column">
            <div class="footer-icon-box">
              <h4 class="footer-title uppercase text-lg font-semibold">
                Customer support
              </h4>
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3906 4.20703V6.32617H0.644531V4.20703H10.3906ZM6.66016 0.222656V10.5742H4.38477V0.222656H6.66016Z"
                  fill="#333333"
                />
              </svg>
            </div>
            <div class="line-mobile"></div>
            <ul v-show="!mobile" class="space-y-2">
              <li>
                <a
                  href="javascript:void(0)"
                  class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                >
                  Request assistance
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full text-column">
          <div class="w-full text-column text-column-newsletter">
            <div class="footer-icon-box">
              <h4
                class="newsletter-txt footer-title uppercase text-lg font-semibold"
              >
                Subscribe to newsletter
              </h4>
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3906 4.20703V6.32617H0.644531V4.20703H10.3906ZM6.66016 0.222656V10.5742H4.38477V0.222656H6.66016Z"
                  fill="#333333"
                />
              </svg>
            </div>

            <!-- newsletter -->
            <div class="newsletter-container mt-6 flex max-w-md gap-x-4">
              <label for="email-address" class="sr-only"> Email address </label>
              <div class="relative w-full">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="newsletter-box min-w-0 flex-auto bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 sm:text-sm/6"
                  placeholder="Enter your email"
                />
                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <svg
                    width="7"
                    height="13"
                    viewBox="0 0 7 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 12L6 6.64551L1 1" stroke="#333333" />
                  </svg>
                </div>
              </div>
            </div>
            <!-- newsletter end -->

            <div class="link-text">
              <div class="img-box">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="16" height="16" fill="url(#pattern0_2265_266)" />
                  <defs>
                    <pattern
                      id="pattern0_2265_266"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_2265_266"
                        transform="scale(0.0625)"
                      />
                    </pattern>
                    <image
                      id="image0_2265_266"
                      width="16"
                      height="16"
                      preserveAspectRatio="none"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAAA+ElEQVQ4Ed2TPQ6CQBCF3Y0FnaE24QAWegutvQCxAa7BMfhp8ASUnkE7LTyAiY2NWtiyvoeQbDbrYu0kA+zMvG+YXRB5nqcjhyVJkqJmIoTYKKV8s1QygOQdfrQ584A8Ia5Yx7Vu425xieO41hPmMyFZlh0AWem59g30wLfnsiznEC/N/E8AipumWUMs4Aq+A+xG2CDAFEspa4yz9zxvS4gTgJlnemeKoyg6sXMYhi9CnAB0uMIfqFe6mAAaIf0pfCLGlTuPb6DCEU7R+ayni6JYI75wAiggBDe61ZwjWBVG8A8A/SYG3FVjvKFlwIIW0P2m/pDCln8DOcNdliWaSwoAAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
              </div>

              <p
                class="text-base-small text-base text-body-color dark:text-dark-6"
              >
                This indicates a link to an external site that may not follow
                the same accessibility policies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="images-container">
        <!-- <div class="base-images-container"></div> -->
        <div class="base-logos">
          <div class="box box-a">
            <img src="/assets/images/secure.png" alt="" />
          </div>
          <div class="line-mobile"></div>
          <div class="box box-b">
            <img src="/assets/images/Mastercard.png" alt="" />
            <img src="/assets/images/VISA.png" alt="" />
            <img src="/assets/images/american.png" alt="" />
            <img src="/assets/images/paypal.png" alt="" />
            <p>more</p>
          </div>
          <div class="line-mobile"></div>
          <div class="box box-c">
            <img src="/assets/images/Capa.png" alt="" />
            <img src="/assets/images/most_punctual.png" alt="" />
          </div>
        </div>
        <div class="social">
          <div class="social-circle">
            <img src="/assets/images/fb.png" alt="" />
          </div>

          <div class="social-circle">
            <img src="/assets/images/twitter.png" alt="" />
          </div>
          <div class="social-circle">
            <img src="/assets/images/instagram.png" alt="" />
          </div>
          <div class="social-circle">
            <img src="/assets/images/youtube.png" alt="" />
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="info">
        <div class="legal">
          <a href="#">Legal information</a>
          <a href="#">Site index</a>
          <a href="#">Technical requirements</a>
        </div>
        <div class="copyright">
          <svg
            width="93"
            height="11"
            viewBox="0 0 93 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.18262 6.2041H7.10938C7.10938 6.86849 6.91895 7.36784 6.53809 7.70215C6.16146 8.03223 5.64941 8.19727 5.00195 8.19727C4.55339 8.19727 4.16406 8.09359 3.83398 7.88623C3.50814 7.67887 3.25423 7.39111 3.07227 7.02295C2.89453 6.65479 2.80566 6.22738 2.80566 5.74072V5.01074C2.80566 4.52409 2.89453 4.09668 3.07227 3.72852C3.25423 3.36035 3.50814 3.07259 3.83398 2.86523C4.16406 2.65788 4.55339 2.5542 5.00195 2.5542C5.64941 2.5542 6.16357 2.71924 6.54443 3.04932C6.92529 3.37939 7.11572 3.87663 7.11572 4.54102H6.18896C6.18896 4.12207 6.0874 3.82161 5.88428 3.63965C5.68538 3.45768 5.39128 3.3667 5.00195 3.3667C4.72266 3.3667 4.48779 3.43652 4.29736 3.57617C4.10693 3.71582 3.96305 3.91048 3.86572 4.16016C3.76839 4.4056 3.71973 4.68701 3.71973 5.00439V5.74072C3.71973 6.06234 3.76839 6.34798 3.86572 6.59766C3.96305 6.8431 4.10693 7.03564 4.29736 7.17529C4.48779 7.31494 4.72266 7.38477 5.00195 7.38477C5.39128 7.38477 5.68538 7.29378 5.88428 7.11182C6.08317 6.92985 6.18262 6.62728 6.18262 6.2041ZM1.31396 5.37256C1.31396 5.93538 1.4113 6.46012 1.60596 6.94678C1.80062 7.43343 2.07145 7.85872 2.41846 8.22266C2.76546 8.58659 3.16748 8.87012 3.62451 9.07324C4.08154 9.27637 4.57031 9.37793 5.09082 9.37793C5.61133 9.37793 6.09798 9.27637 6.55078 9.07324C7.00781 8.87012 7.40771 8.58659 7.75049 8.22266C8.09749 7.85872 8.36833 7.43343 8.56299 6.94678C8.75765 6.46012 8.85498 5.93538 8.85498 5.37256C8.85498 4.8055 8.75765 4.28076 8.56299 3.79834C8.36833 3.31592 8.09749 2.89486 7.75049 2.53516C7.40771 2.17122 7.00781 1.88981 6.55078 1.69092C6.09798 1.48779 5.61133 1.38623 5.09082 1.38623C4.57031 1.38623 4.08154 1.48779 3.62451 1.69092C3.16748 1.88981 2.76546 2.17122 2.41846 2.53516C2.07145 2.89486 1.80062 3.31592 1.60596 3.79834C1.4113 4.28076 1.31396 4.8055 1.31396 5.37256ZM0.583984 5.37256C0.583984 4.69971 0.700358 4.07552 0.933105 3.5C1.16585 2.92448 1.48958 2.42301 1.9043 1.99561C2.31901 1.56396 2.7972 1.22965 3.33887 0.992676C3.88477 0.751465 4.46875 0.630859 5.09082 0.630859C5.71289 0.630859 6.29476 0.751465 6.83643 0.992676C7.38232 1.22965 7.86051 1.56396 8.271 1.99561C8.68571 2.42301 9.00944 2.92448 9.24219 3.5C9.47493 4.07552 9.59131 4.69971 9.59131 5.37256C9.59131 6.04541 9.47493 6.6696 9.24219 7.24512C9.00944 7.82064 8.68571 8.32633 8.271 8.76221C7.86051 9.19385 7.38232 9.53027 6.83643 9.77148C6.29476 10.0127 5.71289 10.1333 5.09082 10.1333C4.46875 10.1333 3.88477 10.0127 3.33887 9.77148C2.7972 9.53027 2.31901 9.19385 1.9043 8.76221C1.48958 8.32633 1.16585 7.82064 0.933105 7.24512C0.700358 6.6696 0.583984 6.04541 0.583984 5.37256ZM20.2681 9.03516V10H14.2188V9.15576L17.2466 5.78516C17.619 5.37044 17.9067 5.01921 18.1099 4.73145C18.3172 4.43945 18.4611 4.1792 18.5415 3.95068C18.6261 3.71794 18.6685 3.48096 18.6685 3.23975C18.6685 2.93506 18.605 2.65999 18.478 2.41455C18.3553 2.16488 18.1733 1.96598 17.9321 1.81787C17.6909 1.66976 17.3989 1.5957 17.0562 1.5957C16.6457 1.5957 16.3029 1.67611 16.0278 1.83691C15.757 1.99349 15.5539 2.21354 15.4185 2.49707C15.283 2.7806 15.2153 3.10645 15.2153 3.47461H14.041C14.041 2.9541 14.1553 2.47803 14.3838 2.04639C14.6123 1.61475 14.9508 1.27197 15.3994 1.01807C15.848 0.759928 16.4002 0.630859 17.0562 0.630859C17.6401 0.630859 18.1395 0.734538 18.5542 0.941895C18.9689 1.14502 19.2863 1.43278 19.5063 1.80518C19.7306 2.17334 19.8428 2.60498 19.8428 3.1001C19.8428 3.37093 19.7962 3.646 19.7031 3.92529C19.6143 4.20036 19.4894 4.47542 19.3286 4.75049C19.172 5.02555 18.988 5.29639 18.7764 5.56299C18.569 5.82959 18.3468 6.09196 18.1099 6.3501L15.6343 9.03516H20.2681ZM27.3267 4.64258V6.05176C27.3267 6.80924 27.259 7.44824 27.1235 7.96875C26.9881 8.48926 26.7935 8.9082 26.5396 9.22559C26.2856 9.54297 25.9788 9.7736 25.6191 9.91748C25.2637 10.0571 24.8617 10.127 24.4131 10.127C24.0576 10.127 23.7297 10.0825 23.4292 9.99365C23.1287 9.90479 22.8579 9.76302 22.6167 9.56836C22.3797 9.36947 22.1766 9.11133 22.0073 8.79395C21.8381 8.47656 21.709 8.09147 21.6201 7.63867C21.5312 7.18587 21.4868 6.6569 21.4868 6.05176V4.64258C21.4868 3.88509 21.5545 3.25033 21.6899 2.73828C21.8296 2.22624 22.0264 1.81576 22.2803 1.50684C22.5342 1.19368 22.8389 0.969401 23.1943 0.833984C23.554 0.698568 23.9561 0.630859 24.4004 0.630859C24.7601 0.630859 25.0902 0.675293 25.3906 0.76416C25.6953 0.848796 25.9661 0.986328 26.2031 1.17676C26.4401 1.36296 26.6411 1.61263 26.8062 1.92578C26.9754 2.2347 27.1045 2.61344 27.1934 3.06201C27.2822 3.51058 27.3267 4.03743 27.3267 4.64258ZM26.146 6.24219V4.4458C26.146 4.03109 26.1206 3.66715 26.0698 3.354C26.0233 3.03662 25.9535 2.76579 25.8604 2.5415C25.7673 2.31722 25.6488 2.13525 25.5049 1.99561C25.3652 1.85596 25.2023 1.75439 25.0161 1.69092C24.8341 1.62321 24.6289 1.58936 24.4004 1.58936C24.1211 1.58936 23.8735 1.64225 23.6577 1.74805C23.4419 1.84961 23.2599 2.01253 23.1118 2.23682C22.9679 2.4611 22.8579 2.75521 22.7817 3.11914C22.7056 3.48307 22.6675 3.92529 22.6675 4.4458V6.24219C22.6675 6.6569 22.6908 7.02295 22.7373 7.34033C22.7881 7.65771 22.8621 7.93278 22.9595 8.16553C23.0568 8.39404 23.1753 8.58236 23.3149 8.73047C23.4546 8.87858 23.6154 8.98861 23.7974 9.06055C23.9836 9.12826 24.1888 9.16211 24.4131 9.16211C24.7008 9.16211 24.9526 9.1071 25.1685 8.99707C25.3843 8.88704 25.5641 8.71566 25.708 8.48291C25.8561 8.24593 25.9661 7.94336 26.0381 7.5752C26.11 7.2028 26.146 6.75846 26.146 6.24219ZM32.6968 0.707031V10H31.5225V2.17334L29.1548 3.03662V1.97656L32.5127 0.707031H32.6968ZM42.123 0.757812V1.41797L38.2954 10H37.0576L40.8789 1.72266H35.877V0.757812H42.123ZM50.8638 8.82568V5.29004C50.8638 5.01921 50.8088 4.78434 50.6987 4.58545C50.5929 4.38232 50.4321 4.22575 50.2163 4.11572C50.0005 4.0057 49.7339 3.95068 49.4165 3.95068C49.1203 3.95068 48.86 4.00146 48.6357 4.10303C48.4157 4.20459 48.2422 4.33789 48.1152 4.50293C47.9925 4.66797 47.9312 4.8457 47.9312 5.03613H46.7568C46.7568 4.79069 46.8203 4.54736 46.9473 4.30615C47.0742 4.06494 47.2562 3.84701 47.4932 3.65234C47.7344 3.45345 48.0221 3.29688 48.3564 3.18262C48.695 3.06413 49.0716 3.00488 49.4863 3.00488C49.9857 3.00488 50.4258 3.08952 50.8066 3.25879C51.1917 3.42806 51.4922 3.68408 51.708 4.02686C51.9281 4.3654 52.0381 4.79069 52.0381 5.30273V8.50195C52.0381 8.73047 52.0571 8.9738 52.0952 9.23193C52.1375 9.49007 52.1989 9.71224 52.2793 9.89844V10H51.0542C50.995 9.86458 50.9484 9.68473 50.9146 9.46045C50.8807 9.23193 50.8638 9.02035 50.8638 8.82568ZM51.0669 5.83594L51.0796 6.66113H49.8926C49.5583 6.66113 49.2599 6.68864 48.9976 6.74365C48.7352 6.79443 48.5151 6.87272 48.3374 6.97852C48.1597 7.08431 48.0243 7.21761 47.9312 7.37842C47.8381 7.53499 47.7915 7.71908 47.7915 7.93066C47.7915 8.14648 47.8402 8.34326 47.9375 8.521C48.0348 8.69873 48.1808 8.84049 48.3755 8.94629C48.5744 9.04785 48.8177 9.09863 49.1055 9.09863C49.4652 9.09863 49.7826 9.02246 50.0576 8.87012C50.3327 8.71777 50.5506 8.53158 50.7114 8.31152C50.8765 8.09147 50.9653 7.87777 50.978 7.67041L51.4795 8.23535C51.4499 8.41309 51.3695 8.60986 51.2383 8.82568C51.1071 9.0415 50.9315 9.24886 50.7114 9.44775C50.4956 9.64242 50.2375 9.80534 49.937 9.93652C49.6408 10.0635 49.3065 10.127 48.9341 10.127C48.4686 10.127 48.0602 10.036 47.709 9.854C47.362 9.67204 47.0911 9.42871 46.8965 9.12402C46.7061 8.8151 46.6108 8.47021 46.6108 8.08936C46.6108 7.72119 46.6828 7.39746 46.8267 7.11816C46.9705 6.83464 47.1779 6.59977 47.4487 6.41357C47.7196 6.22314 48.0454 6.07926 48.4263 5.98193C48.8071 5.8846 49.2324 5.83594 49.7021 5.83594H51.0669ZM55.1611 3.13184V10H53.9805V3.13184H55.1611ZM53.8916 1.31006C53.8916 1.11963 53.9487 0.958822 54.063 0.827637C54.1815 0.696452 54.355 0.630859 54.5835 0.630859C54.8078 0.630859 54.9792 0.696452 55.0977 0.827637C55.2204 0.958822 55.2817 1.11963 55.2817 1.31006C55.2817 1.49202 55.2204 1.6486 55.0977 1.77979C54.9792 1.90674 54.8078 1.97021 54.5835 1.97021C54.355 1.97021 54.1815 1.90674 54.063 1.77979C53.9487 1.6486 53.8916 1.49202 53.8916 1.31006ZM58.2207 4.21094V10H57.0464V3.13184H58.189L58.2207 4.21094ZM60.3662 3.09375L60.3599 4.18555C60.2625 4.16439 60.1694 4.15169 60.0806 4.14746C59.9959 4.139 59.8986 4.13477 59.7886 4.13477C59.5177 4.13477 59.2786 4.17708 59.0713 4.26172C58.8639 4.34635 58.6883 4.46484 58.5444 4.61719C58.4006 4.76953 58.2863 4.9515 58.2017 5.16309C58.1213 5.37044 58.0684 5.59896 58.043 5.84863L57.7129 6.03906C57.7129 5.62435 57.7531 5.23503 57.8335 4.87109C57.9181 4.50716 58.0472 4.18555 58.2207 3.90625C58.3942 3.62272 58.6143 3.40267 58.8809 3.24609C59.1517 3.08529 59.4733 3.00488 59.8457 3.00488C59.9303 3.00488 60.0277 3.01546 60.1377 3.03662C60.2477 3.05355 60.3239 3.07259 60.3662 3.09375ZM64.9238 5.67725H62.5815L62.5688 4.69336H64.6953C65.0465 4.69336 65.3534 4.63411 65.6157 4.51562C65.8781 4.39714 66.0812 4.22786 66.2251 4.00781C66.3732 3.78353 66.4473 3.51693 66.4473 3.20801C66.4473 2.86947 66.3817 2.5944 66.2505 2.38281C66.1235 2.16699 65.9268 2.01042 65.6602 1.91309C65.3978 1.81152 65.0635 1.76074 64.6572 1.76074H62.8545V10H61.6294V0.757812H64.6572C65.1312 0.757812 65.5544 0.806478 65.9268 0.903809C66.2992 0.996908 66.6144 1.14502 66.8726 1.34814C67.1349 1.54704 67.3338 1.80094 67.4692 2.10986C67.6047 2.41878 67.6724 2.78906 67.6724 3.2207C67.6724 3.60156 67.575 3.94645 67.3804 4.25537C67.1857 4.56006 66.9149 4.80973 66.5679 5.00439C66.2251 5.19906 65.8231 5.32389 65.3618 5.37891L64.9238 5.67725ZM64.8667 10H62.0991L62.791 9.00342H64.8667C65.256 9.00342 65.5861 8.93571 65.8569 8.80029C66.132 8.66488 66.3415 8.47445 66.4854 8.229C66.6292 7.97933 66.7012 7.68522 66.7012 7.34668C66.7012 7.00391 66.6398 6.70768 66.5171 6.45801C66.3944 6.20833 66.2018 6.01579 65.9395 5.88037C65.6771 5.74495 65.3385 5.67725 64.9238 5.67725H63.1782L63.1909 4.69336H65.5776L65.8379 5.04883C66.2822 5.08691 66.6589 5.21387 66.9678 5.42969C67.2767 5.64128 67.5116 5.91211 67.6724 6.24219C67.8374 6.57227 67.9199 6.9362 67.9199 7.33398C67.9199 7.90951 67.793 8.39616 67.5391 8.79395C67.2894 9.1875 66.936 9.48796 66.479 9.69531C66.022 9.89844 65.4845 10 64.8667 10ZM73.6011 8.82568V5.29004C73.6011 5.01921 73.5461 4.78434 73.436 4.58545C73.3302 4.38232 73.1694 4.22575 72.9536 4.11572C72.7378 4.0057 72.4712 3.95068 72.1538 3.95068C71.8576 3.95068 71.5973 4.00146 71.373 4.10303C71.153 4.20459 70.9795 4.33789 70.8525 4.50293C70.7298 4.66797 70.6685 4.8457 70.6685 5.03613H69.4941C69.4941 4.79069 69.5576 4.54736 69.6846 4.30615C69.8115 4.06494 69.9935 3.84701 70.2305 3.65234C70.4717 3.45345 70.7594 3.29688 71.0938 3.18262C71.4323 3.06413 71.8089 3.00488 72.2236 3.00488C72.723 3.00488 73.1631 3.08952 73.5439 3.25879C73.929 3.42806 74.2295 3.68408 74.4453 4.02686C74.6654 4.3654 74.7754 4.79069 74.7754 5.30273V8.50195C74.7754 8.73047 74.7944 8.9738 74.8325 9.23193C74.8748 9.49007 74.9362 9.71224 75.0166 9.89844V10H73.7915C73.7323 9.86458 73.6857 9.68473 73.6519 9.46045C73.618 9.23193 73.6011 9.02035 73.6011 8.82568ZM73.8042 5.83594L73.8169 6.66113H72.6299C72.2956 6.66113 71.9972 6.68864 71.7349 6.74365C71.4725 6.79443 71.2524 6.87272 71.0747 6.97852C70.897 7.08431 70.7616 7.21761 70.6685 7.37842C70.5754 7.53499 70.5288 7.71908 70.5288 7.93066C70.5288 8.14648 70.5775 8.34326 70.6748 8.521C70.7721 8.69873 70.9181 8.84049 71.1128 8.94629C71.3117 9.04785 71.555 9.09863 71.8428 9.09863C72.2025 9.09863 72.5199 9.02246 72.7949 8.87012C73.07 8.71777 73.2879 8.53158 73.4487 8.31152C73.6138 8.09147 73.7026 7.87777 73.7153 7.67041L74.2168 8.23535C74.1872 8.41309 74.1068 8.60986 73.9756 8.82568C73.8444 9.0415 73.6688 9.24886 73.4487 9.44775C73.2329 9.64242 72.9748 9.80534 72.6743 9.93652C72.3781 10.0635 72.0438 10.127 71.6714 10.127C71.2059 10.127 70.7975 10.036 70.4463 9.854C70.0993 9.67204 69.8285 9.42871 69.6338 9.12402C69.4434 8.8151 69.3481 8.47021 69.3481 8.08936C69.3481 7.72119 69.4201 7.39746 69.564 7.11816C69.7078 6.83464 69.9152 6.59977 70.186 6.41357C70.4569 6.22314 70.7827 6.07926 71.1636 5.98193C71.5444 5.8846 71.9697 5.83594 72.4395 5.83594H73.8042ZM77.8984 0.25V10H76.7178V0.25H77.8984ZM82.6592 3.13184V4.0332H78.9458V3.13184H82.6592ZM80.2026 1.4624H81.377V8.29883C81.377 8.53158 81.4129 8.70719 81.4849 8.82568C81.5568 8.94417 81.6499 9.02246 81.7642 9.06055C81.8784 9.09863 82.0011 9.11768 82.1323 9.11768C82.2297 9.11768 82.3312 9.10921 82.437 9.09229C82.547 9.07113 82.6296 9.0542 82.6846 9.0415L82.6909 10C82.5978 10.0296 82.4751 10.0571 82.3228 10.0825C82.1746 10.1121 81.9948 10.127 81.7832 10.127C81.4954 10.127 81.231 10.0698 80.9897 9.95557C80.7485 9.84131 80.556 9.65088 80.4121 9.38428C80.2725 9.11344 80.2026 8.74951 80.2026 8.29248V1.4624ZM85.3125 3.13184V10H84.1318V3.13184H85.3125ZM84.043 1.31006C84.043 1.11963 84.1001 0.958822 84.2144 0.827637C84.3328 0.696452 84.5063 0.630859 84.7349 0.630859C84.9591 0.630859 85.1305 0.696452 85.249 0.827637C85.3717 0.958822 85.4331 1.11963 85.4331 1.31006C85.4331 1.49202 85.3717 1.6486 85.249 1.77979C85.1305 1.90674 84.9591 1.97021 84.7349 1.97021C84.5063 1.97021 84.3328 1.90674 84.2144 1.77979C84.1001 1.6486 84.043 1.49202 84.043 1.31006ZM89.9463 9.16211C90.2256 9.16211 90.4837 9.10498 90.7207 8.99072C90.9577 8.87646 91.1523 8.71989 91.3047 8.521C91.457 8.31787 91.5438 8.08724 91.5649 7.8291H92.6821C92.661 8.23535 92.5234 8.6141 92.2695 8.96533C92.0199 9.31234 91.6919 9.59375 91.2856 9.80957C90.8794 10.0212 90.4329 10.127 89.9463 10.127C89.43 10.127 88.9793 10.036 88.5942 9.854C88.2134 9.67204 87.896 9.42236 87.6421 9.10498C87.3924 8.7876 87.2041 8.42367 87.0771 8.01318C86.9544 7.59847 86.8931 7.16048 86.8931 6.69922V6.43262C86.8931 5.97135 86.9544 5.53548 87.0771 5.125C87.2041 4.71029 87.3924 4.34424 87.6421 4.02686C87.896 3.70947 88.2134 3.4598 88.5942 3.27783C88.9793 3.09587 89.43 3.00488 89.9463 3.00488C90.4837 3.00488 90.9535 3.11491 91.3555 3.33496C91.7575 3.55078 92.0728 3.84701 92.3013 4.22363C92.534 4.59603 92.661 5.01921 92.6821 5.49316H91.5649C91.5438 5.20964 91.4634 4.95361 91.3237 4.7251C91.1883 4.49658 91.0021 4.31462 90.7651 4.1792C90.5324 4.03955 90.2594 3.96973 89.9463 3.96973C89.5866 3.96973 89.284 4.04167 89.0386 4.18555C88.7974 4.3252 88.6048 4.51562 88.4609 4.75684C88.3213 4.99382 88.2197 5.2583 88.1562 5.55029C88.097 5.83805 88.0674 6.13216 88.0674 6.43262V6.69922C88.0674 6.99967 88.097 7.2959 88.1562 7.58789C88.2155 7.87988 88.3149 8.14437 88.4546 8.38135C88.5985 8.61833 88.791 8.80876 89.0322 8.95264C89.2777 9.09229 89.5824 9.16211 89.9463 9.16211Z"
              fill="#999999"
            />
          </svg>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const mobile = ref(false);
const mobileNav = ref(false);
const windowWidth = ref(0);

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value;
};

const checkScreen = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value <= 1399) {
      mobile.value = true;
      return;
    }
    mobile.value = false;
    mobileNav.value = false;
  }
};

onMounted(() => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", checkScreen);
    checkScreen();
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", checkScreen);
  }
});
</script>

<style lang="scss" scoped>
:root {
  --White-bg: #f9f9f9;
  --Social-Background: #e9e9e9;
  --Text-Footer-Title: #333;
  --green-color: #cdda32;
  --font: "Roboto", sans-serif;
  --Header-Text: #7e7e7e;
  --Text-Light: #999;
  --Text-Footer-Title: #333;
}
.footer-main {
  background: #f9f9f9;
  padding: 3rem 0;
}
.text-container {
  justify-content: space-between;
  display: flex;
  align-items: flex-start;
}
.box-a img {
  width: auto;
  height: 3.4375rem;
}
.box-a {
  width: 9.81rem;
  height: 4rem;
  border-right: 2px solid #ced2d7;
  padding-right: 2.6rem;
}
.box-b:nth-child(1) img {
  width: auto;
  height: 1.625rem;
}
.box-b:nth-child(2) img {
  width: auto;
  height: 0.9375rem;
}
.box-b:nth-child(3) img {
  width: auto;
  height: 1.625rem;
}
.box-b:nth-child(4) img {
  width: auto;
  height: 1.125rem;
}
.box-c img:nth-child(1) {
  width: 5.3125rem;
  height: 3.3125rem;
}
.box-c img:nth-child(2) {
  width: 6.6875rem;
  height: 3.8125rem;
}
.box-b {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
  height: 4rem;
  border-right: 2px solid #ced2d7;
  padding-right: 2.6rem;
  width: 26rem;
  padding-left: 2.6rem;
}
.box-c {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.3rem;
  height: 4rem;
  padding-left: 2.6rem;
}
.base-logos {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.social img:nth-child(1) {
  width: auto;
  height: 1.125rem;
}
.social img:nth-child(2) {
  width: auto;
  height: 1rem;
}
.social img:nth-child(3) {
  width: auto;
  height: 1.25rem;
}
.social img:nth-child(4) {
  width: auto;
  height: 0.9375rem;
}
.social-circle {
  width: 3rem;
  height: 3rem;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: var(--Social-Background, #e9e9e9);
}
.social {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.7rem;
}
.images-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 3.19rem;
  margin-bottom: 2rem;
}
.container {
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: stretch;
  width: 100%;
  max-width: 100%;
  padding: 0 8.75rem;
}
.line {
  width: 100%;
  height: 0.0625rem;
  background: #ced2d7;
}
.info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 1.6rem;
}
.footer-title {
  color: var(--Text-Footer-Title, #333);
  font-family: var(--font, "Roboto", sans-serif);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.text-column {
  width: 10rem;
  /* height: 11.4375rem; */
}
.text-base {
  color: var(--Text-Footer-Title, #333);
  font-family: var(--font, "Roboto", sans-serif);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  /* line-height: 2.25rem;  */
}
.link-text svg {
  width: 1rem;
  height: 1rem;
  cursor: pointer !important;
}
.newsletter-txt {
  width: 12rem;
}
.newsletter-box {
  width: 16.4375rem;
  height: 3rem;
  flex-shrink: 0;
  border: 1px solid var(--Form-Border, #ced2d7);
  background: var(--Brand-White, #fff);
  display: flex;
  align-items: center;
  width: 100%;
  width: 16.4375rem;
  justify-content: flex-end;
}
.newsletter-container {
  width: 16.4375rem;
}
.text-column-newsletter {
  width: 17.4375rem;
}
.text-base-small {
  color: var(--Text-Light, #999);
  font-family: Roboto;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.0625rem;
  width: 16rem;
  margin-left: 0.8rem;
}
.link-text {
  display: flex;
  margin-left: -1.2rem;
  margin-top: 2.5rem;
}
.legal a {
  color: var(--Text-Footer-Title, #333);
  font-family: Roboto;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.25rem;
}
.legal {
  display: flex;
  gap: 3.2rem;
}
.box p {
  color: var(--Text-Footer-Title, #333);
  font-family: Roboto;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.25rem; /* 300% */
  text-decoration: underline;
  text-decoration-color: #cdda32;
  padding-left: 1rem;
}
.footer-icon-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-icon-box svg {
  width: 0.6875rem;
  height: 0.6875rem;

  @include d {
    display: none;
  }
}

@media (max-width: 1399px) {
  .container {
    padding: 1.25rem;
  }
  .text-container {
    flex-direction: column;
  }
  .footer-title {
    color: var(--Text-Footer-Title, #333);
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem; /* 228.571% */
  }
  .line-mobile {
    width: 100%;
    height: 0.0625rem;
    background: #ced2d7;
  }
  .footer-title {
    margin: 1rem 0;
  }
  .text-column {
    width: 100%;
  }
  .link-text {
    margin-left: 0;
  }
  .images-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
  .base-logos {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    width: 100%;
  }
  .box-c,
  .box-b,
  .box-a {
    border: none;
    padding-left: 0;
    margin: 1rem 0;
  }
  .info {
    align-items: flex-start;
    margin-top: 1.6rem;
    flex-direction: column;
    gap: 1.5rem;
  }
  .legal {
    gap: 0.2rem;
    flex-direction: column;
  }
  .footer-main {
    padding: 0;
  }
}
@media (min-width: 1001px) {
}
</style>
