<template>
    <div class="preloader" :class="{ 'fade-out': isLoaded }">
      <!--<video
        ref="video"
        class="preloader-video"
        autoplay
        muted
        loop
      >
        <source src="@/assets/video/sample-720p.webm" type="video/webm" media="(min-width: 768px)" />
        <source src="@/assets/video/sample-360p.webm" type="video/webm" media="(max-width: 767px)" />
        您的浏览器不支持视频播放。
      </video>-->
      <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
      <div class="loading-text">Loading...</div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    name: 'Preloader',
    emits: ['loaded'],
    setup(props, { emit }) {
      // 响应式状态
      const progress = ref<number>(0); // 加载进度
      const isLoaded = ref<boolean>(false); // 是否加载完成
  
      // 模拟网站资源（可以替换为实际资源）
      const resources: string[] = [
        // Doing
          '/assets/image/DoingView/coding.jpg',
          '/assets/image/DoingView/gaming.jpg',
          '/assets/image/DoingView/live.jpg',
          '/assets/image/DoingView/onecomme.jpg',
          '/assets/image/DoingView/painting.jpg',
          '/assets/image/DoingView/singing.jpg',
          // Gallery	
          '/assets/image/GalleryView/2024-coming.jpg',
          '/assets/image/GalleryView/2024-new-year-Eve.jpg',
          '/assets/image/GalleryView/2024-valentine.jpg',
          '/assets/image/GalleryView/idol.jpg',
          '/assets/image/GalleryView/strawberry-night.jpg',
          '/assets/image/GalleryView/wishing.jpg',
          // About
          '/assets/image/AboutView/tsukistar.png',
      ];
  
      // 加载资源并更新进度
      const loadResources = async () => {
        const totalResources = resources.length;
        let loadedResources = 0;
  
        const loadPromises = resources.map((url) => {
          return new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
              loadedResources++;
              progress.value = (loadedResources / totalResources) * 100;
              resolve();
            };
            img.onerror = () => {
              loadedResources++;
              progress.value = (loadedResources / totalResources) * 100;
              resolve(); // 即使加载失败也继续
            };
          });
        });
  
        // 等待所有资源加载完成
        await Promise.all(loadPromises);
  
        // 加载完成，触发淡出
        isLoaded.value = true;
        setTimeout(() => {
          emit('loaded'); // 通知父组件加载完成
        }, 500); // 匹配淡出动画时间
      };
  
      // 组件挂载时开始加载资源
      onMounted(() => {
        loadResources();
      });
  
      return {
        progress,
        isLoaded,
      };
    },
  });
  </script>
  
  <style scoped>
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
  }
  
  /* 默认背景色（亮模式） */
  .preloader {
    background: #ffffff;
  }
  
  /* 暗黑模式背景色 */
  @media (prefers-color-scheme: dark) {
    .preloader {
      background: #1a1a1a;
    }
  }
  
  .preloader-video {
    width: 100%;
    max-width: 1280px;
    max-height: 720px;
    object-fit: contain;
  }
  
  /* 移动端适配 */
  @media (max-width: 767px) {
    .preloader-video {
      max-width: 640px;
      max-height: 360px;
    }
  }
  
  .progress-bar {
    width: 50%;
    max-width: 640px;
    height: 10px;
    background: #333;
    margin-top: 20px;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .progress {
    height: 100%;
    background: #00ccff;
    transition: width 0.3s ease;
  }
  
  .loading-text {
    color: #333;
    font-family: 'Arial', sans-serif;
    font-size: 1.5rem;
    margin-top: 20px;
    animation: dots 1.5s infinite;
  }
  
  /* 暗黑模式文字颜色 */
  @media (prefers-color-scheme: dark) {
    .loading-text {
      color: #fff;
    }
  }
  
  @keyframes dots {
    0%, 20% { content: 'Loading...'; }
    40% { content: 'Loading....'; }
    60% { content: 'Loading.....'; }
    80%, 100% { content: 'Loading...'; }
  }
  
  .loading-text::after {
    content: '...';
    display: inline-block;
    animation: dots 1.5s infinite;
  }
  
  @media (max-width: 767px) {
    .progress-bar {
      width: 80%;
      max-width: 360px;
    }
    .loading-text {
      font-size: 1rem;
    }
  }
  
  .fade-out {
    opacity: 0;
    pointer-events: none;
  }
  </style>