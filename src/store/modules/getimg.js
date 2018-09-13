import { getImgList, getImgDetailList } from '../../api/index'
let state = {
    olist: '',
    colour: '颜色',
    carModel: '车款',
    carID: '',
    colorID: '',
}
let mutations = {
    list: (state, payload) => {
        let reg = /(\{)([\d])(\})/g;
        payload.data.map(item => {
                item.List.map(val => {
                    val.Url = val.Url.replace(reg, (a, b, c) => {
                        return val.LowSize
                    })
                })
            })
            //console.log(payload)
        state.olist = payload.data;
        state.carID = payload.id
        state.colorID = payload.id
    },
    ImgDeail: (state, payload) => {

    }
}
let actions = {
    getImgList({ commit }, payload) {
        getImgList(payload).then(body => {
            commit('list', {
                id: payload,
                data: body.data
            })
        })
    },
    // getImgDetailList({ commit }, payload) {
    //     getImgDetailList(payload).then(body => {
    //         //console.log(body)
    //         commit('ImgDeail', body.data)
    //     })
    // }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}