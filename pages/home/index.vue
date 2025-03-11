<template>
  <div>main page | index.vue | pages/home/index.vue</div>
  <!-- <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div> -->
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

function enableCustomLayout() {
  setPageLayout("custom");
}
definePageMeta({
  layout: false,
});
</script>
