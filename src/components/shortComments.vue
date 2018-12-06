<template>
  <div id="shortComments">
    <section class="comment">
      <ul>
        <li v-for="(item, index) in ShortCommit.interests" :key="index">
          <aside class="comment-top">
            <a :href="item.user.url">
              <img v-lazy="'https://images.weserv.nl/?url=' + item.user.avatar" alt>
            </a>
            <div class="comment-top-info">
              <aside class="info-rating">
                <strong>{{ item.user.name }}</strong>
                <van-rate v-model="item.rating.value" readonly :count="item.rating.max" :size="10"/>
              </aside>
              <p class="info-date">{{ item.create_time }}</p>
            </div>
          </aside>
          <p class="comment-content">{{ item.comment }}</p>
          <aside class="comment-footer">
            <i class="iconfont icon-dianzan"></i>
            <span class="text">{{ item.vote_count }}</span>
          </aside>
        </li>
      </ul>
    </section>
    <section class="go-all" v-show="isShow">
      <router-link :to="{
        name: 'hot', 
        query: {
          type: $route.query.type,
          id: $route.query.id
        }
      }">查看全部短评</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "shortComments",
  data() {
    return {};
  },
  props: {
    ShortCommit: Object,
    isShow: Boolean
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mixin.scss";
#shortComments {
  .comment {
    li {
      padding-bottom: 15px;
    }
    &-top {
      @include flex;
      margin-bottom: 11px;
      img {
        @include wh(36px, 36px);
        margin-right: 10px;
        border-radius: 50%;
      }
      &-info {
        @include sizeColor(15px, #494949, inherit);
        .info-rating {
          @include flex;
          @include fl_column_center;
          strong {
            margin-right: 6px;
          }
        }
        .info-date {
          @include sizeColor(12px, #aaa, inherit);
          margin-top: 6px;
        }
      }
    }
    &-content {
      @include sizeColor(15px, #494949, inherit);
      padding: 0 0 0 40px;
      line-height: 22px;
    }
    &-footer {
      @include sizeColor(14px, #ccc, inherit);
      margin-left: 40px;
      margin-top: 10px;
      .text {
        margin-left: 3px;
      }
    }
  }
}
</style>