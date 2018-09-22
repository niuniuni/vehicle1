import { getCapture, getDealerList } from '../../api/index.js';

let state = {
    isShowCity: false,
    isSendSMS: false, //是否发送短信验证码
    timer: 0, //倒计时
    currentCity: '',
    city: {}, // 当前选中城市信息
    getquotation: [],
}

let mutations = {
    showCity(state, payload) {
        state.isShowCity = payload;
    },
    updateCity(state, payload) {
        state.city = payload;
        state.isShowCity = false;
    },
    updateCapture(state, payload) {
        if (payload.code == 0) {
            state.isSendSMS = true;
            state.timer = 60;
            let inter = setInterval(() => {
                state.timer--;
                if (state.timer == 0) {
                    clearInterval(inter);
                    state.isSendSMS = false;
                }
            }, 1000);
        } else {
            alert(payload.msg);
        }
    },
    getquotation(state, payload) {
        state.getquotation = payload
            //console.log(payload.details.serial)
    }
}

let actions = {
    getCapture({ commit }, payload) {
        getCapture(payload)
            .then(body => {
                console.log(body);
                commit('updateCapture', body);
            })
    },
    getDealerList({ commit }) {
        getDealerList(126282, 201).then(body => {
            console.log(body)
            commit('getquotation', body.data)
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}