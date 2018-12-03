<template>
  <div id="list">
    <header>{{$route.query.title}}</header>
    <section class="list-container">
      <aside class="list-box" v-for="(item, index) in obj" :key="index">
        <router-link
          :to="{ name: 'detail', query: { id: item.id, type: $route.query.type, t: item.title } }"
        >
          <aside class="list-container-cover">
            <img v-lazy="'https://images.weserv.nl/?url=' + item.cover.url" :alt="item.cover.url">
          </aside>
          <aside class="list-container-info">
            <h3>{{item.title.length >= 5 ? item.title.substring(0, 5) + '...' : item.title}}</h3>
            <p class="rank">
              <van-rate
                v-model="item.rating.value / 2"
                readonly
                :count="5"
                :size="10"
                v-show="item.rating.value == '暂无评分' ? false : true"
              />
              <span class="rank-text">{{item.rating.value}}</span>
            </p>
          </aside>
        </router-link>
      </aside>
    </section>
    <section id="loading" v-show="isLoad">
      <van-loading type="spinner" color="green"/>
    </section>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      obj: [],
      count: 20,
      isLoad: true, //正在加载
      flag: true, //没有请求
      isBottom: false //是否到底
    };
  },
  computed: {
    params() {
      let paramObj = {
        start: 0,
        count: this.count
      };
      return paramObj;
    }
  },
  methods: {
    load() {
      if (this.flag) {
        this.flag = false;
        this.$server[this.$route.query.reqType](this.params).then(res => {
          this.obj = res.subject_collection_items;
          this.obj.forEach(element => {
            if (!element.rating) {
              element.rating = {
                value: "暂无评分"
              };
            }
          });
          // console.log(this.obj);
          this.flag = true;
          this.isLoad = false;
        });
      }
    }
  },
  mounted() {
    let _this = this;
    this.$store.commit("change", {
      flag: "block",
      title: this.$route.query.title,
      bgColor: "#E4A813",
      arrow: true
    });
    this.load();
    window.onscroll = () => {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var clientHeight = document.documentElement.clientHeight;
      var scrollHeight = document.documentElement.scrollHeight;
      if (
        Math.abs(scrollTop + clientHeight - scrollHeight) < 1 &&
        !this.isBottom
      ) {
        this.isBottom = true;
        this.count += 10;
        this.load();
        this.isLoad = true;
      }
    };
  }
};
</script>

<style scoped lang='scss'>
@import "@/assets/scss/mixin.scss";

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
  .list-box {
    margin-bottom: 20px;
  }
}
#loading {
  @include flex;
  @include fl_row_center;
}
</style>