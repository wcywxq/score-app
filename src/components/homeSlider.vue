<template>
    <div id="homeSlider">
        <header>
            <h2>{{title}}</h2>
            <router-link :to="linkMore">更多</router-link>
        </header>
        <aside>
            <ul>
                <li v-for="(item, key) in message"
                    :key="key"
                    :data-id="item.id"
                    @click="more"
                >
                    <img :src="'https://images.weserv.nl/?url=' + item.cover.url" alt="">
                    <div>
                        <span>{{item.title.length >= 5 ? item.title.substring(0, 5) + '...' : item.title}}</span>
                        <p class="star">
                            <span>
                            <van-rate v-model="item.rating.value / 2"
                                      readonly
                                      :count="5"
                                      :size="10"
                            />
                            </span>
                            <span ref="rating" :data-rating="item.rating ? item.rating.value : '暂无评分'">
                                {{typeof item.rating.value == 'string' ? item.rating.value : '评分：' + item.rating.value}}
                            </span>
                        </p>
                    </div>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
    export default {
        name: "homeSlider",
        data() {
            return {}
        },
        props: {
            title: String,
            message: Array,
            linkMore: Object
        },
        methods: {
            more(e) {
                this.$router.push({
                    path: 'movieDetail',
                    query: {
                        id: e.currentTarget.dataset.id
                    }
                })
            }
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/mixin";

    #homeSlider {
        header {
            @include flex;
            @include fl_column_center;
            padding: 0 14px;
            h2 {
                @include sizeColor(18px, #111, inherit);
                font-weight: normal;
                flex: 1;
            }
            a {
                @include sizeColor(15px, #42bd56, inherit);
                display: block;
            }
        }
        aside {
            overflow-x: scroll;
            @include scrollbar;
            ul {
                @include flex;
                padding: 15px;
                li {
                    @include wh(100px, auto);
                    padding-right: 10px;
                    &:last-child {
                        padding-right: 15px;
                    }
                    img {
                        @include wh(auto, 143px);
                        display: block;
                    }
                    div {
                        span {
                            @include wh(100%, auto);
                            @include sizeColor(14px, #323232, inherit);
                            @include fz-center;
                            display: inline-block;
                        }
                        p.star {
                            @include flex;
                            flex-direction: column;
                            padding: 0 10px;
                            span {
                                @include sizeColor(12px, #aaa, inherit);
                            }
                        }
                    }
                }
            }

        }
    }
</style>