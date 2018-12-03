<template>
  <div id="child-group">
    <section id="loading">
      <van-loading color="green" v-show="isLoading"/>
    </section>
    <groupBox
      v-for="(item, index) in groupData"
      :key="index"
      :title="item.name"
      :data="item.groups"
    />
  </div>
</template>

<script>
import groupBox from "@/components/groupBox";

export default {
  name: "group",
  data() {
    return {
      groupData: null,
      isLoading: true
    };
  },
  components: {
    groupBox
  },
  computed: {
    paramsGroup() {
      let paramObj = {
        for_mobile: 1
      };
      return paramObj;
    }
  },
  methods: {
    // 小组
    group() {
      return this.$server.group(this.paramsGroup);
    }
  },
  mounted() {
    /**
     * 小组
     * */
    this.group().then(res => {
      this.isLoading = false;
      this.groupData = res.rec_groups[0].classified_groups;
    });
  }
};
</script>

<style scoped>
#loading {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 280px;
}
</style>