<template>
    <el-menu :ellipsis="false" class="el-menu-demo" mode="horizontal" background-color="#1B2636" text-color="#fff"
        active-text-color="#ffd04b" @select="handleSelect">
        <el-menu-item index="0">名称</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1-1">
            <el-icon>
                <HomeFilled />
            </el-icon>
            首页
        </el-menu-item>
        <el-menu-item index="1-2">
            <el-icon>
                <OfficeBuilding />
            </el-icon>
            企业信息
        </el-menu-item>
        <el-menu-item index="1-3">
            <span>行情查询</span>
            <el-badge class="item" :is-dot="false">
                <!-- <el-button>replies</el-button> -->
            </el-badge>
        </el-menu-item>
        <el-sub-menu index="2">
            <template #title>
                <el-icon>
                    <Setting />
                </el-icon>
                设置
            </template>
            <el-menu-item index="2-1">
                <el-icon>
                    <User />
                </el-icon>
                登入/切换
            </el-menu-item>
            <el-menu-item index="2-2">
                <el-icon>
                    <CirclePlus />
                </el-icon>
                注册新用户
            </el-menu-item>
            <el-menu-item index="2-3">
                <el-icon>
                    <Key />
                </el-icon>
                修改密码
            </el-menu-item>
            <el-menu-item index="2-4">
                <el-icon>
                    <Share />
                </el-icon>
                意见反馈
            </el-menu-item>
            <el-menu-item index="2-5">
                
                <el-icon>
                    <SwitchButton />
                </el-icon>
                退出系统
            </el-menu-item>
            <!-- <el-sub-menu index="2-5">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu> -->
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
// import {
//     Picture,
//     Film,
// } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
//import { Van } from '@element-plus/icons-vue'
import { $tips_msg } from "../utils/msg.js";


function handleSelect(index) {
    //switch (index) {
    //     case "1-1":
    //         router.push("/home");
    //         break
    //     case "1-2":
    //         if(!tokenIsOK()){
    //             $tips_msg("info","请注册/登入")
    //             return
    //         }
    //         router.push("/center/"+userInfo.user_id)
    //         break
    //     case "1-3":
    //         router.push("/index/logistics")
    //         break
    //     case "2-1":
    //         router.push("/login");
    //         break
    //     case "2-2":
    //         router.push("/register")
    //         break
    //     case "2-3":
    //         $tips_msg("warning", "修改密码功能正在开发中...")
    //         //router.push("/register")
    //         break
    //     case "2-4":
    //     $tips_msg("warning", "意见反馈功能正在开发中...")
    //         //router.push("/register")
    //         break
    //     case "2-5":
    //     ElMessageBox.confirm(
    //     "确认退出系统吗？",
    //     '退出',
    //     {
    //         confirmButtonText: '确定',
    //         cancelButtonText: '取消',
    //         type: 'warning',
    //         center: true,
    //         draggable: true,
    //     }
    // )
    //     .then(() => {
    //         ElMessage({
    //         type: 'success',
    //         message: '正在退出系统',
    //         })
    //         //localStorage.clear()
    //         localStorage.removeItem("token")
    //         UserQuit()
    //         return
    //     })
    //     .catch(() => {
    //         ElMessage({
    //             type: 'info',
    //             message: '操作已取消',
    //         })
    //     })
    //     break
    //}
}

</script>

<style lang="scss" scoped>
.flex-grow {
    flex-grow: 1;
}

.item {
    // margin-top: 10px;
    margin-left: 10px;
}

span {
    position: relative;
}

span::before,
span::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #3cefff;
    transform-origin: center top;
    transform: scaleY(0);
    transition: transform 0.5s ease;
}

span::before {
    left: -8px;
}

span::after {
    right: -8px;
}

span:hover::before,
span:hover::after {
    transform-origin: center bottom;
    transform: scaleY(1);
}</style>