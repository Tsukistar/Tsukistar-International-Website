<template>
    <div class="about">
        <div class="about-me">
            <h1 class="name-text">月落星河Tsukistar</h1>
            <img class="me-image" src="/assets/image/AboutView/tsukistar.png" alt="double" />
        </div>
        <div class="contract">
            <h1>aaaaa</h1>
            <hr>
            <h2 class="follow-text">{{ $t('followMe') }}</h2>
            <div class="logos">
                <img class="click-logo" src="/assets/image/AboutView/xlogLogo.svg" width="30px"
                    @click="openURL('https://tsukistar.xlog.app/')" />
                    <img class="click-logo" src="/assets/image/AboutView/PrimeGithub.svg"
                    @click="openURL('https://github.com/Tsukistar/')" />
                <img class="click-logo" src="/assets/image/AboutView/PrimeTwitter.svg"
                    @click="openURL('https://twitter.com/TsukistarCN/')" />
                <img class="click-logo" src="/assets/image/AboutView/PrimeYoutube.svg"
                    @click="openURL('https://www.youtube.com/channel/UCPkuyPJuuFL7UWue-qtqzFQ')" />
                <img class="click-logo" src="/assets/image/AboutView/PhTwitchLogoBold.svg"
                    @click="openURL('https://www.twitch.tv/tsukistarCN')" />
                    <img class="click-logo" src="/assets/image/AboutView/SimpleIconsPatreon.svg"
                    @click="openURL('patreon.com/TsukistarGlobal')" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const openURL = (url: string) => {
    window.open(url, "_blank");
}

</script>

<style scoped>
@media (min-width: 1024px) {
    .about {
        margin-top: 5vh;
        min-height: 80vh;
        padding: 0 5vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .about-me {
        padding: 0 2vw;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .name-text {
        font-size: 2.5rem;
        margin-bottom: 2vh;
    }

    .me-image {
        width: 80%;
    }

    .contract {
        padding: 0 2vw;
        width: 40%;
        height: 30vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .follow-text {
        margin-bottom: 2vh;
    }

    .logos {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }

    .click-logo {
        cursor: pointer;
    }
}
</style>
