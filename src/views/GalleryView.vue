<template>
    <div class="gallery">
        <el-carousel :interval="4000" type="card" height="500px" style="width: 100%;">
            <el-carousel-item v-for="item in items" :key="item" style="display: block;">
                <img src="../assets/image/GalleryView/2024-new-year-Eve.jpg" alt="Test Image" style="width: 100%;" />
            </el-carousel-item>
        </el-carousel>
        <div class="click-notification-text">💡单击每张插图都可以看到一个小故事哦</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const items = ref([1, 2, 3, 4, 5, 6]); // 创建一个包含 4 个元素的数组
</script>

<style scoped>
@media (min-width: 1024px) {
    .gallery {
        min-height: 65vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.click-notification-text {
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
    color: #475669;
    opacity: 0.75;
}
</style>
