<template>
    <div id="Home">
        <van-tabs v-model="active"
                  color="#42bd56"
                  sticky>
            <van-tab title="电影">
                <home-slider v-for="(item, index) in movie" :key="index"
                             :title="item.title"
                             :message="item.response"
                             :status="item.flag"
                             :linkMore="{
                            path: 'List'
                        }"
                />
                <classify :type="type['movie']" title="分类浏览"/>
            </van-tab>
            <van-tab title="电视">
                <home-slider v-for="(item, index) in tv" :key="index"
                             :title="item.title"
                             :message="item.response"
                             :status="item.flag"
                             :linkMore="{
                            path: 'List'
                        }"
                />
                <classify :type="type['tv']" title="分类浏览"/>
            </van-tab>
            <van-tab title="图书">
                <home-slider v-for="(item, index) in book" :key="index"
                             :title="item.title"
                             :message="item.response"
                             :status="item.flag"
                             :linkMore="{
                            path: 'List'
                        }"
                />
                <classify :type="type['book']" title="分类浏览"/>
            </van-tab>
            <van-tab title="音乐">
                <home-slider v-for="(item, index) in music" :key="index"
                             :title="item.title"
                             :message="item.response"
                             :status="item.flag"
                             :linkMore="{
                            path: 'List'
                        }"
                />
                <classify :type="type['music']" title="分类浏览"/>
            </van-tab>
            <van-tab title="小组">
                <group v-for="(item, index) in groupData"
                       :key="index"
                       :title="item.name"
                       :data="item.groups"
                />
            </van-tab>
            <van-tab title="阅读">

            </van-tab>
            <van-tab title="游戏">
                <classify v-for="(item, index) in type.game" :key="index"
                          :type="item.val"
                          :title="item.title"
                />
            </van-tab>
            <van-tab title="应用">
                <application v-for="(item, index) in app"
                             :key="index"
                             :title="item.title"
                             :data="item.val"

                />
                <classify v-for="(item, index) in type.application" :key="index"
                          :type="item.val"
                          :title="item.title"
                />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import homeSlider from "../components/homeSlider";
    import classify from "../components/classify";
    import application from "../components/application";
    import group from "../components/group";
    import data from '@/assets/application.json'

    export default {
        name: "Home",
        data() {
            return {
                active: 4,
                movie: [
                    {
                        title: "热门电影前250",
                        response: null,
                        flag: true
                    },
                    {
                        title: "影院热映",
                        response: null,
                        flag: true
                    },
                    {
                        title: "免费在线电影",
                        response: null,
                        flag: true
                    },
                    {
                        title: "新片速递",
                        response: null,
                        flag: true
                    }
                ],
                book: [
                    {
                        title: "最受关注图书：虚构类",
                        response: null,
                        flag: true
                    },
                    {
                        title: "最受关注图书：非虚构类",
                        response: null,
                        flag: true
                    },
                    {
                        title: "豆瓣书店",
                        response: null,
                        flag: false
                    }
                ],
                tv: [
                    {
                        title: "近期热门国产剧",
                        response: null,
                        flag: true
                    },
                    {
                        title: "近期热门综艺节目",
                        response: null,
                        flag: true
                    },
                    {
                        title: "近期热门美剧",
                        response: null,
                        flag: true
                    }
                ],
                music: [
                    {
                        title: "华语新碟榜",
                        response: null,
                        flag: true
                    },
                    {
                        title: "欧美新碟榜",
                        response: null,
                        flag: true
                    },
                    {
                        title: "日韩新碟榜",
                        response: null,
                        flag: true
                    }
                ],
                type: {
                    movie: ["经典", "冷门佳片", "豆瓣高分", "动作", "喜剧", "爱情", "悬疑", "恐怖", "科幻", "治愈", "文艺", "成长", "动画", "华语", "欧美", "韩国", "日本"],
                    tv: ["美剧", "英剧", "韩剧", "国产剧", "港剧", "日剧", "动漫", "综艺"],
                    book: ["小说", "爱情", "历史", "外国文学", "青春", "励志", "随笔", "传记", "推理", "旅行", "奇幻", "经营"],
                    music: ["流行", "摇滚", "民谣", "独立", "华语", "欧美", "日本", "韩国"],
                    game: {
                        genre: {
                            "title": "按类型浏览",
                            "val": ["动作", "角色扮演", "横版过关", "冒险", "射击", "策略", "益智", "模拟", "体育", "竞速", "格斗", "乱斗/清版", "即时战略", "音乐/旋律"]
                        },
                        platform: {
                            "title": "按平台浏览",
                            "val": ["pc", "Mac", "iPhone", "iPad", "Android", "PS4", "Xbox One", "Nintendo Switch", "Wii U", "PS3", "Xbox 360", "Wii", "PS2", "Xbox", "NGC/GameCube", "PS", "PSV/PS Vita", "PSP", "3DS", "NDS", "Arcade/街机", "FC/NES/红白机", "SFC/SNES/超任", "MD/世嘉五代", "N64/任天堂64", "GB", "GBA", "DC/Dreamcast", "SS/世嘉土星"]
                        }
                    },
                    application: {
                        iosPlat: {
                            "title": "ios",
                            "val": ["游戏", "生活", "图书", "效率", "娱乐", "音乐", "摄影", "社交", "教育", "工具", "旅行", "参考", "新闻", "健康", "商业", "美食", "财务", "导航", "体育", "天气", "购物", "医疗"]
                        },
                        AndroidPlat: {
                            "title": "Android",
                            "val": ["通讯社交", "新闻阅读", "效率办公", "摄影摄像", "实用工具", "教育学习", "金融理财", "交通出行", "运动健康", "生活", "购物", "影音", "娱乐", "游戏"]
                        }
                    }
                },
                app: data,
                groupData: null
            };
        },
        components: {
            homeSlider,
            classify,
            application,
            group
        },
        methods: {
            // 电影
            movieTop250() {
                let paramObj = {
                    start: 0,
                    count: 8
                };
                return this.$server.movieTop250(paramObj);
            },
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
            // 电视
            domestic() {
                let params = {
                    start: 0,
                    count: 8
                };
                return this.$server.domestic(params);
            },
            varietyShow() {
                let params = {
                    start: 0,
                    count: 8
                };
                return this.$server.varietyShow(params);
            },
            american() {
                let params = {
                    start: 0,
                    count: 8
                };
                return this.$server.american(params);
            },
            // 图书
            bookFiction() {
                let params = {
                    start: 0,
                    count: 8
                };
                return this.$server.bookFiction(params);
            },
            bookNoFiction() {
                let params = {
                    start: 0,
                    count: 8
                };
                return this.$server.bookNoFiction(params);
            },
            bookStore() {
                let params = {
                    start: 0,
                    count: 8
                };
                return this.$server.bookStore(params);
            },
            // 音乐
            Chinese() {
                let params = {
                    start: 0,
                    count: 8
                };
                return this.$server.Chinese(params);
            },
            occident() {
                let params = {
                    start: 0,
                    count: 8
                };
                return this.$server.occident(params);
            },
            japanKorea() {
                let params = {
                    start: 0,
                    count: 8
                };
                return this.$server.japanKorea(params);
            },
            // 小组
            group() {
                let params = {
                    for_mobile: 1
                };
                return this.$server.group(params)
            }
        },
        mounted() {
            this.$store.commit("change", {
                flag: "none",
                title: "首页",
                bgColor: "#E4A813",
                arrow: false
            });
            Promise.all([
                this.movieTop250(),
                this.movieHot(),
                this.movieFree(),
                this.movieRecent()
            ]).then(resArray => {
                for (let i in resArray) {
                    if (i == 0) {
                        this.movie[i].response = resArray[i].subjects;
                        this.movie[i].response.forEach(element => {
                            element.cover = {
                                url: element.images.small
                            };
                            element.rating = {
                                value: element.rating.average
                            };
                        });
                    } else {
                        this.movie[i].response = resArray[i].subject_collection_items;
                        this.movie[i].response.forEach(element => {
                            if (!element.rating) {
                                element.rating = {
                                    value: "暂无评分"
                                };
                            }
                        });
                    }
                }
            });
            Promise.all([this.domestic(), this.varietyShow(), this.american()]).then(
                resArray => {
                    for (let i in resArray) {
                        this.tv[i].response = resArray[i].subject_collection_items;
                        this.tv[i].response.forEach(element => {
                            if (!element.rating) {
                                element.rating = {
                                    value: "暂无评分"
                                };
                            }
                        });
                    }
                }
            );
            Promise.all([
                this.bookFiction(),
                this.bookNoFiction(),
                this.bookStore()
            ]).then(resArray => {
                for (let i in resArray) {
                    this.book[i].response = resArray[i].subject_collection_items;
                    this.book[i].response.forEach(element => {
                        if (!element.rating) {
                            element.rating = {
                                value: "暂无评分"
                            };
                        }
                    });
                }
            });
            Promise.all([this.Chinese(), this.occident(), this.japanKorea()]).then(
                resArray => {
                    for (let i in resArray) {
                        this.music[i].response = resArray[i].subject_collection_items;
                        this.music[i].response.forEach(element => {
                            if (!element.rating) {
                                element.rating = {
                                    value: "暂无评分"
                                };
                            }
                        });
                    }
                }
            );
            /**
             * 小组
             * */
            this.group().then(res => {
                this.groupData = res.rec_groups[0].classified_groups;
            })
        }
    };
</script>

<style scoped>
    p {
        width: 750px;
    }
</style>