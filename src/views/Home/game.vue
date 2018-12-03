<template>
  <div class="child-game">
    <classify v-for="(item, index) in type.game" :key="index" :type="item.val" :title="item.title"/>
  </div>
</template>

<script>
import classify from "@/components/classify";
import type from "@/static/json/type.json";

export default {
  name: "game",
  data() {
    return {
      type: type.data
    };
  },
  components: {
    classify
  }
};
</script>

<style scoped>
</style>