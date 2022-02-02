import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { set } from 'lodash'

import enLocale from 'element-plus/lib/locale/lang/en'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'

export function siphonI18n(
    langs: Record<string, Record<string, any>>,
    prefix = "zh-CN"
) {
    const langsObj: Record<string, any> = {};
    Object.keys(langs).forEach((key: string) => {
      let fileName = key.replace(`./${prefix}/`, "").replace(/^\.\//, "");
      fileName = fileName.substring(0, fileName.lastIndexOf("."));
      const keyList = fileName.split("/");
      const moduleName = keyList.shift();
      const objKey = keyList.join(".");
      const langFileModule = langs[key].default;
  
      if (moduleName) {
        if (objKey) {
          set(langsObj, moduleName, langsObj[moduleName] || {});
          set(langsObj[moduleName], objKey, langFileModule);
        } else {
          set(langsObj, moduleName, langFileModule || {});
        }
      }
    });
    return langsObj;
}

export const $t = (key: string) => key;


const messages = {
    zh: {
        ...siphonI18n(import.meta.globEager("./zh-CN/**/*.ts"), 'zh-CN'),
        ...zhLocale
    },
    en: {
        ...siphonI18n(import.meta.globEager("./en/**/*.ts"), 'en'),
        ...enLocale
    }
}

const i18n = createI18n({
    locale: localStorage.getItem('locale') || "zh",
    fallbackLocale: 'zh',
    messages
})

export const useI18n = (app: App) => {
    app.use(i18n)
}