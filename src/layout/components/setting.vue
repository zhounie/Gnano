<template>
    <el-drawer
        v-model="props.modelValue"
        title="项目配置"
        :before-close="handleClose"
    >
        <el-divider>主题</el-divider>
        <el-switch
            v-model="darkMode"
            size="large"
            inline-prompt
            :active-icon="Sunny"
            :inactive-icon="Moon"
            @change="onChangeDarkMode">
        </el-switch>
        <div v-if="!darkMode">
            <el-divider>主题色</el-divider>
            <el-button @click="setThemeColor('light')"></el-button>
            <el-button color="#13c2c2" @click="setThemeColor('mingQing')"></el-button>
        </div>
    </el-drawer>
</template>

<script setup lang="ts">
    import { defineProps, defineEmits, ref } from 'vue'
    import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'
    import { Sunny, Moon } from '@element-plus/icons-vue'
    const props = defineProps({
        modelValue: Boolean
    })
    type Theme = 'light' | 'mingQing'
    const darkMode = ref(false)
    
    const emit = defineEmits(['update:modelValue'])
    const handleClose = () => {
        emit('update:modelValue', false)
    }
    const setThemeColor = (theme: Theme) => {
        toggleTheme({
            scopeName: `theme-${theme}`
        })
        localStorage.setItem('theme', theme)
    }
    const onChangeDarkMode = (type: boolean) => {
        if (type) {
            document.documentElement.setAttribute('data-theme', 'dark')
            setThemeColor('light')
        } else {
            document.documentElement.removeAttribute('data-theme')
            setThemeColor('light')
        }
    }
</script>

<style lang="scss" scoped>
    :deep(.el-divider__text) {
        font-size: 16px;
        font-weight: 700;
    }
</style>