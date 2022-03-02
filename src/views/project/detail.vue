<template>
    <div class="project-detail">
        <ul class="project-detail-box">
            <li class="project-detail-item" v-for="item in imageList" :key="item.imageId">
                <el-image
                    :src="generateImageUrl(item, 'S')"></el-image>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { GetProjectDetail } from '@/api/project'
import { useRoute } from 'vue-router'
import { generateImageUrl } from '@/utils'

const route = useRoute()
const imageList = ref([])
onMounted(() => {
    GetProjectDetail({
        projectId: route.params.projectId
    }).then(res => {
        if (res.success) {
            imageList.value = res.content.list
        }
    })
})
</script>

<style lang="scss" scoped>
.project-detail-box {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, 200px);
    justify-content: space-between;
    .project-detail-item {
        width: 200px;
        height: 150px;
        display: inline-block;
    }
}
</style>