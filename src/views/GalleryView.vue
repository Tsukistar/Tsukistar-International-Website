<template>
    <div class="gallery">
        <el-carousel :interval="4000" type="card" height="500px" style="width: 100%;" @change="handleCarouselChange">
            <el-carousel-item v-for="story in activeStories" :key="story.index" style="display: block;">
                <img :src="`/assets/image/GalleryView/${story.imageURL}`" alt="Test Image" style="width: 100%;" />
                <el-button class="open-dialog-button" :icon="FullScreen" @click="handleClickCarousel(story.index)" />
            </el-carousel-item>
        </el-carousel>
        <div class="click-notification-text">{{ activeStories[activeCarouselIndex].content }}</div>
        <div class="custom-overlay" v-if="dialogVisible">
            <div class="custom-dialog">
                <img :src="`/assets/image/GalleryView/${activeStories[clickCarouselIndex].imageURL}`" style="width: auto" />
                <el-button class="close-dialog-button" :icon="Close" @click="dialogVisible = false" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import stories_en_US from '../data/stories_en_US.json';
import stories_zh_CN from '../data/stories_zh_CN.json';
import stories_zh_TW from '../data/stories_zh_TW.json';
import { FullScreen, Close } from '@element-plus/icons-vue'

const { locale } = useI18n();

const activeStories = ref(stories_zh_CN);

const setActiveStories = () => {
    switch (locale.value) {
        case 'en-US':
            activeStories.value = stories_en_US;
            break;
        case 'zh-CN':
            activeStories.value = stories_zh_CN;
            break;
        case 'zh-TW':
            activeStories.value = stories_zh_TW;
            break;
        default:
            activeStories.value = stories_en_US;
            break;
    }
};

const activeCarouselIndex = ref(0);
const handleCarouselChange = (activeIndex: number) => {
    activeCarouselIndex.value = activeIndex;
};

const dialogVisible = ref(false);
const clickCarouselIndex = ref(0);
const handleClickCarousel = (index: number) => {
    clickCarouselIndex.value = index;
    dialogVisible.value = true;
};

watch(locale, () => {
    setActiveStories();
});

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

.click-notification-text {
    text-align: center;
    margin: 30px 60px 0 60px;
    font-size: 20px;
    color: #475669;
    opacity: 0.75;
}

.open-dialog-button {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
    background: rgba(255, 255, 255, 0.8);
    border: none;
}

.custom-overlay {
    position: absolute;
    top: 0px;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
}

.custom-dialog {
    height: inherit;
    display: flex;
    justify-content: center;
    padding-top: 5vh;
    padding-bottom: 5vh;
}

.close-dialog-button {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1002;
    background: rgba(255, 255, 255, 0.8);
    border: none;
}
</style>
