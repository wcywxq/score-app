<template>
  <div id="detail">
    <section class="card">
      <h1>无名之辈分</h1>
      <section class="card-info">
        <aside class="card-info-left">
          <p class="rating">
            <van-rate v-model="val" readonly :count="5" :size="10"/>
            <span class="rating-val">8.6</span>
            <span class="rating-commit">149307人评价</span>
          </p>
          <p class="meta">108分钟 / 剧情 / 喜剧 / 饶晓志(导演) / 陈建斌 / 任素汐 / 潘斌龙 / 2018-11-16(中国大陆) 上映</p>
        </aside>
        <aside class="card-info-right">
          <a href="#">
            <img
              src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
              alt
            >
          </a>
        </aside>
      </section>
      <section class="card-channel">
        <h2 class="card-subTitle">所属频道</h2>
        <ul>
          <li>
            <a href="#">黑色幽默
              <van-icon name="arrow" size="8px"/>
            </a>
          </li>
          <li>
            <a href="#">黑色幽默
              <van-icon name="arrow" size="8px"/>
            </a>
          </li>
          <li>
            <a href="#">黑色幽默
              <van-icon name="arrow" size="8px"/>
            </a>
          </li>
        </ul>
      </section>
      <section class="card-synopsis">
        <h2 class="card-subTitle">无名之辈的剧情简介</h2>
        <p
          ref="content"
          data-content="在一座山间小城中，一对低配劫匪、一个落魄的泼皮保安、一个身体残疾却性格彪悍的毒舌女以及一系列生活在社会不同轨迹上的小人物，在一个貌似平常的日子里，因为一把丢失的老枪和一桩当天发生在城中的乌龙劫案，从而被阴差阳错地拧到一起，发生的一幕幕令人啼笑皆非的荒诞喜剧。"
        >
          在一座山间小城中，一对低配劫匪、一个落魄的泼皮保安、一个身体残疾却性格彪悍的毒舌女以及一系列生活在社会不同轨迹上的小人物，在一...
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
            <li>
              <a href="javascript:;">
                <img
                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                  alt="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                >
              </a>
              <span class="item-title name">饶晓志</span>
              <span class="item-title role">导演</span>
            </li>
            <li>
              <a href="javascript:;">
                <img
                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                  alt="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                >
              </a>
              <span class="item-title name">饶晓志</span>
              <span class="item-title role">导演</span>
            </li>
            <li>
              <a href="javascript:;">
                <img
                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                  alt="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                >
              </a>
              <span class="item-title name">饶晓志</span>
              <span class="item-title role">导演</span>
            </li>
            <li>
              <a href="javascript:;">
                <img
                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                  alt="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                >
              </a>
              <span class="item-title name">饶晓志</span>
              <span class="item-title role">导演</span>
            </li>
            <li>
              <a href="javascript:;">
                <img
                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                  alt="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                >
              </a>
              <span class="item-title name">饶晓志</span>
              <span class="item-title role">导演</span>
            </li>
            <li>
              <a href="javascript:;">
                <img
                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                  alt="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                >
              </a>
              <span class="item-title name">饶晓志</span>
              <span class="item-title role">导演</span>
            </li>
            <li>
              <a href="javascript:;">
                <img
                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                  alt="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                >
              </a>
              <span class="item-title name">饶晓志</span>
              <span class="item-title role">导演</span>
            </li>
            <li>
              <a href="javascript:;">
                <img
                  src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                  alt="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.webp"
                >
              </a>
              <span class="item-title name">饶晓志</span>
              <span class="item-title role">导演</span>
            </li>
          </ul>
        </aside>
      </section>
      <section class="card-trailer">
        <h2 class="card-subTitle">
          <span>无名之辈的</span>
          <span>预告片(12)</span>
          <span>和</span>
          <span>图片(322)</span>
        </h2>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      val: 2.3
    };
  },
  methods: {
    add() {
      this.$refs.content.innerHTML = this.$refs.content.dataset.content;
    }
  },
  mounted() {
    this.$store.commit("change", {
      flag: "block",
      title: 'xxii',
      bgColor: "#E4A813",
      arrow: true
    });
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mixin.scss";
#detail {
  .card {
    margin: 0 18px;
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
            margin-left: 8px;
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

  .card-subTitle {
    @include sizeColor(15px, #aaa, inherit);
    font-weight: 400;
    margin-bottom: 15px;
  }
}
</style>