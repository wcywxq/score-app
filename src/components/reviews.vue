<template>
  <div id="reviews">
    <section class="reviews">
      <h2 class="card-subTitle">讨论({{ Reviews.total }})</h2>
      <section class="reviews-list">
        <ul>
          <li v-for="(item, index) in Reviews.forum_topics" :key="index">
            <a :href="item.url">
              <h3>{{ item.title }}</h3>
              <div class="reviews-list-info">{{ item.comments_count }}回应</div>
            </a>
          </li>
        </ul>
      </section>
      <section class="go-all" v-show="isShow">
        <router-link
          :to="{
          name: 'discussion', 
          query: {
            type: $route.query.type,
            id: $route.query.id
          }
        }"
        >查看全部讨论</router-link>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "reviews",
  data() {
    return {};
  },
  props: {
    Reviews: Object,
    isShow: Boolean
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mixin.scss";
#reviews {
  .reviews {
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