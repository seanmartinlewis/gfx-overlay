<template>
  <div :style="`justify-content:${justify}`" class="background-qp">
    <img src="../assets/atm_small.png" alt="" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const height = ref(route.query.height);
const width = ref(route.query.width);
const justify = computed(() => {
  console.log(route.query.justify);

  switch (route.query.justify) {
    case "left":
      return "flex-start";
    case "center":
      return "center";
    case "right":
      return "flex-end";
    default:
      return "flex-end";
  }
});
</script>
<style scoped lang="css">
.background-qp {
  display: flex;
  width: 100vw;
  height: 100vh;
}
img {
  max-height: 75px;
  padding: 20px;
}
</style>
