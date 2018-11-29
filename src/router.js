import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Detail from './views/Detail.vue'
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


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/List',
            name: 'list',
            component: List,
            children: [{
                    path: 'movieTop250',
                    name: 'movieHot',
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
        }
    ]
})