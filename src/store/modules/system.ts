import { State } from '../index'
import { Commit } from 'vuex'
import { $t } from '@/plugins/i18n/index'
export default {
    state: (): State => ({
        locale: 'zh',
        collapse: false,
        menu: [
            {
                path: '/home',
                name: $t('menu.home'),
                icon: ''
            }, {
                path: '/Observe',
                name: $t('menu.observe'),
                icon: ''
            }, {
                path: '/project',
                name: $t('menu.project'),
                icon: ''
            }, {
                path: '/user',
                name: $t('menu.user'),
                icon: ''
            }, {
                path: '/settings',
                name: $t('menu.settings'),
                icon: ''
            }
        ]
    }),
    mutations: {
        setLocale(state: State, lange: string) {
            state.locale = lange
        },
        setCollapse(state: State) {
            state.collapse = !state.collapse
        }
    },
    actions: {
        setLocale({ commit }: { commit: Commit }, lange: string) {
            commit('setLocale', lange)
        },
        setCollapse({ commit }: { commit: Commit }) {
            commit('setCollapse')
        }
    },
    getters: {
        locale(state: State) {
            return state.locale
        },
        collapse(state: State) {
            return state.collapse
        },
        menu(state: State) {
            return state.menu
        }
    }
}