<template>
  <div id="child-music">
    <home-slider
      v-for="(item, index) in cata.data[3].value"
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
    <classify :type="type['music']" title="分类浏览"/>
  </div>
</template>

<script>
import homeSlider from "@/components/homeSlider";
import classify from "@/components/classify";
import cataData from "@/static/json/cata.json";
import type from "@/static/json/type.json";

export default {
  name: "music",
  data() {
    return {
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
    params() {
      let paramObj = {
        start: 0,
        count: 8
      };
      return paramObj;
    }
  },
  methods: {
    // 音乐
    Chinese() {
      return this.$server.Chinese(this.params);
    },
    occident() {
      return this.$server.occident(this.params);
    },
    japanKorea() {
      return this.$server.japanKorea(this.params);
    }
  },
  mounted() {
    Promise.all([this.Chinese(), this.occident(), this.japanKorea()]).then(
      resArray => {
        this.isLoading = false;
        // 遍历所有的异步请求数据对象
        for (let [index, item] of resArray.entries()) {
          if (this.cata.data[3].value[index]) {
            this.cata.data[3].value[index].response =
              item.subject_collection_items;
            this.cata.data[3].value[index].response.forEach(element => {
              if (!element.rating) {
                element.rating = {
                  value: "暂无评分"
                };
              }
            });
          }
        }
      }
    );
  }
};
</script>

<style scoped>
</style>