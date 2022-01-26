import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store'
import { useElementPlus } from '@/plugins/element-plus'
import { useI18n } from '@/plugins/i18n'

const app = createApp(App)

app
.use(router)
.use(store)
.use(useElementPlus)
.use(useI18n)
.mount('#app')
