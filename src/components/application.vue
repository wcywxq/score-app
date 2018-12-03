<template>
    <div id="application">
        <header>
            <h2>{{title}}</h2>
        </header>
        <aside>
            <ul>
                <li v-for="(item, index) in data" :key="index">
                    <a :href="item.url">
                        <img v-lazy="'https://images.weserv.nl/?url=' + item.img" :alt="item.img">
                        <div>
                            <span>{{item.name.length >= 6 ? item.name.substring(0, 6) + '...' : item.name}}</span>
                            <p class="star">
                            <span>
                                <van-rate v-model="item.rating / 2"
                                          readonly
                                          :count="5"
                                          :size="10"
                                />
                            </span>
                                <span>
                                    评分：{{item.rating}}
                                </span>
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
    export default {
        name: "application",
        data() {
            return {}
        },
        props: {
            title: String,
            data: Array
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/mixin";

    #application {
        header {
            h2 {
                @include sizeColor(18px, #111, inherit);
                font-weight: normal;
                padding-left: 14px;
                padding-bottom: 18px;
            }
        }
        aside {
            overflow-x: scroll;
            @include scrollbar;
            ul {
                @include flex;
                margin: 0 10px;
                li {
                    margin-left: 8px;
                    img {
                        @include wh(100px, 100px)
                    }
                    div {
                        span {
                            @include wh(100%, auto);
                            @include sizeColor(14px, #323232, inherit);
                            @include fz-center;
                            display: inline-block;
                        }
                        .star {
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