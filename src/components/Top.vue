<template>
  <div id="top">
    <van-nav-bar
      :title="$store.state.title"
      :style="{
                    color: style.fontColor,
                    background: style.bgColor
                }"
      :left-arrow="$store.state.arrow"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon
        class="top-left"
        name="arrow-left"
        slot="left"
        color="#fff"
        :style="{
          display: $store.state.flag
          }"
      />
      <van-icon name="share" slot="right" color="#fff"/>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      style: {
        fontColor: this.$store.state.fontColor,
        bgColor: this.$store.state.bgColor
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      console.log("share");
    }
  },
  mounted() {}
};
</script>

<style scoped>
.top-nav-bar {
  display: flex;
  width: 100%;
  align-items: center;
}
.top-left {
    position: absolute;
    top: -30px;
}
</style>