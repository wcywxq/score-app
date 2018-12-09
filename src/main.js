import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import {
    NavBar,
    Icon,
    Tab,
    Tabs,
    Rate,
    Loading,
    Collapse,
    CollapseItem,
    Pagination
} from 'vant'
import {
    server
} from './providers/http-service'

import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false;
Vue.use(NavBar).use(Icon).use(Tab).use(Tabs).use(Rate).use(Loading).use(Collapse).use(CollapseItem).use(Pagination);
Vue.use(VueLazyload, {
    loading: `${require('./assets/images/loading.png')}`
})
Vue.prototype.$server = server;

import '@/mock/mock.js';
import './assets/scss/reset.scss';
import "./static/iconfont/iconfont.css";

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');