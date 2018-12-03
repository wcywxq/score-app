<template>
  <div class="child-apps">
    <application v-for="(item, index) in app" :key="index" :title="item.title" :data="item.val"/>
    <classify
      v-for="(item, index) in type.application"
      :key="index"
      :type="item.val"
      :title="item.title"
    />
  </div>
</template>

<script>
import classify from "@/components/classify";
import application from "@/components/application";
import data from "@/static/json/application.json";
import type from "@/static/json/type.json";

export default {
  name: "apps",
  data() {
    return {
      app: data,
      type: type.data
    };
  },
  components: {
    classify,
    application
  }
};
</script>

<style scoped>
</style>