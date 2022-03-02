import { defineStore } from 'pinia'
import { store } from '../index'

import { $t } from '@/plugins/i18n/index'

export const useSystemStore = defineStore({
    id: 'system',
    state: () => ({
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
    getters: {
   
    },
    actions: {
        setLocale(lange: string) {
            this.locale = lange
        },
        setCollapse() {
            this.collapse = !this.collapse
        }
    },
})

export function useSystemStoreHook() {
    return useSystemStore(store)
}