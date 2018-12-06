import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Detail from './views/Detail.vue'
import Comments from './views/Comments.vue'
import Discussion from './views/Discussion.vue'
/** 切换子路由 */
import movie from './views/Home/movie.vue';
import tv from './views/Home/tv.vue';
import book from './views/Home/book.vue';
import music from './views/Home/music.vue';
import group from './views/Home/group.vue';
import game from './views/Home/game.vue';
import apps from './views/Home/apps.vue';

/** 详情子路由 */
/** 电影 */
import movieTop250 from './views/List/movieTop250.vue'
import movieHot from './views/List/movieHot.vue'
import movieFree from './views/List/movieFree.vue'
import movieRecent from './views/List/movieRecent.vue'
/** 图书 */
import bookFiction from './views/List/bookFiction.vue'
import bookNoFiction from './views/List/bookNoFiction.vue'
import bookStore from './views/List/bookStore.vue'
/** 电视 */
import domestic from './views/List/domestic.vue'
import varietyShow from './views/List/varietyShow.vue'
import american from './views/List/american.vue'
/** 音乐 */
import Chinese from './views/List/Chinese.vue'
import occident from './views/List/occident.vue'
import japanKorea from './views/List/japanKorea.vue'

/** 短评子路由 */
import hot from './views/Comments/hot.vue'
import latest from './views/Comments/latest.vue'

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            children: [{
                path: '/',
                name: 'movie',
                component: movie
            }, {
                path: 'tv',
                name: 'tv',
                component: tv
            }, {
                path: 'book',
                name: 'book',
                component: book
            }, {
                path: 'music',
                name: 'music',
                component: music
            }, {
                path: 'group',
                name: 'group',
                component: group
            }, {
                path: 'game',
                name: 'game',
                component: game
            }, {
                path: 'apps',
                name: 'apps',
                component: apps
            }]
        },
        {
            path: '/List',
            name: 'list',
            component: List,
            children: [{
                    path: 'movieTop250',
                    name: 'movieTop250',
                    component: movieTop250
                },
                {
                    path: 'movieHot',
                    name: 'movieHot',
                    component: movieHot
                },
                {
                    path: 'movieFree',
                    name: 'movieFree',
                    component: movieFree
                },
                {
                    path: 'movieRecent',
                    name: 'movieRecent',
                    component: movieRecent
                },
                {
                    path: 'bookFiction',
                    name: 'bookFiction',
                    component: bookFiction
                },
                {
                    path: 'bookNoFiction',
                    name: 'bookNoFiction',
                    component: bookNoFiction
                },
                {
                    path: 'bookStore',
                    name: 'bookStore',
                    component: bookStore
                },
                {
                    path: 'domestic',
                    name: 'domestic',
                    component: domestic
                },
                {
                    path: 'varietyShow',
                    name: 'varietyShow',
                    component: varietyShow
                },
                {
                    path: 'american',
                    name: 'american',
                    component: american
                },
                {
                    path: 'Chinese',
                    name: 'Chinese',
                    component: Chinese
                },
                {
                    path: 'occident',
                    name: 'occident',
                    component: occident
                },
                {
                    path: 'japanKorea',
                    name: 'japanKorea',
                    component: japanKorea
                }
            ]
        }, {
            path: '/Detail',
            name: 'detail',
            component: Detail
        }, {
            path: '/Comments',
            name: 'comments',
            component: Comments,
            children: [{
                    path: 'hot',
                    name: 'hot',
                    component: hot,
                }, {
                    path: 'latest',
                    name: 'latest',
                    component: latest,
                }

            ]
        }, {
            path: '/Discussion',
            name: 'discussion',
            component: Discussion
        }
    ]
})