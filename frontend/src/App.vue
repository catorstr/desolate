<script setup lang="ts">

</script>

<template>
  <div class="root">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.root{
  /* 隐藏滚动条 */
    overflow-x: hidden;
    overflow-y: hidden;
}
</style>
