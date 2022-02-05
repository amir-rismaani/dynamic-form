import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        formData: {},
        formValidation: true,
    },
    mutations: {
        setFormData(state, payload) {
            state.formData[payload.key] = payload.value;
        },
        setFormValidation(state, payload) {
            state.formValidation = payload
        },
    },
    actions: {
    },
})
