<template>
  <div>
    <Menu />
    <NuxtPage />

    <div class="relative">
      <h1>Welcome to My Nuxt.js App</h1>
      <p>This is the home page.</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Menu from "@/components/menu.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    Menu,
    Footer,
  },
  name: "HomePage",
};
</script>

<style scoped>
.relative {
  position: relative;
}
</style>
