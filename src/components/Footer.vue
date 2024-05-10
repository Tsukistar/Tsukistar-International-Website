<!--Footer.vue-->
<template>
    <div class="footer-text">
        <div style="line-height: 1vh;">
            Made with ♥ by <a href="https://github.com/Tsukistar" target="_blank" rel="noopener">月落星河Tsukistar</a>
        </div>
        <div style="line-height: 3vh;">©2024. All Rights Reserved.</div>
        <a href="https://icp.gov.moe/?keyword=20244042" target="_blank" style="line-height: 1vh;">萌ICP备20244042号</a>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* 针对PC端的样式 */
@media (min-width: 1024px) {
    .footer-text {
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

/* 针对iPad端竖屏时的样式 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
    .footer-text {
        font-size: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -1vh;
    }
}

/* 针对手机端竖屏时的样式 */
@media only screen and (max-device-width: 480px) {
    .footer-text {
        font-size: 0.7rem;
        display: flex;
        flex-direction: column;
        margin-top: 1vh;
    }
}
</style>
