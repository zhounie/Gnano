<template>
    <div class="demo">
        <p>{{ $t("buttons.hsLoginOut") }}</p>
        <el-select v-model="value" class="m-2" size="large">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
            </el-option>
        </el-select>
    </div>
</template>

<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    
    const value = ''
    const options: any[] = []


    const { locale } = useI18n()
    const onChangeLange = (lange: string) => {
        locale.value = lange
        localStorage.setItem('locale', lange)
    }
</script>

<style lang="scss" scoped>
.demo {
    
}
</style>
