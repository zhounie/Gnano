
<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>


<script setup lang="ts">
  import { onMounted } from 'vue'
  import enLocale from 'element-plus/lib/locale/lang/en'
  import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
  const locale = zhLocale
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
