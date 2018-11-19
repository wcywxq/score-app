import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        flag: 'block',
        fontColor: '#fff',
        bgColor: '#E4A813',
        title: '标题',
        backUrl: '/',
        arrow: true
    },
    mutations: {
        change(state, {
            flag,
            fontColor,
            bgColor,
            title,
            backUrl,
            arrow
        }) {
            state.flag = flag;
            state.fontColor = fontColor;
            state.bgColor = bgColor;
            state.title = title;
            state.backUrl = backUrl;
            state.arrow = arrow;
        }
    },
    actions: {}
})
