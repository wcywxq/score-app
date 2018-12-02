<template>
  <div id="card">
    <section class="card">
      <h1>{{ $route.query.title }}</h1>
      <section class="card-info">
        <aside class="card-info-left">
          <p class="rating">
            <van-rate
              v-model="dataVal.extra.rating_group.rating.value / 2"
              readonly
              :count="5"
              :size="10"
            />
            <span class="rating-val">{{ dataVal.extra.rating_group.rating.value }}</span>
            <span class="rating-commit">{{ dataVal.extra.rating_group.rating.count }}人评价</span>
          </p>
          <p class="meta">{{ dataVal.extra.short_info }}</p>
        </aside>
        <aside class="card-info-right">
          <a href="#">
            <img
              :src="'https://images.weserv.nl/?url=' + dataVal.cover_img.url"
              :alt="dataVal.cover_img.url"
            >
          </a>
        </aside>
      </section>
      <section class="card-channel" v-show="tags()">
        <h2 class="card-subTitle">所属频道</h2>
        <ul>
          <li v-for="(item, index) in dataVal.tags" :key="index">
            <a :href="item.url" :data-id="item.id">
              {{ item.name }}
              <van-icon name="arrow" size="8px"/>
            </a>
          </li>
        </ul>
      </section>
      <section class="card-synopsis">
        <h2 class="card-subTitle">{{ $route.query.title }}的剧情简介</h2>
        <p ref="content" :data-content="content">
          {{ content.substring(0, 80) + '...' }}
          <a
            ref="add"
            @click="add"
            class="expand"
            href="javascript:;"
          >(展开)</a>
        </p>
      </section>
      <section class="card-filmmaker">
        <h2 class="card-subTitle">影人</h2>
        <aside class="card-filmmaker-box">
          <ul>
            <li v-for="(item, index) in dataPerson" :key="index">
              <aside v-for="(element, idx) in item.celebrities" :key="idx">
                <a :href="element.url">
                  <img
                    :src="'https://images.weserv.nl/?url=' + element.cover_url"
                    :alt="element.cover_url"
                  >
                </a>
                <span class="item-title name">{{ element.name }}</span>
                <span class="item-title role">{{ item.title }}</span>
              </aside>
            </li>
          </ul>
        </aside>
      </section>
      <!-- <section class="card-trailer">
        <h2 class="card-subTitle">
          <span>{{ $route.query.title }}的</span>
          <span>预告片(12)</span>
          <span>和</span>
          <span>图片(322)</span>
        </h2>
      </section> -->
    </section>
  </div>
</template>

<script>
export default {
  name: "cards",
  data() {
    return {};
  },
  props: {
    dataVal: Object,
    dataPerson: Array
  },
  computed: {
    content() {
      let str = this.dataVal.desc
        .split('<div class="content">')
        .join("")
        .split("</div>")
        .join("");
      return str;
    }
  },
  methods: {
    tags() {
      if (
        JSON.stringify(this.dataVal.tags) == "{}" ||
        JSON.stringify(this.dataVal.tags) == "[]"
      ) {
        return false;
      } else {
        return true;
      }
    },
    add() {
      this.$refs.content.innerHTML = this.$refs.content.dataset.content;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mixin.scss";
#card {
  .card {
    h1 {
      @include sizeColor(24px, #000, inherit);
      margin: 30px 0 5px;
      font-weight: normal;
    }
    &-info {
      @include flex;
      margin-bottom: 30px;
      &-left {
        @include sizeColor(15px, #494949, inherit);
        line-height: 20px;
        .rating {
          @include flex;
          &-val {
            font-weight: normal;
            padding-right: 8px;
          }
          &-commit {
            color: #aaa;
          }
        }
        .meta {
          margin-top: 15px;
          padding-right: 24px;
        }
      }
      &-right {
        img {
          @include wh(100px, 140px);
        }
      }
    }
    &-channel {
      margin-bottom: 30px;
      ul {
        li {
          @include sizeColor(13px, #42bd56, inherit);
          display: inline-block;
          background-color: #effaf0;
          border: 1px solid #42bd56;
          border-radius: 15px;
          margin: 0 10px 10px 0;
          padding: 5px 10px;
          a {
            color: #42bd56;
          }
        }
      }
    }
    &-synopsis {
      margin-bottom: 30px;
      p {
        @include sizeColor(15px, #494949, inherit);
      }
      .expand {
        color: #42bd56;
      }
    }
    &-filmmaker {
      &-box {
        @include scrollbar;
        overflow: scroll;
        ul {
          @include flex;
          li {
            @include flex;
            aside {
              margin-left: 8px;
            }
            .item-title {
              @include sizeColor(14px, #494949, inherit);
              @include fz-center;
              display: block;
              line-height: 1.5;
              &.role {
                color: #aaa;
              }
            }
            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
      img {
        @include wh(75px, auto);
      }
    }
  }
}
</style>