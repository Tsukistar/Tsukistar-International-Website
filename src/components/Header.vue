<!--Header.vue-->
<template>
    <el-menu mode="horizontal" :ellipsis="false">
        <el-menu-item index="logo" @click="goTo('Home')">
            <img class="logo" src="../assets/image/logo.png" alt="Logo" />
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1" @click="goTo('Home')">{{ $t('home') }}</el-menu-item>
        <el-menu-item index="2" @click="goTo('Doing')">{{ $t('doing') }}</el-menu-item>
        <el-menu-item index="3" @click="goTo('Gallery')">{{ $t('Gallery') }}</el-menu-item>
        <el-menu-item index="4" @click="goTo('About')">{{ $t('about') }}</el-menu-item>
        <span class="right-menu">|</span>
        <div class="select-language">
            <el-link @click="changeLanguage('zh-CN')" style="margin-right: 5px;">简体中文</el-link>/
            <el-link @click="changeLanguage('zh-TW')" style="margin-right: 5px;">正體中文</el-link>/
            <el-link @click="changeLanguage('en-US')" style="margin-right: 15px;">English</el-link>
        </div>
    </el-menu>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
const { t } = useI18n();
const { locale } = useI18n();

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
</script>

<style scoped>
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
</style>