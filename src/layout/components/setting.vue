<template>
    <el-drawer
        v-model="props.modelValue"
        title="项目配置"
        :before-close="handleClose"
    >
        <el-button type="primary" @click="onClick('default')">Default</el-button>
        <el-button type="info" @click="onClick('dark')">Dark</el-button>
        <el-button type="default" @click="onClick('light')">Light</el-button>
    </el-drawer>
</template>

<script setup lang="ts">
    import { defineProps, defineEmits } from 'vue'
    import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'
    const props = defineProps({
        modelValue: Boolean
    })
    const emit = defineEmits(['update:modelValue'])
    const handleClose = () => {
        emit('update:modelValue', false)
    }
    const onClick = (theme: string) => {
        // document.documentElement.setAttribute('data-theme', 'dark')
        toggleTheme({
            scopeName: `theme-${theme}`
        })
    }
</script>