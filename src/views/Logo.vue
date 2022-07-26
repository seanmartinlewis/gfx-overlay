<template>
  <div
    :style="`height:${height}px; width:${width}px;justify-content:${justify}`"
    class="background-qp"
  >
    <img src="../assets/atm.png" alt="" />
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
}
img {
  max-height: 200px;
}
</style>
