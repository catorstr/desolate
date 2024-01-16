<template>
    <div class="box">
        <div class="header">
            <HeaderBar></HeaderBar>
        </div>
        <div class="main">
            <div class="left">
                <BodyLeft></BodyLeft>
            </div>
            <div class="right">
                <div class="content"></div>
            </div>
        </div>
    </div>
</template>
    
    
<script lang="ts" setup>
import HeaderBar from '../components/HeaderBar.vue';
import BodyLeft from'../components/BodyLeft.vue'
</script>
    

<style lang="scss" scoped>
.box{
    height: 100vh;
    display: flex;
    flex-direction: column;
    .header{
       // border: 1px solid red;
        height: 5rem;
    }
    .main{
        //border: 1px solid grey;
        flex:1;
        display: flex;
        // .left{
        //     //border: 1px solid pink;
        //     // width:20rem;
        //    // min-height: 100vh;
        // }
        .right{
          //  border: 1px solid blue;
            flex:1;
        }
    }
}
</style>
