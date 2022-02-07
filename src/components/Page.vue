<template>
    <div class="page-box">
        <el-pagination
            small
            layout="prev, pager, next"
            @size-change="onSizeChange"
            @current-change="onCurrentChange"
            :total="props.total">
        </el-pagination>
    </div>
</template>

<script setup lang="ts">
    import { defineProps, defineEmits } from 'vue'
    const props = defineProps({
        total: Number,
        size: Number,
        current: Number
    })
    const emit = defineEmits(['size-change', 'current-change'])
    const onSizeChange = (size: number) => {
        emit('size-change', size)
    }
    const onCurrentChange = (cur: number) => {
        emit('current-change', cur)
    }
</script>

<style lang="scss" scoped>
.page-box {
    display: flex;
    justify-content: end;
}
</style>