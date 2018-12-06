<template>
  <div id="dtHeader">
    <header>
      <p class="comments-subjects">
        <img
          v-lazy="'https://images.weserv.nl/?url=' + detailsMsg.cover_img.url"
          :alt="detailsMsg.cover_img.url"
        >
        <span>{{ detailsMsg.title }}</span>
        <span>{{ detailsMsg.extra.rating_group.rating.value }}分</span>
      </p>
    </header>
  </div>
</template>

<script>
export default {
  name: "dtHeader",
  data() {
    return {
      detailsMsg: null
    };
  },
  methods: {
    more() {
      return this.$server.more(this.$route.query.id);
    }
  },
  mounted() {
    // 根据id获取详情
    this.more().then(res => {
      this.detailsMsg = res;
      // 标题
      this.$store.commit("change", {
        flag: "block",
        title: this.detailsMsg.title,
        bgColor: "#E4A813",
        arrow: true
      });
    });
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mixin.scss";

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
}
</style>