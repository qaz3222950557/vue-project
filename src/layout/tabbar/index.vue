<template>
    <div class="tabbar">
        <div class="tabbar_left">
            <Breadcrumb></Breadcrumb>
        </div>
        <div class="tabbar_right">
            <Setting></Setting>
        </div>
    </div>
</template>
<script lang="ts" setup>
//引入左侧面包屑
import Breadcrumb from '@/layout/tabbar/breadcrumb/index.vue'
//引入右侧设置按钮
import Setting from './setting/index.vue'
</script>
<style lang="scss" scoped>
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    background-image: linear-gradient(to right, white, rgb(208, 187, 187), white);

    .tabbar_left {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .tabbar_right {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
}
</style>