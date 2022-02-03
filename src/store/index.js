import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        formData: {}
    },
    getters: {
        getFormData(state) {
            return state.formData
        },
    },
    mutations: {
        setFormData(state, payload) {
            state.formData[payload.key] = payload.value;
        }
    },
    actions: {
    },
})
