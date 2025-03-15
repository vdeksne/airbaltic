<template>
  <div>
    <Menu />
  </div>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Menu from "@/components/menu.vue";

export default {
  components: {
    Menu,
  },
  name: "DefaultLayout",
};
</script>

<style scoped></style>
