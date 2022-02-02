
<template>
  <el-config-provider :locale="currentLocale">
    <router-view></router-view>
  </el-config-provider>
</template>


<script setup lang="ts">
  import { onMounted, computed, watch, unref, ref } from 'vue'
  import enLocale from 'element-plus/lib/locale/lang/en'
  import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
  import { useStore } from 'vuex'
  const store = useStore()
  const currentLocale = computed(() => {
    return store.getters.locale === 'zh' ? zhLocale : enLocale
  })
</script>
