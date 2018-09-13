import { getDealerList } from '../../api/index'
let state = {
    isShowCity: false,
    currentCity: '',
    city: {}, // 当前选中城市信息
    quotation: {}
}

let mutations = {
    showCity(state, payload) {
        state.isShowCity = payload;
    },
    updateCity(state, payload) {
        state.city = payload;
        state.isShowCity = false;
    }
}
let actions = {
    getDealerList({ commit }, payload) {
        getDealerList(payload).then(body => {
            console.log(body)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}