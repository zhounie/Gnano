import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import { setupStore } from '@/store'
import { useElementPlus } from '@/plugins/element-plus'
import { useI18n } from '@/plugins/i18n'
import defaultConfig from './config/defaultConfig'

import '@/assets/iconfont/iconfont.css'
import 'reset-css'
import '@/style/index.scss'

const app = createApp(App)

Object.entries(defaultConfig).map(([key, value]) => {
    if (localStorage.getItem(key)) {
        return
    }
    localStorage.setItem(key, value)
})

app
.use(router)
.use(setupStore)
.use(useElementPlus)
.use(useI18n)
.mount('#app')
