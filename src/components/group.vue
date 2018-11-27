<template>
  <div id="group">
    <header>{{title}}</header>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <aside class="group-top">
          <img :src="'https://images.weserv.nl/?url=' + item.owner.avatar" alt>
          <span class="group-name">{{item.name}}</span>
          <span class="group-member">{{item.member_count}}人</span>
        </aside>
        <aside class="group-bottom">
          {{item.desc_abstract.length >= 20 ? item.desc_abstract.substring(0, 20) + '...' :
          item.desc_abstract}}
        </aside>
      </li>
    </ul>
    <footer>
      <router-link to="#">
        <span>更多相关小组</span>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "group",
  props: {
    title: String,
    data: Array
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mixin";

#group {
  @include sizeColor(18px, #111, inherit);
  margin-left: 18px;
  li {
    padding: 15px 18px 15px 0;
    .group-top {
      @include flex;
      @include fl_column_center;
      img {
        @include wh(40px, auto);
      }
      span {
        &.group-name {
          flex: 1;
          padding: 0 10px;
        }
        &.group-member {
          @include sizeColor(15px, #ccc, inherit);
        }
      }
    }
    .group-bottom {
      @include sizeColor(15px, #aaa, inherit);
      margin-top: 10px;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  footer {
    @include fz_center;
    padding: 12px 0;
    margin-bottom: 30px;
    span {
      @include sizeColor(15px, #42bd56, inherit);
    }
  }
}
</style>