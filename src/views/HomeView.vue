<template>
    <div class="container">
        <video ref="videoRef" autoplay loop muted class="background-video">
            <source src="/assets/background-video.mp4" type="video/mp4">
        </video>
        <div class="overlay">
            <img class="logo" src="/assets/image/logo.png" alt="Tsukistar's Logo">
            <h1 class="slogan">Coding for the wonderful life!</h1>
            <img class="mouse" src="/assets/image/HomeView/PhMouseSimpleWhite.svg" alt="mouse SVG" @click="handleClick">
            <img class="arrow-down" src="/assets/image/HomeView/PhArrowDownLightWhite.svg" alt="Arrow SVG">
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const videoRef = ref()
const handleClick = () => {
    router.push('/doing');
}

</script>
  
<style scoped>
.container {
    background-color: rgba(0, 0, 0, 0.8);
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.background-video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    width: 150px;
    position: absolute;
    top: 15px;
    left: 15px;
}

.slogan {
    color: white;
    font-size: 5rem;
    font-weight: bolder;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.mouse {
    width: 30px;
    margin-top: 50px;
    margin-bottom: 20px;
    cursor: pointer;
}

.arrow-down {
    width: 30px;
    animation: fadeInOut 2s infinite;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
