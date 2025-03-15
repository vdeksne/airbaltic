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
  name: "CustomLayout",
};
</script>

<style scoped></style>
