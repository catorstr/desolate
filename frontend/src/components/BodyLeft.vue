<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isCollapse = ref(true)
function handleSelect(index:string) {
    // switch(index){
    //     case "1-1":
    //         router.push("/index/hot")
    //         break;
    //     case "1-2":
    //         router.push("/index/newest")
    //         break;
    //     case "1-3":
    //         router.push("/index/shop/city")
    //         break;
    //     case "1-4":
    //         router.push("/index/mynews")
    //         break;
    //     case "1-5":
    //         router.push("/index/issue")
    //         break;
    //     // case "1-6":
    //     //     router.push("/index/collect")
    //     //     break;
    //     case "1-7":
    //         router.push("/index/shop/store")
    //         break;
    //     case "2":
    //         router.push("/index/iron")
    //         break;
    //     case "3":
    //         router.push("/index/property")
    //         break;
    //     case "4":
    //         router.push("/index/search")
    //         break;
    // }
    // //链工厂  
}
</script>

<template>
    <div class="root">
        <el-radio-group v-model="isCollapse" style="margin:10px 0  0 0;">
            <el-radio-button :label="!isCollapse" v-show="isCollapse">
                <el-icon>
                    <MoreFilled />
                </el-icon>
            </el-radio-button>
            <el-radio-button :label="!isCollapse" v-show="!isCollapse">
                <el-icon>
                    <Minus />
                </el-icon>
            </el-radio-button>

        </el-radio-group>
        <el-menu active-text-color="#ffd04b" background-color="#1B2636" :collapse="isCollapse" default-active="1-1"
            text-color="#fff" @select="handleSelect">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <HomeFilled />
                    </el-icon>
                    <span>主页</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <el-icon>
                            <TakeawayBox />
                        </el-icon>
                        <!-- 热门 -->
                    </el-menu-item>
                    <el-menu-item index="1-3">
                        <el-icon>
                            <Fries />
                        </el-icon>
                        <!-- 商城 -->
                    </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="1-4">
                        <el-icon>
                            <Position />
                        </el-icon>
                        <!-- 发布 -->
                    </el-menu-item>
                    <el-menu-item index="1-5">
                        <el-icon>
                            <Edit />
                        </el-icon>
                        <!-- 编辑 -->
                    </el-menu-item>
                    <!-- <el-menu-item index="1-6">
                    <el-icon><Star /></el-icon>
                    收藏
                </el-menu-item> -->
                    <el-menu-item index="1-7">
                        <el-icon>
                            <Shop />
                        </el-icon>
                        <!-- 商铺 -->
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon>
                    <Menu />
                </el-icon>
                <span>K线图</span>
            </el-menu-item>
            <el-menu-item index="3">
                <el-icon>
                    <Coin />
                </el-icon>
                <!-- <span>链上资产</span> -->
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon>
                    <Cpu />
                </el-icon>
                <!-- <span>产品溯源</span> -->
            </el-menu-item>
    </el-menu>

</div></template>



<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}</style>
