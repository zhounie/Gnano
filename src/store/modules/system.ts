
export default {
    state: () => ({
        locale: 'zh',
        collapse: false
    }),
    mutations: {
        setLocale(state, lange) {
            state.locale = lange
        },
        setCollapse(state) {
            state.collapse = !state.collapse
        }
    },
    actions: {
        setLocale({ commit }, lange) {
            commit('setLocale', lange)
        },
        setCollapse({ commit }) {
            commit('setCollapse')
        }
    },
    getters: {
        locale(state) {
            return state.locale
        },
        collapse(state) {
            return state.collapse
        }
    }
}