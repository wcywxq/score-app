<template>
  <div id="Home">
    <van-tabs v-model="active" color="#42bd56" @click="tabRouter" sticky>
      <van-tab title="电影">
        <router-view></router-view>
      </van-tab>
      <van-tab title="电视">
        <router-view></router-view>
      </van-tab>
      <van-tab title="图书">
        <router-view></router-view>
      </van-tab>
      <van-tab title="音乐">
        <router-view></router-view>
      </van-tab>
      <van-tab title="小组">
        <router-view></router-view>
      </van-tab>
      <van-tab title="游戏">
        <router-view></router-view>
      </van-tab>
      <van-tab title="应用">
        <router-view></router-view>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: this.$route.query.active
    };
  },
  methods: {
    // 跳转子路由
    tabRouter(index, title) {
      switch (index) {
        case 0:
          this.$router.push({ name: "movie", query: { active: 0 } });
          break;
        case 1:
          this.$router.push({ name: "tv", query: { active: 1 } });
          break;
        case 2:
          this.$router.push({ name: "book", query: { active: 2 } });
          break;
        case 3:
          this.$router.push({ name: "music", query: { active: 3 } });
          break;
        case 4:
          this.$router.push({ name: "group", query: { active: 4 } });
          break;
        case 5:
          this.$router.push({ name: "game", query: { active: 5 } });
          break;
        default:
          this.$router.push({ name: "apps", query: { active: 6 } });
          break;
      }
    }
  },
  mounted() {
    this.$store.commit("change", {
      flag: "none",
      title: "首页",
      bgColor: "#E4A813",
      arrow: false
    });
  }
};
</script>

<style scoped>
</style>