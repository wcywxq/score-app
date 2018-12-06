<template>
  <div id="Discussion">
    <dt-header/>
    <section class="discussion-box">
      <reviews :Reviews="ReviewsObj" :isShow="false"/>
      <section class="discussion-more" @click="showMore()">{{ text }}</section>
    </section>
  </div>
</template>

<script>
import reviews from "@/components/reviews";
import dtHeader from "@/components/dtHeader";

export default {
  name: "Discussion",
  data() {
    return {
      text: "加载中...",
      ReviewsObj: null,
      count: 10
    };
  },
  components: {
    reviews,
    dtHeader
  },
  methods: {
    discuss() {
      let _this = this;
      let paramObj = {
        start: 0,
        count: _this.count,
        ck: "",
        for_mobile: 1
      };
      return this.$server.discuss(
        this.$route.query.type,
        this.$route.query.id,
        paramObj
      );
    },
    showMore() {
      this.count += 10;
      this.text = "加载中...";
      /**
       * 讨论
       */
      this.discuss().then(res => {
        this.text = "显示更多";
        this.ReviewsObj = res;
      });
    }
  },
  mounted() {
    /**
     * 讨论
     */
    this.discuss().then(res => {
      this.text = "显示更多";
      this.ReviewsObj = res;
    });
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mixin.scss";

#Discussion {
  margin: 0 18px;
  .discussion {
    &-box {
      padding: 30px 0 40px 0;
    }
    &-more {
      @include sizeColor(15px, #42bd56, inherit);
      @include fz-center;
      cursor: pointer;
      line-height: 1;
      margin: 30px 18px 30px 0;
    }
  }
}
</style>