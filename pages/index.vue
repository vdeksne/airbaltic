<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <div class="relative">
        <Form />
      </div>
      <Footer />
    </NuxtLayout>
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import Form from "@/components/form.vue";

export default {
  components: {
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
