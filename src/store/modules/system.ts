
export default {
    state: () => ({
        locale: 'zh'
    }),
    mutations: {
        setLocale(state, lange) {
            state.locale = lange
        }
    },
    actions: {
        setLocale({ commit }, lange) {
            commit('setLocale', lange)
        }
    },
    getters: {
        locale(state) {
            return state.locale
        }
    }
}