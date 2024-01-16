<template>
    <div>
        <!--
            :default-active="activeIndex2"
            @select="handleSelect"
            background-color=""
            -->
        <el-menu  
            mode="horizontal" 
            text-color="#545c64" 
            active-text-color="#ffd04b"
            :ellipsis="false"
            >
            <div class="flex-grow" />
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-menu-item index="2">Orders</el-menu-item>
            <el-menu-item index="3">
                <el-sub-menu index="3-4">
                    <template #title>Workspace</template>
                    <el-menu-item index="3-1">登入</el-menu-item>
                    <el-menu-item index="3-2">注册</el-menu-item>
                    <el-menu-item index="3-3">other</el-menu-item>
                </el-sub-menu>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.flex-grow {
    flex-grow: 1;
    justify-content: flex-end;
}
</style>