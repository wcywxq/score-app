<template>
    <div id="Home">
        <van-tabs v-model="active"
                  color="#42bd56"
                  sticky>
            <van-tab title="电影">
                <home-slider
                        title="影院热映"
                        :message="hot"
                        :linkMore="{
                            path: 'List'
                        }"
                />
                <home-slider
                        title="免费在线电影"
                        :message="free"
                        :linkMore="{
                            path: 'List'
                        }"
                />
                <home-slider
                        title="新片速递"
                        :message="recent"
                        :linkMore="{
                            path: 'List'
                        }"
                />
                <home-slider
                        title="热门电影前250"
                        :message="top250"
                        :linkMore="{
                            path: 'List'
                        }"
                />
            </van-tab>
            <van-tab title="书籍">
            </van-tab>
            <van-tab title="音乐">
            </van-tab>
            <van-tab title="我的">
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import homeSlider from '../components/homeSlider'

    const jsonp = require('jsonp');

    export default {
        name: 'Home',
        data() {
            return {
                active: 0,
                hot: null,
                free: null,
                recent: null,
                top250: []
            }
        },
        components: {
            homeSlider
        },
        methods: {
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
            movieTop250() {
                let paramObj = {
                    start: 0,
                    count: 8
                };
                return this.$server.movieTop250(paramObj);
            }
        },
        mounted() {
            this.$store.commit('change', {
                flag: 'none',
                title: '首页',
                bgColor: '#E4A813',
                arrow: false
            });
            this.movieHot().then(data => {
                this.hot = data.subject_collection_items;
                this.hot.forEach(item => {
                    if(!item.rating) {
                        item.rating = {
                            value: '暂无评分'
                        }
                    }
                });
            });
            this.movieFree().then(data => {
                this.free = data.subject_collection_items;
                this.free.forEach(item => {
                    if(!item.rating) {
                        item.rating = {
                            value: '暂无评分'
                        }
                    }
                });
            });
            this.movieRecent().then(data => {
                this.recent = data.subject_collection_items;
                this.recent.forEach(item => {
                    if(!item.rating) {
                        item.rating = {
                            value: '暂无评分'
                        }
                    }
                });
            });
            this.movieTop250().then(data => {
                this.top250 = data.subjects;
                this.top250.forEach(item => {
                    item.cover = {
                        url: item.images.small
                    };
                    item.rating = {
                        value: item.rating.average
                    };
                });
                console.log(this.top250)
            });
        }
    }
</script>

<style scoped>
    p {
        width: 750px;
    }
</style>