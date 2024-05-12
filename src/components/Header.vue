<!--Header.vue-->
<template>
    <div class="top-menu-mobile">
        <img class="logo" src="/assets/image/logo.png" alt="Logo" />
    </div>
    <el-menu class="top-menu-others" mode="horizontal" :ellipsis="false" :default-active="activePath">
        <el-menu-item index="logo" @click="goTo('Home')">
            <img class="logo" src="/assets/image/logo.png" alt="Logo" />
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="" @click="goTo('Home')">{{ $t('home') }}</el-menu-item>
        <el-menu-item index="/doing" @click="goTo('Doing')">{{ $t('doing') }}</el-menu-item>
        <el-menu-item index="/gallery" @click="goTo('Gallery')">{{ $t('Gallery') }}</el-menu-item>
        <el-menu-item index="/about" @click="goTo('About')">{{ $t('about') }}</el-menu-item>
        <span class="right-menu">|</span>
        <div class="select-language">
            <el-link @click="changeLanguage('zh-CN')" style="margin-right: 5px;">简体中文</el-link>/
            <el-link @click="changeLanguage('zh-TW')" style="margin-right: 5px;">正體中文</el-link>/
            <el-link @click="changeLanguage('en-US')" style="margin-right: 15px;">English</el-link>
        </div>
    </el-menu>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
const { t } = useI18n();
const { locale } = useI18n();

const route = useRoute();
const activePath = ref(route.path);

const changeLanguage = (language: string) => {
    locale.value = language;
    setPageTitle();
};

const router = useRouter();

const goTo = (routeName: string) => {
    router.push({ name: routeName });
};

// Set page title based on language
const setPageTitle = () => {
    const title = t('title');
    document.title = title;
};

setPageTitle();

// Watch route change
watch(() => route.path, newPath => {
    activePath.value = newPath
});
</script>

<style scoped>
/* 针对PC端的样式 */
@media (min-width: 1024px) {
    .logo {
        width: 100px;
    }

    .flex-grow {
        flex-grow: 1;
    }

    .right-menu {
        line-height: 55px;
    }

    .select-language {
        line-height: 55px;
        margin-left: 20px;
    }

    .el-button+.el-button {
        margin-left: 0;
    }

    .top-menu-mobile {
        display: none;
    }
}

/* 针对iPad端竖屏时的样式 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
    .logo {
        width: 150px;
    }

    .flex-grow {
        flex-grow: 1;
    }

    .right-menu {
        line-height: 55px;
    }

    .select-language {
        line-height: 55px;
        margin-left: 20px;
    }

    .el-button+.el-button {
        margin-left: 0;
    }

    .top-menu-mobile {
        display: none;
    }
}

/* 针对手机端竖屏时的样式 */
@media only screen and (max-device-width: 480px) {
    .top-menu-others {
        display: none;
    }

    .top-menu-mobile {
        position: relative;
    }

    .logo {
        width: 150px;
    }
}
</style>