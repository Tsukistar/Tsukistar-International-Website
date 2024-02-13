<template>
    <div class="doing">
        <el-row :gutter="20" style="margin-bottom: 20px;padding-left: 50px;padding-right: 50px;">
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img class="image" src="../assets/image/DoingView/TestImage.jpg" />
                    <div style="padding: 14px;text-align: center;">
                        <span>Happy Gaming Time</span>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img class="image" src="../assets/image/DoingView/TestImage.jpg" />
                    <div style="padding: 14px;text-align: center;">
                        <span>Painting Cute Cats and People</span>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img class="image" src="../assets/image/DoingView/TestImage.jpg" />
                    <div style="padding: 14px;text-align: center;">
                        <span>Coding for Fun</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-left: 50px;padding-right: 50px;">
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img class="image" src="../assets/image/DoingView/TestImage.jpg" />
                    <div style="padding: 14px;text-align: center;">
                        <span>Develop Special Template to OneComme</span>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img class="image" src="../assets/image/DoingView/TestImage.jpg" />
                    <div style="padding: 14px;text-align: center;">
                        <h4>Singing</h4>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img class="image" src="../assets/image/DoingView/TestImage.jpg" />
                    <div style="padding: 14px;text-align: center;">
                        <span>Streaming on Youtube and Twitch</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
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
