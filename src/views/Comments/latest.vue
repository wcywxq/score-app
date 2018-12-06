<template>
  <div id="latest">
    <section class="comments-content">
      <short-comments :ShortCommit="commitsLatestObj" :isShow="false"/>
      <van-pagination
        v-model="currentPage"
        :page-count="Math.ceil(commitsLatestObj.total / 25)"
        mode="multi"
        @change="getPageLatestVal"
      />
      <section id="loading">
        <van-loading color="green" v-show="isLoading"/>
      </section>
    </section>
  </div>
</template>

<script>
import shortComments from "@/components/shortComments";

export default {
  name: "latest",
  data() {
    return {
      isLoading: true,
      commitsLatestObj: null,
      currentPage: 1
    };
  },
  components: {
    shortComments
  },
  methods: {
    paramObj($type) {
      let _this = this;
      let params = {
        count: 25,
        order_by: $type,
        start: (_this.currentPage - 1) * 25,
        ck: "",
        for_mobile: 1
      };
      return params;
    },
    latestParams() {
      return this.$server.shotCommits(
        this.$route.query.type,
        this.$route.query.id,
        this.paramObj("latest")
      );
    },
    getPageLatestVal(value) {
      this.currentPage = value;
      this.latestParams().then(res => {
        this.isLoading = false;
        this.commitsLatestObj = res;
      });
    }
  },
  mounted() {
    this.latestParams().then(res => {
      this.isLoading = false;
      this.commitsLatestObj = res;
    });
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/mixin.scss";

.comments {
  &-subjects {
    @include flex;
    @include fl_column_center;
    @include sizeColor(16px, #42bd56, inherit);
    padding: 12px 0;
    border-bottom: 1px solid #f3f3f3;
    img {
      @include wh(17px, 24px);
      margin-right: 6px;
    }
    span:last-child {
      margin-left: 2px;
      color: #b4b4b4;
      white-space: nowrap;
    }
  }
  &-title {
    margin-bottom: 30px;
    h1 {
      @include sizeColor(24px, #000, inherit);
      margin: 30px 70px 5px 0;
      font-weight: normal;
      line-height: 32px;
      word-break: break-all;
    }
  }
  &-content {
    position: relative;
    margin-top: 16px;
  }
}
#loading {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}
</style>