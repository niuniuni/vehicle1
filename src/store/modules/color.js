import { getColorList } from '../../api/index';

let state = {
    ColorList: {},
    colorDetailList: [],
    id: ''
}
let mutations = {
    Color: (state, payload) => {
        state.ColorList = payload.data
        state.id = payload.id
    }
}
let actions = {
    getColorList({ commit }, payload) {
        getColorList(payload).then(body => {
            //console.log(body)
            commit('Color', { id: payload, data: body.data })
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}