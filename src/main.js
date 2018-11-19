import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import {NavBar, Icon, Tab, Tabs, Rate} from 'vant'
import {server} from './providers/http-service'

Vue.config.productionTip = false;
Vue.use(NavBar).use(Icon).use(Tab).use(Tabs).use(Rate);
Vue.prototype.$server = server;

import './assets/scss/reset.scss'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
