import { mock, Random } from 'mockjs'
import { $t } from '@/plugins/i18n/index'
export const menuData = [
    {
        id: 1,
        name: $t('menus.home'),
        path: '/',
    }, {
        id: 2,
        name: $t('menus.demo'),
        path: '/demo',
    }
]