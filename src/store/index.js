import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// 引入modules
import index from './modules/index';
import detail from './modules/detail';
import getimg from './modules/getimg';
import color from './modules/color';
import quotation from './modules/quotation';
import city from './modules/city';
import type from './modules/type'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        index,
        detail,
        getimg,
        color,
        quotation,
        city,
        type
    },
    plugins: [createLogger()]
})