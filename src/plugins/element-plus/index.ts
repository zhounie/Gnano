import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import type { App } from 'vue'

export const useElementPlus = (app: App) => {
    app.use(ElementPlus)
}