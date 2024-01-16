<template>
    <el-menu 
    :ellipsis="false" 
    class="el-menu-demo"
    mode="horizontal"
    background-color="#1B2636"
    text-color="#fff" 
    active-text-color="#ffd04b" 
    @select="handleSelect"
    >
    <el-menu-item index="0-0">富硒农产品电子商城</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="0">
            <el-icon><Cpu /></el-icon>
            <div class="csscent">
            <el-input v-model="inputValue" class="w-50 m-2"  placeholder="产品溯源" />
            <div class="loader">

                <div class="face">
                    <div class="circle"></div>
                </div>
                <div class="face">
                    <div class="circle"></div>
                </div>
                <el-button type="info" @click="inSearch(inputValue)">查询<el-icon><Search /></el-icon></el-button>
            </div>
            </div>
        </el-menu-item>
        <el-menu-item index="1">
            <el-icon><HomeFilled /></el-icon>
            <span>主页</span>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon><Fries /></el-icon>
                商城
            </el-menu-item>
        <el-sub-menu index="3">
            <template #title>
                更多
            </template>
            <el-menu-item index="3-1">
                <el-icon><User /></el-icon>
                登入
            </el-menu-item>
            <el-menu-item index="3-2">
                <el-icon><CirclePlus /></el-icon>
                注册
            </el-menu-item>
            <el-menu-item index="3-3">
                <el-icon><Guide /></el-icon>
                购物车
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>
//iron
import {useRouter} from 'vue-router'
import {ref} from 'vue'
import{$tips_msg} from '../utils/msg.js'
const inputValue = ref("")
const emit  = defineEmits(['handleSearch'])
const inSearch = (val:string)=>{
    if(val ==""){
        $tips_msg("warning","溯源码不能为空")
        return
    }else{
        emit('handleSearch',val)
    }
}
    let router = useRouter()
    function handleSelect(index:string){
        switch(index){
            case "1":
                router.push("/index/hot");
                break
            case "2":
                router.push("/index/shop/city")
                break;
            case "3-1":
                router.push("/login");
                break
            case "3-2":
                router.push("/register")
            case "3-3":
                // if(!tokenIsOK()){
                //     $tips_msg("info","请注册/登入")
                //     return
                // }
                router.push("/mycart")
                break
        }
    }

</script>

<style lang="scss" scoped>
.flex-grow {
    flex-grow: 2;
}

.card {
 width: 180px;
 height: 254px;
 background: rgb(255, 255, 255);
 border-radius: 0.4em;
 box-shadow: 0.3em 0.3em 0.7em #00000015;
 transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
 border: rgb(250, 250, 250) 0.2em solid;
}

.card:hover {
 border: #006fff 0.2em solid;
}


.csscent{
    // margin: 20px;
    // padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loader {
  width: 6em;
  height: 6em;
  font-size: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader .face {
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  animation: animate023845 3s linear infinite;
}

.loader .face:nth-child(1) {
  width: 100%;
  height: 100%;
  color: gold;
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.2em 0.2em 0em 0em;
  --deg: -45deg;
  animation-direction: normal;
}

.loader .face:nth-child(2) {
  width: 70%;
  height: 70%;
  color: lime;
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.2em 0em 0em 0.2em;
  --deg: -135deg;
  animation-direction: reverse;
}

.loader .face .circle {
  position: absolute;
  width: 50%;
  height: 0.1em;
  top: 50%;
  left: 50%;
  background-color: transparent;
  transform: rotate(var(--deg));
  transform-origin: left;
}

.loader .face .circle::before {
  position: absolute;
  top: -0.5em;
  right: -0.5em;
  content: '';
  width: 1em;
  height: 1em;
  background-color: currentColor;
  border-radius: 50%;
  box-shadow: 0 0 2em,
                0 0 4em,
                0 0 6em,
                0 0 8em,
                0 0 10em,
                0 0 0 0.5em rgba(255, 255, 0, 0.1);
}

@keyframes animate023845 {
  to {
    transform: rotate(1turn);
  }
}

</style>