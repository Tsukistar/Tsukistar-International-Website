<template>
    <div class="doing">
        <el-row :gutter="20" style="margin-bottom: 20px;padding-left: 50px;padding-right: 50px;">
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px',cursor: 'pointer' }" shadow="hover" @click="handleCardClick('Twitch')">
                    <img class="image" src="/assets/image/DoingView/gaming.jpg" />
                    <div style="padding: 14px;text-align: center;">
                        <span>{{ $t('playGames') }}</span>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px',cursor: 'pointer' }" shadow="hover" @click="handleCardClick('Painting')">
                    <img class="image" src="/assets/image/DoingView/painting.jpg" />
                    <div style="padding: 14px;text-align: center;">
                        <span>{{ $t('painting') }}</span>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px',cursor: 'pointer' }" shadow="hover" @click="handleCardClick('Coding')">
                    <img class="image" src="/assets/image/DoingView/coding.jpg" />
                    <div style="padding: 14px;text-align: center;">
                        <span>{{ $t('coding') }}</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-left: 50px;padding-right: 50px;">
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img class="image" src="/assets/image/DoingView/onecomme.jpg" />
                    <div style="padding: 14px;text-align: center;">
                        <span>{{ $t('onecomme') }}</span>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img class="image" src="/assets/image/DoingView/singing.jpg" />
                    <div style="padding: 14px;text-align: center;">
                        <h4>{{ $t('singing') }}</h4>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px',cursor: 'pointer' }" shadow="hover" @click="handleCardClick('Streaming')">
                    <img class="image" src="/assets/image/DoingView/live.jpg" />
                    <div style="padding: 14px;text-align: center;">
                        <span>{{ $t('streaming') }}</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">

const handleCardClick = (websiteName:string) => {
    switch(websiteName) {
        case 'Twitch':
            window.open('https://www.twitch.tv/tsukistarCN', '_blank');
            break;
        case 'Painting':
            window.open('https://twitter.com/TsukistarGlobal/status/1757119846482079803', '_blank');
            break;
        case 'Coding':
            window.open('https://github.com/Tsukistar', '_blank');
            break;
        case 'OneComme':
            window.open('https://www.google.com', '_blank');
            break;
        case 'Singing':
            window.open('https://www.google.com', '_blank');
            break;
        case 'Streaming':
            window.open('https://www.youtube.com/channel/UCPkuyPJuuFL7UWue-qtqzFQ', '_blank');
            break;
        default:
            window.open('about:blank', '_blank');
    };
};

</script>

<style>
@media (min-width: 1024px) {
    .doing {
        margin-top: 5vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .el-row {
        margin: 0 auto;
        width: inherit;
    }

    .image {
        width: 100%;
        display: block;
    }
}
</style>
