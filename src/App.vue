
<template>
  <el-config-provider :locale="currentLocale">
    <router-view></router-view>
  </el-config-provider>
</template>


<script setup lang="ts">
  import { onMounted, computed, watch, unref, ref } from 'vue'
  import enLocale from 'element-plus/lib/locale/lang/en'
  import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
  import { useSystemStoreHook } from '@/store/modules/system'
  const systemStore = useSystemStoreHook()
  const currentLocale = computed(() => {
    return systemStore.locale === 'zh' ? zhLocale : enLocale
  })
</script>
