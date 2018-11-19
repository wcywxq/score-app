<template>
    <div id="Home">
        <van-tabs v-model="active"
                  color="#42bd56"
                  sticky>
            <van-tab title="电影">
                <home-slider v-for="(item, index) in movie" :key="index"
                        :title="item.title"
                        :message="item.response"
                        :status="item.flag"
                        :linkMore="{
                            path: 'List'
                        }"
                /> 
            </van-tab>
            <van-tab title="书籍">
                <home-slider v-for="(item, index) in book" :key="index"
                        :title="item.title"
                        :message="item.response"
                        :status="item.flag"
                        :linkMore="{
                            path: 'List'
                        }"
                />
            </van-tab>
            <van-tab title="音乐">
                <home-slider v-for="(item, index) in movie" :key="index"
                        :title="item.title"
                        :message="item.response"
                        :status="item.flag"
                        :linkMore="{
                            path: 'List'
                        }"
                />
            </van-tab>
            <van-tab title="我的">
                <home-slider v-for="(item, index) in movie" :key="index"
                        :title="item.title"
                        :message="item.response"
                        :status="item.flag"
                        :linkMore="{
                            path: 'List'
                        }"
                />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import homeSlider from "../components/homeSlider";

export default {
  name: "Home",
  data() {
    return {
      active: 0,
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
      ]
    };
  },
  components: {
    homeSlider
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
    }).catch(err => {
        console.log(err)
    });
  }
};
</script>

<style scoped>
p {
  width: 750px;
}
</style>