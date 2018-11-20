<template>
    <div id="Home">
        <van-tabs v-model="active"
                  color="#42bd56"
                  sticky>
            <van-tab :title="tabTitie[0]">
                <home-slider v-for="(item, index) in movie" :key="index"
                        :title="item.title"
                        :message="item.response"
                        :status="item.flag"
                        :linkMore="{
                            path: 'List'
                        }"
                /> 
                <classify />
            </van-tab>
            <van-tab :title="tabTitie[1]">
                <home-slider v-for="(item, index) in tv" :key="index"
                        :title="item.title"
                        :message="item.response"
                        :status="item.flag"
                        :linkMore="{
                            path: 'List'
                        }"
                /> 
            </van-tab>
            <van-tab :title="tabTitie[2]">
                <home-slider v-for="(item, index) in book" :key="index"
                        :title="item.title"
                        :message="item.response"
                        :status="item.flag"
                        :linkMore="{
                            path: 'List'
                        }"
                /> 
            </van-tab>
            <van-tab :title="tabTitie[3]">
                <home-slider v-for="(item, index) in music" :key="index"
                        :title="item.title"
                        :message="item.response"
                        :status="item.flag"
                        :linkMore="{
                            path: 'List'
                        }"
                /> 
            </van-tab>
            <van-tab title="阅读">
                
            </van-tab>
            <van-tab title="游戏">
                
            </van-tab>
            <van-tab title="应用">
                
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import homeSlider from "../components/homeSlider";
import classify from "../components/classify";

export default {
  name: "Home",
  data() {
    return {
      active: 0,
      tabTitie: ["电影", "电视", "图书", "音乐"],
      movie: [
        {
          title: "热门电影前250",
          response: null,
          flag: true
        },
        {
          title: "影院热映",
          response: null,
          flag: true
        },
        {
          title: "免费在线电影",
          response: null,
          flag: true
        },
        {
          title: "新片速递",
          response: null,
          flag: true
        }
      ],
      book: [
        {
          title: "最受关注图书：虚构类",
          response: null,
          flag: true
        },
        {
          title: "最受关注图书：非虚构类",
          response: null,
          flag: true
        },
        {
          title: "豆瓣书店",
          response: null,
          flag: false
        }
      ],
      tv: [
        {
          title: "近期热门国产剧",
          response: null,
          flag: true
        },
        {
          title: "近期热门综艺节目",
          response: null,
          flag: true
        },
        {
          title: "近期热门美剧",
          response: null,
          flag: true
        }
      ],
      music: [
        {
          title: "华语新碟榜",
          response: null,
          flag: true
        },
        {
          title: "欧美新碟榜",
          response: null,
          flag: true
        },
        {
          title: "日韩新碟榜",
          response: null,
          flag: true
        }
      ]
    };
  },
  components: {
    homeSlider,
    classify
  },
  methods: {
    // 电影
    movieTop250() {
      let paramObj = {
        start: 0,
        count: 8
      };
      return this.$server.movieTop250(paramObj);
    },
    movieHot() {
      let params = {
        start: 0,
        count: 8
      };
      return this.$server.movieHot(params);
    },
    movieFree() {
      let params = {
        start: 0,
        count: 8
      };
      return this.$server.movieFree(params);
    },
    movieRecent() {
      let params = {
        start: 0,
        count: 8
      };
      return this.$server.movieRecent(params);
    },
    // 电视
    domestic() {
      let params = {
        start: 0,
        count: 8
      };
      return this.$server.domestic(params);
    },
    varietyShow() {
      let params = {
        start: 0,
        count: 8
      };
      return this.$server.varietyShow(params);
    },
    american() {
      let params = {
        start: 0,
        count: 8
      };
      return this.$server.american(params);
    },
    // 图书
    bookFiction() {
      let params = {
        start: 0,
        count: 8
      };
      return this.$server.bookFiction(params);
    },
    bookNoFiction() {
      let params = {
        start: 0,
        count: 8
      };
      return this.$server.bookNoFiction(params);
    },
    bookStore() {
      let params = {
        start: 0,
        count: 8
      };
      return this.$server.bookStore(params);
    },
    // 音乐
    Chinese() {
      let params = {
        start: 0,
        count: 8
      };
      return this.$server.Chinese(params);
    },
    occident() {
      let params = {
        start: 0,
        count: 8
      };
      return this.$server.occident(params);
    },
    japanKorea() {
      let params = {
        start: 0,
        count: 8
      };
      return this.$server.japanKorea(params);
    }
  },
  mounted() {
    this.$store.commit("change", {
      flag: "none",
      title: "首页",
      bgColor: "#E4A813",
      arrow: false
    });
    Promise.all([
      this.movieTop250(),
      this.movieHot(),
      this.movieFree(),
      this.movieRecent()
    ]).then(resArray => {
      for (let i in resArray) {
        if (i == 0) {
          this.movie[i].response = resArray[i].subjects;
          this.movie[i].response.forEach(element => {
            element.cover = {
              url: element.images.small
            };
            element.rating = {
              value: element.rating.average
            };
          });
        } else {
          this.movie[i].response = resArray[i].subject_collection_items;
          this.movie[i].response.forEach(element => {
            if (!element.rating) {
              element.rating = {
                value: "暂无评分"
              };
            }
          });
        }
      }
    });
    Promise.all([this.domestic(), this.varietyShow(), this.american()]).then(
      resArray => {
        for (let i in resArray) {
          this.tv[i].response = resArray[i].subject_collection_items;
          this.tv[i].response.forEach(element => {
            if (!element.rating) {
              element.rating = {
                value: "暂无评分"
              };
            }
          });
        }
      }
    );
    Promise.all([
      this.bookFiction(),
      this.bookNoFiction(),
      this.bookStore()
    ]).then(resArray => {
      for (let i in resArray) {
        this.book[i].response = resArray[i].subject_collection_items;
        this.book[i].response.forEach(element => {
          if (!element.rating) {
            element.rating = {
              value: "暂无评分"
            };
          }
        });
      }
    });
    Promise.all([this.Chinese(), this.occident(), this.japanKorea()]).then(
      resArray => {
        for (let i in resArray) {
          this.music[i].response = resArray[i].subject_collection_items;
          this.music[i].response.forEach(element => {
            if (!element.rating) {
              element.rating = {
                value: "暂无评分"
              };
            }
          });
        }
      }
    );
  }
};
</script>

<style scoped>
p {
  width: 750px;
}
</style>