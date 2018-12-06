<template>
  <div id="Comments">
    <dt-header/>
    <aside class="comments-title">
      <h1>全部短评 ({{ commitsHotObj.total + commitsLatestObj.total }})</h1>
    </aside>
    <van-tabs type="card" color="#1989fa" v-model="active" sticky animated @click="tabsChange">
      <van-tab title="热门短评">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </van-tab>
      <van-tab title="最新短评">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import dtHeader from "@/components/dtHeader";

export default {
  name: "Comments",
  data() {
    return {
      active: 0,
      commitsHotObj: null,
      commitsLatestObj: null
    };
  },
  computed: {},
  components: {
    dtHeader
  },
  methods: {
    tabsChange(index, title) {
      switch (index) {
        case 0:
          this.$router.push({
            name: "hot",
            query: {
              type: this.$route.query.type,
              id: this.$route.query.id
            }
          });
          break;
        default:
          this.$router.push({
            name: "latest",
            query: {
              type: this.$route.query.type,
              id: this.$route.query.id
            }
          });
          break;
      }
    },
    paramObj($type) {
      let _this = this;
      let params = {
        order_by: $type
      };
      return params;
    },
    hotParams() {
      return this.$server.shotCommits(
        this.$route.query.type,
        this.$route.query.id,
        this.paramObj("hot")
      );
    },
    latestParams() {
      return this.$server.shotCommits(
        this.$route.query.type,
        this.$route.query.id,
        this.paramObj("latest")
      );
    }
  },
  mounted() {
    // 获取短评总数
    this.hotParams().then(res => {
      this.commitsHotObj = res;
    });
    this.latestParams().then(res => {
      this.commitsLatestObj = res;
    });
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mixin.scss";

#Comments {
  margin: 0 18px;
  .comments-title {
    margin-bottom: 30px;
    h1 {
      @include sizeColor(24px, #000, inherit);
      margin: 30px 70px 5px 0;
      font-weight: normal;
      line-height: 32px;
      word-break: break-all;
    }
  }
}
</style>