<template>
    <div class="project">
        <ul class="project-box">
            <li class="project-item" v-for="item in projectList" :key="item.projectId" @click="onClickItem(item)">
                <el-card shadow="hover">
                    <el-image
                        style="width: 100px; height: 100px"
                        :src="generateCoverImageUrl(item)"
                    ></el-image>
                    {{item.observeObject}}
                </el-card>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { GetProjectList } from '@/api/project'
import { generateCoverImageUrl } from '@/utils'
import { useRouter } from 'vue-router'

const router = useRouter()

const projectList = ref([])


onMounted(() => {
    GetProjectList({}).then(res => {
        if (res.success) {
            projectList.value = res.content.list
        }
    })
})

const onClickItem = (item) => {
    router.push({
        path: `/project/${item.projectId}`
    })
}


</script>

<style lang="scss" scoped>
.project-box {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: space-between;
    .project-item {
        width: 250px;
        cursor: pointer;
    }
}
</style>>