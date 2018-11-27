<template>
  <div id="list">
    <header>{{$route.query.title}}</header>
    <section class="list-container">
      <router-link to="#" v-for="(item, index) in $route.query.obj" :key="index">
        <aside class="list-container-cover">
          <img :src="'https://images.weserv.nl/?url=' + item.cover.url" :alt="item.cover.url">
        </aside>
        <aside class="list-container-info">
          <h3>{{item.title.length >= 5 ? item.title.substring(0, 5) + '...' : item.title}}</h3>
          <p class="rank">
            <van-rate v-model="item.rating.value / 2" readonly :count="5" :size="10"/>
            <span class="rank-text">{{item.rating.value}}</span>
          </p>
        </aside>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {};
  },
  mounted() {
    let _this = this;
    this.$store.commit("change", {
      flag: "block",
      title: this.$route.query.title,
      bgColor: "#E4A813",
      arrow: true
    });
  }
};
</script>

<style scoped lang='scss'>
@import "../assets/scss/mixin.scss";

#list {
  header {
    @include sizeColor(24px, #000, inherit);
    padding-left: 22px;
    padding-top: 16px;
  }
  .list-container {
    @include flex;
    @include fz-center;
    flex-wrap: wrap;
    padding: 20px 8px;
    a {
      margin-bottom: 20px;
    }
    &-cover {
      padding: 0 14px;
      img {
        @include wh(90px, 130px);
      }
    }
    &-info {
      h3 {
        @include sizeColor(13px, #494949, inherit);
      }
      .rank {
        @include flex;
        @include fl_row_center;
        @include sizeColor(12px, #494949, inherit);
        padding-top: 3px;
      }
    }
  }
}
</style>