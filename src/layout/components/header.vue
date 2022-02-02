<template>
    <el-header class="layout-header">
        <div class="layout-header-left">
            <el-icon class="layout-menu-collapse" :size="20" @click="onChangeCollapse">
                <expand v-if="isCollapse" />
                <fold v-else />
            </el-icon>
        </div>
        <div class="layout-header-right">
            <el-icon class="layout-header-fullScreen" @click="toggle"><full-screen /></el-icon>
            <el-dropdown @command="onClickCommand">
                <span class="el-dropdown-link">
                    <i class="iconfont icon-language"></i>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="zh">简体中文</el-dropdown-item>
                        <el-dropdown-item command="en">English</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-avatar
                :size="30"
                fit="cover"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
            <el-icon class="layout-header-setting" @click="onClickSetting">
                <setting />
            </el-icon>
        </div>
        <LayoutSetting v-model="showSetting"></LayoutSetting>
    </el-header>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    import { useStore } from 'vuex'
    import { Expand, Setting, Fold, FullScreen } from '@element-plus/icons-vue'
    import LayoutSetting from './setting.vue'
    import { useFullscreen } from '@vueuse/core'
    const { isFullscreen, toggle } = useFullscreen()
    const { locale } = useI18n()
    const store = useStore()
    const showSetting = ref(false)

    const isCollapse = computed(() => {
        return store.getters.collapse
    })

    const onClickCommand = (lang: string) => {
        locale.value = lang
        localStorage.setItem('locale', lang)
        store.dispatch('setLocale', lang)
    }
    const onClickSetting = () => {
        showSetting.value = true
    }
    const onChangeCollapse = () => {
        store.dispatch('setCollapse')
    }
</script>

<style lang="scss" scoped>
@import '@/layout/theme/default-vars.scss';
.el-header {
    background: $header-bg-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .layout-header-right {
        display: flex;
        align-items: center;
        grid-gap: 20px;
    }
    .layout-menu-collapse {
        cursor: pointer;
        color: $primary-text;
    }
    .layout-header-setting {
        cursor: pointer;
        color: $primary-text;
    }
    .layout-header-fullScreen {
        cursor: pointer;
        color: $primary-text;
    }
}
</style>