<template>
        <!-- <RouterView></RouterView> -->
        <!-- 路由组件出口的位置 -->
        <RouterView v-slot="{Component}">
            <Transition name="fade">
                <!-- 渲染layout一级路由组件的子路由 -->
                <component :is="Component"></component>
            </Transition>
        </RouterView>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
// 添加路由组件渲染的过渡动画
.fade-enter-from{
    opacity:0;
    transform: scale(0);
}
.fade-enter-active{
    // 过渡时间0.3秒
    transition:all .3s;
}
.fade-enter-t0{
    opacity: 1;
    transform: scale(1);
}

</style>