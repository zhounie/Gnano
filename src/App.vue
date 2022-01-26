
<template>
  <el-config-provider :locale="currentLocale">
    <div @click="onChangeLange('zh')">简体中文</div>
    <div @click="onChangeLange('en')">英文</div>
    {{currentLocale}}
    <router-view></router-view>
  </el-config-provider>
</template>


<script setup lang="ts">
  import { onMounted, computed, watch, unref, ref } from 'vue'
  import enLocale from 'element-plus/lib/locale/lang/en'
  import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
  import { useI18n } from 'vue-i18n'
  import { useStore } from 'vuex'
  const { locale } = useI18n()
  const store = useStore()
  
  // const currentLocale = computed(() => {
  //   return store.getters.locale === 'zh' ? zhLocale : enLocale
  // })
  const currentLocale = ref(zhLocale)

  computed({
    get: () => store.getters.locale,
    set: locale => {
      console.log(locale)
      currentLocale.value = locale === 'zh' ? zhLocale : enLocale
    }
  })

  const onChangeLange = (lange: string) => {
      locale.value = lange
      localStorage.setItem('locale', lange)
      store.dispatch('setLocale', lange)
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
