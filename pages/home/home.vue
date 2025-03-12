<template>
  <div>
    <Menu />
    <NuxtPage />
    <div class="relative">
      <Form />
    </div>
    <Footer />
  </div>
</template>

<script>
import Menu from "@/components/menu.vue";
import Footer from "@/components/footer.vue";
import Form from "@/components/form.vue";

export default {
  components: {
    Menu,
    Footer,
    Form,
  },
  name: "HomePage",
};
</script>

<style scoped>
.relative {
  position: relative;
}
</style>
