<template>
    <div class="about">
        <div class="name-and-image">
            <img class="me-image" src="/assets/image/AboutView/tsukistar.png" alt="double" />
        </div>
        <div class="information-and-contract">
            <div class="me-information">
                <h1 class="me-information-title">{{ $t('aboutMeTitle') }}</h1>
                <p class="me-information-text">{{ $t('introduction') }}</p>
            </div>
            <hr width="100%">
            <div class="logos">
                <img class="click-logo" src="/assets/image/AboutView/xlogLogo.svg" width="30px"
                    @click="openURL('https://tsukistar.xlog.app/')" />
                <img class="click-logo" src="/assets/image/AboutView/PrimeGithub.svg"
                    @click="openURL('https://github.com/Tsukistar/')" />
                <img class="click-logo" src="/assets/image/AboutView/PrimeTwitter.svg" @click="openURL(TwitterURL)" />
                <img class="click-logo" src="/assets/image/AboutView/PrimeTelegram.svg" @click="openURL(TelegramURL)" />
                <img class="click-logo" src="/assets/image/AboutView/PrimeYoutube.svg"
                    @click="openURL('https://www.youtube.com/channel/UCPkuyPJuuFL7UWue-qtqzFQ')" />
                <img class="click-logo" src="/assets/image/AboutView/PhTwitchLogoBold.svg"
                    @click="openURL('https://www.twitch.tv/tsukistarCN')" />
                <img class="click-logo" src="/assets/image/AboutView/PhPatreonLogoFill.svg"
                    @click="openURL('https://patreon.com/TsukistarGlobal')" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

const TwitterURL = ref("https://twitter.com/TsukistarCN");
const TelegramURL = ref("https://t.me/tsukistarChannel");

const openURL = (url: string) => {
    window.open(url, "_blank");
}

watch(locale, () => {
    switch (locale.value) {
        case 'zh-CN':
            TwitterURL.value = "https://twitter.com/TsukistarCN";
            TelegramURL.value = "https://t.me/tsukistarChannel";
            break;
        default:
            TwitterURL.value = "https://twitter.com/TsukistarGlobal";
            TelegramURL.value = "https://t.me/tsukistarEngChannel";
            break;
    }
});
</script>

<style scoped>
/* 针对PC的样式 */
@media (min-width: 1024px) {
    .about {
        margin-top: 5vh;
        min-height: 80vh;
        padding: 0 5vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .name-and-image {
        padding: 0 2vw;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .me-name {
        font-size: 2.5rem;
        margin-bottom: 2vh;
    }

    .me-image {
        width: 100%;
        margin-bottom: 2vh;
    }

    .information-and-contract {
        padding: 0 2vw;
        width: 40%;
        height: 30vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .me-information {
        width: 100%;
        margin-bottom: 2vh;
        text-align: left;
        font-size: 1.5rem;
    }

    .me-information-title {
        content: "About Me";
        text-align: left;
        font-size: larger;
        font-weight: bolder;
    }

    .me-information-text {
        width: 100%;
        margin-top: 1vh;
        margin-bottom: 2vh;
        text-align: left;
        font-size: 1rem;
    }

    .follow-text {
        margin-top: 2vh;
    }

    .logos {
        margin-top: 1vh;
        display: flex;
        justify-content: space-around;
        width: 100%;
    }

    .click-logo {
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .click-logo:hover {
        transform: scale(1.2);
    }
}

/* 针对iPad端竖屏时的样式 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
    .about{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        margin-top: 5vh;
    }

    .name-and-image {
        width: 60%;
    }

    .me-image {
        width: 100%;
    }

    .information-and-contract {
        padding: 0 2vw;
        width: 100%;
    }

    .me-information-title {
        text-align: center;
        font-size: 2rem;
        font-weight: bolder;
    }

    .me-information-text {
        font-size: 1.5rem;
        margin-bottom: 1vh;
    }

    .logos {
        margin-top: 1vh;
        display: flex;
        justify-content: space-around;
        width: 100%;
    }

    .click-logo {
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .click-logo:hover {
        transform: scale(1.2);
    }
}

/* 针对手机端竖屏时的样式 */
@media only screen and (max-device-width: 480px) {
    .about{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 60vh;
        margin-top: 10vh;
    }

    .me-image {
        height: 30vh;
    }

    .information-and-contract {
        padding: 0 2vw;
        width: 100%;
    }

    .me-information-title {
        text-align: center;
        font-size: 1.5rem;
        font-weight: bolder;
    }

    .me-information-text {
        font-size: 0.8rem;
    }

    .logos {
        margin-top: 1vh;
        display: flex;
        justify-content: space-around;
        width: 100%;
    }

    .click-logo {
        
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .click-logo:hover {
        transform: scale(1.2);
    }
}
</style>
