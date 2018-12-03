<template>
  <div id="child-movie">
    <home-slider
      v-for="(item, index) in cata.data[0].value"
      :key="index"
      :title="item.title"
      :message="item.response"
      :status="item.flag"
      :type="item.type"
      :Loading="isLoading"
      :linkMore="{
                            path: `List/${item.reqType}`,
                            query: {
                                title: item.title,
                                type: item.type,
                                reqType: item.reqType
                            }
                        }"
    />
    <classify :type="type['movie']" title="分类浏览"/>
  </div>
</template>

<script>
import homeSlider from "@/components/homeSlider";
import classify from "@/components/classify";
import cataData from "@/static/json/cata.json";
import type from "@/static/json/type.json";

export default {
  name: "movie",
  data() {
    return {
      cataArray: [],
      cata: cataData,
      isLoading: true,
      type: type.data
    };
  },
  components: {
    homeSlider,
    classify
  },
  computed: {
    paramsTop250() {
      let paramObj = {
        start: 0,
        count: 8
      };
      return paramObj;
    },
    params() {
      let paramObj = {
        start: 0,
        count: 8
      };
      return paramObj;
    }
  },
  methods: {
    // 电影
    movieTop250() {
      return this.$server.movieTop250(this.paramsTop250);
    },
    movieHot() {
      return this.$server.movieHot(this.params);
    },
    movieFree() {
      return this.$server.movieFree(this.params);
    },
    movieRecent() {
      return this.$server.movieRecent(this.params);
    }
  },
  mounted() {
    Promise.all([
      this.movieTop250(),
      this.movieHot(),
      this.movieFree(),
      this.movieRecent()
    ]).then(resArray => {
      console.log(resArray);
      this.isLoading = false;
      // 遍历所有的异步请求数据对象
      for (let [index, item] of resArray.entries()) {
        if (this.cata.data[0].value[index]) {
          if (index == 0) {
            this.cata.data[0].value[index].response = item.subjects;
            this.cata.data[0].value[index].response.forEach(element => {
              element.cover = {
                url: element.images.small
              };
              element.rating = {
                value: element.rating.average
              };
            });
          } else {
            this.cata.data[0].value[index].response =
              item.subject_collection_items;
            this.cata.data[0].value[index].response.forEach(element => {
              if (!element.rating) {
                element.rating = {
                  value: "暂无评分"
                };
              }
            });
          }
        }
      }
    });
  }
};
</script>

<style scoped>
</style>