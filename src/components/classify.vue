<template>
    <div id="classify">
        <header>
            <h2>{{title}}</h2>
        </header>
        <section class="classify-container">
            <ul>
                <li v-for="(item, index) in type" :key="index">
                    <aside class="classify-list">
                        <router-link to="#">
                            {{item}}
                        </router-link>
                        <van-icon name="arrow" color="#42bd56" size="8px"/>
                    </aside>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: "classify",
        data() {
            return {};
        },
        props: {
            type: Array,
            title: String
        }
    };
</script>

<style scoped lang="scss">
    @import "../assets/scss/mixin";

    #classify {
        padding-bottom: 30px;
        header {
            padding-left: 14px;
            padding-bottom: 18px;
            h2 {
                @include sizeColor(18px, #111, inherit);
                font-weight: normal;
            }
        }
        .classify-container {
            margin-left: 12px;
            ul {
                li {
                    @include wh(41.5%, 42px);
                    padding: 0 12px;
                    display: inline-block;
                    line-height: 42px;
                    border-top: 1px solid #ddd;
                    border-right: 1px solid #ddd;
                    &:nth-child(2n) {
                        border-right: none;
                    }
                    .classify-list {
                        @include flex;
                        @include fl_column_center;
                        @include fz-right;
                        a {
                            @include sizeColor(14px, #42bd56, inherit);
                            @include fz-left;
                            flex: 1;
                        }
                    }
                }
            }
        }
    }
</style>