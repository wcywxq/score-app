<template>
  <div id="discuss">
    <h2 class="card-subTitle">{{ title }}的短评({{ dataShortCommit.total }})</h2>
    <section class="comment">
      <ul>
        <li v-for="(item, index) in dataShortCommit.interests" :key="index">
          <aside class="comment-top">
            <a :href="item.user.url">
              <img :src="'https://images.weserv.nl/?url=' + item.user.avatar" alt>
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
      <section class="go-all">
        <router-link to="#">查看全部短评</router-link>
      </section>
    </section>
    <section class="discuss">
      <h2 class="card-subTitle">讨论({{ dataDiscuss.total }})</h2>
      <section class="discuss-list">
        <ul>
          <li v-for="(item, index) in dataDiscuss.forum_topics" :key="index">
            <a :href="item.url">
              <h3>{{ item.title }}</h3>
              <div class="discuss-list-info">{{ item.comments_count }}回应</div>
            </a>
          </li>
        </ul>
      </section>
      <section class="go-all">
        <router-link to="#">查看全部讨论</router-link>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "discuss",
  data() {
    return {};
  },
  props: {
    dataShortCommit: Object,
    title: String,
    count: String,
    dataDiscuss: Object
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mixin.scss";
#discuss {
  .comment {
    li {
      padding-bottom: 15px;
    }
    &-top {
      @include flex;
      margin-bottom: 11px;
      img {
        @include wh(36px, auto);
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
  .discuss {
    &-list {
      ul {
        li {
          padding: 0 18px 15px 0;
          a {
            color: #494949;
            h3 {
              @include sizeColor(17px, #494949, inherit);
              font-weight: 500;
            }
          }
        }
      }

      &-info {
        @include sizeColor(14px, #42bd56, inherit);
        margin-top: 5px;
      }
    }
  }
}
</style>