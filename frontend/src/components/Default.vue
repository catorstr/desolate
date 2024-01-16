<template>
    <div>
        <el-container class="root">
            <el-header class="header">
                <DefaultHeader></DefaultHeader>
            </el-header>
            <el-main class="main">
                <!-- 广告图
                <div class="draw">
                    <img src="./images/" alt="">
                </div> -->
                <!-- 轮播图 -->
                <Banner></Banner>
                <el-scrollbar>
                    <div class="content">
                        <Shop v-for="index in 10" :key="index"></Shop>
                    </div>
                </el-scrollbar>
            </el-main>
            <el-footer class="footer">
                <el-row :gutter="20">
                    <el-col :span="8">1rwr</el-col>
                    <el-col :span="8">2</el-col>
                    <el-col :span="8">3</el-col>
                </el-row>
            </el-footer>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import DefaultHeader from './DefaultHeader.vue';


</script>

<style lang="scss" scoped>
.root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .header {
        border: 1px solid red
    }

    .main {
        padding: 0.5rem;
        flex: 1;
        overflow-y: scroll;
        background:#E2E6E6;
        .content {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            margin: 10px 0;
        }
    }

    .footer {
        /* height: 5rem; */
        border: 1px solid pink
    }
}
</style>