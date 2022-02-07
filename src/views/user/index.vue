<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                type="index"
                label="序号"
                width="60">
            </el-table-column>
            <el-table-column
                prop="username"
                label="用户名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="realName"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="phoneNum"
                label="电话">
            </el-table-column>
            <el-table-column
                prop="email"
                label="邮箱">
            </el-table-column>
            <el-table-column
                prop="lastLoginTime"
                label="登录时间">
            </el-table-column>
            <el-table-column
                prop="storage"
                label="占用空间">
            </el-table-column>
        </el-table>
        <Page :total="total" />
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import Page from '@/components/Page.vue'
    import { GetUserList } from '@/api/index'
    const tableData = ref([])
    const total = ref(0)

    onMounted(() => {
        onGetUserList()
    })

    const onGetUserList = () => {
        GetUserList({}).then(res => {
            if (res.success) {
                tableData.value = res.content.list
                total.value = res.content.total
            }
        })
    }

    
</script>

<style lang="scss" scoped></style>