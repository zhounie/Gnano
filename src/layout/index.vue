<template>
    <el-container class="layout">
      <el-aside class="layout-aside">
        <LayoutMenu></LayoutMenu>
      </el-aside>
      <el-container direction="vertical">
        <LayoutHeader></LayoutHeader>
        <el-main class="layout-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
  import LayoutHeader from './components/header.vue'
  import LayoutMenu from './components/menu.vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const isCollapse = computed(() => {
    return store.getters.collapse
  })


</script>


<style lang="scss" scoped>
@import '@/layout/theme/default-vars.scss';
.layout {
  min-height: 100vh;
  .layout-aside {
    width: auto;
    background: $menu-bg-color;
  }
  .layout-main {
    background: $main-bg-color;
  }
}
</style>