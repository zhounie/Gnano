<template>
    <div>
        <el-menu
            class="layout-menu"
            router
            :collapse="isCollapse"
            :default-active="defaultActive"
            @open="handleOpen"
            @close="handleClose"
        >
            <el-menu-item v-for="(menu, key) in menuData" :index="menu.path" :key="key">
                <el-icon><Location /></el-icon>
                <span>{{$t(menu.name)}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue'
    import { Location, Document, Setting } from '@element-plus/icons-vue'
    import { useRoute } from 'vue-router'
    import { useSystemStoreHook } from '@/store/modules/system'

    const store = useSystemStoreHook()
    const route = useRoute()
    const defaultActive = ref('')

    const isCollapse = computed(() => {
        return store.collapse
    })
    const menuData = computed(() => {
        return store.menu
    })

    defaultActive.value = route.path

    const handleOpen = () => {

    }
    const handleClose = () => {
        
    }
</script>

<style lang="scss" scoped>
@import '@/layout/theme/default-vars.scss';
.layout-menu {
    border: none;
    .el-menu-item {
        background: $menu-bg-color;
        color: $menu-text-color;
    }
    .el-menu-item.is-active {
        background: $menu-active-bg-color;
    }
}
.layout-menu:not(.el-menu--collapse) {
    width: 300px;
}
</style>